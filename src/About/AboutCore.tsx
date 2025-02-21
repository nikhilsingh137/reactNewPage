import React from "react";
import Style from "../style/aboutcore.module.scss";

const AboutCore = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <h2>Our Core Values</h2>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.Image}>
            <img
              src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/trust.jpg"
              alt=""
            />
          </div>
          <div className={Style.content}>
            <h2>Trust and Transparency</h2>
            <p>
              At the heart of our organization, trust and transparency stand as
              unwavering core values. Trust is the foundation upon which all our
              relationships, both internal and external, are built. It's the
              bedrock of our commitment to integrity and accountability, as we
              believe that trust is not given but earned through consistent
              actions and open communication.
            </p>
          </div>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.content}>
            <h2>Constant Learning</h2>
            <p>
              We understand that in a rapidly evolving world, stagnation is not
              an option. We embrace the spirit of continuous improvement,
              encouraging every member of our team to seek knowledge, acquire
              new skills, and adapt to emerging trends and technologies. We view
              challenges as opportunities for growth and change as a chance to
              evolve and excel.
            </p>
          </div>
          <div className={Style.Image}>
            <img
              src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/constant-learning.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.Image}>
            <img
              src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/ownership.jpg"
              alt=""
            />
          </div>
          <div className={Style.content}>
            <h2>Ownership</h2>
            <p>
              Taking ownership is a fundamental core value that defines the
              essence of our organization. We believe that success is a product
              of personal responsibility and accountability. We encourage every
              member of our team to embrace challenges as opportunities to take
              ownership of their work, decisions, and outcomes.
            </p>
          </div>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.content}>
            <h2>Drive and Deliver</h2>
            <p>
              We believe that having the determination to push boundaries and
              the dedication to turn ambitions into reality are vital components
              of success. Every member of our team is driven by a relentless
              pursuit of our goals, fueled by a passion for innovation and a
              sense of purpose.
            </p>
          </div>
          <div className={Style.Image}>
            <img
              src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/drive-deliver.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={Style.mainbox}>
          <div className={Style.Image}>
            <img
              src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/one-ti.jpg"
              alt=""
            />
          </div>
          <div className={Style.content}>
            <h2>One 'TI'</h2>
            <p>
              A cohesive culture, uniting us under the banner of "One TI," is
              the heartbeat of our organization. We recognize that our strength
              lies not just in individual talents but in our collective spirit
              and shared values. We foster an environment where every member
              feels a sense of belonging and ownership, working collaboratively
              towards our common mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCore;
