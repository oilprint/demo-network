const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: 
  [{id: 1, photoAvatar: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445', followed: false,
    firstName: 'Ivan', location:{city: 'Odesa', country: 'Ukraine'},
    status: 'I`m fine' },
    {id: 2, photoAvatar: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445', followed: true,
    firstName: 'Ivan', location:{city: 'Odesa', country: 'Ukraine'},
    status: 'I`m fine' },
    {id: 3, photoAvatar: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445', followed: false,
    firstName: 'Ivan', location:{city: 'Odesa', country: 'Ukraine'},
    status: 'I`m fine' },
    {id: 4, photoAvatar: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445', 
    followed: true, firstName: 'Ivan', location:{city: 'Odesa', country: 'Ukraine'}, status: 'I`m fine' },
  ]
};


const usersReducer = ( state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      console.log('click');
      return {
        ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: true}
        }
        return u;
      })
    };

    case UNFOLLOW:
      return {...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u;
      })};
    
    case SET_USERS:
      return {...state, users:[...state.users, ...action.users]}
  
    default:
      return state;
  }
  
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
 

export default usersReducer;
