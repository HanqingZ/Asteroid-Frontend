import React from "react"
import "./Popup.scss"

const Popup = ({setShowPopup, children}) => {
  return (
    <div className="popup">
      <div className="popupContainer">
        <div className="closeButton" onClick={() => setShowPopup(false)}>
          <img src="/icons/close.svg" alt="closeButton" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Popup
