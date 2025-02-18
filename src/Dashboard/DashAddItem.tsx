import React, { useState } from "react";
import Style from "../style/dashAdditem.module.scss";

const DashAddItem = () => {
  const [latitude, setLatitude] = useState(28.6139);
  const [longitude, setLongitude] = useState(77.209);
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Add Listing</h2>
      </div>
      <div className={Style.mainbox}>
        <form>
          <div className={Style.listingItemForm}>
            <div className={Style.box}>
              <label>Listing Title</label>
              <input type="text" placeholder="Name of your bussiness" />
              <span></span>
            </div>
            <div className={Style.divide}>
              <div className={Style.detail}>
                <label>Type / Category</label>
                <select>
                  <option>All Category</option>
                  <option>Shops</option>
                  <option>Hotels</option>
                  <option>Restuarent</option>
                  <option>Fitness</option>
                  <option>Events</option>
                </select>
                <span></span>
              </div>
              <div className={Style.keyword}>
                <label>Keywords</label>
                <input
                  type="text"
                  placeholder="Maximum 15 , should be separated by commas"
                />
                <span></span>
              </div>
            </div>
          </div>
          <div className={Style.ItemLLocation}>
            <div className={Style.title}>
              <h2>Location / Contacts</h2>
            </div>
            <div className={Style.ItemLocationData}>
              <div className={Style.seprate}>
                <div className={Style.longitude}>
                  <label>Longitude (Drag marker on the map)</label>
                  <input
                    type="text"
                    placeholder="Map Longitude"
                    value={longitude}
                    onChange={(e: any) =>
                      setLongitude(parseFloat(e.target.value))
                    }
                  />
                  <span></span>
                </div>
                <div className={Style.longitude}>
                  <label>Longitude (Drag marker on the map)</label>
                  <input
                    type="text"
                    placeholder="Map Longitude"
                    value={latitude}
                    onChange={(e: any) =>
                      setLatitude(parseFloat(e.target.value))
                    }
                  />
                  <span></span>
                </div>
              </div>
              <div className={Style.City}>
                <label>City / Location</label>
                <select>
                  <option>All Cities</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Lucknow</option>
                  <option>Chennai</option>
                  <option>Banglore</option>
                  <option>Hyderabad</option>
                  <option>Indore</option>
                  <option>Kolkata</option>
                </select>
                <span></span>
              </div>
              <div className={Style.divideAddress}>
                <div className={Style.address}>
                  <label>Address</label>
                  <input type="text" placeholder="Address of your bussiness" />
                  <span></span>
                </div>
                <div className={Style.address}>
                  <label>Email Address</label>
                  <input type="email" placeholder="hgdgdg@gmail.com" />
                  <span></span>
                </div>
              </div>
              <div className={Style.ItemLocationPhone}>
                <div className={Style.phone}>
                  <label>Phone</label>
                  <input type="text" placeholder="+91664489953" />
                  <span></span>
                </div>
                <div className={Style.phone}>
                  <label>Website</label>
                  <input type="text" placeholder="https://www.biphoo.com" />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.ItemDescription}>
            <div className={Style.DescriptionTitle}>
              <h2>Details</h2>
            </div>
            <div className={Style.DescptionBox}>
              <label>Text</label>
              <textarea placeholder="Details"></textarea>
              <span></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashAddItem;
