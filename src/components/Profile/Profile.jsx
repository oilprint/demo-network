import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div className={s.content}>
        <ProfileInfo />  
        <MyPostsContainer />
    </div>
  );
}

export default Profile;