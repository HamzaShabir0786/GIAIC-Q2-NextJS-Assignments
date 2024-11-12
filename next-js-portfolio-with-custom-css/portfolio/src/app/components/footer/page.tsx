import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { fa0 } from "@fortawesome/free-solid-svg-icons/fa0";
import "./footer.css";
import "../../globals.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="section-footer">
          <div className="footer1 common-footer">
            <h3>Contact</h3>

            <p>
              <strong>Phone No: </strong>
              <a href="tel:03183246070">03183246070</a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:hamzii2205@gmail.com">Hamzii2205@gmail.com</a>
            </p>
            <p>
              <strong>Address:</strong> City: Karachi, Area: Scheme 33, Gulzar e
              Hijri
            </p>
            <p>
              <strong>Follow me:</strong>
            </p>
            <div className="icon-div">
              <a href="https://www.facebook.com/M.Hamza2205" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-shabir-796b8a261/"
                target="_blank"
              >
                <i className="fa-brands fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/hamza_shabir_0786/?hl=en"
                target="_blank"
              >
                <i className="fa-brands fab fa-instagram"></i>
              </a>
              <a href="https://github.com/HamzaShabir0786" target="_blank">
                <i className="fa-brands fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="footer2 common-footer">
            <h3>More Information</h3>
            <a
              href="https://www.crn.com/news/ai/2024/gartner-s-top-10-tech-trends-of-2025-agentic-ai-robots-and-disinformation-security"
              target="_blank"
            >
              2025 is the year of Agentic AI
            </a>
            <a href="https://www.ibm.com/topics/langchain" target="_blank">
              The Role of LangChian in Artificial Intelligence..
            </a>
            <a
              href="https://www.analyticsvidhya.com/blog/2024/07/langgraph-revolutionizing-ai-agent/"
              target="_blank"
            >
              Do you know about LangGraph?
            </a>
            <a href="/contact" target="_blank">
              Contact Us{" "}
            </a>
          </div>
          <div className="footer3 common-footer">
            <h3>Install App</h3>
            <p>Install from App store or Google Play</p>
            <div className="store-div">
              <Image
                src="/image/app store.jpg"
                width={170}
                height={48}
                alt="App store"
              />
              <Image
                src="/image/play store.jpg"
                alt="play store"
                width={170}
                height={48}
              />
            </div>
            <p>Secured payment Gateways</p>
            <Image
              src="/image/payment method.png"
              width={240}
              height={32}
              alt="payment gateways"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
