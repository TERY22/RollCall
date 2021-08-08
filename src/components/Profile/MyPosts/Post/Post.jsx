import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mandalorian-baby-yoda-2-1573847849.jpg?crop=0.832xw:1.00xh;0.0849xw,0&resize=1200:*" alt=""/>
            <span>{props.msg}</span>
            <div>like [{props.like}]</div>
        </div>
    )
}

export default Post;