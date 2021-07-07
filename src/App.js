import './App.css';
import CardList from "./components/organisms/CardList"

import WW from "./img/walterWhite.png"

function App() {

  const listOfChars = [{
    "imgUrl": {WW},
    "fullName": "Walter White",
    "liveStasus": "Live",
    "birthDate": "12.11.2001"
  }]
  // const fullName = "Walter White"
  // const liveStasus = "Live"
  // const birthDate = "12.11.2001"

  return (
    <div className="App">
      <h1>123</h1>
      <CardList listOfChars={listOfChars} />
    </div>
  );
}

export default App;
