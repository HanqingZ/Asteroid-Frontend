import React from "react"
import { NavLink } from 'react-router-dom'
import { getAsteroid } from "../server/api/asteroid"
import { getMiner } from "../server/api/miner"
import { getPlanet } from "../server/api/planet"
import './ButtonSection.scss'

const ButtonSection = () => {

  const typeOfSelected = [
    {
      name: 'Miners',
      type: 'miners',
      icon: <img src='/icons/miner.svg' alt="" />,
      onClick: getMiner,
      path: '/miners'
    },
    {
      name: 'Asteroids',
      type: 'asteroids',
      icon: <img src='/icons/asteroid.svg' alt="" />,
      onClick: getAsteroid,
      path: '/asteroids'
    },
    {
      name: 'Planets',
      type: 'planets',
      icon: <img src='/icons/planet.svg' alt="" />,
      onClick: getPlanet,
      path: '/planets'
    },
  ];
  
  return (
    <div className="buttonSection">
      {typeOfSelected.map((element) =>
        <NavLink className="buttonElement" to={element.path}>
          <div className="buttonIcon">{element.icon}</div>
          <p class="buttonText">{element.name}</p>
        </NavLink>
      )}
    </div>
  )
}

export default ButtonSection
