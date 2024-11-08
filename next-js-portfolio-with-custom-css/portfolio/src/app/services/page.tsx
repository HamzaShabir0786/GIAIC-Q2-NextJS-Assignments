import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
};
export default function Services() {
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
          <div className="grid-items item-1">
            <div className="skill-div">
              <Image
                src="/image/web dev pic.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Web-Developer</strong>
            <br />
            <p>
              I’m a passionate web developer. If you’re looking for a unique,
              fully responsive, and user-friendly website, feel free to contact
              me..!
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-2">
            <div className="skill-div">
              <Image
                src="/image/ui ux.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>UI UX Designer</strong>
            <br />
            <p>
              I'm a passionate UI UX Designer.If you want to unique, fully
              actractivness and userfrinedly website so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-3">
            <div className="skill-div">
              <Image
                src="/image/SEO.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>SEO</strong>
            <br />
            <p>
              I'm aSEO Developer.If you want to unique, and highly well rank SEO
              for all browser so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-4">
            <div className="skill-div">
              <Image
                src="/image/Graphic.avif"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Graphic Designer</strong>
            <br />
            <p>
              I'm a Graphic Designer.If you want to unique, fully actractiv and
              userfrinedly Graphics so contact me.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-5">
            <div className="skill-div">
              <Image
                src="/image/video-editing.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Video Editing</strong>
            <br />
            <p>
              I'm a Video Editor. If you want to unique videos so contact me.My
              tools for video editing are Adobe premier pro and Filmora.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>

          <div className="grid-items item-6">
            <div className="skill-div">
              <Image
                src="/image/web-hosting.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Web Hosting</strong>
            <br />
            <p>
              I'm a Web-Developer as well Hoster.You can hire me as a front-end
              webdeveloper and hoster.
            </p>
            <button>
              <Link href="/contact" target="_blank">
                Buy Services
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
