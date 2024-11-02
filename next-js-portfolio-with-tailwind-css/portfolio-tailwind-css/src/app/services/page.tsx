import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <div className="section-services w-full h-auto py-16 px-8 bg-[#cdc1ff]">
        <h2 className="text-[2rem] font-[700] text-[#8a70f3]">My Sesrvices</h2>
        <p className="services-para ext-[1.2rem] mt-4 pb-12">
          I am front-end Developer but in future I will able to give as a full
          stack Developer and as well as AI Agent Developer.
        </p>
        <div className="services-grid h-auto grid p-4 gap-[5px] auto-rows-[470px]">
          <div className="grid-items item-1">
            <div className="skill-div">
              <Image
                src="/image/web dev pic.png"
                width={60}
                height={48}
                alt="it is a skill pic"
              />
            </div>
            <strong>Web-Development</strong>
            <br />
            <p>
              I am a passionate Web-Developer.You can hire me as a front-end
              webdeveloper.If you want to unique, fully responvise and
              userfrinedly website so contact me.
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
              I am a passionate UI UX Designer.You can hire me as a UI UX
              Designer.If you want to unique, fully actractivness and
              userfrinedly website so contact me.
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
              I am a passionate SEO Developer.You can hire me for web's SEO .If
              you want to unique, and highly well rank SEO for all browser so
              contact me.
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
              I am a passionate Graphic Designer.You can hire me as a Graphic
              Designer.If you want to unique, fully actractiv and userfrinedly
              Graphics so contact me.
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
              I am a passionate Vedio Editor. If you want to unique, actractiv
              videos so contact me.My tools for video editing are Adobe photo
              shop, Filmora and 4kedit.
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
              I am a passionate Web-Developer as well web hoster.You can hire me
              as a front-end webdeveloper as well web hoster.If you want to
              develop web and host so contact me.
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
