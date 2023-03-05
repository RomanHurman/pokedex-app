import React, { useState } from "react";

const Description = ({
  id,
  name,
  type,
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  
  const [isOpen, setIsOpen] = useState(true);
  if(!isOpen){
    return null
  }
  return (
    <div className="desc">
        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          onClick={() => setIsOpen(false)}
        />
        <h3>{name} #00{id}</h3>
        <table>
          <tr>
        <td>Type</td>
        <td>{type}</td>
          </tr>
          <tr>
        <td>{pokstat2}</td>
        <td>{posbs2}</td>
          </tr>
          <tr>
        <td>{pokstat3}</td>
        <td>{posbs3}</td>
          </tr>
          <tr>
        <td>{pokstat1}</td>
        <td>{posbs1}</td>
          </tr>
          <tr>
        <td>{pokstat4}</td>
        <td>{posbs4}</td>
          </tr>
          <tr>
        <td>{pokstat5}</td>
        <td>{posbs5}</td>
          </tr>
          <tr>
        <td>{pokstat6}</td>
        <td>{posbs6}</td>
          </tr>
          <tr>
        <td>Height</td>
        <td>{heightpok * 10} cm.</td>
          </tr>
          <tr>
        <td>Weight</td>
        <td>{weightpok * 0.1} kg</td>
          </tr>
      </table>
    </div>
  );
};

export default Description;