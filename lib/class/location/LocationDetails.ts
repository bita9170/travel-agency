import { getLocationPhotos } from "@/controllers/tripadvisorController";
import { LocationPhotos } from "./LocationPhotos";

interface AddressObj {
  street1: string;
  city: string;
  country: string;
  postalcode: string;
  address_string: string;
}

interface Ancestor {
  level: string;
  name: string;
  location_id: string;
}

interface RankingData {
  geo_location_id: string;
  ranking_string: string;
  geo_location_name: string;
  ranking_out_of: string;
  ranking: string;
}

interface OpenClose {
  day: number;
  time: string;
}

interface Period {
  open: OpenClose;
  close: OpenClose;
}

interface Hours {
  periods: Period[];
  weekday_text: string[];
}

interface Category {
  name: string;
  localized_name: string;
}

interface Subcategory {
  name: string;
  localized_name: string;
}

interface Group {
  name: string;
  localized_name: string;
  categories: Category[];
}

interface NeighborhoodInfo {
  location_id: string;
  name: string;
}

interface TripType {
  name: string;
  localized_name: string;
  value: string;
}

interface AwardImages {
  tiny: string;
  small: string;
  large: string;
}

interface Award {
  award_type: string;
  year: string;
  images: AwardImages;
  categories: string[];
  display_name: string;
}

export class LocationDetails {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  getLocationId(): string {
    return this.data.location_id;
  }

  getName(): string {
    return this.data.name;
  }

  getDescription(): string {
    return this.data.description;
  }

  getWebUrl(): string {
    return this.data.web_url;
  }

  getAddress(): AddressObj {
    return this.data.address_obj;
  }

  getAncestors(): Ancestor[] {
    return this.data.ancestors;
  }

  getLatitude(): string {
    return this.data.latitude;
  }

  getLongitude(): string {
    return this.data.longitude;
  }

  getTimezone(): string {
    return this.data.timezone;
  }

  getPhone(): string {
    return this.data.phone;
  }

  getWebsite(): string {
    return this.data.website;
  }

  getWriteReview(): string {
    return this.data.write_review;
  }

  getRankingData(): RankingData {
    return this.data.ranking_data;
  }

  getRating(): string {
    return this.data.rating;
  }

  getRatingImageUrl(): string {
    return this.data.rating_image_url;
  }

  getNumReviews(): string {
    return this.data.num_reviews;
  }

  getReviewRatingCount(): Record<string, string> {
    return this.data.review_rating_count;
  }

  getPhotoCount(): string {
    return this.data.photo_count;
  }

  getSeeAllPhotos(): string {
    return this.data.see_all_photos;
  }

  getHours(): Hours {
    return this.data.hours;
  }

  getCategory(): Category {
    return this.data.category;
  }

  getSubcategory(): Subcategory[] {
    return this.data.subcategory;
  }

  getGroups(): Group[] {
    return this.data.groups;
  }

  getNeighborhoodInfo(): NeighborhoodInfo[] {
    return this.data.neighborhood_info;
  }

  getTripTypes(): TripType[] {
    return this.data.trip_types;
  }

  getAwards(): Award[] {
    return this.data.awards;
  }

  // async getPhotosApi(): Promise<LocationPhotos[]> {
  //   const result = await getLocationPhotos(this.data.location_id);
  //   return result.map((photo: any) => new LocationPhotos(photo.data));
  // }

  getPhotos(): LocationPhotos[] {
    const photos = this.data.photos || [];
    return photos.map((photo: any) => new LocationPhotos(photo));
  }

  async getImage(): Promise<string> {
    const arr: number[] = [57, 49, 28, 27, 74, 84, 122, 124, 142, 249];
    const ind = Math.floor(Math.random() * arr.length);
    const photos = await this.getPhotos();
    return photos.length > 0
      ? photos[0].getLarge().url
      : `https://picsum.photos/id/${arr.splice(ind, 1)[0]}/4106/2806`;
  }
}
