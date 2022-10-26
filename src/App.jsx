import "./App.css";
import React, { Component } from "react";
// import { FriendsList } from "./components/FriendsList";
// import { Form } from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          id: 0,
          firstName: "John",
          lastName: "Smith",
          age: 32,
          city: "Kaunas",
        },
        {
          id: 1,
          firstName: "Maria",
          lastName: "Hudghes",
          age: 28,
          city: "Siauliai",
        },
        {
          id: 2,
          firstName: "Thomas",
          lastName: "Muiller",
          age: 33,
          city: "Vilnius",
        },
      ],
      formState: { firstName: "", lastName: "", age: "", city: "" },
    };
    this.handleFormStateChange = this.handleFormStateChange.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleFriendsListDelete = this.handleFriendDelete.bind(this);
  }

  handleFormStateChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;

    this.setState({
      ...this.state,
      formState: { ...this.state.formState, [inputId]: inputValue },
    });
  };

  handleAddFriend = (e) => {
    e.preventDefault();

    const { firstName, lastName, age, city } = this.state.formState;

    const friendToAdd = {
      id: String(this.state.friends.length),
      firstName,
      lastName,
      age,
      city,
    };
    this.setState({
      ...this.state,
      friends: [...this.state.friends, friendToAdd],
      formState: { firstName: "", lastName: "", age: "", city: "" },
    });
  };

  handleFriendDelete = (cardId) => {
    const filteredFriends = this.state.friends.filter(
      (friend) => friend.id !== cardId
    );
    this.setState({ ...this.state, friends: filteredFriends });
  };

  form = () => {
    return (
      <div className="hero">
        <div className="form__container">
          <form className="form">
            <div className="form__field">
              <label className="form__field--label" htmlFor="firstName">
                Name:
              </label>
              <input
                id="firstName"
                value={this.state.formState.firstName}
                onChange={this.handleFormStateChange}
                className="form__field--input"
                type="text"
                placeholder="Peter"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__field--label" htmlFor="lastName">
                Surname:
              </label>
              <input
                id="lastName"
                value={this.state.formState.lastName}
                onChange={this.handleFormStateChange}
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
                id="age"
                value={this.state.formState.age}
                onChange={this.handleFormStateChange}
                className="form__field--input"
                type="number"
                placeholder="43"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__field--label" htmlFor="city">
                City:
              </label>
              <input
                id="city"
                value={this.state.formState.city}
                onChange={this.handleFormStateChange}
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

  friendsList = () => {
    const allFriends = this.state.friends.map((friend) => {
      return (
        <div key={friend.id} className="card">
          <div className="card__item">
            {friend.firstName} {friend.lastName}
          </div>
          <div className="card__item">Age: {friend.age}</div>
          <div className="card__item">{friend.city}</div>
          <button
            onClick={() => this.handleFriendDelete(friend.id)}
            className="card__button"
            type="submit"
          >
            Delete friend
          </button>
        </div>
      );
    });
    return allFriends;
  };

  render() {
    return (
      <div className="app">
        <h3 className="header">Welcome to your Friend List APP</h3>
        {this.form()}
        {this.state.friends.length ? (
          this.friendsList()
        ) : (
          <h1>Go and make some friends, NOOB</h1>
        )}
      </div>
    );
  }
}

export default App;
