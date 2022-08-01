export type User = {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
};

export type exporeDataType = {
  img: string;
  location: string;
  distance: string;
};

export type cardDataType = {
  img: string;
  title: string;
};

export type searchDataType = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
