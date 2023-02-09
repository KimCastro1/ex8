import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; 
import ListMovieComponent from './components/ListMovieComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NotFoundComponent from './components/NotFoundComponent';

function App() {
  return (
    <div> 
      <BrowserRouter>             
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path = "/" element = {<ListMovieComponent/>}/>
              <Route path = "/list" element = {<ListMovieComponent/>}/>
              <Route path="/*" element={<NotFoundComponent/>}/>
            </Routes>
          </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}


export default App;
