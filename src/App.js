import { useEffect, useState} from 'react';
import './App.css';
import Axios from "axios";


  
function App() {
  const [cities, setCities] = useState([]);
  useEffect(()=> {
    Axios.get("https://all-the-weather.herokuapp.com/cities")
    .then((res)=> {
    const data = res.data.items
    console.log(data)
    setCities(data);
    });
}, []);;
    return (
      <div className="App">
        {cities.map((place)=>{
          return(
          <div className='Cards'>
            <div>{place.name}</div>
            <div>{place.countryCode}</div>
            <div>{place.regionCode}</div>
          </div>  
    )
         } )}
        
      </div>
    );
 }


export default App;
