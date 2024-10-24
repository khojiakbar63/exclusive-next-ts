import React from "react";
import "./style.scss";
import { MyButton } from "../../ui/button";

export const EditProfileForm = () => {
  return (
    <div className="edit_profile">
      <h3 className="edit_profile--title">Edit Your Profile</h3>

      <form action="#">
        <div className="edit_profile--wrapper">
          <div className="edit_profile--wrapper--item">
            <label className="edit_profile--wrapper--label" htmlFor="name">
              First Name
            </label>
            <input
              placeholder="MD"
              className="edit_profile--wrapper--input"
              type="text"
            />
          </div>

          <div className="edit_profile--wrapper--item">
            <label className="edit_profile--wrapper--label" htmlFor="name">
              Last Name
            </label>
            <input
              placeholder="Rimel"
              className="edit_profile--wrapper--input"
              type="text"
            />
          </div>
        </div>

        <div className="edit_profile--wrapper">
          <div className="edit_profile--wrapper--item">
            <label className="edit_profile--wrapper--label" htmlFor="name">
              Email
            </label>
            <input
              placeholder="rimel1111@gmail.com"
              className="edit_profile--wrapper--input"
              type="email"
            />
          </div>

          <div className="edit_profile--wrapper--item">
            <label className="edit_profile--wrapper--label" htmlFor="name">
              Address
            </label>
            <input
              placeholder="Kingston, 5236, United State"
              className="edit_profile--wrapper--input"
              type="text"
            />
          </div>
        </div>

        <div className="edit_profile--password">
          <div className="edit_profile--password--item">
            <label className="edit_profile--password--label" htmlFor="name">
              Password Changes
            </label>
            <input
              placeholder="Current Passwod"
              className="edit_profile--wrapper--input !my-4 !w-full"
              type="text"
            />
            <input
              placeholder="New Passwod"
              className="edit_profile--wrapper--input  !mb-4 !w-full"
              type="text"
            />
            <input
              placeholder="Confirm New Passwod"
              className="edit_profile--wrapper--input w-full"
              type="text"
            />
          </div>
        </div>

        <div className="edit_profile--action">
          <div></div>

          <div className="edit_profile--action--btns">
            <button className="edit_profile--action--btns--cancel">
              Cancel
            </button>
            <MyButton>Save Changes</MyButton>
          </div>
        </div>
      </form>
    </div>
  );
};
