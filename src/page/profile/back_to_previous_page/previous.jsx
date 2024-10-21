import { prettyDOM } from "@testing-library/react";
import prvious from "./previous.module.css"

const Previous = () => {
    return (
        <div className={prvious.main}>
            <div className={prvious.imgbtn}>
                <a href="/Content">
                    <button>
                        <img src="https://cdn-user-icons.flaticon.com/146771/146771542/1718269369970.svg?token=exp=1718270270~hmac=3810bee6d77a8e64bdd9d0d11caff492"></img>
                    </button>
                </a>
            </div>
            <div className={prvious.name}>
                <b>Shay Jordon</b>
            </div>
            <div className={prvious.shareicon}>
                <img src="https://cdn-user-icons.flaticon.com/146771/146771542/1718269541239.svg?token=exp=1718270441~hmac=a857618907927b85e3874e80ad63b136"></img>
            </div>
        </div>
    );
}

export default Previous;