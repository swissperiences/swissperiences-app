export interface Experience {
  id: string;
  title: string;
  slug: string;
  category: 'nature' | 'wellness' | 'culture';
  region: string;
  location: string;
  duration: string;
  group_size_min: number;
  group_size_max: number;
  group_size_type: 'private' | 'small_group' | 'medium';
  price: number;
  price_unit: string;
  description: string;
  host_name: string;
  host_avatar: string | null;
  host_bio: string | null;
  images: string[];
  included: string[];
  to_bring: string[];
  meeting_point: string | null;
  cancellation_policy: string | null;
  featured: boolean;
  created_at: string;
}

export interface Inquiry {
  experience_id: string;
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  num_guests: number;
  special_requests?: string;
  is_corporate: boolean;
}

export interface CorporateInquiry {
  company_name: string;
  contact_name: string;
  email: string;
  team_size?: string;
  message?: string;
}
