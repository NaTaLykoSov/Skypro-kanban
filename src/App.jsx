import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import { cardList } from './components/data'


function App() {
  const [cards, setCards] = useState(cardList);
  return (
    <div>
      <div className="wrapper">
		<PopExit />
		<PopNewCard />
		<PopBrowse />
		<Header setCards={setCards} cards={cards} />
		<Main cardList={cards}/>
		
    </div>

    <script src="js/script.js"></script>
      </div>
  )
}

export default App;
