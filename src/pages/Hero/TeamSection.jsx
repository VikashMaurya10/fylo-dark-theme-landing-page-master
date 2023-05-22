import React from "react";
import Card from "../components/Card";

import profile_1 from "../../assets/images/profile-1.jpg";
import profile_2 from "../../assets/images/profile-2.jpg";
import profile_3 from "../../assets/images/profile-3.jpg";

const TeamSection = () => {
  return (
    <section className="teamSection" id="team">
      <div className="setWidth">
        <div className="cards">
          <div className="first_card">
            <Card
              para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
              proSrc={profile_1}
              name="Satish Patel"
              about="Founder & CEO, Huddle"
            />
          </div>
          <Card
            para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            proSrc={profile_2}
            name="Bruce McKenzie"
            about="Founder & CEO, Huddle"
          />
          <Card
            para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            proSrc={profile_3}
            name="Iva Boyd"
            about="Founder & CEO, Huddle"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
