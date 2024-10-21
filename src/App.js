import './App.css';
import Vogelico from './components/vogel ico/Vogel-ico';
import Navbar from './components/navbar/navbar';
import Navbarprofile from './components/navbar/navbar_profile';
import Content from './components/content/content';
import Other from './components/other/other'
import Profile from './page/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar_2_feed from './components/navbar/navbar_2/feed/navbar_2_feed';
import People from './page/people/People';
import Trending from './page/trending/Trending';


const App = () => {
  return (
    <BrowserRouter>
      <div className='background'>
        <div className='appwraper'>
          <div className='box2'>
            <Vogelico />
            <Routes>
              <Route path="content" element={<Navbar />} />
              <Route path="profile" element={<Navbarprofile />} />
              <Route path='people' element={<Navbar />} />
              <Route path="trending" element={<Navbar />} />
            </Routes>
            {/* <Navbar /> */}
          </div>
          <div className='box3'>
            <Routes>
              <Route path="content" element={<Content />} />
              <Route path="profile" element={<Profile />} />
              <Route path='people' element={<People />} />
              <Route path="trending" element={<Trending />} />
            </Routes>
            {/* <Content /> */}
          </div>
          {/* <div className='box4'>sign in</div> */}
          <div className='box5'>
            <Other />

          </div>
          <div className='line1'>
            {/* line1 */}
          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;