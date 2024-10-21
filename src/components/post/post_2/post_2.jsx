import Comment_user_1 from "./comments/1/comment_user_1";
import Comment_user_2 from "./comments/2/comment_user_2";
import Comment_user_3 from "./comments/3/comment_user_3";
import Wyc from "../Writeyourcomment"
import post from "./post_2.module.css"

const Post = () => {
    return (
        <div className={post.Post1}>

            <div className={post.ava}>
                <img src='https://sun1-16.userapi.com/s/v1/ig2/uOqhaDyAakKp5Ktw9li3N7lyBGgwcgQULfHUP0t8KQ-K8WKWYFpASq2vUNvvdC5_75TXhZPMW8NZtARxTPyFzmhj.jpg?size=400x400&quality=95&crop=740,144,1088,1088&ava=1'></img>
            </div>
            <div className={post.name}>
                <b>John Smith</b>
            </div>
            <div className={post.veruser}>
                <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
            </div>
            <div className={post.nametag}>
                @johnsmith
            </div>
            <div className={post.text2}>
                <div className={post.text2part1}>
                    Nam malis menandri ea, facete debitis volumus est ut, commune placerat nominati ei sea. Labore
                </div>
                <div className={post.text2part2}>
                    alterum probatus no sed, ius ea quas iusto inermis, ex tantas populo nonumes nam.
                </div>
            </div>
            <div className={post.kartinka}>
                <img src='https://th.bing.com/th/id/R.b93bd2828772f82d52977eb808c70e26?rik=VrIQvakmUFfknQ&pid=ImgRaw&r=0'></img>
            </div>
            <div className={post.buttonsunderimg}>
                <div className={post.likeico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/9513/9513802.png'></img>
                    <div className={post.likecount}>
                        30.4k
                    </div>
                </div>
                <div className={post.commentico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/5755/5755460.png'></img>
                    <div className={post.commentcount}>
                        4.0k
                    </div>
                </div>
                <div className={post.repostico}>
                    <img src='https://cdn-icons-png.flaticon.com/128/1388/1388895.png'></img>
                    <div className={post.repostcount}>
                        617
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
        </div>
    );
}

export default Post;