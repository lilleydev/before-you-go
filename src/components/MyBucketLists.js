import React from "react";
import { connect } from "react-redux";
import BucketListCard from "./BucketListCard";

const MyBucketLists = (props) => {
  const bucketCards = props.bucket_lists.map((b) => (
    <BucketListCard bucket_lists={b} key={b.id} />
  ));
  return bucketCards;
};

const mapStateToProps = (state) => {
  return {
    bucket_lists: state.bucketLists,
    //needs to match name from store state
  };
};

export default connect(mapStateToProps)(MyBucketLists);
