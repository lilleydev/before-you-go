import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const MyLists = (props) => {
  const listCards = props.lists.map((list) => (
    <article>
      <Link key={list.id} to={`/lists/${list.id}`}>
        {list.attributes.name}
      </Link>
      <br />
    </article>
  ));
  return <div class="posts">{listCards}</div>;
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    //needs to match name from store state
  };
};

export default connect(mapStateToProps)(MyLists);
