import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import HeroCard from "./components/Heros"

const App = () => {




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  const [data, setData] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
      const fetchData = () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
       

        setData(response.data.results)

        console.log(response.data);
          })

      .catch(
        error => console.log(error)
      )
      }
      fetchData();
  }, [] 
  )


  function Hero(obj) {
    return <HeroCard 
        name={obj.name}
        mass={obj.mass}
        height={obj.height}
        gender={obj.gender}
        year={obj.birth_year}
        key={obj.name} />
  }



  return (<div>

      {data.map(Hero)}

  </div>
  
  )
  
  }


export default App;
