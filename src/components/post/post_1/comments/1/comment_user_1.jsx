import Comment_1 from "./comment_user_1.module.css";

const Comment_user_1 = () => {
    return (
        <div className={Comment_1.Comment}>
            <div className={Comment_1.ava}>
            <img src="https://pricheska-strizhka.ru/wp-content/uploads/2018/11/how-to-make-hair-grow-out-faster-men.jpg"></img>
            </div>
            <div className={Comment_1.Comment_info}>
                <div className={Comment_1.Name}>
                    <b>Macie Bellis</b>
                </div>
                <div className={Comment_1.Comment_text}>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ut delor.
                </div>
            </div>
            <div className={Comment_1.Like}>
                Like Reply 1h
            </div>
        </div>
    );
}

export default Comment_user_1;