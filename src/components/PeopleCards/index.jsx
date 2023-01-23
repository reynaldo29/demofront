import "./card.css";

const Card = ({ people }) => {
  return (

    <div className="cards">
         {people.map(({name}) => 
      <div className="card">
          {name}
        </div>
        )}
    </div>
  );
};

export default Card;
