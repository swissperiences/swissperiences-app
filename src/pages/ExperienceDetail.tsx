import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Users, Shield, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Experience } from '../types';
import { InquiryModal } from '../components/InquiryModal';
import { ExperienceCard } from '../components/ExperienceCard';

export function ExperienceDetail() {
  const { slug } = useParams();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [similarExperiences, setSimilarExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCancellation, setShowCancellation] = useState(false);

  useEffect(() => {
    const fetchExperience = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('retreats')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (data) {
        setExperience(data);

        const { data: similar } = await supabase
          .from('retreats')
          .select('*')
          .eq('category', data.category)
          .neq('id', data.id)
          .limit(3);

        if (similar) setSimilarExperiences(similar);
      }
      setLoading(false);
    };

    fetchExperience();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-white pt-20 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-alpine-green"></div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-warm-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-800 mb-4">Experience not found</h1>
          <Link to="/experiences" className="text-alpine-green hover:underline">
            Browse all experiences
          </Link>
        </div>
      </div>
    );
  }

  const getGroupSizeText = () => {
    if (experience.group_size_type === 'private') {
      return `Private (${experience.group_size_min}-${experience.group_size_max} guests)`;
    }
    return `Small Group (${experience.group_size_min}-${experience.group_size_max} guests)`;
  };

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/experiences"
          className="inline-flex items-center text-alpine-green hover:underline mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to experiences
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={experience.images[selectedImage]}
                alt={experience.title}
                className="w-full h-96 object-cover rounded-sm"
              />
              {experience.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {experience.images.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`h-24 rounded-sm overflow-hidden ${
                        selectedImage === idx ? 'ring-2 ring-alpine-green' : ''
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-sm shadow-sm p-8">
              <div className="inline-block px-3 py-1 bg-alpine-green text-white text-xs uppercase tracking-wider mb-4">
                {experience.category}
              </div>

              <h1 className="text-4xl font-light text-slate-800 mb-4">{experience.title}</h1>

              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={experience.host_avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'}
                  alt={experience.host_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-600">Hosted by</p>
                  <p className="font-medium text-slate-800">{experience.host_name}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-2 text-alpine-green" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={20} className="mr-2 text-alpine-green" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users size={20} className="mr-2 text-alpine-green" />
                  <span>{getGroupSizeText()}</span>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                {experience.description.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-light text-slate-800 mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {experience.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="mr-3 text-alpine-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-light text-slate-800 mb-4">What to Bring</h2>
                <ul className="space-y-2">
                  {experience.to_bring.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-light text-slate-800 mb-4">Meeting Point</h2>
                <p className="text-gray-700">{experience.meeting_point}</p>
                <div className="mt-4 h-48 bg-gray-200 rounded-sm flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowCancellation(!showCancellation)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h2 className="text-2xl font-light text-slate-800">Cancellation Policy</h2>
                  <svg
                    className={`w-6 h-6 transition-transform ${showCancellation ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCancellation && (
                  <p className="text-gray-700 mt-4">{experience.cancellation_policy}</p>
                )}
              </div>
            </div>

            {experience.host_bio && (
              <div className="bg-white rounded-sm shadow-sm p-8 mt-8">
                <h2 className="text-2xl font-light text-slate-800 mb-6">About Your Host</h2>
                <div className="flex items-start space-x-4">
                  <img
                    src={experience.host_avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'}
                    alt={experience.host_name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-2">{experience.host_name}</h3>
                    <p className="text-gray-700 leading-relaxed">{experience.host_bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">From</div>
                <div className="text-4xl font-light text-slate-800">
                  CHF {experience.price}
                </div>
                <div className="text-sm text-gray-600">{experience.price_unit}</div>
              </div>

              <button
                onClick={() => setShowInquiry(true)}
                className="w-full bg-slate-800 text-white py-4 rounded-sm hover:bg-slate-700 transition-colors text-lg mb-4"
              >
                Check Availability
              </button>

              <p className="text-xs text-gray-500 text-center mb-6">
                Full refund up to 7 days before
              </p>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-700">
                  <Shield size={18} className="mr-3 text-alpine-green" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Award size={18} className="mr-3 text-alpine-green" />
                  <span>Swiss Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {similarExperiences.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-light text-slate-800 mb-8">Similar Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        )}
      </div>

      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        experienceId={experience.id}
        experienceTitle={experience.title}
      />
    </div>
  );
}
