import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postListItems = this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <span className="pull-xs-right">{post.categories}</span>
          <Link to={'/posts/' + post.id}>{post.title}</Link>
        </li>
      );
    });

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">
          {postListItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
