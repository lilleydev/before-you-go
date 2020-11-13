import React from "react";
import { connect } from "react-redux";
import ListCard from "./ListCard";

const MyLists = (props) => {
  const Cards = props.lists.map((list) => (
    <ListCard lists={list} key={list.id} />
  ));
  return Cards;
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    //needs to match name from store state
  };
};

export default connect(mapStateToProps)(MyLists);
