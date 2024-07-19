import React from "react";

const Digito = ({ time }) => {
  return (
    <div
      className="d-flex col-1 card mx-auto justify-content-center"
      style={{
        width: "10%",
        aspectRatio: "3/4",
        backgroundImage:
          "url(https://www.hdwallpapers.in/thumbs/2020/plaid_orange_hd_abstract-t2.jpg)",
      }}
    >
      <h1 className=" text-center fw-bold">
        {time}
      </h1>
    </div>
  );
};

export default Digito;
