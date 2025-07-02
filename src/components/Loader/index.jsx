import React from 'react';
import classes from  './loader.module.css'; // Import the styles

const Loader = ({height}) => {
  return (
    <div className={classes.loader} style={{height:height}}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
