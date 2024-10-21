import people1 from "./people1.module.css"

const People1 = () => {
    return (
        <div className={people1.main}>
            <div className={people1.groups}>
                <div className={people1.p1}>
                    <div className={people1.ava}>
                        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/95/38/cf/9538cf72-c37c-6a5b-93de-7bb708158627/cover.jpg/1200x1200bf-60.jpg"></img>
                    </div>
                    <div className={people1.info}>
                        <div className={people1.name}>
                            <b>Webartino</b>
                        </div>
                        <div className={people1.veruser}>
                            <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
                        </div>
                        <div className={people1.tag}>
                            @abcdsec
                        </div>
                        <div className={people1.link}>
                            <div className={people1.link_img}>
                                <img src='https://cdn-user-icons.flaticon.com/146771/146771542/1717746960708.svg?token=exp=1717747861~hmac=d72481325ee6ec3cce2e2316b22fc880'></img>
                            </div>
                            <div className={people1.link_text}>
                                Promoted
                            </div>
                        </div>
                        <div className={people1.button}>
                            <button>+ Follow</button>
                        </div>
                    </div>
                </div>
                <div className={people1.p2}>
                    <div className={people1.ava}>
                        <img src='https://sun1-16.userapi.com/s/v1/ig2/uOqhaDyAakKp5Ktw9li3N7lyBGgwcgQULfHUP0t8KQ-K8WKWYFpASq2vUNvvdC5_75TXhZPMW8NZtARxTPyFzmhj.jpg?size=400x400&quality=95&crop=740,144,1088,1088&ava=1'></img>
                    </div>
                    <div className={people1.info2}>
                        <div className={people1.name}>
                            <b>John Smith</b>
                        </div>
                        <div className={people1.veruser}>
                            <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
                        </div>
                        <div className={people1.tag}>
                            @johnsmith
                        </div>
                        <div className={people1.description}>
                            Designer
                        </div>
                        <div className={people1.button2}>
                            <button>+ Follow</button>
                        </div>
                    </div>
                </div>
                <div className={people1.p3}>
                    <div className={people1.ava}>
                        <img src="https://icdn.lenta.ru/images/2019/12/16/12/20191216122959687/square_1280_dbc3282c3bd07deaf79dc480319f04d5.jpg"></img>
                    </div>
                    <div className={people1.info3}>
                        <div className={people1.name}>
                            <b>Konex</b>
                        </div>
                        <div className={people1.veruser}>
                            <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
                        </div>
                        <div className={people1.tag}>
                            @Konex
                        </div>
                        <div className={people1.description}>
                            Artist/Author/Motivational Speeker
                        </div>
                        <div className={people1.button3}>
                            <button>+ Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={people1.line1}>
            </div>
            <div className={people1.line2}>
            </div>
        </div>
    );
}

export default People1;