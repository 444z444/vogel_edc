import navbar from './navbar.module.css';
// import Profilepage from './../../page1/Profile'
import language from './../vogel ico/translate.png'
import logout from './../vogel ico/logout.png'
import pages from './../vogel ico/landing-page.png'
import trending from './../vogel ico/fire.png'
const Navbar = () => {
    return (
        <div className={navbar.Navbar}>
            <div className={`${navbar.Active} ${navbar.Feed}`}>
                <a href="/Content">
                    <button>
                        <img className={navbar.icobutton1} src='https://cdn-user-icons.flaticon.com/146771/146771542/1718335313759.svg?token=exp=1718336214~hmac=52f991293c96724e5a1cb32f151acce5'></img>
                        <div className={navbar.text}>feed</div>
                    </button>
                </a>
            </div>
            <div className={navbar.Profile}>
                <a href="/Profile">
                    <button>
                        <img className={navbar.icobutton2} src='https://cdn-user-icons.flaticon.com/146771/146771542/1718336253473.svg?token=exp=1718337153~hmac=68ddfdf9eefc087b7407f6d89a4a58ef'></img>
                        <div className={navbar.text2}>profile</div>
                    </button>
                </a>
            </div>
            <div className={navbar.Explore}>
                <button>
                    <img className={`${navbar.icobutton3} ${navbar.ico3}`} src='https://cdn-user-icons.flaticon.com/146771/146771542/1718336575402.svg?token=exp=1718337475~hmac=2c5122c809897a853810bd9acdae4d0f'></img>
                    <div className={navbar.text3}>explore</div>
                </button>
            </div>
            <div className={navbar.Language}>
                <button>
                    <img className={navbar.icobutton4} src={language}></img>
                    <div className={navbar.text4}>language</div>
                </button>
            </div>
            <div className={navbar.Logout}>
                <button>
                    <img className={navbar.icobutton5} src={logout}></img>
                    <div className={navbar.text5}>logout</div>
                </button>
            </div>
            <div className={navbar.Pages}>
                <button>
                    <img className={navbar.icobutton6} src={pages}></img>
                    <div className={navbar.text6}>pages</div>
                </button>
            </div>
            <div className={navbar.Trending}>
                <button>
                    <img className={navbar.icobutton7} src = {trending}></img>
                    <div className={navbar.text7}>trending</div>
                </button>
            </div>
            <div className={`${navbar.Navbar} ${navbar.Signin}`}>
                <button>sign in +</button>
            </div>
            <div className={navbar.line1}>
            </div>
            <div className={navbar.line2}>
            </div>
            <div className={navbar.line3}>
            </div>
            <div className={navbar.line4}>
            </div>
            <div className={navbar.line5}>
            </div>
        </div >
    );
}

export default Navbar;