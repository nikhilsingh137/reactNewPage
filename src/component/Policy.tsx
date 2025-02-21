import React from "react";
import Style from "../style/privacy.module.scss";

const Policy = () => {
  return (
    <div className={Style.container}>
      <div className={Style.Detail}>
        <div className={Style.wrapper}>
          <div className={Style.title}>
            <h2>Privacy Policy</h2>
            <p>
              This website respect your right to privacy, and we want you to be
              aware of how we collect and handle information. This policy
              applies to our handling of information on each website and mobile
              application on which we provide this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <div className={Style.Mainbox}>
        <div className={Style.wrapper}>
          <div className={Style.Introduction}>
            <h2>Intoduction</h2>
            <p>
              Welcome to this website Your privacy is important to us, and we
              are committed to protecting the personal information you share
              with us. This Privacy Policy outlines how we collect, use,
              disclose, and protect your information when you visit our website
              http://localhost:3000/. By using our website and services, you
              agree to the collection and use of your information in accordance
              with this Privacy Policy. If you do not agree, please do not use
              our website.
            </p>
          </div>
          <div className={Style.Introduction}>
            <h2>Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <h2>Personal Information</h2>
                <ul>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Mailing Address</li>
                  <li>Payment Information (for transactions)</li>
                </ul>
              </div>
              <div className={Style.listData}>
                <h2>Non-Personal Information</h2>
                <ul>
                  <li>Browser type</li>
                  <li>IP address</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Pages visited on our website</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Style.Introduction}>
            <h2>How We Collect Information</h2>
            <p>
              We collect personal and non-personal information through various
              methods to improve our services and provide a seamless experience.
              The key ways we collect information include:
            </p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <h2> Direct Interactions</h2>
                <ul>
                  <li>Sign up for an account</li>
                  <li>Contact us through forms, email, or customer support</li>
                  <li>Make a purchase or request a service</li>
                  <li>Subscribe to newsletters or promotional content</li>
                  <li>Provide feedback, reviews, or participate in surveys</li>
                </ul>
              </div>
              <div className={Style.listData}>
                <h2>Automated Tracking Technologies</h2>
                <ul>
                  <li>
                    <span>Device Information:</span> Type of device, operating
                    system, and browser used
                  </li>
                  <li>
                    <span>Usage Data:</span> Pages visited, time spent on pages,
                    links clicked, and interaction patterns
                  </li>
                  <li>
                    <span>IP Address & Location Data: </span> To understand user
                    demographics and improve service personalization
                  </li>
                  <li>
                    <span>Cookies & Web Beacons:</span> To store preferences,
                    track website performance, and deliver relevant
                    advertisements
                  </li>
                </ul>
              </div>
              <div className={Style.listData}>
                <h2>Information from Third-Party Services</h2>
                <ul>
                  <li>
                    <span>Payment Processors:</span> When you make a purchase,
                    we collect necessary transaction details through secure
                    payment gateways
                  </li>
                  <li>
                    <span>Marketing and Advertising Partners:</span> To track
                    campaign performance and tailor advertising to your
                    interests
                  </li>
                  <li>
                    <span>Social Media Platforms: </span> If you engage with our
                    content, comment, or share our services on social media, we
                    may collect public data associated with your account
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Style.Introduction}>
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send order confirmations</li>
                  <li>
                    To communicate with you about promotions, offers, and
                    updates
                  </li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Style.Introduction}>
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send order confirmations</li>
                  <li>
                    To communicate with you about promotions, offers, and
                    updates
                  </li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={Style.Introduction}>
            <h2>How We Share Your Information</h2>
            <p>
              We do not sell your personal information. However, we may share
              your information with:
            </p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <ul>
                  <li>
                    <strong>Service providers:</strong> Payment processors,
                    hosting services, and marketing platforms.
                  </li>
                  <li>
                    <strong>Legal authorities:</strong> When required by law.
                  </li>
                  <li>
                    <strong>Business transfers:</strong> If our business is
                    merged, sold, or acquired.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={Style.Introduction}>
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies to enhance your browsing experience. You can
              control or disable cookies through your browser settings.
            </p>
          </div>

          <div className={Style.Introduction}>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your information. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className={Style.Introduction}>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <div className={Style.fullList}>
              <div className={Style.listData}>
                <ul>
                  <li>Access, update, or delete your personal data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Restrict data processing</li>
                </ul>
              </div>
            </div>
            <p>
              To exercise your rights, contact us at{" "}
              <strong>email@gmail.com</strong>.
            </p>
          </div>

          <div className={Style.Introduction}>
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          <div className={Style.Introduction}>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with the "Last Updated" date.
            </p>
          </div>

          <div className={Style.Introduction}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              <strong>Hotel</strong>
            </p>
            <p>
              Email: <strong>email@gmail.com</strong>
            </p>
            <p>
              Phone: <strong>+911234567891</strong>
            </p>
            <p>
              Address: <strong>New Delhi</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
