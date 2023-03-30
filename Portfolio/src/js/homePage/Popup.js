import React, { useState } from "react";

function PopupButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Zeige Popup</button>
      {showPopup && (
        <div className="popup">
          <p>Das ist der Popup-Inhalt.</p>
          <button onClick={() => setShowPopup(false)}>Schließen</button>
        </div>
      )}
    </div>
  );
}

export default PopupButton;
