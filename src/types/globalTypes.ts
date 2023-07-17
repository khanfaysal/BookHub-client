export interface IBook {
  updatedAt: string | number | Date;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}