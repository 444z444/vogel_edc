import Createpost from "../../components/content/createpost";
import Post from "../../components/post/post_1/post_1";
import Post2 from "../../components/post/post_2/post_2";
import Navbar_2_trending from "../../components/navbar/navbar_2/trending/navbar_2_trending";


import trendingpage from "./Trending.module.css"

const Trending = () => {
    return (
        <div className={trendingpage.main}>
            <div className={trendingpage.navbar}>
                <Navbar_2_trending />
            </div>
            <div className={trendingpage.crpost}>
                <Createpost />
            </div>
            <div className={trendingpage.post1}>
                <Post />
            </div>
            <div className={trendingpage.post2}>
                <Post2 />
            </div>
        </div>
    );
}
export default Trending;