import Card from "../card/Card";
import "./cads.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div>
      <div className="todo">
        <div className="cards-container">
          {characters.map((character) => {
            if (!character.id) {
              return null; // Si el personaje no tiene un ID, no lo muestres
            }
            return (
              <Card
                arro={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                onClose={() => onClose(character.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
