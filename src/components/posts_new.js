import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit(props) { // props from form (they are fields!)
    this.props.createPost(props) // is a promise!
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const {
      fields: {
        title,
        categories,
        content,
      },
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Back</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

// connect: first arg is mapStateToProps, second is mapDispatchToProps
// reduxForm: first arg is form config, second is mapStateToProps,
//            and third is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(PostsNew);
