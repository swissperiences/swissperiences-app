import { Award, Heart, Leaf, Lock } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-light text-center mb-6 text-slate-800">Our Story</h1>
          <div className="h-1 w-24 bg-alpine-green mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Swissperiences was born from a simple frustration: finding truly exceptional,
              authentic Swiss experiences felt impossible. Most platforms offered generic tours
              led by guides who barely knew the terrain. We knew Switzerland had so much more to offer.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We spent two years traveling every valley and village, meeting local experts,
              foragers, artisans, and guides who possessed deep knowledge passed down through
              generations. These were people who lived and breathed Swiss culture but had no
              way to share their expertise with discerning travelers.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Swissperiences is our carefully curated collection of these hidden gems. Every
              host is personally vetted. Every experience reflects Swiss values: precision,
              quality, and authenticity. We're not a booking platform—we're your trusted
              connection to Switzerland's most exceptional local experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16 text-slate-800">Our Promise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Rigorous Vetting Process</h3>
              <p className="text-gray-700 leading-relaxed">
                Every host undergoes a comprehensive evaluation. We assess expertise, safety
                protocols, insurance coverage, and alignment with our quality standards. Only
                15% of applicants make our collection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Small Group Sizes</h3>
              <p className="text-gray-700 leading-relaxed">
                We limit group sizes to ensure personalized attention and authentic connection.
                Our experiences aren't mass tourism—they're intimate encounters with Swiss culture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Full Insurance & Safety</h3>
              <p className="text-gray-700 leading-relaxed">
                All experiences include comprehensive insurance coverage. Our hosts follow strict
                safety protocols. We handle logistics so you can focus on the experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-800">Sustainable Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize hosts who respect the environment and support local communities.
                Slow travel, minimal impact, maximum authenticity—that's the Swiss way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-12">Meet the Founder</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
              alt="Founder"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-light mb-2">Anna Zimmermann</h3>
              <p className="text-gray-400 mb-6">Founder & Curator</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Born in Lucerne and educated at ETH Zurich, Anna spent 15 years in luxury
                hospitality before founding Swissperiences. Her frustration with generic
                tourism experiences led her to create a platform showcasing Switzerland's
                authentic local experts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When not curating experiences, Anna can be found hiking in the Bernese
                Oberland or visiting her network of hosts across Switzerland. She believes
                the best travel memories come from genuine human connection—not Instagram
                moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16 text-slate-800">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Swiss precision in every detail. We maintain the highest standards because
                your experience matters.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Protecting Swiss nature and culture for future generations. Slow travel,
                low impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                Real experiences with real local experts. No tourist traps, no shortcuts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-alpine-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3 text-slate-800">Discretion</h3>
              <p className="text-gray-600 leading-relaxed">
                Privacy and exclusivity matter. Our experiences are invite-only for good reason.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-6 text-slate-800">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover Switzerland through the eyes of local experts
          </p>
          <a
            href="/experiences"
            className="inline-block px-12 py-4 bg-slate-800 text-white rounded-sm hover:bg-slate-700 transition-all text-lg font-light"
          >
            Browse Experiences
          </a>
        </div>
      </section>
    </div>
  );
}
