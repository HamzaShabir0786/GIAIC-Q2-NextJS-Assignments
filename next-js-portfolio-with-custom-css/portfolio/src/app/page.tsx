// import Image from "next/image";
// import styles from "./page.module.css";
import Homes from "./home/page";

export default function Home() {
  return (
    <>
      <Homes />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}
