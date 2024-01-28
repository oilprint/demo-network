import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
  debugger;
  
  return (
    <div>{
      props.users.map(u => <div key={u.id} className={s.content}>
        <div className={s.left}>
          <img src={u.photoAvatar} alt="" className={s.img} />
     
          <div>
            
            {u.followed ? <button className={s.btn} onClick={() => { props.unfollow(u.id)}}>unfollow</button>:<button className={s.btn} onClick={ () => { props.follow(u.id) } }>follow</button> }
          </div>
           
        
        </div>
        <div className={s.right}>
          <div className={s.info}>
            <div className={s.name}>
              {u.firstName}
            </div>
            <div
             className={s.status}>{u.status}
             </div>
          </div>
          <div className={s.location}>
            {u.location.country}
            <div className={s.city}>
              {u.location.city}
            </div>
          </div>

        </div>
        </div>)
    }
    </div>
  )
}

export default Users;