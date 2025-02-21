import React, { useState } from "react";
import Style from "../style/footer.module.scss";

const Footer = () => {
  const [active, setActive] = useState(1);

  const handleClick = (index: any) => {
    setActive((prev) => (prev === index ? null : index));
  };
  return (
    <div className={Style.footer}>
      <div className={Style.SocialSite}>
        <div className={Style.socialwrapper}>
          <div className={Style.siteIcon}>
            <h2>Follow us on</h2>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_facebook_active.svg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="	https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_youtube_active.svg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_insta_active.svg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_linkedIn_active.svg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/flw_twitter_active.svg?v=1.0"
                alt=""
              />
            </a>
          </div>
          <div className={Style.AppIcon}>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_googleplay.png?w=128&q=75"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_appstore.png?w=128&q=75"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.tab}>
          <div className={Style.TabItem}>
            <h2>Popular Categories</h2>
            <ul>
              <li
                onClick={() => handleClick(1)}
                className={`${active === 1 ? Style.active : ""}`}
              >
                Accommodation
              </li>
              <li
                onClick={() => handleClick(2)}
                className={`${active === 2 ? Style.active : ""}`}
              >
                Astrology
              </li>
              <li
                onClick={() => handleClick(3)}
                className={`${active === 3 ? Style.active : ""}`}
              >
                Automobiles & Two Wheelers
              </li>
              <li
                onClick={() => handleClick(4)}
                className={`${active === 4 ? Style.active : ""}`}
              >
                Beauty, Fitness & Sports
              </li>
              <li
                onClick={() => handleClick(5)}
                className={`${active === 5 ? Style.active : ""}`}
              >
                Business & Legal
              </li>
              <li
                onClick={() => handleClick(6)}
                className={`${active === 6 ? Style.active : ""}`}
              >
                Education
              </li>
              <li
                onClick={() => handleClick(7)}
                className={`${active === 7 ? Style.active : ""}`}
              >
                Events & Weddings
              </li>
              <li
                onClick={() => handleClick(8)}
                className={`${active === 8 ? Style.active : ""}`}
              >
                Food & Restaurants
              </li>
              <li
                onClick={() => handleClick(9)}
                className={`${active === 9 ? Style.active : ""}`}
              >
                Health & Medical
              </li>
              <li
                onClick={() => handleClick(10)}
                className={`${active === 10 ? Style.active : ""}`}
              >
                Home Services
              </li>
              <li
                onClick={() => handleClick(11)}
                className={`${active === 11 ? Style.active : ""}`}
              >
                Others
              </li>
              <li
                onClick={() => handleClick(12)}
                className={`${active === 12 ? Style.active : ""}`}
              >
                Transportation & Shipping
              </li>
              <li
                onClick={() => handleClick(13)}
                className={`${active === 13 ? Style.active : ""}`}
              >
                Travel
              </li>
            </ul>
          </div>
          <div
            className={`${Style.TabData} ${active === 1 ? Style.active : ""}`}
          >
            <p>
              Finding the perfect accommodation is essential for a comfortable
              and hassle-free experience. Whether you are looking for a luxury
              hotel, a cozy vacation rental, or a budget-friendly stay, we offer
              a wide range of options to suit your needs. Our accommodations are
              carefully selected to provide comfort, convenience, and
              affordability. Located in prime areas, they ensure easy access to
              major attractions, business hubs, and essential services. With
              seamless booking, premium amenities, and exceptional service, we
              guarantee a pleasant stay. Explore our accommodation options and
              make your trip truly memorable with a home away from home.
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 2 ? Style.active : ""}`}
          >
            <p>
              Discover the ancient wisdom of astrology and harness cosmic
              energies to transform your life. Whether you're seeking clarity in
              love, career, or personal growth, our astrology-based products are
              designed to align with your zodiac sign and bring harmony to your
              journey. Explore personalized birth charts, lucky gemstones, tarot
              readings, and celestial jewelry—each crafted to resonate with your
              unique astrological vibrations. 🌟 Let the universe guide you—your
              destiny awaits! 🌟
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 3 ? Style.active : ""}`}
          >
            <p>
              🚗 Drive into the Future with Innovation & Performance! 🏍️ Explore
              the world of automobiles and two-wheelers designed for speed,
              comfort, and efficiency. Whether you're looking for a powerful car
              with advanced technology or a stylish bike that delivers an
              exhilarating ride, we have the perfect vehicle for you. From
              fuel-efficient models to high-performance machines, our collection
              offers durability, safety, and unmatched style. Experience the
              thrill of the road with cutting-edge features, sleek designs, and
              eco-friendly options. 🌟 Your journey begins here—ride with
              confidence and style! 🌟
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 4 ? Style.active : ""}`}
          >
            <p>
              💄 Achieve Your Best Self with Beauty, Fitness, & Sports! 🏋️‍♀️⚽
              Discover a range of products and services that help you look and
              feel your best. Whether you're enhancing your beauty routine with
              skincare, makeup, and hair care, or transforming your fitness
              journey with state-of-the-art equipment and training programs,
              we’ve got you covered. From athletic gear and sportswear to
              fitness accessories and health supplements, our selection supports
              your active lifestyle. 💪 Elevate your fitness, embrace your
              beauty, and get ready to play harder! ✨
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 5 ? Style.active : ""}`}
          >
            <p>
              📈 Streamline Your Success with Business & Legal Services! ⚖️
              Explore a comprehensive range of products and services tailored to
              meet the needs of entrepreneurs, businesses, and professionals.
              Whether you're looking for business solutions like marketing,
              accounting, and IT support, or legal services for contracts,
              intellectual property, and dispute resolution, we provide reliable
              resources to help your business thrive. Our platform connects you
              with expert consultants and service providers to navigate the
              complexities of both business operations and legal requirements
              seamlessly. 🧑‍💼 Build your business with the right tools and legal
              guidance for a secure future!
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 6 ? Style.active : ""}`}
          >
            <p>
              🎓 Enhance Your Learning Journey with Top Education Products and
              Services! 📚 Whether you're a student, parent, or educator, we
              offer a wide variety of educational resources designed to support
              your learning needs. From online courses and academic tools to
              tutoring services and educational materials, we connect you with
              expert educators and platforms to elevate your academic
              performance. Explore specialized resources in subjects like
              mathematics, science, languages, and more. Additionally, we
              provide access to certification programs, test prep services, and
              career counseling to guide your educational path and professional
              development. 🌟 Achieve your learning goals with the best
              educational resources available!
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 7 ? Style.active : ""}`}
          >
            <p>
              🎉 Make Your Events & Weddings Unforgettable with the Best
              Products and Services! 💍 From intimate gatherings to grand
              celebrations, we provide the finest products and services to make
              your events and weddings truly special. Discover everything from
              event planning, wedding coordinators, and venue rentals to floral
              arrangements, photography, videography, and entertainment. Our
              curated list of trusted vendors ensures a seamless experience,
              whether you’re organizing a wedding, corporate event, birthday
              party, or a social gathering. 👰 Plan Your Dream Wedding: Choose
              from a wide range of bridal wear, accessories, and wedding décor
              to make your big day even more memorable. Whether you're dreaming
              of a traditional or modern wedding, our services cater to every
              style and preference. 🎤 Event Management Services: Our
              professional event organizers help with venue selection, catering,
              and entertainment, ensuring that your event runs smoothly from
              start to finish. 🌟 Celebrate Life’s Milestones in Style: We make
              sure every detail is perfect for your special day!
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 8 ? Style.active : ""}`}
          >
            <p>
              🍽️ Explore the Best Food & Restaurant Options for Every Taste and
              Occasion! 🍕 From casual eateries to fine dining, we bring you a
              curated selection of restaurants and food services to satisfy
              every craving. Whether you're in the mood for local delicacies,
              international cuisine, vegan options, or a special night out,
              you'll find something to suit your tastes. 🍔 Wide Range of
              Cuisine: From traditional comfort food to gourmet experiences,
              discover restaurants offering diverse menus ranging from Indian,
              Chinese, Continental, and Italian to more specialized options like
              vegan, gluten-free, and keto-friendly dishes. 🍕 Online Food
              Ordering & Delivery: With just a few clicks, enjoy food from your
              favorite restaurants delivered to your doorstep. Find restaurants
              near you, browse through their menu, check reviews, and order with
              ease. 🍽️ Ambiance & Experience: Whether you're hosting a party or
              looking for a cozy dinner spot, explore restaurants offering not
              just great food, but also a memorable dining experience with the
              right ambiance, live music, or scenic views. 🍣 Exclusive Deals &
              Discounts: Keep an eye out for exclusive offers, discounts, and
              special deals for foodies who love to eat out or order in!
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 9 ? Style.active : ""}`}
          >
            <p>
              When it comes to your health and well-being, finding the right
              services, products, and care is crucial. Whether you're looking
              for medical practitioners, healthcare products, or wellness
              services, we've got you covered with a comprehensive range of
              options to ensure that you receive the best possible care. 🏥
              Medical Services: Hospitals & Clinics: Search for top-rated
              hospitals, private clinics, and specialist healthcare centers
              offering services across various specialties, including
              pediatrics, orthopedics, cardiology, and more. Doctors &
              Specialists: Find trusted doctors, dentists, physiotherapists, and
              other medical professionals in your area. Read reviews, book
              appointments, and get the expert care you need. 💊 Pharmaceuticals
              & Wellness: Pharmacies: Locate local pharmacies with the
              convenience of online ordering for medications, health
              supplements, and wellness products. Health Supplements: Explore a
              wide variety of vitamins, minerals, and herbal supplements to
              support your overall health and well-being. 💉 Diagnostics &
              Tests: Laboratories & Diagnostic Centers: Easily find centers that
              offer medical tests, including blood tests, X-rays, and other
              diagnostic procedures, with the ability to book appointments
              online. 💪 Fitness & Rehabilitation: Gyms & Fitness Centers:
              Whether you're aiming to lose weight, gain muscle, or maintain a
              healthy lifestyle, find local gyms and fitness centers that offer
              personalized training programs. Physical Therapy & Rehabilitation:
              Get expert help for post-surgery recovery or sports injuries from
              certified physiotherapists and rehab centers. 🩺 Emergency &
              Urgent Care: In case of an emergency, instantly access information
              for nearby emergency services, ambulance providers, and urgent
              care clinics that are ready to assist. 🔬 Health Insurance &
              Plans: Compare and explore various health insurance options
              available to ensure you get the coverage you need. Stay healthy
              and keep your loved ones saf
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 10 ? Style.active : ""}`}
          >
            <p>
              🏠 We understand that maintaining your home and ensuring
              everything runs smoothly requires professional help. Whether you
              need a quick repair, a major renovation, or regular maintenance,
              our platform connects you to trusted home service providers who
              deliver quality work right at your doorstep.🔧 Repairs &
              Maintenance: Plumbing Services: Get in touch with experienced
              plumbers for any leaks, blockages, or installations. From fixing
              faucets to pipe replacements, we've got you covered.🏡 Home
              Cleaning: Deep Cleaning Services: Maintain a spotless home with
              professional cleaning services that tackle every corner, including
              carpets, upholstery, and windows.🛋️ Home Décor & Renovations:
              Interior Designing: Transform your home with help from expert
              interior designers who can bring your vision to life with stylish,
              functional designs.🔑 Security & Safety: Security System
              Installation: Keep your home safe with security system
              installations, including cameras, alarms, and motion detectors.
              Pest Control Services: Ensure your home is free from pests with
              eco-friendly pest control solutions.🚪 Moving & Shifting: Packers
              and Movers: Relocating? Get professional moving services that
              handle everything from packing to transporting your belongings
              with care.
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 11 ? Style.active : ""}`}
          >
            <p>
              📦 Packaging & Courier Services: Courier Delivery: Need to send
              packages quickly? Use reliable courier services for local and
              international deliveries with tracking. Custom Packaging: Get
              tailored packaging solutions for delicate items, ensuring they
              arrive safely at their destination. Retail & Shopping: Online
              Shopping Assistance: Get help navigating e-commerce platforms or
              find the best deals on products from trusted online retailers.
              Custom Clothing & Tailoring: Need custom-made clothing or
              tailoring? Connect with professional seamstresses to create
              perfect fits. Gift Shopping: Struggling to find the right gift?
              Let experts help you choose unique and thoughtful presents for
              every occasion.Explore all these services and more to make life
              simpler, easier, and more enjoyable!
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 12 ? Style.active : ""}`}
          >
            <p>
              Transportation & Shipping Services 🚚✈️ Transportation and
              shipping services ensure your goods, packages, or vehicles reach
              their destination safely and on time. From local moving services
              to international shipping, these services cater to a variety of
              needs: Local Moving: Professional movers for residential or office
              relocations. Ride-Hailing: Convenient ride-sharing for easy
              travel. Courier & Delivery: Fast parcel delivery with tracking.
              Freight Shipping: Secure global shipping by air, sea, or road.
              Vehicle Shipping: Safe transport of cars and other vehicles.
              Whether it's small parcels or large freight, transportation
              services are designed for efficient, timely delivery.
            </p>
          </div>
          <div
            className={`${Style.TabData} ${active === 13 ? Style.active : ""}`}
          >
            <p>
              ✈️🌍 Travel services provide everything you need to plan and enjoy
              your trips, whether you're traveling for leisure, business, or
              adventure. These services make it easy to book flights,
              accommodations, and tours: Flight Booking: Easily compare and book
              flights for domestic and international travel. Accommodation: From
              hotels to vacation rentals, find the perfect stay for your needs.
              Car Rentals: Rent cars for a convenient and comfortable travel
              experience. Tour Packages: Explore curated travel packages for
              sightseeing, adventures, or relaxation. Travel Insurance: Secure
              your trip with comprehensive travel insurance for peace of mind.
              Whether you're planning a weekend getaway or an international
              vacation, travel services help you create memorable and
              hassle-free experiences.
            </p>
          </div>
        </div>
        <div className={Style.Link}>
          <div className={Style.linkItem}>
            <h2>Pages</h2>
            <ul>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">Faq</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className={Style.linkItem}>
            <h2>Bussiness</h2>
            <ul>
              <li>
                <a href="/dashboard/new">Add Your Bussiness</a>
              </li>
              <li>
                <a href="/advertise">Advertise with us</a>
              </li>
              <li>
                <a href="/free-listing">Free Listing</a>
              </li>
              <li>
                <a href="/">Find a Business</a>
              </li>
              <li>
                <a href="/article">Article</a>
              </li>
            </ul>
          </div>
          <div className={Style.linkItem}>
            <h2>Jd Verticals</h2>
            <ul>
              <li>
                <a href="#/">B2B</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/sitemap">Site Map</a>
              </li>
              <li>
                <a href="#/">All India</a>
              </li>
              <li>
                <a href="#/">Careers</a>
              </li>
            </ul>
          </div>
          <div className={Style.linkItem}>
            <h2>Quick Link</h2>
            <ul>
              <li>
                <a href="#/">Browse Category</a>
              </li>
              <li>
                <a href="/">Search Bussiness</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.foot}>
        <div className={Style.wrapper1}>
          <h2>
            Copyright © 1997-2025 Weblink.In Pvt. Ltd. All rights reserved.
          </h2>
          <h3>
            <a href="#/">Privacy Policy </a> - Terms & Conditions
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
