import { useState } from 'react'
import './Body.css'

function Body(props) {
  console.log(props.characters);
  return (
    <div className='Body'>
      <div className='grid'>
        {
          props.characters.map((character) => (
            <div className='card'>
              {character.image ? (
                <img src={character.image} alt={character.name} />
              ) : (
                <div className='noImage'>Imagem indisponivel</div>
              )

              }

              <h2>{character.name}</h2>
              <p>
                <strong>Casa:</strong>
                {character.house || "Desconhecida"}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Body