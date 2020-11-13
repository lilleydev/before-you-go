import React from "react";

const ListCard = ({ lists }) => {
  return lists ? (
    <div>
      <h3>{lists.attributes.name}</h3>
      <h4>{lists.attributes.description}</h4>

      {/* <Link to={`/_list_cards/${_list_card.id}/edit`}>Edit this _list_card</Link> */}
    </div>
  ) : (
    <p>This the the _list_card card with no lists</p>
  );
};

export default ListCard;
