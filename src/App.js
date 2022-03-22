import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';

function App() {
  var contact=[{
    name:"deep",
    age:24,
    contact:1354689
  },
  {
    name:"manan",
    age:26,
    contact:1354333
  },
  {
    name:"fenil",
    age:21,
    contact:1354555
  }
]
var company='royal';
  return (
    <div className="App">
      <Home contactPersons={contact} company={company}/>
      
      
    </div>
  );
}

export default App;
