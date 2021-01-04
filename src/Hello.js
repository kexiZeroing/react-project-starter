import React from "react";

export const Hello = ({name}) => {
  return (
    <>
      <p>Hi, {name}</p>
      <input placeholder="not lose focus" className="border border-gray-400 border-solid"/>
    </>
  );
}
