import { useEffect, useState } from 'react';
import './App.css';
import icon1 from "./assets/email.svg"
import icon2 from "./assets/location.svg"
import icon3 from "./assets/phone.svg"

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    handleClick()
  }, [])
  const handleClick = () => {
    fetch("https://randomuser.me/api/")
      .then((response)=> response.json())
      .then((data)=>{
        setData(data.results)
        data.map((person)=>{
          return(
            
          )
        })
      })
    }

  return (
    <div className="Container-App">
      <div className='card'>
        <div className='profile'>
          <img className='img' src={} alt="" />
          <h3 className='name'></h3>
        </div>
        <div className='email'>
          <img className='icon' src={icon1} alt="" />
          <p className='content'></p>
        </div>
        <div className='phone'>
          <img className='icon' src={icon3} alt="" />
          <p className='content'></p>
        </div>
        <div className='location'>
          <img className='icon' src={icon2} alt="" />
          <p className='content'></p>
        </div>
        <div>
          <p className='age'></p>
          <p className='date'></p>
        </div>
      </div>
        <div className="card-btn">
        <button className="btn" onClick={handleClick}>Random User</button>
        </div>
    </div>
  );
}

export default App;
