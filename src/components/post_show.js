import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { readPost, deletePost } from '../actions/index';

class PostShow extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillMount() {
    this.props.readPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div>
        <Link to="/">Back to list</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>Delete post</button>

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

export default connect(mapStateToProps, { readPost, deletePost })(PostShow);
