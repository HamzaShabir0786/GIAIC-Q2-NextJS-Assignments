import Image from "next/image";
export default function Tools() {
  return (
    <>
      <section className="section-tool">
        <div className="tool-info-div">
          <h3>Here is my tools</h3>
          <p className="tool-para">
            These are the tools I use for web development and AI based project
            development.. In the future, I plan to add advanced tools like
            LangGraph, LangChain, and other cutting-edge technologies.
          </p>
        </div>
        <div className="tool-grid-con">
          <div className="tool-items html">
            <Image
              className="tool-img"
              src="/image/html.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="html"
            />
          </div>
          <div className="tool-items css">
            <Image
              className="tool-img"
              src="/image/css.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="css"
            />
          </div>
          <div className="tool-items tailwind">
            <Image
              className="tool-img"
              src="/image/tailwind.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="tailwind css"
            />
          </div>
          <div className="tool-items js">
            <Image
              className="tool-img"
              src="/image/js.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="javascript "
            />{" "}
          </div>
          <div className="tool-items ts">
            <Image
              className="tool-img"
              src="/image/ts.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="typescript"
            />{" "}
          </div>
          <div className="tool-items react">
            <Image
              className="tool-img"
              src="/image/react.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="react js"
            />{" "}
          </div>
          <div className="tool-items next">
            <Image
              className="tool-img"
              src="/image/next.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="next js"
            />{" "}
          </div>
          <div className="tool-items py">
            <Image
              className="tool-img"
              src="/image/python.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="python"
            />
          </div>
          <div className="tool-items pandas">
            <Image
              className="tool-img"
              src="/image/pandas.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="pandas"
            />{" "}
          </div>
          <div className="tool-items numpy">
            <Image
              className="tool-img"
              src="/image/numpy.png"
              width={100}
              height={100}
              alt="it is a skill pic"
              title="numpy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
