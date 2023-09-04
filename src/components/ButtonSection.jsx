import React, { useState, useEffect } from "react"
import { NavLink, useLocation } from 'react-router-dom'
import './ButtonSection.scss'

const ButtonSection = ({ navigation }) => {
  const location = useLocation();

  const [selectedIcon, setSelectedIcon] = useState('miners');

  useEffect(() => {
    setSelectedIcon(location.pathname)
  }, [location.pathname])
  

  const  buttonList = [
    {
      name: 'Miners',
      type: 'miners',
      icon: '/icons/miner.svg',
      path: '/miners'
    },
    {
      name: 'Asteroids',
      type: 'asteroids',
      icon: '/icons/asteroid.svg',
      path: '/asteroids'
    },
    {
      name: 'Planets',
      type: 'planets',
      icon: '/icons/planet.svg',
      path: '/planets'
    },
  ];
  
  return (
    <div className="buttonSection">
      { buttonList.map((element) =>
        <NavLink className="buttonElement" to={element.path} key={element.name} style={element.path === selectedIcon ? {} : {border: "none"}}>
          <div className="buttonIcon">
            <img className={element.path === selectedIcon ? "buttonGreen" : ""} src={element.icon} alt={element.type} />
          </div>
          <p className="buttonText">{element.name}</p>
        </NavLink>
      )}
    </div>
  )
}

export default ButtonSection
