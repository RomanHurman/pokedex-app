import React, { useState } from "react";
import Description from "./Description";

const PokemonThumbnails = ({
  id,
  name,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {

  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="pokeinfo">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="hello"
          onClick={() => setShow(!show)}>
        </img>
        {show === true ? (
          <Description
            id={id}
            name={name}
            type={type}
            weightpok={weight}
            heightpok={height}
            pokstat1={stat1}
            pokstat2={stat2}
            pokstat3={stat3}
            pokstat4={stat4}
            pokstat5={stat5}
            pokstat6={stat6}
            posbs1={bs1}
            posbs2={bs2}
            posbs3={bs3}
            posbs4={bs4}
            posbs5={bs5}
            posbs6={bs6}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>{type}</small>
      </div>
    </div>
  );
};
  
export default PokemonThumbnails;