import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Banner />
      </div>
    );
  }
}
const Banner = props => {
  return (
    <div className="banner">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = props => {
  return (
    <div className="card">
      <p>
        <Images />
        <Stars />
        <Information />
        <Profile />
      </p>
    </div>
  );
};

const Information = props => {
  return (
    <div className="information">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptate ipsum esse? Reprehenderit culpa, excepturi quaerat saepe
        corrupti similique, magnam, quas odio iure velit dolorem temporibus
        natus fugit soluta vel.
      </p>
    </div>
  );
};

const Images = props => {
  return <div className="img" />;
};

const Stars = props => {
  return (
    <div className="stars">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};

const Star = props => {
  return <p>*</p>;
};

const Profile = props => {
  return (
    <div className="profile">
      <Pic />
      <NameLocation />
    </div>
  );
};
const Pic = props => {
  return <div className="profilePicture" />;
};
const NameLocation = props => {
  return (
    <div className="nameLocation">
      <Name />
      <Location />
    </div>
  );
};
const Name = props => {
  return (
    <div>
      <p>Name</p>
    </div>
  );
};
const Location = props => {
  return (
    <div>
      <p>Somewhere</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
