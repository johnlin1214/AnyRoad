import React, { useState } from "react";
import Color from './components/Color';
import ShuffleButton from "./components/ShuffleButton";
import './App.css';

const App = () => {
  const [colors, setColors] = useState([ {colorName: 'indigo', id: 1}, {colorName: 'blue', id: 2}, {colorName: 'green', id: 3}, {colorName: 'yellow', id: 4}, {colorName: 'orange', id: 5}, {colorName: 'red', id: 6}, {colorName: 'violet', id: 7}]);

  const shuffleColors = () => {
    const shuffledColors = [...colors].sort( () => .5 - Math.random() );
    setColors(shuffledColors);
  }

  return (
    <div className="flex-container column">
      {colors.map(color => 
        <Color key={color.id} color={color.colorName} />
      )}
      
      <ShuffleButton shuffleColors={shuffleColors} />
    </div>
  );
};

export default App;
