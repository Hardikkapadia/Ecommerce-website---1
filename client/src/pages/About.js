import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our journey began with a simple idea: to make shopping easy and
            enjoyable for everyone. Over the years, we have grown from a small
            startup to a leading eCommerce platform, thanks to our commitment to
            innovation and customer satisfaction. We continuously strive to
            expand our product range and improve our services to offer you an
            unparalleled shopping experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
