import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoadingSpinner (props) {
  return (
    <div
      style={{
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      }}
    >
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
