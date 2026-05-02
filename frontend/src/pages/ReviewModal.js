import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { therapistService } from '../services/therapistService'; // Add this import

const ReviewModal = ({ isOpen, onClose, therapist, onSubmitSuccess }) => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Debug authentication
        const token = localStorage.getItem('access_token');
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        
        console.log('🔍 Debug info:');
        console.log('Token exists:', !!token);
        console.log('User data:', user);
        console.log('Therapist ID:', therapist?.id);
        console.log('TherapistService available:', !!therapistService);
        
        if (!token) {
            alert('Please log in to submit a review');
            return;
        }
        
        if (rating === 0) {
            alert('Please select a rating');
            return;
        }
        
        if (reviewText.trim().length < 10) {
            alert('Please write a review with at least 10 characters');
            return;
        }

        setIsSubmitting(true);
        
        try {
            const reviewData = {
                rating: rating,
                reviewtext: reviewText.trim()
            };

            console.log('📤 Submitting review data:', reviewData);
            
            // Check if therapistService exists and has the method
            if (!therapistService || !therapistService.submitTherapistReview) {
                throw new Error('TherapistService not available or method missing');
            }
            
            const result = await therapistService.submitTherapistReview(therapist.id, reviewData);
            console.log('📥 Received result:', result);
            
            // Reset form
            setRating(0);
            setReviewText('');
            
            // Call success callback
            if (onSubmitSuccess) {
                onSubmitSuccess();
            }
            
            // Show success message
            alert('Review submitted successfully!');
            
        } catch (error) {
            console.error('💥 Review submission error:', error);
            
            let errorMessage = 'Failed to submit review. Please try again.';
            
            if (error.message.includes('TherapistService')) {
                errorMessage = 'Service error. Please refresh the page and try again.';
            } else if (error.response) {
                const status = error.response.status;
                const data = error.response.data;
                
                console.log('Error status:', status);
                console.log('Error data:', data);
                
                if (status === 401) {
                    errorMessage = 'Please log in to submit a review.';
                } else if (status === 400 && data.error) {
                    errorMessage = data.error;
                } else if (data.error) {
                    errorMessage = data.error;
                }
            } else if (error.request) {
                errorMessage = 'Network error. Please check your connection.';
            }
            
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">Write a Review</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Therapist Info */}
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            {therapist?.photoUrl ? (
                                <img 
                                    src={therapist.photoUrl} 
                                    alt={therapist.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <span className="text-purple-600 font-semibold text-lg">
                                    {therapist?.name?.charAt(0) || 'T'}
                                </span>
                            )}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">{therapist?.name || 'Therapist'}</h4>
                            <p className="text-sm text-gray-600">{therapist?.specialization || 'Specialization'}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Rating */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Rating *
                            </label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredStar(star)}
                                        onMouseLeave={() => setHoveredStar(0)}
                                        className="p-1 hover:scale-110 transition-transform"
                                    >
                                        <Star
                                            className={`w-8 h-8 ${
                                                star <= (hoveredStar || rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {rating === 1 && "Poor"}
                                    {rating === 2 && "Fair"}
                                    {rating === 3 && "Good"}
                                    {rating === 4 && "Very Good"}
                                    {rating === 5 && "Excellent"}
                                </p>
                            )}
                        </div>

                        {/* Review Text */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Your Review *
                            </label>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Share your experience with this therapist..."
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                maxLength={500}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                {reviewText.length}/500 characters
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || rating === 0 || reviewText.trim().length < 10}
                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Submit Review</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
