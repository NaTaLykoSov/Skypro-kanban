import Card from "../Card/Card";

const Column = ({title}) => {
    return (  <div className="main__column column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">

    <Card categori="Web Design" title="Название задачи" data="30.10.23" />

    <Card categori="Reserch" title="Название задачи" data="30.10.23" />
  
    <Card categori="Copiwriting" title="Название задачи" data="30.10.23" />    
   
    </div>
</div>		 );
}
 
export default Column;