import Comment_user_1 from "./comments/1/comment_user_1";
import Comment_user_2 from "./comments/2/comment_user_2";
import Comment_user_3 from "./comments/3/comment_user_3";
import Wyc from "../Writeyourcomment"
import post from "./post_1.module.css"

const Post = () => {
    return (
        <div className={post.Post1}>

            <div className={post.ava}>
                <img src='https://seegurd.com/wp-content/uploads/2020/04/woman-happy.jpg'></img>
            </div>
            <div className={post.name}>
                <b>Shay Jordan</b>
            </div>            
            {/* <div className={post.wbveruser}></div> */}
            <div className={post.veruser}>
                <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
                
            </div>
            
            <div className={post.nametag}>
                @shay-jordodn
            </div>
            <div className={post.text1}>
                Welcome to the Vogel Family 🙂
            </div>
            <div className={post.text2}>
                <div className={post.text2part1}>
                    1. Follow people you like by clicking on the ’+ Follow’ button to see their posts in your feed.
                </div>
                <div className={post.text2part2}>
                    2. Share your thoughts with others and gain a following.
                </div>
            </div>
            <div className={post.text3}>
                Happy Vogel to you!
            </div>
            <div className={post.kartinka}>
                <img src='https://i.pinimg.com/originals/26/33/40/263340961af19c92a760887cdccd0111.jpg'></img>
            </div>
            <div className={post.buttonsunderimg}>
                <div className={post.likeico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/9513/9513802.png'></img>
                    <div className={post.likecount}>
                        12
                    </div>
                </div>
                <div className={post.commentico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/5755/5755460.png'></img>
                    <div className={post.commentcount}>
                        666
                    </div>
                </div>
                <div className={post.repostico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/1388/1388895.png'></img>
                    <div className={post.repostcount}>
                        5
                    </div>
                </div>
                <div className={post.shareico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/1358/1358023.png'></img>
                    <div className={post.sharetext}>
                        Share
                    </div>
                </div>
            </div>
            <div className={post.writecomment}>
                <Wyc />
            </div>
            <div className={post.comments}>
                <div className={post.comment_1}>
                    <Comment_user_1 />
                </div>
                <div className={post.comment_2}>
                    <Comment_user_2 />
                </div>
                <div className={post.comment_3}>
                    <Comment_user_3 />
                </div>
            </div>

            {/* ava, name, text photo like coment date */}
        </div>
    );
}

export default Post;