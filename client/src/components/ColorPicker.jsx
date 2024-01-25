import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {

  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color} // the snap.color is the color we alrdy have wch could be change
        disableAlpha // This is going to be the opacity 
        onChange={(color) => state.color = color.hex}

         // We can add Preset colors which then to allow us add colors in the array
      presetColors={[
        "#FFF",
        "#000",
        "#00FFFF",
        "#0000FF",
        "#DF00FF",
        "#ccc", 
        "#EFBD4E",
        "#FF0F4F",
        "#80C670",
        "#726DE8",
        "#353934",
        "#2CCCE4",
        "#ff8a65",
        "#7098DA",
        "#C19277",
        "#FF96AD",
        "#512314",
        "#5F123D",
      ]}
      />
    </div>
  )
}

export default ColorPicker