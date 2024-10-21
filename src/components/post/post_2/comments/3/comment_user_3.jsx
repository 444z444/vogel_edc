import Comment_3 from "./comment_user_3.module.css";

const Comment_user_3 = () => {
    return (
        <div className={Comment_3.Comment}>
            <div className={Comment_3.ava}>
            <img src="https://seegurd.com/wp-content/uploads/2020/04/woman-happy.jpg"></img>
            </div>
            <div className={Comment_3.Comment_info}>
                <div className={Comment_3.Name}>
                    <b>Macie Bellis</b>
                </div>
                <div className={Comment_3.Comment_text}>
                    With our vastly improved notifications system, users have more control.
                </div>
            </div>
            <div className={Comment_3.Like}>
                Like Reply 10min
            </div>
        </div>
    );
}

export default Comment_user_3;