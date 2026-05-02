import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Video, 
  Phone, 
  MessageCircle,
  ArrowLeft,
  CheckCircle,
  XCircle
} from 'lucide-react';

const MyAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    setTimeout(() => {
      setAppointments([
        {
          id: 1,
          therapistName: "Dr. Asha Verma",
          date: "12 July 2025",
          time: "2:00 PM",
          mode: "Video Call",
          status: "Confirmed",
          specialty: "Stress Management"
        },
        // Add more mock appointments as needed
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getSessionIcon = (mode) => {
    switch (mode.toLowerCase()) {
      case 'video call':
        return <Video className="w-4 h-4 text-emerald-600" />;
      case 'voice call':
        return <Phone className="w-4 h-4 text-blue-600" />;
      case 'live chat':
        return <MessageCircle className="w-4 h-4 text-purple-600" />;
      default:
        return <MapPin className="w-4 h-4 text-indigo-600" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-xl mx-auto flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-lg font-semibold text-gray-700">Loading your appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Appointments</h1>
            <p className="text-gray-600">Manage your therapy sessions</p>
          </div>
        </div>

        {/* Appointments List */}
        {appointments.length > 0 ? (
          <div className="space-y-6">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{appointment.therapistName}</h3>
                      <p className="text-sm text-indigo-600 font-medium">{appointment.specialty}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    appointment.status === 'Confirmed' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {appointment.status === 'Confirmed' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <XCircle className="w-4 h-4 mr-1" />
                    )}
                    {appointment.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{appointment.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    {getSessionIcon(appointment.mode)}
                    <span className="font-medium">{appointment.mode}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Appointments Yet</h3>
            <p className="text-gray-600 mb-6">You haven't booked any therapy sessions yet.</p>
            <button
              onClick={() => navigate('/therapists')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Book Your First Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
