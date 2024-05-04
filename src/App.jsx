import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'


function App() {
  
  return (
    <div>
      <div className="wrapper">
		<PopExit />
		<PopNewCard />
		<PopBrowse />
		<Header />
		<Main />
		
    </div>

    <script src="js/script.js"></script>
      </div>
  )
}

export default App;
