export interface IBook {
  _id: number;
  updatedAt: string | number | Date;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}