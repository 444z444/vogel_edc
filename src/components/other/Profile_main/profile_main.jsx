import profilemain from './profile_main.module.css'

const Profilemain = () => {
    return (
        <div className={profilemain.main}>
            <div className={profilemain.info}>
                <div className={profilemain.ava}>
                    <img src='https://seegurd.com/wp-content/uploads/2020/04/woman-happy.jpg'></img>
                </div>
                <div className={profilemain.nametagref}>
                    <div className={profilemain.name}>
                        <b>Shay Jordon</b>
                    </div>
                    <div className={profilemain.refuser}>
                        <img src='https://cdn-icons-png.flaticon.com/128/6364/6364343.png'></img>
                    </div>
                    <div className={profilemain.tag}>
                        @shay-jordon
                    </div>
                </div>
                <div className={profilemain.text}>
                    <div>
                        The standard chunk of Lorem Ipsum used since is reproduced. Contrary to
                    </div>
                    <div>
                        popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    </div>
                    <div>
                        classical Latin literature..
                    </div>
                </div>
                <div className={profilemain.link_data}>
                    <div className={profilemain.link}>
                        <div className={profilemain.linkimg}>
                            <img src="https://cdn-user-icons.flaticon.com/146771/146771542/1718111182031.svg?token=exp=1718112082~hmac=b23725568a1de8e123d1062e06e1d8ae"></img>
                        </div>
                        <div className={profilemain.linktext}>
                            profile/shayjordon
                        </div>
                    </div>
                    <div className={profilemain.joindate}>
                        <div className={profilemain.joinimg}>
                            <img src="https://cdn-user-icons.flaticon.com/146771/146771542/1718114906536.svg?token=exp=1718115807~hmac=ebd7b5460cccf6d3d3633b692e9d684a"></img>
                        </div>
                        <div className={profilemain.joindatetext}>
                            Joined on Feb 2023
                        </div>
                    </div>
                </div>
                <div className={profilemain.followers}>
                    <div className={profilemain.followers_count}>
                        <div className={profilemain.f1}>
                            391k
                        </div>
                        <div className={profilemain.f2}>
                            Followers
                        </div>
                    </div>
                    <div className={profilemain.followersimg}>
                        <div className={profilemain.fi1}>
                            <div className={profilemain.fib1}>
                            </div>
                            <img src="https://pricheska-strizhka.ru/wp-content/uploads/2018/11/how-to-make-hair-grow-out-faster-men.jpg"></img>
                        </div>
                        <div className={profilemain.fi2}>
                            <div className={profilemain.fib2}>
                            </div>
                            <img src="https://seegurd.com/wp-content/uploads/2020/04/woman-happy.jpg"></img>
                        </div>
                        <div className={profilemain.fi3}>
                            <div className={profilemain.fib3}>
                            </div>
                            <img src="https://icdn.lenta.ru/images/2019/12/16/12/20191216122959687/square_1280_dbc3282c3bd07deaf79dc480319f04d5.jpg"></img>
                        </div>
                        <div className={profilemain.fi4}>
                            <div className={profilemain.fib4}>
                            </div>
                            <img src='https://sun1-16.userapi.com/s/v1/ig2/uOqhaDyAakKp5Ktw9li3N7lyBGgwcgQULfHUP0t8KQ-K8WKWYFpASq2vUNvvdC5_75TXhZPMW8NZtARxTPyFzmhj.jpg?size=400x400&quality=95&crop=740,144,1088,1088&ava=1'></img>
                        </div>
                        <div className={profilemain.fi5}>
                            <div className={profilemain.fib5}>
                            </div>
                            <img src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/95/38/cf/9538cf72-c37c-6a5b-93de-7bb708158627/cover.jpg/1200x1200bf-60.jpg"></img>
                        </div>
                    </div>
                    <div className={profilemain.following}>
                        <div className={profilemain.following_count}>
                            3
                        </div>
                        <div className={profilemain.following_text}>
                            Following
                        </div>
                        <div className={profilemain.following1}>
                            <div className={profilemain.fib1}>
                            </div>
                            <img src="https://pricheska-strizhka.ru/wp-content/uploads/2018/11/how-to-make-hair-grow-out-faster-men.jpg"></img>
                        </div>
                        <div className={profilemain.following2}>
                            <div className={profilemain.fib2}>
                            </div>
                            <img src="https://seegurd.com/wp-content/uploads/2020/04/woman-happy.jpg"></img>
                        </div>
                        <div className={profilemain.following3}>
                            <div className={profilemain.fib3}>
                            </div>
                            <img src="https://icdn.lenta.ru/images/2019/12/16/12/20191216122959687/square_1280_dbc3282c3bd07deaf79dc480319f04d5.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profilemain;