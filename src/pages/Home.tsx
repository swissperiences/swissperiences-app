import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Lock, Mountain, Heart, Palette, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

export function Home() {
  const [featuredExperiences, setFeaturedExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase
        .from('retreats')
        .select('*')
        .eq('featured', true)
        .limit(3);

      if (data) setFeaturedExperiences(data);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-8 relative shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-10 bg-white" />
              <div className="w-10 h-2 bg-white absolute" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
            Curated Swiss Experiences for Discerning Travelers
          </h1>
          <p className="text-xl md:text-2xl font-light mb-16 text-gray-200 tracking-wide">
            From alpine peaks to artisan workshops — invite-only hosts you won't find elsewhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/experiences"
              className="inline-block px-12 py-4 bg-white text-slate-800 rounded-lg hover:bg-opacity-90 transition-all text-lg font-light shadow-lg hover:shadow-xl"
            >
              Explore Experiences
            </Link>
            <Link
              to="/corporate"
              className="inline-block px-8 py-4 border-2 border-white border-opacity-60 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all text-base font-light"
            >
              Corporate Retreats
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-60" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Every experience is personally vetted to ensure Swiss quality standards
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Curated Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                We personally vet every host and experience. Only the exceptional make our collection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Book with Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Swiss quality, fully insured, exceptional service. Every detail is handled with precision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Exclusive Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Invite-only hosts you won't find elsewhere. Authentic experiences, not tourist attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800">Featured Categories</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            From Alpine peaks to artisan workshops, discover Switzerland's hidden treasures
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/experiences?category=nature"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Nature & Adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Mountain className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Nature & Adventure</h3>
                <p className="text-gray-200 text-sm font-light">Hiking, via ferrata, foraging</p>
              </div>
            </Link>

            <Link
              to="/experiences?category=wellness"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
                alt="Wellness & Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Heart className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Wellness & Retreat</h3>
                <p className="text-gray-200 text-sm font-light">Yoga, spa, mindfulness</p>
              </div>
            </Link>

            <Link
              to="/experiences?category=culture"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800"
                alt="Culture & Craft"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Palette className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Culture & Craft</h3>
                <p className="text-gray-200 text-sm font-light">Cheesemaking, watchmaking, vineyards</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {!loading && featuredExperiences.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-4 text-slate-800">Featured Experiences</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Our most sought-after experiences, beloved by discerning travelers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/experiences"
                className="inline-block px-10 py-3 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all font-light"
              >
                View All Experiences
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Shield size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive coverage for your peace of mind
              </p>
            </div>
            <div>
              <Award size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Swiss Quality Standards</h3>
              <p className="text-gray-400 text-sm">
                Precision and excellence in every detail
              </p>
            </div>
            <div>
              <Lock size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Curated by Local Experts</h3>
              <p className="text-gray-400 text-sm">
                Insider access to authentic experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
ENDFILEcat > src/pages/Home.tsx << 'ENDFILE'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Lock, Mountain, Heart, Palette, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

export function Home() {
  const [featuredExperiences, setFeaturedExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase
        .from('retreats')
        .select('*')
        .eq('featured', true)
        .limit(3);

      if (data) setFeaturedExperiences(data);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-8 relative shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-10 bg-white" />
              <div className="w-10 h-2 bg-white absolute" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
            Curated Swiss Experiences for Discerning Travelers
          </h1>
          <p className="text-xl md:text-2xl font-light mb-16 text-gray-200 tracking-wide">
            From alpine peaks to artisan workshops — invite-only hosts you won't find elsewhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/experiences"
              className="inline-block px-12 py-4 bg-white text-slate-800 rounded-lg hover:bg-opacity-90 transition-all text-lg font-light shadow-lg hover:shadow-xl"
            >
              Explore Experiences
            </Link>
            <Link
              to="/corporate"
              className="inline-block px-8 py-4 border-2 border-white border-opacity-60 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all text-base font-light"
            >
              Corporate Retreats
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-60" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Every experience is personally vetted to ensure Swiss quality standards
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Curated Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                We personally vet every host and experience. Only the exceptional make our collection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Book with Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Swiss quality, fully insured, exceptional service. Every detail is handled with precision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Exclusive Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Invite-only hosts you won't find elsewhere. Authentic experiences, not tourist attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800">Featured Categories</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            From Alpine peaks to artisan workshops, discover Switzerland's hidden treasures
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/experiences?category=nature"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Nature & Adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Mountain className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Nature & Adventure</h3>
                <p className="text-gray-200 text-sm font-light">Hiking, via ferrata, foraging</p>
              </div>
            </Link>

            <Link
              to="/experiences?category=wellness"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
                alt="Wellness & Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Heart className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Wellness & Retreat</h3>
                <p className="text-gray-200 text-sm font-light">Yoga, spa, mindfulness</p>
              </div>
            </Link>

            <Link
              to="/experiences?category=culture"
              className="group relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800"
                alt="Culture & Craft"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Palette className="mb-3" size={32} />
                <h3 className="text-2xl font-light mb-2">Culture & Craft</h3>
                <p className="text-gray-200 text-sm font-light">Cheesemaking, watchmaking, vineyards</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {!loading && featuredExperiences.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-4 text-slate-800">Featured Experiences</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Our most sought-after experiences, beloved by discerning travelers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/experiences"
                className="inline-block px-10 py-3 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all font-light"
              >
                View All Experiences
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Shield size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive coverage for your peace of mind
              </p>
            </div>
            <div>
              <Award size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Swiss Quality Standards</h3>
              <p className="text-gray-400 text-sm">
                Precision and excellence in every detail
              </p>
            </div>
            <div>
              <Lock size={48} className="mx-auto mb-4 text-accent-gold" />
              <h3 className="text-lg font-semibold mb-2">Curated by Local Experts</h3>
              <p className="text-gray-400 text-sm">
                Insider access to authentic experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
