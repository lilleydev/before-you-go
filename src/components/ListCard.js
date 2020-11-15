import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ list }) => {
  return list ? (
    <div>
      <h3>{list.attributes.name}</h3>
      <h4>{list.attributes.description}</h4>
      <h4>{list.attributes.start_date}</h4>
      <h4>{list.attributes.end_date}</h4>
      <Link to={`/lists/${list.id}/edit`}>Edit</Link>
      {/* <Link to={`/_list_cards/${_list_card.id}/edit`}>Edit this _list_card</Link> */}
    </div>
  ) : (
    <p>This the the _list_card card with no list</p>
  );
};

export default ListCard;
