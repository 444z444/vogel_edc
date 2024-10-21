import Post1 from "./../../components/post/post_1/post_1"
import Post2 from "./../../components/post/post_2/post_2"
import Profilemain from "../../components/other/Profile_main/profile_main";
import profilemain from "./Profile.module.css"
import Navbar_3 from "../../components/navbar/navbar_3/navbar_3";
import Previous from "./back_to_previous_page/previous";

const ProfilePage = () => {
    return (
        <div className={profilemain.main}>
            <div className={profilemain.backtocontent}>
                <Previous />
            </div>
            <div className={profilemain.profileinfo}>
                <Profilemain />
            </div>
            <div className={profilemain.navbar}>
                <Navbar_3 />
            </div>
            <div className={profilemain.post1}>
                <Post1 />
            </div>
            <div className={profilemain.post2}>
                <Post2 />
            </div>      
        </div>



    );  
}

export default ProfilePage;