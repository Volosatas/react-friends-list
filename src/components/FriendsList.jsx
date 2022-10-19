import React, { Component } from "react";
import "./friendsList.css";

const friends = [
  { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

export class FriendsList extends Component {
  constructor() {
    super();
    this.friends = friends;
    this.state = {};
  }

  getFriends() {
    const allFriends = this.friends.map((friend) => {
      return (
        <div key={friend.firstName + friend.lastName} className="card">
          <div className="card__item">
            Name: {friend.firstName} {friend.lastName}
          </div>
          <div className="card__item">Age: {friend.age}</div>
          <div className="card__item">City: {friend.city}</div>
          <button>Delete friend</button>
        </div>
      );
    });
    return allFriends;
  }

  render() {
    return this.getFriends();
  }
}
