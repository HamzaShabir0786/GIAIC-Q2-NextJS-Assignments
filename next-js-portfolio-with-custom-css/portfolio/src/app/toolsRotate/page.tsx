import Image from "next/image";
import "./ToolsRotate.css";

import data from "../../../public/dataTools.json";
function ToolsRotate() {
  return (
    <div className="parent-slider">
      <div className="slider">
        {data.map((image, index) => (
          <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
            <Image
              className="imgr"
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              priority // Optimizes images
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default ToolsRotate;
