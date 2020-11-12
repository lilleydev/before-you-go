import React from "react";
import { connect } from "react-redux";
import ListCard from "./ListCard";

const MyLists = (props) => {
  const Cards = props.lists.map((b) => <ListCard lists={b} key={b.id} />);
  return Cards;
};

const mapStateToProps = (state) => {
  return {
    lists: state.Lists,
    //needs to match name from store state
  };
};

export default connect(mapStateToProps)(MyLists);
