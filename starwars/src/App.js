import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
<<<<<<< HEAD
import HeroCard from "./components/Heros"
=======


>>>>>>> 5651c85684073c4389e2a1f63153446932c9e6a0

const App = () => {




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


<<<<<<< HEAD
  const [data, setData] = useState([]);
=======
  const [] = useState([]);
>>>>>>> 5651c85684073c4389e2a1f63153446932c9e6a0


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
<<<<<<< HEAD
      const fetchData = () => {
=======

>>>>>>> 5651c85684073c4389e2a1f63153446932c9e6a0
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
       

<<<<<<< HEAD
        setData(response.data.results)

        console.log(response.data);
=======
        console.log(response.data.results);
>>>>>>> 5651c85684073c4389e2a1f63153446932c9e6a0
          })

      .catch(
        error => console.log(error)
      )
<<<<<<< HEAD
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
=======
  }, [] )



  return (<div></div>)
>>>>>>> 5651c85684073c4389e2a1f63153446932c9e6a0
  
  }


export default App;
