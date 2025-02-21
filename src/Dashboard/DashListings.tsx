import React, { useState } from "react";
import Style from "../style/dashlisting.module.scss";

const DashListings = () => {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      imgUrl:
        "https://cdn-az.allevents.in/events7/banners/3f9ba75986deaabf7cd37ee904aa10b35c3dce6566463922cae7927792f9f81e-rimg-w1024-h683-dcf7f6f5-gmir.jpg?v=1737409643",
      name: "Luxury Restaurant",
      location: "40 Journal Square Plaza, NJ, USA",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn-az.allevents.in/events7/banners/3f9ba75986deaabf7cd37ee904aa10b35c3dce6566463922cae7927792f9f81e-rimg-w1024-h683-dcf7f6f5-gmir.jpg?v=1737409643",
      name: "Luxury Restaurant",
      location: "40 Journal Square Plaza, NJ, USA",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn-az.allevents.in/events7/banners/3f9ba75986deaabf7cd37ee904aa10b35c3dce6566463922cae7927792f9f81e-rimg-w1024-h683-dcf7f6f5-gmir.jpg?v=1737409643",
      name: "Luxury Restaurant",
      location: "40 Journal Square Plaza, NJ, USA",
    },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState({ name: "", location: "" });

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditClick = (item: any) => {
    setEditId(item.id);
    setEditData({ name: item.name, location: item.location });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = (id: number) => {
    setItemList(
      itemList.map((item) =>
        item.id === id
          ? { ...item, name: editData.name, location: editData.location }
          : item
      )
    );
    setEditId(null);
  };

  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Your Listings</h2>
      </div>
      <div className={Style.mainbox}>
        {currentItems.map((item) => (
          <div key={item.id} className={Style.content}>
            <div className={Style.imageData}>
              <span>
                <img src={item.imgUrl} alt="" />
              </span>
              {editId === item.id ? (
                <div className={Style.editForm}>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="location"
                    value={editData.location}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <h2>
                  <a href="#/">{item.name}</a>
                  <br />
                  {item.location}
                </h2>
              )}
            </div>
            <div className={Style.IconData}>
              {editId === item.id ? (
                <>
                  <button onClick={() => handleSave(item.id)}>Update</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <a href="#/" onClick={() => handleEditClick(item)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                  <span>Edit</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={Style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? Style.active : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashListings;
