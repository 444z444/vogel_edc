import navbar3 from "./navbar_3.module.css"

const Navbar_3 = () => {
    return (
        <div className={navbar3.main}>
            <div className={`${navbar3.box1} ${navbar3.active}`}>
                <div className={navbar3.text}>
                    vogel(2)
                </div>
            </div>
            <div className={`${navbar3.box2} ${navbar3.nonactive}`}>
                <div className={navbar3.text}>
                    liked
                </div>
            </div>
            <div className={`${navbar3.box3} ${navbar3.nonactive}`}>
                <div className={navbar3.text}>
                    pre-vogel
                </div>
            </div>
            <div className={`${navbar3.box4} ${navbar3.nonactive}`}>
                <div className={navbar3.text}>
                    mentions
                </div>
            </div>
        </div>
    );
}

export default Navbar_3;