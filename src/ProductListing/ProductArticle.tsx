import React, { useState } from "react";
import Style from "../style/productarticle.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductArticle = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleView = (index: any) => {
    setIsExpanded((prev) => (prev === index ? null : index));
  };
  return (
    <div className={Style.Article}>
      <OwlCarousel
        className="owl-theme"
        items={3}
        autoplay
        loop
        margin={30}
        dots={false}
        nav={true}
        responsive={{
          0: {
            items: 1,
          },
          769: {
            items: 2,
          },
          993: {
            items: 3,
          },
        }}
      >
        <div className={Style.ArticleData}>
          <img
            src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1733893047343_lwzz8_2000x945.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75?w=640&q=75"
            alt=""
          />
          <div className={Style.ArticleText}>
            <p
              className={
                isExpanded === 1 ? Style.fullText : Style.truncatedText
              }
            >
              With the 2025 Kumbh Mela on the horizon, Prayagraj is gearing up
              to host millions of pilgrims, travellers, and food lovers alike.
              As the sacred Sangam calls out to the spiritually inclined,
              another charm quietly steals the show—the irresistible food. If
              you're wondering where to eat in Prayagraj between dips at the
              holy confluence and temple visits, you're in for a treat.From
              timeless Indian thalis to modern café delights, restaurants in
              Prayagraj offer a little something for everyone. Whether you're
              craving classic Indian food in Prayagraj or hunting for a hearty
              meal after a long day, this city delivers with effortless charm.
              Food here isn't just about taste; it's about the stories behind
              every dish and the hands that prepare them.
            </p>
            <span onClick={() => handleView(1)} style={{ cursor: "pointer" }}>
              {isExpanded === 1 ? "Show Less" : "View more"}
            </span>
          </div>
        </div>
        <div className={Style.ArticleData}>
          <img
            src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1736513723170_2mbg3_7360x4912.jpg?impolicy=queryparam&im=Resize=(828,621),aspect=fit&q=75&width=828"
            alt=""
          />
          <div className={Style.ArticleText}>
            <p
              className={
                isExpanded === 2 ? Style.fullText : Style.truncatedText
              }
            >
              Are you on the hunt for stylish outfits that don’t break the bank
              in Prayagraj? Formerly known as Allahabad, Prayagraj is a city
              where tradition blends seamlessly with modern trends. Whether
              you're a fashionista scouting for chic pieces or a parent
              searching for the perfect attire for your little ones, Prayagraj
              has it all. From vibrant ethnic wear to contemporary Western
              styles, there are a variety of popular clothing stores in
              Prayagraj that cater to every wardrobe need.
            </p>
            <span onClick={() => handleView(2)} style={{ cursor: "pointer" }}>
              {isExpanded === 2 ? "Show Less" : "View more"}
            </span>
          </div>
        </div>
        <div className={Style.ArticleData}>
          <img
            src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1736749356422_avktk_1000x667.jpg?impolicy=queryparam&im=Resize=(828,621),aspect=fit&q=75&width=828"
            alt=""
          />
          <div className={Style.ArticleText}>
            <p
              className={
                isExpanded === 3 ? Style.fullText : Style.truncatedText
              }
            >
              f you're a book lover or just someone who enjoys exploring the
              world of literature, then you’ll love the vibrant book scene in
              Prayagraj. Also known as Allahabad, this city is a treasure trove
              for readers, offering a variety of options for anyone looking to
              buy books. From the latest bestsellers to hidden gems, several top
              book stores in Prayagraj are perfect for those in search of their
              next great read. Whether you're on the lookout for a rare edition,
              a specific genre, or even looking to buy used books in Prayagraj,
              you'll find plenty of options. These best book stores are not just
              about selling books but about creating an experience. You can get
              lost in their aisles, discover something new, and even chat with
              the owners or staff about your latest literary interests.
            </p>
            <span onClick={() => handleView(3)} style={{ cursor: "pointer" }}>
              {isExpanded === 3 ? "Show Less" : "View more"}
            </span>
          </div>
        </div>
        <div className={Style.ArticleData}>
          <img
            src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1736341610601_hhv9o_4235x2000.jpg?impolicy=queryparam&im=Resize=(828,621),aspect=fit&q=75&width=828"
            alt=""
          />
          <div className={Style.ArticleText}>
            <p
              className={
                isExpanded === 4 ? Style.fullText : Style.truncatedText
              }
            >
              As winter blankets Prayagraj in a cool, misty embrace, the ancient
              city transforms into a haven for food lovers seeking warmth in its
              delectable offerings. When temperatures dip to single digits and
              fog rolls in from the Ganges, locals and visitors alike find
              solace in the aromatic street corners and bustling markets that
              have been serving winter delicacies for generations.From the
              historic lanes of Civil Lines to the vibrant ghats where the Kumbh
              Mela unfolds, winter food in Prayagraj tells tales of tradition
              and taste. Picture yourself wrapped in a woollen shawl, watching
              steam rise from a freshly prepared plate of makkhan malai – a
              gossamer-light sweet that appears only during these chilly months.
              The city, formerly known as Allahabad, comes alive with vendors
              selling snacks that seem crafted specifically to combat the winter
              chill.
            </p>
            <span onClick={() => handleView(4)} style={{ cursor: "pointer" }}>
              {isExpanded === 4 ? "Show Less" : "View more"}
            </span>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ProductArticle;
