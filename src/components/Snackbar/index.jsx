import React, { useEffect, useState } from 'react';
import classes from './snackbar.module.css'; // Import the styles

const Snackbar = ({ message, show, duration, onClose,type }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration || 3000); // Default duration of 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  let backgroundColor = "#333"
  if(type == "success") backgroundColor = "green"
  else if(type == "error") backgroundColor = "red"


  return (
    <div 
        style={{
            backgroundColor:backgroundColor
        }}
        className={`${classes.snackbar} ${show ? classes.show : ''}`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
