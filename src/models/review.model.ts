import { FilmItem } from "./filmItem.model.ts";
import { User } from "./user.model.ts";

export interface Review {
  id: string;
  reviewer: { user_id: User["id"]; username: User["username"] };
  film: { film_id: FilmItem["id"]; film_name: FilmItem["title"] };
  rating: number;
  review_comment: string;
  review_date: Date;
}
