import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts__block}>
            <h3>My posts</h3>
            <div>
                <textarea cols="30" rows="2"></textarea> <br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post msg='Hello world!' like='2' />
                <Post msg='I start to learn React' like='10' />
                <Post msg='Its cool' like='15' />
            </div>
        </div>
    )
}

export default MyPosts;