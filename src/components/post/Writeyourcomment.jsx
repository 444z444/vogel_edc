import wyc from "./Writeyourcomment.module.css"

const Wyc = () => {
    return (
        <div className={wyc.comment}>
            <div className={wyc.ava}>
                <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/c232a028-e829-4862-a10a-fbca6c390a7c.png"></img>
            </div>
            <div className={wyc.grey}>
                <div className={wyc.WriteYourComment}>
                    Write Your comment
                </div>
            </div>
        </div>

    );
}

export default Wyc;