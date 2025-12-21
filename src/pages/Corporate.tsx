import { useState } from 'react';
import { Users, Calendar, MapPin, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { CorporateInquiry } from '../types';

export function Corporate() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    team_size: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const inquiry: CorporateInquiry = {
        company_name: formData.company_name,
        contact_name: formData.contact_name,
        email: formData.email,
        team_size: formData.team_size || undefined,
        message: formData.message || undefined,
      };

      const { error: submitError } = await supabase
        .from('corporate_inquiries')
        .insert([inquiry]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        team_size: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Unforgettable Corporate Retreats in Switzerland
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-8">
            From 10 to 120 participants. Fully customizable.
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-white text-slate-800 rounded-sm hover:bg-opacity-90 transition-all text-lg font-light"
          >
            Plan Your Retreat
          </a>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16 text-slate-800">
            Why Choose Swissperiences for Your Retreat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Curated Venues</h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-selected locations that inspire creativity and foster connection
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Full Logistical Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle every detail so you can focus on your team
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Team Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Experiences designed to strengthen bonds and build trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Swiss Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Meticulous planning and execution worthy of Swiss standards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800">
            Sample Retreat Packages
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Each retreat is fully customizable to your team's needs and objectives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Leadership Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2 text-slate-800">Leadership Retreat</h3>
                <p className="text-gray-600 text-sm mb-4">10-15 people • 2 days</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li>• Mountain strategy session</li>
                  <li>• Private chef dinner</li>
                  <li>• Alpine hiking experience</li>
                  <li>• Wellness & mindfulness</li>
                </ul>
                <div className="text-2xl font-light text-slate-800 mb-4">
                  From CHF 8,500
                </div>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all"
                >
                  Request Details
                </a>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800"
                alt="Department Offsite"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2 text-slate-800">Department Offsite</h3>
                <p className="text-gray-600 text-sm mb-4">20-40 people • 3 days</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li>• Workshop spaces</li>
                  <li>• Team building activities</li>
                  <li>• Cultural experiences</li>
                  <li>• Evening entertainment</li>
                </ul>
                <div className="text-2xl font-light text-slate-800 mb-4">
                  From CHF 24,000
                </div>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all"
                >
                  Request Details
                </a>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800"
                alt="Company-Wide Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2 text-slate-800">Company-Wide</h3>
                <p className="text-gray-600 text-sm mb-4">50-120 people • 4 days</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li>• Multiple venue coordination</li>
                  <li>• Keynote facilitation</li>
                  <li>• Diverse experiences</li>
                  <li>• Full event management</li>
                </ul>
                <div className="text-2xl font-light text-slate-800 mb-4">
                  From CHF 95,000
                </div>
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all"
                >
                  Request Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4">Request a Proposal</h2>
          <p className="text-center text-gray-300 mb-12">
            Tell us about your team and we'll create a custom retreat proposal
          </p>

          {isSuccess ? (
            <div className="bg-alpine-green text-white p-8 rounded-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-alpine-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-2">Thank You!</h3>
              <p>We'll be in touch within 24 hours with a custom proposal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-sm p-8 text-slate-800">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm mb-6">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select
                    value={formData.team_size}
                    onChange={(e) => setFormData({ ...formData, team_size: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none"
                  >
                    <option value="">Select size</option>
                    <option value="10-15">10-15 people</option>
                    <option value="16-30">16-30 people</option>
                    <option value="31-50">31-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your retreat
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What are your goals? Any specific dates or preferences?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-alpine-green focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-800 text-white py-4 rounded-sm hover:bg-slate-700 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Proposal'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
