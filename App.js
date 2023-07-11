
import React from 'react';
import ReactDOM from 'react-dom';
const heading1 = React.createElement("h1", { id: "heading1" }, "Welcome to ReactJS-1");
const heading2 = React.createElement("h2", { id: "heading2" }, "Welcome to ReactJS-2");
const cd = React.createElement("div", {}, [heading1, heading2]); /*Group multiple tags*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(cd);


