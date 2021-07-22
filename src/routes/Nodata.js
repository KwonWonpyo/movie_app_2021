import React from 'react';
import './Nodata.css';

function Nodata() {
  return (
    <div className="nodata__container">
        <span className="error">No data found</span>
        <span className="error">Go back to filter and change option</span>
    </div>
  );
}

export default Nodata;