import Whotf from './Who_to_follow.module.css'

const Wtf = () => {
    return (
        <div className={Whotf.main}>
            <div className={Whotf.partname}>
                <b>Who to follow</b>
            </div>
            <div className={Whotf.box1}>
                <div className={Whotf.box1img}>
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/95/38/cf/9538cf72-c37c-6a5b-93de-7bb708158627/cover.jpg/1200x1200bf-60.jpg"></img>
                </div>
                <div className={Whotf.box1txt}>
                    <div className={Whotf.p1t1}>
                        <b>Webartinfo</b>
                    </div>
                    <div className={Whotf.p1t2}>
                        @abcdsec
                    </div>
                    <div className={Whotf.p1t3}>
                        Promoted
                    </div>
                    <div className={Whotf.shareico}>
                        <img src = 'https://cdn-user-icons.flaticon.com/146771/146771542/1717746960708.svg?token=exp=1717747861~hmac=d72481325ee6ec3cce2e2316b22fc880'></img>
                    </div>
                </div>
            </div>
            <div className={Whotf.box2}>
                <div className={Whotf.box2img}>
                    <img src="https://pricheska-strizhka.ru/wp-content/uploads/2018/11/how-to-make-hair-grow-out-faster-men.jpg"></img>
                </div>
                <div className={Whotf.box2txt}>
                    <div className={Whotf.p2t1}>
                        <b>John Smith</b>
                    </div>
                    <div className={Whotf.p2t2}>
                        @johnsmith
                    </div>
                    <div className={Whotf.p2t3}>
                        Designer
                    </div>
                </div>
            </div>
            <div className={Whotf.box3}>
                <div className={Whotf.box3img}>
                    <img src="https://icdn.lenta.ru/images/2019/12/16/12/20191216122959687/square_1280_dbc3282c3bd07deaf79dc480319f04d5.jpg"></img>
                </div>
                <div className={Whotf.box3txt}>
                    <div className={Whotf.p3t1}>
                        <b>Konex</b>
                    </div>
                    <div className={Whotf.p3t2}>
                        @Konex
                    </div>
                    <div className={Whotf.p3t3}>
                        Artist/Author...
                    </div>
                </div>
            </div>
            <div className={Whotf.line1}>
            </div>
            <div className={Whotf.line2}>
            </div>
            <div className={Whotf.line3}>
            </div>
        </div>
    );
}

export default Wtf;