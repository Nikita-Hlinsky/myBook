import './App.css';
import CardList from "./components/organisms/CardList/index.jsx"
import { v4 as uuidv4 } from 'uuid';


function App() {

  const listOfChars = [
  {
    id: uuidv4(), 
    fullName: 'Walter White',
    birthDate: '09-07-1958',
    imgUrl: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    liveStatus: 'Deceased',
  },
  {
    id: uuidv4(),
    fullName: 'Jesse Pinkman',
    birthDate: '09-24-1984',
    imgUrl: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
    liveStatus: 'Alive',
  }
  ]

  return (
    <div className="App">
      {/* <h1>123</h1> */}
      <CardList listOfChars={listOfChars} />
    </div>
  );
}

export default App;
