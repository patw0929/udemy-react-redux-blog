import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { readPost } from '../actions/index';

class PostShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.readPost(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to list</Link>

        <h3>{title}</h3>

        <h6>Categories: {categories}</h6>

        <p>
          {content}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
  };
}

export default connect(mapStateToProps, { readPost })(PostShow);
