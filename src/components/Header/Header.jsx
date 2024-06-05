import { useState } from "react";
import { Container } from "../../mock/Shared.styled";
import * as S from "./Header.styled"
import { Link } from "react-router-dom";

const Header = ({setCards, cards}) => {
const [isOpen, setOpen] = useState(false);
const handleOpen = () => {
setOpen((prev) => !prev)
};
const onAddCard = () => {
    const newCard ={
        id: Date.now(),
        title: "TEST",
        topic: "Web Design",
        date: "15.05.2024",
        status: "Без статуса",
    }
    const newCardList = [...cards, newCard];
    setCards(newCardList);
};
    return ( 
    <S.Header>
    <Container>
        <S.HeaderBlock>
            <S.HeaderLogo>
                <Link to="/"><img src="images/logo.png" alt="SKYPRO"/></Link>
            </S.HeaderLogo>
            {/* <div className="header__logo _dark">
                <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
            </div> */}
            <S.HeaderNav>
                <S.HeaderButton onClick={onAddCard}>Создать новую задачу</S.HeaderButton>
                <S.HeaderUser onClick={handleOpen}>Ivan Ivanov</S.HeaderUser>
                {isOpen && (
                    <S.HeaderPopUserSet>
                    <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                    <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                    <S.PopUserSetTheme>
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox"/>
                    </S.PopUserSetTheme>
                    <button type="button" className="_hover03">
                        <Link to="/exit">Выйти</Link></button>
                </S.HeaderPopUserSet>
                )}
            </S.HeaderNav>					
        </S.HeaderBlock>
    </Container>			
</S.Header> );
}
 
export default Header;