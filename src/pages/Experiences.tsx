import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

export function Experiences() {
  const [searchParams] = useSearchParams();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    categories: [] as string[],
    regions: [] as string[],
    groupSizes: [] as string[],
    priceRange: [0, 2000] as [number, number],
  });

  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters(prev => ({ ...prev, categories: [categoryParam] }));
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      let query = supabase.from('retreats').select('*');

      if (filters.categories.length > 0) {
        query = query.in('category', filters.categories);
      }

      if (filters.regions.length > 0) {
        query = query.in('region', filters.regions);
      }

      if (filters.groupSizes.length > 0) {
        query = query.in('group_size_type', filters.groupSizes);
      }

      query = query.gte('price', filters.priceRange[0]).lte('price', filters.priceRange[1]);

      const { data } = await query;

      if (data) {
        let filteredData = data;

        if (searchQuery) {
          const lowerQuery = searchQuery.toLowerCase();
          filteredData = data.filter(exp =>
            exp.title.toLowerCase().includes(lowerQuery) ||
            exp.description.toLowerCase().includes(lowerQuery) ||
            exp.location.toLowerCase().includes(lowerQuery)
          );
        }

        setExperiences(filteredData);
      }
      setLoading(false);
    };

    fetchExperiences();
  }, [filters, searchQuery]);

  const toggleFilter = (type: 'categories' | 'regions' | 'groupSizes', value: string) => {
    setFilters(prev => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      regions: [],
      groupSizes: [],
      priceRange: [0, 2000],
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.regions.length > 0 ||
    filters.groupSizes.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 2000;

  const FilterSidebar = () => (
    <div className="bg-white p-6 rounded-sm shadow-sm sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-alpine-green hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-800 mb-3">Category</h4>
          <div className="space-y-2">
            {['nature', 'wellness', 'culture'].map(cat => (
              <label key={cat} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleFilter('categories', cat)}
                  className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-slate-800 capitalize">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-sm font-semibold text-slate-800 mb-3">Region</h4>
          <div className="space-y-2">
            {['zurich', 'lucerne', 'interlaken', 'geneva', 'zermatt', 'gruyeres', 'gstaad', 'vals', 'engelberg', 'bad-ragaz'].map(region => (
              <label key={region} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes(region)}
                  onChange={() => toggleFilter('regions', region)}
                  className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-slate-800 capitalize">
                  {region.replace('-', ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-sm font-semibold text-slate-800 mb-3">Group Size</h4>
          <div className="space-y-2">
            {[
              { value: 'private', label: 'Private (1-4)' },
              { value: 'small_group', label: 'Small Group (5-8)' },
              { value: 'medium', label: 'Medium (9-15)' },
            ].map(size => (
              <label key={size.value} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.groupSizes.includes(size.value)}
                  onChange={() => toggleFilter('groupSizes', size.value)}
                  className="h-4 w-4 text-alpine-green focus:ring-alpine-green border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-slate-800">
                  {size.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-sm font-semibold text-slate-800 mb-3">Price Range</h4>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                priceRange: [prev.priceRange[0], parseInt(e.target.value)]
              }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-alpine-green"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>CHF {filters.priceRange[0]}</span>
              <span>CHF {filters.priceRange[1]}{filters.priceRange[1] === 2000 ? '+' : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Swiss Experiences'}
          </h1>
          <p className="text-xl text-gray-300 font-light">
            {loading ? 'Searching...' : `${experiences.length} curated experience${experiences.length !== 1 ? 's' : ''} ${searchQuery ? 'found' : 'available'}`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden mb-6 flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-sm"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            {showFilters && (
              <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowFilters(false)} />
            )}
            <div className={`${showFilters ? 'fixed left-0 top-0 bottom-0 w-80 z-50 overflow-y-auto' : ''}`}>
              {showFilters && (
                <div className="md:hidden flex justify-between items-center p-4 bg-white border-b">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={24} />
                  </button>
                </div>
              )}
              <FilterSidebar />
            </div>
          </aside>

          <main className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-alpine-green"></div>
              </div>
            ) : experiences.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-sm shadow-sm">
                <p className="text-gray-600 text-lg mb-4">
                  {searchQuery
                    ? `No experiences found matching "${searchQuery}".`
                    : 'No experiences found matching your filters.'}
                </p>
                {(hasActiveFilters || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
