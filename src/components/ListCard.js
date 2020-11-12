import React from "react";

const ListCard = ({ _lists }) => {
  return _lists ? (
    <div>
      <h3>{_lists.attributes.name}</h3>
      <h4>{_lists.attributes.items}</h4>

      {/* <Link to={`/_list_cards/${_list_card.id}/edit`}>Edit this _list_card</Link> */}
    </div>
  ) : (
    <p>This the the _list_card card with no lists</p>
  );
};

export default ListCard;
