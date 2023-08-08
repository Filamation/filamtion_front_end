
import "./Item.style.css";
import { AiFillDislike, AiTwotoneLike, AiTwotoneStar } from "react-icons/ai";
import { FilmItem } from "../../../models/filmItem.model";

const Item = (props:{films:FilmItem}) => {
  
  return <div className="Item">
    <img src="https://placehold.co/600x400" alt="placeholder" />
    <h4><span><AiTwotoneStar/>10.10</span><span><AiTwotoneLike/><AiFillDislike /></span></h4>
    <h3>{props.films.title}</h3>
    <button>Add to watch list</button>
  </div>;
};

export default Item;
