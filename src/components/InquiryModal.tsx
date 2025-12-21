import { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Inquiry } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  experienceId: string;
  experienceTitle: string;
}

export function InquiryModal({ isOpen, onClose, experienceId, experienceTitle }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    num_guests: 1,
    special_requests: '',
    is_corporate: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const inquiry: Inquiry = {
        experience_id: experienceId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        preferred_date: formData.preferred_date || undefined,
        num_guests: formData.num_guests,
        special_requests: formData.special_requests || undefined,
        is_corporate: formData.is_corporate,
      };

      const { error: submitError } = await supabase
        .from('inquiries')
        .insert([inquiry]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferred_date: '',
          num_guests: 1,
          special_requests: '',
          is_corporate: false,
        });
      }, 2000);
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-light text-slate-800">Check Availability</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-light mb-2">Thank You!</h3>
            <p className="text-gray-600">We'll be in touch within 24 hours to confirm availability.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="bg-warm-white p-4 rounded-sm">
              <p className="text-sm text-gray-700">
                <strong className="font-semibold">{experienceTitle}</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We'll respond within 24 hours to confirm availability
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests *
              </label>
              <select
                required
                value={formData.num_guests}
                onChange={(e) => setFormData({ ...formData, num_guests: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests (optional)
              </label>
              <textarea
                rows={4}
                value={formData.special_requests}
                onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none transition-all resize-none"
                placeholder="Any dietary restrictions, accessibility needs, or special occasions we should know about?"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="corporate"
                checked={formData.is_corporate}
                onChange={(e) => setFormData({ ...formData, is_corporate: e.target.checked })}
                className="mt-1 h-4 w-4 text-alpine-green focus:ring-alpine-green border-gray-300 rounded"
              />
              <label htmlFor="corporate" className="ml-3 text-sm text-gray-700">
                I'm interested in corporate or group bookings
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-slate-800 text-white px-8 py-3 rounded-sm hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Full refund up to 7 days before • Fully insured • Swiss quality guaranteed
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
