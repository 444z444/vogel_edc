import navbar2 from './../feed/navbar_2_feed.module.css'

const Navbar_2_trending = () => {
    return (
        <div className={navbar2.buttons}>
            <div className={` ${navbar2.feed} ${navbar2.nonactive}`}>                
                <a href='/Content'><button><div className={navbar2.text}>feed</div></button></a>                
            </div>
            <div className={` ${navbar2.people} ${navbar2.nonactive}`}>                
                    <a href='/People'><button><div className={navbar2.text}>people</div></button></a>              
            </div>
            <div className={` ${navbar2.trending} ${navbar2.active}`}>                
                <a href='/Trending'><button><div className={navbar2.text}>trending</div></button></a>                
            </div>
        </div>
    );
}

export default Navbar_2_trending;