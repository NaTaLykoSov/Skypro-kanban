import { useState } from "react";
import "../App.css";
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
/* import PopBrowse from "../components/Popups/PopBrowse/PopBrowse"
import PopExit from "../components/Popups/PopExit/PopExit"
import PopNewCard from "../components/Popups/PopNewCard/PopNewCard" */
import { cardList } from "../mock/data"
import { GlobalStyle, Wrapper } from "../mock/Global.styled"
import { Outlet } from "react-router-dom";


const MainPage = () => {
    const [cards, setCards] = useState(cardList);
    return  (
    <>
    <GlobalStyle />
      <Wrapper>
		{/* <PopExit />
		<PopNewCard />
		<PopBrowse /> */}
    <Outlet />
		<Header setCards={setCards} cards={cards} />
   		<Main cardList={cards}/>
      </Wrapper>
    </>
    );
};

export default MainPage;