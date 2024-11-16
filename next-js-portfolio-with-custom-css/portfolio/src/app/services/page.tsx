import Image from "next/image";
import { dataServices } from "../../../public/dataServices";
import { Metadata } from "next";
import "./services.css";
import "../globals.css";
// import { dataServices } from "../components/dataForServices/data";

export const metadata: Metadata = {
  title: "Services",
};
function Services() {
  return (
    <>
      <div className="section-services">
        <h2>My Sesrvices</h2>
        <p className="services-para">
          I'm currently a front-end developer, but in the future, I aim to
          expand my skills to become a full-stack developer, an AI agent
          developer, and a generative AI developer.
        </p>

        <div className="services-grid">
          {dataServices?.map((items, index) => {
            return (
              <div className="grid-items item-2" key={index}>
                <div className="skill-div">
                  <Image
                    src={items.imageSrc}
                    width={items.imageWidth}
                    height={items.imageHeight}
                    alt={items.imageAlt}
                  />
                </div>
                <strong>{items.strongText}</strong>
                <br />
                <p>{items.paragraphText} </p>
                <button>
                  <a href={items.buttonLink} target="_blank">
                    {items.buttonText}
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Services;
