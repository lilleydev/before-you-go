import React from "react";

const BucketListCard = ({ bucket_lists }) => {
  return bucket_lists ? (
    <div>
      <h3>{bucket_lists.attributes.name}</h3>
      {/* <h4>{bucket_lists.attributes.items}</h4> */}

      {/* <Link to={`/bucket_list_cards/${bucket_list_card.id}/edit`}>Edit this bucket_list_card</Link> */}
    </div>
  ) : (
    <p>This the the bucket_list_card card with no lists</p>
  );
};

export default BucketListCard;
