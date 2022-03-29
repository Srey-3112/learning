import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';
import { Movies } from './components/Movies';
import { MenuBar} from './components/MenuBar';
import { MoviesDetail } from './components/MoviesDetail';
import { SampleForm } from './Form/SampleForm';
import { EmployeeDetail } from './Form/EmployeeDetail';

function App() {
 
  //   var contact=[{
  //     name:"deep",
  //     age:24,
  //     contact:1354689,
  //     gender:"Male"
  //   },
  //   {
  //     name:"manan",
  //     age:21,
  //     contact:1354333,
  //     gender:"Male"
  //   },
  //   {
  //     name:"fenil",
  //     age:20,
  //     contact:1354555,
  //     gender:"Male"
  //   },
  //   {
  //     name:"maharshi",
  //     age:29,
  //     contact:45654555,
  //     gender:"Male"
  //   },
  //   {
  //     name:"tirth",
  //     age:35,
  //     contact:8554555,
  //     gender:"Male"
  //   },
  //   {
  //     name:"arya",
  //     age:16,
  //     contact:9654555,
  //     gender:"Male"
  //   }
  // ]
  // var company='Royal Technosoft';
  return (
    <div className="App">
      
      {/* <MenuBar/> */}
      <SampleForm/>
      <Routes>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/moviedetail/:id' element={<MoviesDetail/>}></Route>
        <Route path='/employeeDetail/:id' element={<EmployeeDetail/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
