import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="nav-container">
        <div className="inner-nav">
          <div data-aos="fade-right">
            <div className="logo-div">
              <strong>Portfolio</strong>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="links-div">
              <ul>
                <li>
                  <Link href="./home">Home</Link>
                </li>
                <li>
                  <Link href="./services">Services</Link>
                </li>
                <li>
                  <Link href="./contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
