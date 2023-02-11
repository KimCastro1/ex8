import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import MovieDetailComponent from './components/movie/MovieDetailComponent';
import ListMovieComponent from './components/list/ListMovieComponent';
import HeaderComponent from './components/etc/HeaderComponent';
import MainComponent from './components/main/MainComponent';
import FooterComponent from './components/etc/FooterComponent';
import NotFoundComponent from './components/etc/NotFoundComponent';
import ReservationComponent from './components/reservation/ReservationComponent'
import CommingSoonComponent from './components/list/CommingSoonComponent';
import LoginComponent from './components/login/LoginComponent';
import JoinMemberComponent from './components/login/JoinMemberComponent';

function App() {
  return (
    <div> 
      <BrowserRouter>             
        <HeaderComponent/>
          <div>
            <Routes>
              <Route path = "/" element = {<MainComponent/>}/>
              <Route path="/movie/:midx" element={<MovieDetailComponent/>}></Route>
              <Route path="/reservation" element={<ReservationComponent/>}></Route>
              <Route path="/reservation/:midx" element={<ReservationComponent/>}></Route>
              <Route path = "/list" element = {<ListMovieComponent/>}/>
              <Route path="/joinmember" element={<JoinMemberComponent/>}></Route>
              <Route path = "/login" element = {<LoginComponent/>}/>
              <Route path = "/commingsoon" element = {<CommingSoonComponent/>}/>
              <Route path = "/*" element={<NotFoundComponent/>}/>
            </Routes>
          </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}


export default App;
