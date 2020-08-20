import React from "react";
import classNames from "classnames";
import "./Profile.scss";
import { AuthType } from "@src/types/auth";

function Profile(props: { type?: string; userData?: AuthType }) {
  return (
    <div
      className={classNames(
        "profile",
        props.type === "small" ? "small" : "normal"
      )}
    >
      <i className="fas fa-user-alt"></i>
    </div>
  );
}

export default Profile;
