import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

  constructor(props) {
    super(props);

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => { 
        this.props.setUsers(response.data.items)
      });
    
  }

  render() {
    return (
    <div>
      {
      this.props.users.map(u => <div key={u.id} className={s.content}>
        <div className={s.left}>
          <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="" className={s.img} />
     
          <div>
            
            {u.followed ? <button className={s.btn} onClick={() => { this.props.unfollow(u.id)}}>unfollow</button>:<button className={s.btn} onClick={ () => { this.props.follow(u.id) } }>follow</button> }
          </div>
           
        
        </div>
        <div className={s.right}>
          <div className={s.info}>
            <div className={s.name}>
              {u.name}
            </div>
            <div
             className={s.status}>{u.status}
             </div>
          </div>
          <div className={s.location}>
            {'u.location.country'}
            <div className={s.city}>
              {'u.location.city'}
            </div>
          </div>

        </div>
        </div>)
    }
    </div>
  )

  }

}
export default Users;