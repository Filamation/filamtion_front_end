import React, { useEffect, useState } from "react";
import "./ItemGrid.style.css";
import { filmsMock } from "../../mock/films.mock";
import { FilmItem } from "../../models/filmItem.model";
import Item from "./item/Item";


const ItemGrid: React.FC = () => {
  const [films, setFilms] = useState<FilmItem[] | []>([]);

  useEffect(() => {
    setFilms(filmsMock);
  }, []);

  return (
    <div className="ItemGrid">
      {films.map((film) => {
        return <Item films={film}/>;
      })}
    </div>
  );
};

export default ItemGrid;
