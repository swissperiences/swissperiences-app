import { Link } from 'react-router-dom';
import { MapPin, Clock, Users } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const getGroupSizeText = () => {
    if (experience.group_size_type === 'private') {
      return `Private (${experience.group_size_min}-${experience.group_size_max} guests)`;
    }
    return `Small Group (${experience.group_size_min}-${experience.group_size_max} guests)`;
  };

  const getCategoryColor = () => {
    switch (experience.category) {
      case 'nature':
        return 'bg-alpine-green';
      case 'wellness':
        return 'bg-accent-gold';
      case 'culture':
        return 'bg-slate-700';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <Link
      to={`/experiences/${experience.slug}`}
      className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 ${getCategoryColor()} text-white text-xs tracking-wide font-light capitalize`}>
          {experience.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={experience.host_avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'}
            alt={experience.host_name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600 font-light">with {experience.host_name}</span>
        </div>

        <h3 className="text-xl font-light mb-3 text-slate-800 group-hover:text-alpine-green transition-colors duration-300">
          {experience.title}
        </h3>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 font-light">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            {experience.location}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {experience.duration}
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            {getGroupSizeText()}
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2 font-light">
          {experience.description.split('\n\n')[0]}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-600 font-light">From</span>
            <div className="text-2xl font-light text-slate-800">
              CHF {experience.price}
            </div>
            <span className="text-xs text-gray-500 font-light">{experience.price_unit}</span>
          </div>
          <button className="px-6 py-2 border border-slate-800 text-slate-800 rounded-sm hover:bg-slate-800 hover:text-white transition-all font-light">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
