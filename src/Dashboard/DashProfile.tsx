import React from "react";
import Style from "../style/dashprofile.module.scss";

const DashProfile = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Your Profile</h2>
      </div>
      <div className={Style.formbox}>
        <form>
          <div className={Style.content}>
            <div className={Style.box}>
              <div className={Style.detail}>
                <label>First Name</label>
                <input type="text" placeholder="Name" />
                <span></span>
              </div>
              <div className={Style.detail}>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
                <span></span>
              </div>
            </div>
            <div className={Style.box}>
              <div className={Style.detail}>
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <span></span>
              </div>
              <div className={Style.detail}>
                <label>Phone</label>
                <input type="number" placeholder="Phone" />
                <span></span>
              </div>
            </div>
            <div className={Style.box}>
              <div className={Style.detail}>
                <label>Address</label>
                <input type="text" placeholder="Address" />
                <span></span>
              </div>
              <div className={Style.detail}>
                <label>Website</label>
                <input type="text" placeholder="website" />
                <span></span>
              </div>
            </div>
            <div className={Style.Notes}>
              <label>Notes</label>
              <textarea placeholder="About Me"></textarea>
            </div>
            <div className={Style.changeAvtar}>
              <label>Change Avtar</label>
              <div className={Style.file}>
                <input type="file" />
              </div>
            </div>
          </div>
          <div className={Style.mainbox}>
            <div className={Style.socialTitle}>
              <h2>Your Socials</h2>
            </div>
            <div className={Style.SocialSite}>
              <div className={Style.socialSiteData}>
                <label>Facebook</label>
                <input type="text" placeholder="https://www.facebook.com/" />
                <span></span>
              </div>
              <div className={Style.socialSiteData}>
                <label>Twitter</label>
                <input type="text" placeholder="https://twitter.com/" />
                <span></span>
              </div>
              <div className={Style.socialSiteData}>
                <label>Vkontakte</label>
                <input type="text" placeholder="https://vk.com/" />
                <span></span>
              </div>
              <div className={Style.socialSiteData}>
                <label>Instagram</label>
                <input type="text" placeholder="https://instagram.com/" />
                <span></span>
              </div>
              <button>Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashProfile;
