import React from "react";
import Style from "../style/dashpassword.module.scss";

const DashPassword = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Change Password</h2>
      </div>
      <div className={Style.formbox}>
        <form>
          <div className={Style.box}>
            <label>Current Password</label>
            <div className={Style.inputBox}>
              <input type="password" />
              <span></span>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
          <div className={Style.box}>
            <label>New Password</label>
            <div className={Style.inputBox}>
              <input type="password" />
              <span></span>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
          <div className={Style.box}>
            <label>Confirm Password</label>
            <div className={Style.inputBox}>
              <input type="password" />
              <span></span>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
          <button>Save Changes </button>
        </form>
      </div>
    </div>
  );
};

export default DashPassword;
