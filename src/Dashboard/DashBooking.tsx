import React, { useState } from "react";
import Style from "../style/dashbooking.module.scss";

const DashBooking = () => {
  const itemList = [
    {
      id: 1,
      name: "Andy Smith",
      date: "27 December 2019",
      listing: "Premium Plaza Hotel",
      persons: "4 People",
      bookingDate: "02.03.2019 - 10.03.2019",
      email: "yormail@domain.com",
      phone: "+919188866644",
      paymentState: "Paid using Paypal",
      image:
        "https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus.",
    },
    {
      id: 2,
      name: "Andy Smith",
      date: "27 December 2019",
      listing: "Premium Plaza Hotel",
      persons: "4 People",
      bookingDate: "02.03.2019 - 10.03.2019",
      email: "yormail@domain.com",
      phone: "+919188866644",
      paymentState: "Paid using Paypal",
      image:
        "https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus.",
    },
    {
      id: 3,
      name: "Andy Smith",
      date: "27 December 2019",
      listing: "Premium Plaza Hotel",
      persons: "4 People",
      bookingDate: "02.03.2019 - 10.03.2019",
      email: "yormail@domain.com",
      phone: "+919188866644",
      paymentState: "Paid using Paypal",
      image:
        "https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus.",
    },
    {
      id: 4,
      name: "Andy Smith",
      date: "27 December 2019",
      listing: "Premium Plaza Hotel",
      persons: "4 People",
      bookingDate: "02.03.2019 - 10.03.2019",
      email: "yormail@domain.com",
      phone: "+919188866644",
      paymentState: "Paid using Paypal",
      image:
        "https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus.",
    },
  ];

  const itemsPerPage = 2;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages: any = Math.ceil(itemList.length / itemsPerPage);

  const indexOfLastItem: any = currentPage * itemsPerPage;
  const indexOfFirstItem: any = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Bookings</h2>
      </div>
      <div className={Style.mainbox}>
        {currentItems &&
          currentItems.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.image}>
                  <img
                    src="https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                </div>
                <div className={Style.detail}>
                  <h4>
                    Andy Smith - <strong>27 December 2019</strong>
                  </h4>
                  <div className={Style.data}>
                    <h2>Listing Item :</h2>
                    <h2>
                      <a href="#/">Premium Plaza Hotel</a>
                    </h2>
                  </div>
                  <div className={Style.data}>
                    <h2>Persons :</h2>
                    <h2>4 Peoples</h2>
                  </div>
                  <div className={Style.data}>
                    <h2>Booking Date :</h2>
                    <h2>02.03.2019 - 10.03.2019</h2>
                  </div>
                  <div className={Style.data}>
                    <h2>Mail :</h2>
                    <h2>
                      <a href="#/"> yormail@domain.com</a>
                    </h2>
                  </div>
                  <div className={Style.data}>
                    <h2>Phone :</h2>
                    <h2>
                      <a href="#/"> +919188866644</a>
                    </h2>
                  </div>
                  <div className={Style.data}>
                    <h2>Payment State :</h2>
                    <h2>Paid using Paypal</h2>
                  </div>
                  <span></span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc posuere convallis purus non cursus. Cras metus neque,
                    gravida sodales massa ut.
                  </p>
                </div>
                <div className={Style.Icon}>
                  <a href="#/">
                    <i className="fa-solid fa-check"></i>
                    <span>Approved</span>
                  </a>
                  <a href="#/">
                    <i className="fa-solid fa-trash"></i>
                    <span>Cancel</span>
                  </a>
                </div>
              </div>
            );
          })}
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
    </div>
  );
};

export default DashBooking;
