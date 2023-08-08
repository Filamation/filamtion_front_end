import { Review } from "./review.model.ts";

export interface FilmItem {
  id: string;
  title: string;
  age_rating: string;
  rating: number;
  genre: string[];
  film_type: string;
  likes: number;
  dislikes: number;
  reviews: Omit<Review, "film">[];
}
