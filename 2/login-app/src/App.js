import "./style/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Signup from './components/Signup';
import {useState} from 'react'

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return(
        <div className="App">
           <header className='holder pt-4 mt-5' >
              <div className=' d-flex text-center justify-content-center'>
                <div className={'text-light login  py-2 text-center my-2  '+ (isToggled ? "in-active":"active")} onClick={onToggle}>ورود</div>
                <div className={' text-light signup py-2 text-center my-2 '+ (isToggled ? "active":"in-active")}  onClick={onToggle}>ثبت نام</div>
              </div>
              {isToggled? <Signup/>:<Login/> } 
            </header> 
            
          </div>
  );
}

export default App;
