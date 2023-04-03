export interface RestaurantsService{
    array : Restaurant [];
    "count": number;
    "totalCount": number
}

export interface Restaurant {
  id: string;
  restaurantName: string;
  companyName: string;
  cuisine: string[];
  phone: string;
  priceRange: [string, string];
  geolocation: {
    country: string;
    city: string;
    address: string;
  };
  open: {
    closedDay: string;
    workHours: [number, number];
  };
  sideProducts: Product[];
  email: string;
}

export interface Product {
  name: string;
  material: string;
  description: string;
  adjectives: string;
  color: string;
}
