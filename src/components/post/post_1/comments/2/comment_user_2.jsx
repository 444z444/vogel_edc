import Comment_2 from "./comment_user_2.module.css";

const Comment_user_2 = () => {
    return (
        <div className={Comment_2.Comment}>
            <div className={Comment_2.ava}>
            <img src="https://icdn.lenta.ru/images/2019/12/16/12/20191216122959687/square_1280_dbc3282c3bd07deaf79dc480319f04d5.jpg"></img>
            </div>
            <div className={Comment_2.Comment_info}>
                <div className={Comment_2.Name}>
                    <b>Macie Bellis</b>
                </div>
                <div className={Comment_2.Comment_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venuam.
                </div>
            </div>
            <div className={Comment_2.Like}>
                Like Reply 20min
            </div>
        </div>
    );
}

export default Comment_user_2;