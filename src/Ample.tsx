import React from 'react';

const BASE_URL = import.meta.env.BASE_URL;
const AmpleImage = `${BASE_URL}Ample.png`;

const Ample: React.FC = () => {
  return (
    <div style={{
      width: "100vw",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      <img
        src={AmpleImage}
        alt="Ample"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain"
        }}
      />
    </div>
  );
};

export default Ample;