type Service = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  strongText: string;
  paragraphText: string;
  buttonLink: string;
  buttonText: string;
};

export const dataServices: Service[] = [
  {
    imageSrc: "/image/web dev pic.png",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a skill pic",
    strongText: "Web-Developer", // Replace with the actual text you want
    paragraphText:
      "I’m a passionate web developer. If you’re looking for a unique, fully responsive, and user-friendly website, feel free to contact me..!", // Replace with the actual text you want
    buttonLink: "/contact",
    buttonText: "Contact Me ", // Replace with the actual button text you want
  },
  {
    imageSrc: "/image/ui ux.png",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a skill pic",
    strongText: "UI UX Designer",
    paragraphText:
      "I'm a passionate UI UX Designer.If you want to unique, fully actractivness and userfrinedly website so contact me  ",
    buttonLink: "/contact",
    buttonText: "Contact Me",
  },
  {
    imageSrc: "/image/SEO.png",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a skill pic",
    strongText: "SEO",
    paragraphText:
      "I'm aSEO Developer.If you want to unique, and highly well rank SEO for all browser so contact me.",
    buttonLink: "/contact",
    buttonText: "Contact Me",
  },
  {
    imageSrc: "/image/Graphic.avif",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a skill pic",
    strongText: "Graphic Designer",
    paragraphText:
      "I'm a Graphic Designer.If you want to unique, fully actractiv and userfrinedly Graphics so contact me.",
    buttonLink: "/contact",
    buttonText: "Contact Me",
  },
  {
    imageSrc: "/image/video-editing.png",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a skill pic",
    strongText: "Video Editing",
    paragraphText:
      "I'm a Video Editor. If you want to unique videos so contact me.My tools for video editing are Adobe premier pro and Filmora.",
    buttonLink: "/contact",
    buttonText: "Contact Me",
  },
  {
    imageSrc: "/image/web-hosting.png",
    imageWidth: 60,
    imageHeight: 48,
    imageAlt: "it is a last pic",
    strongText: "Web Hosting",
    paragraphText:
      "I'm a Web-Developer as well Hoster.You can hire me as a front-end webdeveloper and hoster.",
    buttonLink: "/contact",
    buttonText: "Contact Me",
  },
];
