import { Review } from "./review.model.ts";
import { FilmItem } from "./filmItem.model.ts";

export interface User {
  id: string;
  username: string;
  email: string;
  full_name: string;
  age: number;
  favorite_genres: string[];
  favorite_film_type: string[];
  reviews: Omit<Review, "reviewer">[];
  watched_movie_list: {
    film_id: FilmItem["id"];
    film_title: FilmItem["title"];
  }[];
  planed_to_watch_movie_list: {
    film_id: FilmItem["id"];
    film_title: FilmItem["title"];
  }[];
  liked_movie_list: {
    film_id: FilmItem["id"];
    film_title: FilmItem["title"];
  }[];
  disliked_movie_list: {
    film_id: FilmItem["id"];
    film_title: FilmItem["title"];
  }[];
  last_active: Date;
  created: Date;
}
