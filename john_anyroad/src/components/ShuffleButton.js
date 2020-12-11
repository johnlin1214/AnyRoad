import React from "react";

const ShuffleButton = ({shuffleColors}) => {
  return (
    <>
      <button className="button shuffle-btn" onClick={shuffleColors}>Shuffle</button>
    </>
  );
};

export default ShuffleButton;