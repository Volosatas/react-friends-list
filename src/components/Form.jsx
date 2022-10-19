import React, { Component } from "react";
import "./form-styles.css";

export class Form extends Component {
  render() {
    return (
      <div className="hero">
        <div className="form__container">
          <form className="form">
            <div className="form__field">
              <label className="form__field--label" htmlFor="name">
                Name:
              </label>
              <input
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
                className="form__field--input"
                type="text"
                placeholder="Quahog"
                required
              />
            </div>
          </form>
          <button className="form__btn" type="button">
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
  }
}
