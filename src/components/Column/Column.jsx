import Card from "../Card/Card";
import * as S from "./Column.styled"

const Column = ({title, cardList}) => {
    return (  
    <S.Column>
    <S.ColumnTitle>
        <p>{title}</p>
    </S.ColumnTitle>
    <S.Cards>
    {cardList.map(({id, topic, title, date}) => 
        <Card 
        key={id} 
        topic={topic} 
        title={title} 
        date={date} />
       )}
    </S.Cards>
</S.Column>		 
);
};

export default Column;