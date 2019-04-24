import React, { Component } from "react";

function Button(props) {
  var onclik = () => props.onclik;
    return (
      <div>
        <button OnClick={onclik()} className={"btn btn-danger btn-sm"}>GO!</button>
      </div>
    );
}

export default Button;
