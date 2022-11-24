import React from "react";

export const DetailsCharacter = ({ object }) => {
  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      <button type="button" class="btn btn-warning">Add to Database</button>
      <p>Gender: <b>{object?.gender}</b></p>
      <p>Age: <b>{object?.age}</b></p>
      <p>Race: <b>{object?.race}</b></p>
      <p>Height: <b>{object?.height}</b></p>
      <p>Origin: <b>{object?.origin}</b></p>
      
    </>
  );
};
