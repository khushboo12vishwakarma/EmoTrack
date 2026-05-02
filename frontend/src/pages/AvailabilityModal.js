// AvailabilityModal.js
import React from 'react';
import { X } from 'lucide-react';

const AvailabilityModal = ({ therapist, isOpen, onClose }) => {
  if (!isOpen) return null;

  const daysOfWeek = [
    { key: 'monday', label: 'Mon', color: 'text-red-500' },
    { key: 'tuesday', label: 'Tue', color: 'text-red-500' },
    { key: 'wednesday', label: 'Wed', color: 'text-red-500' },
    { key: 'thursday', label: 'Thu', color: 'text-red-500' },
    { key: 'friday', label: 'Fri', color: 'text-red-500' },
    { key: 'saturday', label: 'Sat', color: 'text-red-500' },
    { key: 'sunday', label: 'Sun', color: 'text-pink-500' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-teal-400 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <h2 className="text-white text-center text-lg font-bold mb-6">
          {therapist.name ? `${therapist.name.toUpperCase()} SCHEDULE` : 'THERAPIST SCHEDULE'}
        </h2>

        {/* Schedule Table */}
        <div className="space-y-2">
          {daysOfWeek.map((day) => (
            <div key={day.key} className="flex justify-between items-center py-2">
              <span className={`font-bold ${day.color}`}>
                {day.label}
              </span>
              <span className="text-white font-medium">
                {therapist.schedule && therapist.schedule[day.key] 
                  ? therapist.schedule[day.key] 
                  : '07:00 PM - 10:00 PM'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityModal;
