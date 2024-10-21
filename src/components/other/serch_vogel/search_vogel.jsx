import searchvogel from './search_vogel.module.css'

const Search_vogel = () => {
    return (
        <div className={searchvogel.searchbox}>
            <div className={searchvogel.lupa_kartinka}>
                <img src = 'https://cdn-user-icons.flaticon.com/146771/146771542/1717055239739.svg?token=exp=1717056140~hmac=3fa56597e34913606eb92c22311e68e6'></img>
            </div>
            <div className={searchvogel.text}>
                Search Vogel
            </div>
        </div>
    );
}

export default Search_vogel;