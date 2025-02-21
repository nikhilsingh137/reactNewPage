import React, { useState } from "react";
import Style from "../style/advertis.module.scss";

const Advertise = () => {
  const [accordian, setAccordian] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordian((prevState) => (prevState === index ? null : index));
  };
  return (
    <div className={Style.topdata}>
      <div className={Style.wrapper}>
        <div className={Style.homedata}>
          <a href="/">Home</a>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p>Advertise your Business</p>
        </div>
        <div className={Style.bannerdata}>
          <div className={Style.leftdata}>
            <div className={Style.growdata}>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/growtxt.svg"
                alt=""
              />
              <span>Your Business</span>
            </div>
            <h1>Advertise with Justdial - India's No. 1 Local Search Engine</h1>
            <form className={Style.formmain}>
              <span className={Style.formdata}>
                <span className={Style.flagimg}></span>
                <span>+91</span>
              </span>
              <input type="" placeholder="Enter Mobile No" />
              <button className={Style.buttondata}>
                Get Started <span className={Style.arrowdata}></span>
              </button>
            </form>
            <ul>
              <li>Rank Ahead of Your Competition</li>
              <li>Find Ready to Buy Customers Instantly</li>
              <li>Track Leads & Competition Trends</li>
            </ul>
            <div className={Style.continuingdata}>
              <p>By continuing, you agree to our</p>
              <a href="#/"> Terms of Use </a>
              {","}
              <a href="#/"> Privacy </a>
              {"&"}
              <a href="#/"> Infringement Policy</a>
            </div>
          </div>
          <div className={Style.rightdata}>
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/hero.png"
                alt=""
              />
            </span>
            <div className={Style.businessdata}>
              <div className={Style.croresdata}>
                <span className={Style.icondata}></span>
                <span>
                  <p>19.8 Crore+ </p>
                  Buyers
                </span>
              </div>
              <div className={Style.lakhdata}>
                <span className={Style.lakhicondata}></span>
                <span>
                  <p>5.9 Lakh+ </p>
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.successdata}>
        <div className={Style.success}>
          <div className={Style.successstorie}>
            <span className={Style.successicondata}></span>
            <br></br>
            <br></br>
            <h2>Success Stories</h2>
            <span className={Style.Advertisersdata}>5.9 Lakh+ Advertisers</span>
            <br></br>
            <button className={Style.buttondatabar}>See All Stories</button>
          </div>
          <div className={Style.imgtextdata}>
            <a href="#/">
              <div className={Style.imgbar}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_rajesh-chhabria_1713166740.jpg&w=640&q=75"
                  alt=""
                />
                <span className={Style.videoicon}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/vidplayicon.svg"
                    alt=""
                  />
                </span>
              </div>
              <div className={Style.textdata}>
                <div>
                  <h2>Rajesh Chhabria</h2>
                  <p>Chhabria and Sons</p>
                  <span>Tile Dealers-RAK</span>
                </div>
                <div>
                  <div className={Style.customerdata}>
                    Customer since 12 yearss
                  </div>
                  <div className={Style.visitdata}>Visit Business</div>
                </div>
              </div>
            </a>
            <a href="#/">
              <div className={Style.imgbar}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_varshini_1713165848.jpg&w=640&q=75"
                  alt=""
                />
                <span className={Style.videoicon}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/vidplayicon.svg"
                    alt=""
                  />
                </span>
              </div>
              <div className={Style.textdata}>
                <div>
                  <h2>Varshini</h2>
                  <p>V2 Makeover</p>
                  <span>Makeup Artists</span>
                </div>
                <div>
                  <div className={Style.customerdata}>
                    Customer since 3 yearss
                  </div>
                  <div className={Style.visitdata}>Visit Business</div>
                </div>
              </div>
            </a>
            <a href="#/">
              <div className={Style.imgbar}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FKolkata%2Fkolkata_gourab-neogi_1712841940.jpg&w=640&q=75"
                  alt=""
                />
                <span className={Style.videoicon}>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/vidplayicon.svg"
                    alt=""
                  />
                </span>
              </div>
              <div className={Style.textdata}>
                <div>
                  <h2>Gourab Neogi</h2>
                  <p>
                    Tally Academy <br></br> (Corporate Centre -<br></br>
                    Gariahat)
                  </p>
                  <span>
                    Accounting Training <br></br>Institutes
                  </span>
                </div>
                <div>
                  <div className={Style.customerdata}>
                    Customer since 6 yearss
                  </div>
                  <div className={Style.visitdata}>Visit Business</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={Style.Justdialdata}>
        <h2>Justdial Ads Help You Achieve Your Goals</h2>
        <div className={Style.adsdata}>
          <div className={Style.firstadsdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/new_user.svg"
              alt=""
            />
            <p>
              Market Your Business <br></br> to New Users
            </p>
          </div>
          <div className={Style.firstadsdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/grow_revenue_icon.svg"
              alt=""
            />
            <p>
              Grow Your <br></br> Revenue
            </p>
          </div>
          <div className={Style.firstadsdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/more_customer.svg"
              alt=""
            />
            <p>
              Get More <br></br> Walk-in Customers
            </p>
          </div>
        </div>
      </div>
      <div className={Style.Plansdata}>
        <div className={Style.plans}>
          <div className={Style.searchdata}>
            <h2>Plans</h2>
            <p>
              These are the plans available for your<br></br> selected
              categories. Pick a plan and start<br></br> growing your business
              today.
            </p>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Search Visibility</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/online_catalogue_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Online Catalogue</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/payment_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Payment Solutions</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/smart_lead_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Smart Lead System</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/competitor_analysis_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Competitor Analysis</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_customer_support_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Premium Customer Support</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/verified_seal_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Verified Seal #</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/trust_icon_new.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>Trust Stamp #</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
            <div className={Style.pricingdata}>
              <div className={Style.imgdata}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Jd_rating_certificate.svg"
                  alt=""
                />
              </div>
              <div className={Style.searchdata}>
                <h4>JD Rating Certificate</h4>
                <span className={Style.deletedata}></span>
              </div>
            </div>
          </div>
          <div className={Style.pricedata}>
            <div className={Style.firstdata}>
              <div className={Style.standeard}>
                <h2>Standard</h2>
                <div className={Style.rupeydata}>
                  <p>₹ </p>
                  <p>132</p>
                  <p>/ Day</p>
                </div>
                <div className={Style.presentagedata}>
                  <h3>25% Off</h3>
                </div>
                <div className={Style.numberdata}>
                  <span className={Style.numdata}>₹</span>99
                  <span className={Style.daydata}>/Day</span>
                </div>
              </div>
              <div className={Style.numdatabar}>
                <div className={Style.onexdata}>
                  <h2>1x</h2>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
              </div>
            </div>
            <div className={Style.firstdata}>
              <div className={Style.standeard}>
                <h2>Premium</h2>
                <div className={Style.rupeydata}>
                  <p>₹ </p>
                  <p>199</p>
                  <p>/ Day</p>
                </div>
                <div className={Style.presentagedata}>
                  <h3>25% Off</h3>
                </div>
                <div className={Style.numberdata}>
                  <span className={Style.numdata}>₹</span>99
                  <span className={Style.daydata}>/Day</span>
                </div>
              </div>
              <div className={Style.numdatabar}>
                <div className={Style.onexdata}>
                  <h2>2x</h2>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
              </div>
            </div>
            <div className={Style.firstdata}>
              <div className={Style.standeard}>
                <h2>Pro</h2>
                <div className={Style.rupeydata}>
                  <p>₹ </p>
                  <p>266</p>
                  <p>/ Day</p>
                </div>
                <div className={Style.presentagedata}>
                  <h3>25% Off</h3>
                </div>
                <div className={Style.numberdata}>
                  <span className={Style.numdata}>₹</span>199
                  <span className={Style.daydata}>/Day</span>
                </div>
              </div>
              <div className={Style.numdatabar}>
                <div className={Style.onexdata}>
                  <h2>3x</h2>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
                <div className={Style.onexdata}>
                  <span className={Style.crossdata}></span>
                </div>
              </div>
            </div>
            <div className={Style.firstdata}>
              <div className={Style.standeard}>
                <h2>Growth</h2>
                <div className={Style.rupeydata}>
                  <p>
                    Get Max Exposure<br></br> List in
                  </p>
                </div>

                <div className={Style.numberdata}>
                  <span className={Style.numdata}>Top 5</span>
                </div>
              </div>
              <div className={Style.numdatabar}>
                <div className={Style.onexdata}>
                  <h2>Guaranteed Top Visibility</h2>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                  <p>*</p>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                  <p>*</p>
                </div>
                <div className={Style.onexdata}>
                  <span></span>
                  <p>*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.hashdata}>
          <p>
            <span className={Style.iconhashdata}></span>
            To activate the Jd Trust/Verified badge, the business needs to have
            its KYC verified and has to be rated at an average of 3.8+ Star
            along with a minimum of 10 reviews.
          </p>
          <p>
            <span className={Style.iconstardata}></span>
            <span>
              For <b>Growth Plan </b> this is subject to amount payable.
            </span>
          </p>
        </div>
      </div>
      <div className={Style.Featuresdata}>
        <h2>Features</h2>
        <div className={Style.Featuresimgicon}>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SearchVisibility_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Premium Listing</h2>
              <p>Get higher visibility and exposure on Justdial</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/VerifiedSeal_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Verified Seal</h2>
              <p>
                Verify your business listing on Justdial and improve your
                credibility
              </p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/OnlineCatalogue_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Online Catalogue</h2>
              <p>
                Showcase your product and service offerings to potential
                customers
              </p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/TrustStamp_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Trust Stamp</h2>
              <p>
                Become eligible for a Trust Stamp that indicates your business
                is trustworthy
              </p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/PaymentSolutions_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Payment Solutions</h2>
              <p>Send and receive money from suppliers and customers</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/mobile_banner.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Mobile Banner</h2>
              <p>
                Promote your business on competitor listings by targeting
                high-intent mobile users
              </p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SmartLeadSystem_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Smart Lead Management System</h2>
              <p>View and track all your leads at one place</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/website_banner.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Website Banner</h2>
              <p>
                Promote your business on competitor listings by targeting
                high-intent website users
              </p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/CompetitorAnalysis_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Competitor Analysis</h2>
              <p>Understand how your competitors are performing on Justdial</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/business_website.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Business Website</h2>
              <p>Get a professional looking website with your own domain</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/PremiumCareSupport_f.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Premium Customer Support</h2>
              <p>Guided onboarding experience with priority assistance</p>
            </div>
          </div>
          <div className={Style.Featuresfirstdata}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Jd_rating_certificate.svg"
              alt=""
            />
            <div className={Style.featuresicondata}>
              <h2>Jd Rating Certificate</h2>
              <p>
                Boost trust by displaying positive ratings with a fiber-framed
                certificate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Maximisedata}>
        <div className={Style.Justdialadsdata}>
          <h2>Learn How to Maximise Justdial Ads for Your Business</h2>
          <div className={Style.mobiledata}>
            <a href="#/" className={Style.mobilefirstdata}>
              <div className={Style.firstimgdata}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Frightcat%402x.png&w=1080&q=75"
                  alt=""
                />
              </div>
              <div className={Style.mobiletextdata}>
                <b>The Art of Selecting the Right Categories</b>
                <a href="#/">
                  Learn More <span className={Style.rightarrow}></span>
                </a>
              </div>
            </a>
            <a href="#/" className={Style.mobilefirstdata}>
              <div className={Style.firstimgdata}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fcustomerreview%402x.png&w=1080&q=75"
                  alt=""
                />
              </div>
              <div className={Style.mobiletextdata}>
                <b>How to Respond to Customer Reviews and</b>
                <a href="#/">
                  Learn More <span className={Style.rightarrow}></span>
                </a>
              </div>
            </a>
            <a href="#/" className={Style.mobilefirstdata}>
              <div className={Style.firstimgdata}>
                <img
                  src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fleads_management_img.png&w=1080&q=75"
                  alt=""
                />
              </div>
              <div className={Style.mobiletextdata}>
                <b>
                  How to Effectively Use<br></br> Leads Management
                </b>
                <a href="#/">
                  Learn More <span className={Style.rightarrow}></span>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={Style.gotdata}>
        <h2>Got a question?</h2>
        <div className={Style.accordiandata}>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 0 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              What benefits will I get from a paid listing on Justdial?
            </h2>
            {accordian === 0 && (
              <p className={Style.panel}>
                Justdial is India's No. 1 local search engine. A paid listing
                makes your business more visible to customers. It makes it
                easier for you to reach your goals and grow faster.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 1 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              How can I choose the best paid plan for me?
            </h2>
            {accordian === 1 && (
              <p className={Style.panel}>
                Choosing a higher plan will get your business more exposure. For
                maximum customer reach, we recommend selecting the pro package.
                Alternatively, you can start with the standard or the premium
                plan and gradually upgrade as your business grows.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 2 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              How does{" "}
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/verified_seal_icon.svg"
                alt=""
              />{" "}
              +{" "}
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/trust_icon.svg"
                alt=""
              />{" "}
              work?
            </h2>
            {accordian === 2 && (
              <p className={Style.panel}>
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/verified_seal_icon.svg"
                  alt=""
                />{" "}
                +{" "}
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/trust_icon.svg"
                  alt=""
                />{" "}
                is a special badge that indicates your business is trustworthy.
                It makes customers feel more confident in your business,
                resulting in more sales.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 3 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(3)}
            >
              What are the advantages of upgrading, and how do the different
              packages differ?
            </h2>
            {accordian === 3 && (
              <p className={Style.panel}>
                By upgrading your package, you will have a better chance of
                getting more customers and being seen on Justdial. Compared to
                the standard plan, the pro and premium packages offer 3x and 2x
                more visibility, respectively.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 4 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(4)}
            >
              What payment methods are available?
            </h2>
            {accordian === 4 && (
              <p className={Style.panel}>
                You can pay by credit cards, debit cards, or UPI. The payment
                can be made up-front for a year or on a monthly basis.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 5 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(5)}
            >
              Can I change my package later?
            </h2>
            {accordian === 5 && (
              <p className={Style.panel}>
                Yes. You can upgrade or change your plan at any time based on
                your business needs.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 6 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(6)}
            >
              Can I receive leads only from specific areas?
            </h2>
            {accordian === 6 && (
              <p className={Style.panel}>
                Yes, you can target leads from specific regions to ensure you
                get inquiries from the locations you prefer.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 7 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(7)}
            >
              Can I stop the campaign and start it later?
            </h2>
            {accordian === 7 && (
              <p className={Style.panel}>
                We do not offer this option at the moment.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 8 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(8)}
            >
              Will the monthly payment change during my contract?
            </h2>
            {accordian === 8 && (
              <p className={Style.panel}>
                You will be charged the same amount each month until you upgrade
                your campaign, or buy an add-on.
              </p>
            )}
          </div>
          <div className={Style.justdaildatabar}>
            <h2
              className={`${Style.accordion} ${
                accordian === 9 ? Style.active : ""
              }`}
              onClick={() => toggleAccordion(9)}
            >
              What is the minimum tenure for plans available on Justdial?
            </h2>
            {accordian === 9 && (
              <p className={Style.panel}>
                The minimum tenure for plans on Justdial is 1 year.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
