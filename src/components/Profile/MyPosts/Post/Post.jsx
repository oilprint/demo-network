import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.inner} id={props.id} >
      <div className={s.info}>
        <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTjOxMcUg7m2QTFC11tjt6FxBCVxoFD9kNJP7SADqeQ&s'/> 
          
        <div className={s.item}>
          { props.message }
        </div>  
        
      </div>
      <div className={s.bottom}>
        <span>{props.count} likes</span>
      </div>
    </div>
  );
}

export default Post;