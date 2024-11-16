import Image from "next/image";
import "./tools.css";
import "../globals.css";
import  dataTools from "../../../public/dataTools.json";

function Tools() {
  return (
    <>
      <section className="section-tool">
        <div className="tool-info-div">
          <h3>Stuff for Web and AI based project development</h3>
          <p className="tool-para">
            These are the tools I use for web development and AI based project
            development.. In the future, I plan to add advanced tools like
            LangGraph, LangChain, and other cutting-edge technologies.
          </p>
        </div>
        <div className="tool-grid-con">
          {dataTools.map((datatool, index) => {
            return (
              <div key={index} className="tool-items">
                <Image
                  className="tool-img"
                  src={datatool.src}
                  width={100}
                  height={100}
                  alt={datatool.alt}
                  title={datatool.title}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Tools;
