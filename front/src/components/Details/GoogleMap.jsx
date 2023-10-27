import React from 'react';

const GoogleMap = ({ googleMapsUrl }) => {
  return (
    <div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={googleMapsUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
