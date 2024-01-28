import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  let postsElements = 
      props.posts.map(p => <Post id={p.id} message={p.message} countLikes={p.countLikes} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.list}>
      <div className={s.newPost}>
          <div>
            <textarea ref={ newPostElement } onChange={ onPostChange } value={props.newPostText} />
            </div>
          <button onClick={ onAddPost }>add post</button>
      </div>
      { postsElements }
    </div>
  );
}

export default MyPosts;  