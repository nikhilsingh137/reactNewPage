import React from "react";
import Style from "../style/freeListing.module.scss";
import { useState } from "react";

const FreeListing = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [accordian, setAccordian] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [button, setButton] = useState(true);

  const handleAccordian = (index: any) => {
    setAccordian((prev) => (prev === index ? null : index));
  };

  const handleQuestion = () => {
    setShowQuestion(true);
    setButton(false);
  };

  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.link}>
          <a href="/">Home</a>
          <i className="fa-solid fa-angle-right"></i>
          <span>Free Business Listing</span>
        </div>
        <div className={Style.ListContent}>
          <div className={Style.LeftAside}>
            <h1>
              List Your Business <strong>for FREE</strong>
            </h1>
            <span>with India’s No. 1 Local Search Engine</span>
            <form>
              <div
                className={`${Style.formbox} ${
                  isActive || inputValue ? Style.active : ""
                }`}
              >
                <div className={Style.formCountry}>
                  <span className={Style.countryImage}></span>
                  <span className={Style.NumberCode}>+91</span>
                </div>
                <div className={Style.box}>
                  <input
                    type="text"
                    value={inputValue}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => !inputValue && setIsActive(false)}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <span className={Style.error}></span>
                </div>
                <label>Enter Mobile No.</label>
                <button>
                  Start Now <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
            <div className={Style.ListItem}>
              <ul>
                <li>Expand Your Business Online</li>
                <li>Respond to Reviews & Queries Faster</li>
                <li>Showcase Your Products & Services</li>
              </ul>
            </div>
            <div className={Style.policy}>
              <h2>By continuing, you agree to our </h2>
              <a href="#/">Terms of Use , </a>
              <a href="#/">Privacy & </a>
              <a href="#/">Infringement Policy</a>
            </div>
          </div>
          <div className={Style.rightAside}>
            <div className={Style.fullListItem}>
              <div className={Style.rightList}>
                <span className={Style.RightListImage}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Money-Ecommerce.svg"
                    alt=""
                  />
                </span>
                <span className={Style.rightListText}>
                  <b>19.8 Crore+</b>
                  <span>Buyers*</span>
                </span>
              </div>
              <div className={Style.rightList}>
                <span className={Style.RightListImage}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/happy.svg"
                    alt=""
                  />
                </span>
                <span className={Style.rightListText}>
                  <b>5.9 Lakh+</b>
                  <span>Happy Customers</span>
                </span>
              </div>
              <div className={Style.rightList}>
                <span className={Style.RightListImage}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/shop.svg"
                    alt=""
                  />
                </span>
                <span className={Style.rightListText}>
                  <b>4.6 Crore+ </b>
                  <span>Businesses Listed</span>
                </span>
              </div>
            </div>
            <div className={Style.rightImage}>
              <img
                src="https://www.justdial.com/Free-Listing/_next/image?url=http%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Ffreelisting_web_homeimg.png&w=640&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.successStory}>
        <div className={Style.wrapper}>
          <div className={Style.story}>
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/quoteleft.svg"
                alt=""
              />
            </span>
            <h2>Success Stories</h2>
            <h3>5.9 Lakh+ Advertisers</h3>
            <a href="#/">See All Stories</a>
          </div>
          <div className={Style.StoryListItem}>
            <div className={Style.storyList}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_rajesh-chhabria_1713166740.jpg&w=384&q=75"
                  alt=""
                />
              </span>
              <div className={Style.VedioIcon}></div>
              <div className={Style.CompanyText}>
                <div className={Style.CompanyDetail}>
                  <h2>Rajesh Chhabria</h2>
                  <h3>Chhabria and Sons</h3>
                  <h4>Tile Dealers-RAK</h4>
                </div>
                <div className={Style.CompanyBottomText}>
                  <h2>Customer since 12 years</h2>
                  <a href="#/">Visit Bussiness</a>
                </div>
              </div>
            </div>
            <div className={Style.storyList}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_varshini_1713165848.jpg&w=384&q=75"
                  alt=""
                />
              </span>
              <div className={Style.VedioIcon}></div>
              <div className={Style.CompanyText}>
                <div className={Style.CompanyDetail}>
                  <h2>Varshini</h2>
                  <h3>V2 Makeover</h3>
                  <h4>Makeup Artists</h4>
                </div>
                <div className={Style.CompanyBottomText}>
                  <h2>Customer since 3 year</h2>
                  <a href="#/">Visit Bussiness</a>
                </div>
              </div>
            </div>
            <div className={Style.storyList}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FKolkata%2Fkolkata_gourab-neogi_1712841940.jpg&w=384&q=75"
                  alt=""
                />
              </span>
              <div className={Style.VedioIcon}></div>
              <div className={Style.CompanyText}>
                <div className={Style.CompanyDetail}>
                  <h2>Gourab Neogi</h2>
                  <h3>Tally Academy (Corporate Centre -Gariahat)</h3>
                  <h4>Accounting Training Institutes</h4>
                </div>
                <div className={Style.CompanyBottomText}>
                  <h2>Customer since 6 year</h2>
                  <a href="#/">Visit Bussiness</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.FreeBussinessTips}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>Get a FREE Business Listing in 3 Simple Steps</h2>
          </div>
          <div className={Style.BussinessStep}>
            <div className={Style.Step}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fcreateaccount%402x.png&w=256&q=75"
                  alt=""
                />
              </span>
              <div className={Style.firstStepText}>
                <h2>Step 1</h2>
                <h3>Create Account</h3>
                <p>Enter your mobile number to get started</p>
              </div>
            </div>
            <div className={Style.Step}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fenterbusinessdetails%402x.png&w=256&q=75"
                  alt=""
                />
              </span>
              <div className={Style.firstStepText}>
                <h2>Step 1</h2>
                <h3>Create Account</h3>
                <p>Enter your mobile number to get started</p>
              </div>
            </div>
            <div className={Style.Step}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fselectcat%402x.png&w=384&q=75"
                  alt=""
                />
              </span>
              <div className={Style.firstStepText}>
                <h2>Step 1</h2>
                <h3>Create Account</h3>
                <p>Enter your mobile number to get started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.ConnectCustomer}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>Connect with New Customers & Grow Your Business</h2>
          </div>
          <div className={Style.ConnectionContent}>
            <div className={Style.connectionImage}>
              <img
                src="https://www.justdial.com/Free-Listing/_next/image?url=http%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Ffreebusinesslisting%402x.png&w=640&q=75"
                alt=""
              />
            </div>
            <div className={Style.ConnectionText}>
              <h2>FREE BUSINESS LISTING PAGE</h2>
              <p>
                Having a presence on Justdial helps you build trust with your
                potential customers
              </p>
              <ul>
                <li>
                  Enrich your business details so that people can find you
                  online easily
                </li>
                <li>
                  Enrich your business details so that people can find you
                  online easily
                </li>
                <li>
                  Increase customer engagement by responding to their reviews
                  and questions
                </li>
                <li>
                  Upload photos and videos to showcase your business online
                </li>
              </ul>
              <b>Register Your Business Today</b>
              <form>
                <div
                  className={`${Style.formbox} ${
                    isActive || inputValue ? Style.active : ""
                  }`}
                >
                  <div className={Style.formCountry}>
                    <span className={Style.countryImage}></span>
                    <span className={Style.NumberCode}>+91</span>
                  </div>
                  <div className={Style.box}>
                    <input
                      type="text"
                      value={inputValue}
                      onFocus={() => setIsActive(true)}
                      onBlur={() => !inputValue && setIsActive(false)}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <span className={Style.error}></span>
                  </div>
                  <label>Enter Mobile No.</label>
                  <button>
                    Start Now <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
              <div className={Style.policy}>
                <h2>By continuing, you agree to our </h2>
                <a href="#/">Terms of Use , </a>
                <a href="#/">Privacy & </a>
                <a href="#/">Infringement Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.BusssinessAds}>
        <div className={Style.wrapper}>
          <div className={Style.BussinessImage}>
            <img
              src="https://www.justdial.com/Free-Listing/_next/image?url=http%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fjustdialads%402x.png&w=640&q=75"
              alt=""
            />
          </div>
          <div className={Style.BusinessesContent}>
            <h2>JUSTDIAL ADS</h2>
            <p>
              Get prominent display over your competitors and reach out to more
              customers.
            </p>
            <ul>
              <li>
                Rank higher in search and get more exposure in front of your
                potential customers.
              </li>
              <li>
                Get customer details over SMS, email and push notification
              </li>
              <li>
                Get full access to competition trends and analytics dashboard
              </li>
            </ul>
            <a href="/advertise">Advertise Now</a>
          </div>
        </div>
      </div>
      <div className={Style.Question}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>Got a question?</h2>
          </div>
          <div className={Style.QuestionContent}>
            <div className={Style.OuestionNumber}>
              <h2
                onClick={() => handleAccordian(1)}
                className={`${accordian === 1 ? Style.accordian : ""}`}
              >
                What are the benefits of listing a business on this Website?
              </h2>
              <div
                className={`${Style.QuestionText} ${
                  accordian === 1 ? Style.accordian : ""
                }`}
              >
                <p>
                  This Website is local search platform and provides a range of
                  benefits for businesses listed on the platform such as
                </p>
                <ul>
                  <li>
                    Boost your online presence and get more customers - this has
                    a customer base. Listing your business will help you reach
                    out to these users when your business listing or your
                    business category is searched on this website.
                  </li>
                  <li>
                    Create an online catalogue to showcase your ready-to-buy
                    products or services for prospective clients seeking for
                    more detailed information.
                  </li>
                  <li>
                    Build Trust - Having an online presence on this website will
                    help you build trust with customers and engage with them via
                    reply to reviews and questions.
                  </li>
                  <li>
                    Publish Deals, Menu, Rate Card, Brochure, etc to inform your
                    potential customers about your business offerings.
                  </li>
                </ul>
              </div>
            </div>
            <div className={Style.OuestionNumber}>
              <h2
                onClick={() => handleAccordian(2)}
                className={`${accordian === 2 ? Style.accordian : ""}`}
              >
                Can I list my business for FREE on this Website?
              </h2>
              <div
                className={`${Style.QuestionText} ${
                  accordian === 2 ? Style.accordian : ""
                }`}
              >
                <p>
                  Totally! Just add your phone number, address, and business
                  type – it's super easy!
                </p>
              </div>
            </div>
            <div className={Style.OuestionNumber}>
              <h2
                onClick={() => handleAccordian(3)}
                className={`${accordian === 3 ? Style.accordian : ""}`}
              >
                I already have a website and social media. Do I still need this
                Website?
              </h2>
              <div
                className={`${Style.QuestionText} ${
                  accordian === 3 ? Style.accordian : ""
                }`}
              >
                <p>
                  Yes, your free business listing complements your website and
                  social media presence. Adding your website and social media
                  handles to your this website profile will make your site more
                  visible to customers searching for your business listing or
                  category.
                </p>
              </div>
            </div>
            <div className={Style.OuestionNumber}>
              <h2
                onClick={() => handleAccordian(4)}
                className={`${accordian === 4 ? Style.accordian : ""}`}
              >
                Do I need to download the Jd App to create and manage my
                business listing?
              </h2>
              <div
                className={`${Style.QuestionText} ${
                  accordian === 4 ? Style.accordian : ""
                }`}
              >
                <p>
                  You are not required to download the this website app to
                  create or manage your listing. Both our website and mobile
                  browser offer user-friendly interfaces for this purpose.
                  However, the app provides additional features, such as
                  competitor tracking, which can be a valuable tool for
                  optimizing your online presence.
                </p>
              </div>
            </div>
            {showQuestion && (
              <>
                <div className={Style.OuestionNumber}>
                  <h2
                    onClick={() => handleAccordian(5)}
                    className={`${accordian === 5 ? Style.accordian : ""}`}
                  >
                    What are the benefits of listing a business on this Website?
                  </h2>
                  <div
                    className={`${Style.QuestionText} ${
                      accordian === 5 ? Style.accordian : ""
                    }`}
                  >
                    <p>
                      This Website is local search platform and provides a range
                      of benefits for businesses listed on the platform such as
                    </p>
                    <ul>
                      <li>
                        Boost your online presence and get more customers - this
                        has a customer base. Listing your business will help you
                        reach out to these users when your business listing or
                        your business category is searched on this website.
                      </li>
                      <li>
                        Create an online catalogue to showcase your ready-to-buy
                        products or services for prospective clients seeking for
                        more detailed information.
                      </li>
                      <li>
                        Build Trust - Having an online presence on this website
                        will help you build trust with customers and engage with
                        them via reply to reviews and questions.
                      </li>
                      <li>
                        Publish Deals, Menu, Rate Card, Brochure, etc to inform
                        your potential customers about your business offerings.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={Style.OuestionNumber}>
                  <h2
                    onClick={() => handleAccordian(6)}
                    className={`${accordian === 6 ? Style.accordian : ""}`}
                  >
                    Can I list my business for FREE on this Website?
                  </h2>
                  <div
                    className={`${Style.QuestionText} ${
                      accordian === 6 ? Style.accordian : ""
                    }`}
                  >
                    <p>
                      Totally! Just add your phone number, address, and business
                      type – it's super easy!
                    </p>
                  </div>
                </div>
                <div className={Style.OuestionNumber}>
                  <h2
                    onClick={() => handleAccordian(7)}
                    className={`${accordian === 7 ? Style.accordian : ""}`}
                  >
                    I already have a website and social media. Do I still need
                    this Website?
                  </h2>
                  <div
                    className={`${Style.QuestionText} ${
                      accordian === 7 ? Style.accordian : ""
                    }`}
                  >
                    <p>
                      Yes, your free business listing complements your website
                      and social media presence. Adding your website and social
                      media handles to your this website profile will make your
                      site more visible to customers searching for your business
                      listing or category.
                    </p>
                  </div>
                </div>
                <div className={Style.OuestionNumber}>
                  <h2
                    onClick={() => handleAccordian(8)}
                    className={`${accordian === 8 ? Style.accordian : ""}`}
                  >
                    Do I need to download the Jd App to create and manage my
                    business listing?
                  </h2>
                  <div
                    className={`${Style.QuestionText} ${
                      accordian === 8 ? Style.accordian : ""
                    }`}
                  >
                    <p>
                      You are not required to download the this website app to
                      create or manage your listing. Both our website and mobile
                      browser offer user-friendly interfaces for this purpose.
                      However, the app provides additional features, such as
                      competitor tracking, which can be a valuable tool for
                      optimizing your online presence.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          {button && (
            <div className={Style.button}>
              <button onClick={handleQuestion}>View More Questions</button>
            </div>
          )}
        </div>
      </div>
      <div className={Style.BussinessProfile}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>
              Learn How to Make Your Business Profile Look More Professional
            </h2>
          </div>
          <div className={Style.ProfileContent}>
            <div className={Style.ProfileDetail}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fessintialbusiness2x.png&w=640&q=75"
                  alt=""
                />
              </span>
              <h2>
                How to Fill in the Essential Business Information
                <strong>
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </strong>
              </h2>
            </div>
            <div className={Style.ProfileDetail}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Frightcat%402x.png&w=640&q=75"
                  alt=""
                />
              </span>
              <h2>
                The Art of Selecting the Right Categories
                <strong>
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </strong>
              </h2>
            </div>
            <div className={Style.ProfileDetail}>
              <span>
                <img
                  src="https://www.justdial.com/Free-Listing/_next/image?url=http%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fcustomerreview%402x.png&w=640&q=75"
                  alt=""
                />
              </span>
              <h2>
                How to Respond to Customer Reviews and Questions
                <strong>
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.BussinessList}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>List Your Business for FREE on this Website Today</h2>
            <p>India's No. 1 Local Search Engine</p>
          </div>
          <form>
            <div
              className={`${Style.formbox} ${
                isActive || inputValue ? Style.active : ""
              }`}
            >
              <div className={Style.formCountry}>
                <span className={Style.countryImage}></span>
                <span className={Style.NumberCode}>+91</span>
              </div>
              <div className={Style.box}>
                <input
                  type="text"
                  value={inputValue}
                  onFocus={() => setIsActive(true)}
                  onBlur={() => !inputValue && setIsActive(false)}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <span className={Style.error}></span>
              </div>
              <label>Enter Mobile No.</label>
              <button>
                Start Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
          <div className={Style.policy}>
            <h2>By continuing, you agree to our </h2>
            <a href="#/">Terms of Use , </a>
            <a href="#/">Privacy & </a>
            <a href="#/">Infringement Policy</a>
          </div>
        </div>
      </div>
      <div className={Style.BusinessFullDetail}>
        <div className={Style.wrapper}>
          <div className={Style.Detaillisting}>
            <h2>
              List Your Business for FREE on this Website Local Search Engine
            </h2>
            <p>
              Are you a business owner seeking to expand your reach and attract
              more customers? Justdial, India’s leading local search engine,
              offers an incredible opportunity to list your business for free
              and boost your online visibility. Whether you’re a startup, an
              SMB, or an established enterprise, listing your business on
              Justdial can increase your reach and drive valuable leads.
            </p>
          </div>
          <div className={Style.ListingReason}>
            <h2>Why List Your Business on this Website?</h2>
            <ul>
              <li>
                Massive Audience : Justdial connects millions of users with
                local businesses daily.
              </li>
              <li>
                24/7 Virtual Storefront : Increase accessibility to your
                products or services.
              </li>
              <li>
                Enhanced Credibility : Build trust with potential customers.
              </li>
              <li>
                Targeted Lead Generation : Attract users actively searching for
                your offerings.
              </li>
            </ul>
          </div>
          <div className={Style.BussinessListingStep}>
            <h2>How List Your Business on this Website?</h2>
            <ul>
              <li>
                Visit the Justdial Free Listing Page :{" "}
                <a href="/">http://localhost:3000/</a>
              </li>
              <li>Click “Start Now” : Begin the registration process.</li>
              <li>
                Provide Business Details : Name, address, contact, category,
                etc.
              </li>
              <li>OTP Verification : Ensure a secure and verified listing.</li>
            </ul>
          </div>
          <div className={Style.BusinessProfit}>
            <h2>Benefits of Justdial’s Free Listing</h2>
            <ul>
              <li>Increased Online Visibility</li>
              <li>Boosted Credibility</li>
              <li>Direct Lead Generation</li>
              <li>Nationwide Reach</li>
              <li>Keyword Optimization</li>
              <li>Potential for Business Growth</li>
            </ul>
          </div>
          <div className={Style.BussinessTips}>
            <h2>Additional Tips for SEO Optimization</h2>
            <ul>
              <li>
                Local Keywords : Target terms like “[your city's name] +
                [service your provide]”.
              </li>
              <li>
                Business Reviews : Encourage positive reviews for social proof.
              </li>
              <li>
                Featured Listings & Ads : Consider Justdial’s paid options for
                even more prominence.
              </li>
            </ul>
            <h3>
              Create your FREE this website business profile today and unlock
              new growth opportunities!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeListing;
