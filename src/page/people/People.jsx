import Navbar_2_people from "../../components/navbar/navbar_2/people/navbar_2_people"
import P1 from "./components/1/people1"
import people from "./People.module.css"
const People = () => {
    return (
        <div className={people.main}>
            <div className={people.navbar}>
                <Navbar_2_people />
            </div>
            <div className={people.p1t1}>
                <div className={people.t1}>
                    <b>People you can follow</b>
                </div>
                <div className={people.p1}>
                    <P1 />
                </div>
            </div>
            <div className={people.p2t2}>
                <div className={people.t2}>
                    <b>Popular</b>
                </div>
                <div className={people.p2}>
                    <P1 />
                </div>
            </div>
            <div className={people.p3t3}>
                <div className={people.t3}>
                    <b>New Papers & Channels</b>
                </div>
                <div className={people.p3}>
                    <P1 />
                </div>
            </div>
            {/* <div className={people.p4}>
                <P1 />
            </div> */}
        </div>
    );
}

export default People;