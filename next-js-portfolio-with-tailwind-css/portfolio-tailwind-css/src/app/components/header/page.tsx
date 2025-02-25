import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="nav-container w-[100%] p-[.5rem] bg-[#e5d9f2] flex justify-center align-center z-[999] shadow-custom-nav sticky top-0">
        <div className="inner-nav p-[.5rem] w-[70%] rounded-[30px] bg-[#cdc1ff] flex justify-around items-center border-x-[3px] border-[#a667eb]">
          <div className="logo-div">
            <strong className="text-[1.4rem] cursor-pointer tracking-[2px] text-[#8b3ede] ">
              Portfolio
            </strong>
          </div>
          <div className="links-div">
            <ul className="flex gap-16">
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
      </nav>
    </>
  );
}
