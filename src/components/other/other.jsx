
import Search_vogel from "./serch_vogel/search_vogel";
import What_happening from "./what_happening/what_happening";
import Who_to_follow from "./Who_to_follow/Who_to_follow.jsx";
import other from "./other.module.css"

const Other = () => {
    return (
        <div>
            <div className={other.search_vogel}>
                <Search_vogel />
            </div>
            <div className={other.what_happening}>
                <What_happening />
            </div>
            <div className={other.wtf}>
                <Who_to_follow />
            </div>
        </div>
    );
}

export default Other;