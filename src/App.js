import React, {useState} from 'react'

function App() {
  const [radius, setRadius] = useState(0);
  const myStyle = {
    borderRadius: radius,
    background: "green",
    padding: 20,
    width: 200,
    height: 200
  }
  const handleChange = e => {
    setRadius(parseInt(e.target.value) || 0);
  }

  return (
    <div className="App">
      <h4>Enter border radius:</h4>
      <input value={radius} onChange={handleChange}/>
      <br />
      <br />
      <div style={myStyle}></div>
    </div>
  );
}

export default App;
