import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => { 
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });

  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => { 
        this.props.setUsers(response.data.items);
        
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return  <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          }
          )}
        </div>

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