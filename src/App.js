import React, {useState, useEffect} from 'react';
import './App.css';
import Target from './Target';


function App() {

  const [hitList, setHitList] = useState([])
  const [color, setColor] = useState({})

  const fetchHitList = () => {
    fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => response.json())
      .then(response => setHitList(response))
      .catch()
    
    fetch('http://www.colr.org/json/color/random')
      .then(response => response.json())
      .then(response => setColor(response.colors[0].hex))
      .catch()
  }

  useEffect(() => {
    fetchHitList();  
  }, [])

  const targetList = hitList.map((target, index) => {
    return(
      <Target key={index} name={target.name} image={target.image} />
    )
  })


  const test = 'testing'
  console.log(hitList[0])

  console.log(color)
  return (
    <div style={{backgroundColor: '#' + color}} className="App">
      {targetList}
    </div>
  );
}

export default App;
