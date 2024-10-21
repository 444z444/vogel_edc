
import Followpeople from "../FollowPeople/FollowPeople";
import Createpost from "./createpost";
import Post from "../post/post_1/post_1"
import Post_2 from "../post/post_2/post_2"
import content from "./content.module.css"
import Navbar_2_feed from "../navbar/navbar_2/feed/navbar_2_feed";
const Content = () => {
    return (
        <div className={content.main}>
            <div className={content.navbar}>
                <Navbar_2_feed />
            </div>
            <div className={content.crpost}>
                <Createpost />
            </div>
            <div className={content.follow}>
                <Followpeople />
            </div>
            <div className={content.post_1}>
                <Post />
            </div>
            <div className={content.post_2}>
                <Post_2 />
            </div>
        </div>

    );
}

export default Content;