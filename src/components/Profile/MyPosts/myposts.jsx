import React from 'react';
import s from './myposts.module.css';
import Post from './Posts/post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../Utils/Validators/validators';
import { Textarea } from '../../Common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(50);

const AddNewPostForm = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' 
              placeholder='text here' 
              validate={[required, maxLength10]} />
      </div>  
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
};

const AddPostFormRedux = reduxForm({form: 'postAddMessageForm'})(AddNewPostForm);

const MyPosts = React.memo((props) => {

  let post = [...props.posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  console.log('RENDER');

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostFormRedux onSubmit={addPost} />
      </div>
      <div className={s.posts}>
        {post}
      </div>
    </div>
  );
});

export default MyPosts;
