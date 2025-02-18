import React, { useRef, useState } from "react";
import Style from "../style/contact.module.scss";

const Contact = () => {
  const defaultMapURL = `https://www.openstreetmap.org/export/embed.html?bbox=72.77,18.87,72.97,19.17&layer=mapnik&marker=19.0760,72.8777`;

  const [mapURL, setMapURL] = useState(defaultMapURL);
  const mapRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const handleAddressClick = () => {
    const newMapURL = `https://www.openstreetmap.org/export/embed.html?bbox=77.21,28.61,77.23,28.63&layer=mapnik&marker=28.6139,77.2090`;
    setMapURL(newMapURL);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const [data, setData] = useState({
    name: "",
    bussiness_name: "",
    email: "",
    number: "",
    message: "",
  });

  const [error, setError] = useState({
    nameError: "",
    bussiness_nameError: "",
    emailError: "",
    numberError: "",
    messageError: "",
  });

  const handleScroll = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setError((prev) => ({
      ...prev,
      [`${id}Error`]:
        value.trim() === "" ? `Please enter ${id.replace("_", " ")}` : "",
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newError = {
      nameError: "",
      bussiness_nameError: "",
      emailError: "",
      numberError: "",
      messageError: "",
    };

    let isValid = true;

    if (data.name === "") {
      newError.nameError = "Please enter name";
      isValid = false;
    }

    if (data.bussiness_name === "") {
      newError.bussiness_nameError = "Please enter your bussiness name";
      isValid = false;
    }

    if (data.email === "") {
      newError.emailError = "Please enter your email";
      isValid = false;
    }

    if (data.number === "") {
      newError.numberError = "Please enter your phone number";
      isValid = false;
    } else if (data.number.length > 10 || data.number.length < 10) {
      newError.numberError = "Please enter 10 digit number";
      isValid = false;
    }

    if (data.message === "") {
      newError.messageError = "Please enter your message ";
      isValid = false;
    }

    if (!isValid) {
      setError(newError);
      return;
    }

    const option: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        bussiness_name: data.bussiness_name,
        email: data.email,
        number: data.number,
        message: data.message,
      }),
    };

    fetch("http://127.0.0.1:8000/api/contact", option)
      .then((value) => {
        return value.json();
      })
      .then((res) => {
        if (res) {
          alert(res.message);
          setData({
            name: "",
            bussiness_name: "",
            email: "",
            number: "",
            message: "",
          });
        } else {
          alert(res.message);
        }
      });
  };
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.link}>
          <a href="/">Home</a>
          <i className="fa-solid fa-angle-right"></i>
          <span>Contact</span>
        </div>
        <div className={Style.file}>
          <div className={Style.fileText}>
            <h2>
              Get qualified leads from a valuable, <span>ready-to-buy</span>{" "}
              audience.
            </h2>
            <button onClick={handleScroll}>Get Started Today</button>
          </div>
          <div className={Style.fileImage}>
            <img
              src="	https://i1.ypcdn.com/ypu/images/marketing-services/hero-image.png?v=3639af0"
              alt=""
            />
          </div>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionImage}>
            <img
              src="https://i1.ypcdn.com/ypu/images/marketing-services/ess-graphic.png?v=3639af0"
              alt=""
            />
          </div>
          <div className={Style.solutionText}>
            <h2>Extended Search Solutions</h2>
            <h3>
              <span>Promote your business</span> online where customers aren't
              just searching...they're buying.
            </h3>
            <p>
              Maximize your opportunities for shoppers to find you on our
              network of top sites and digital platforms, with billions of
              searches each year. Easy and affordable marketing tools that help
              expose your business and reach more ready-to-buy consumers.
            </p>
            <button onClick={handleScroll}>Learn More</button>
          </div>
        </div>
        <div className={Style.Detail}>
          <div className={Style.phone}>
            <i className="fa-solid fa-phone"></i>
            <h2>Phone Number</h2>
            <p>+91- 1234567899</p>
          </div>
          <div className={Style.phone}>
            <i className="fa-solid fa-envelope"></i>
            <h2>E-mail Address</h2>
            <p>comapny@gmail.com</p>
          </div>
          <div className={Style.phone}>
            <i className="fa-solid fa-location-dot"></i>
            <h2>Address</h2>
            <p
              className={Style.address}
              style={{ cursor: "pointer", color: "blue" }}
              onClick={handleAddressClick}
            >
              Pocket C, Sidhartha Nagar, New Delhi
            </p>
          </div>
        </div>
        <div className={Style.mainbox} ref={formRef}>
          <div className={Style.title}>
            <h2>Contact us</h2>
          </div>
          <div className={Style.content}>
            <form onSubmit={handleSubmit}>
              <div className={Style.formbox}>
                <div className={Style.box}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    id="name"
                    onChange={handleChange}
                  />
                  <span>{error.nameError}</span>
                </div>
                <div className={Style.box}>
                  <input
                    type="text"
                    placeholder="Bussiness Name"
                    value={data.bussiness_name}
                    id="bussiness_name"
                    onChange={handleChange}
                  />
                  <span>{error.bussiness_nameError}</span>
                </div>
              </div>
              <div className={Style.formbox}>
                <div className={Style.box}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    id="email"
                    onChange={handleChange}
                  />
                  <span>{error.emailError}</span>
                </div>
                <div className={Style.box}>
                  <input
                    type="text"
                    placeholder="Number"
                    value={data.number}
                    id="number"
                    onChange={handleChange}
                  />
                  <span>{error.numberError}</span>
                </div>
              </div>
              <div className={Style.message}>
                <textarea
                  placeholder="Write your message here"
                  value={data.message}
                  onChange={handleChange}
                  id="message"
                ></textarea>
                <span>{error.messageError}</span>
              </div>
              <div className={Style.button}>
                <button>Submit Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className={Style.map} ref={mapRef}>
          <iframe
            width="100%"
            height="400px"
            src={mapURL}
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
