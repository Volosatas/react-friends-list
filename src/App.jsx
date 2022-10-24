import "./App.css";
import React, { Component } from "react";
// import { FriendsList } from "./components/FriendsList";
// import { Form } from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
        { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
        { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
      ],
    };
    this.newFriend = [{ firstName: "", lastName: "", age: "", city: "" }];
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  form = () => {
    return (
      <div className="hero">
        <div className="form__container">
          <form className="form">
            <div className="form__field">
              <label className="form__field--label" htmlFor="name">
                Name:
              </label>
              <input
                value={this.newFriend.firstName}
                onChange={this.handleFirstName}
                className="form__field--input"
                type="text"
                placeholder="Peter"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__field--label" htmlFor="surname">
                Surname:
              </label>
              <input
                value={this.newFriend.lastName}
                onChange={this.handleLastName}
                className="form__field--input"
                type="text"
                placeholder="Griffin"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__field--label" htmlFor="age">
                Age:
              </label>
              <input
                value={this.newFriend.age}
                onChange={this.handleAge}
                className="form__field--input"
                type="number"
                placeholder="43"
                required
                min={10}
              />
            </div>
            <div className="form__field">
              <label className="form__field--label" htmlFor="from">
                City:
              </label>
              <input
                value={this.city}
                onChange={this.handleCity}
                className="form__field--input"
                type="text"
                placeholder="Quahog"
                required
              />
            </div>
          </form>
          <button
            onClick={this.handleAddFriend}
            className="form__btn"
            type="button"
          >
            Add Friend
          </button>
        </div>
        <img
          src="https://cdn11.bigcommerce.com/s-ekl27muf8u/images/stencil/1280x1280/products/59/918/Best_Friends_Watercolor_painting__31083.1647653128.jpg?c=2"
          alt="friends"
          className="form__img"
        />
      </div>
    );
  };

  handleFirstName = (e) => {
    return this.setState((this.newFriend.firstName = e.target.value));
  };
  handleLastName = (e) => {
    this.setState((this.newFriend.lastName = e.target.value));
  };
  handleAge = (e) => {
    this.setState((this.newFriend.age = e.target.value));
  };
  handleCity = (e) => {
    this.setState((this.newFriend.city = e.target.value));
  };

  handleAddFriend = () => {
    const friendToAdd = {
      firstName: this.newFriend.firstName,
      lastName: this.newFriend.lastName,
      age: this.newFriend.age,
      city: this.newFriend.city,
    };
    this.setState((prevState) => ({
      friends: [...prevState.friends, friendToAdd],
    }));

    console.log(this.state);
  };

  friendsList = () => {
    const allFriends = this.state.friends.map((friend) => {
      return (
        <div key={friend.firstName + friend.lastName} className="card">
          <div className="card__item">
            {friend.firstName} {friend.lastName}
          </div>
          <div className="card__item">Age: {friend.age}</div>
          <div className="card__item">{friend.city}</div>
          <button className="card__button">Delete friend</button>
        </div>
      );
    });
    return allFriends;
  };

  handleFriendsListDelete = () => {};

  render() {
    return (
      <div className="app">
        <h3 className="header">Welcome to your Friend List APP</h3>
        {this.form()}
        {this.friendsList()}
      </div>
    );
  }
}

export default App;
