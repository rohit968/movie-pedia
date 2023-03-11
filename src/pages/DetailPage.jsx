import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const id = useParams();
  return (
    <div>
      <h2>Parameret : {id.id}</h2>
    </div>
  );
};

export default DetailPage;
