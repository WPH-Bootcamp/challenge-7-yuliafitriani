import LogoItem from "./LogoItem";

const logos = [
  { src: "/assets/images/adobe-logo.svg", alt: "Adobe" },
  { src: "/assets/images/upwork-logo.svg", alt: "Upwork" },
  { src: "/assets/images/zoom-logo.svg", alt: "Zoom" },
  { src: "/assets/images/postman-logo.svg", alt: "Postman" },
  { src: "/assets/images/databricks-logo.svg", alt: "Databricks" },
  { src: "/assets/images/airbnb-logo.svg", alt: "Airbnb" },
  { src: "/assets/images/dropbox.svg", alt: "Dropbox" },
  { src: "/assets/images/paypal-logo.svg", alt: "Paypal" },
  { src: "/assets/images/netflix-logo.svg", alt: "Netflix" },
];

const LogoMarqueeTrack = () => {
  return (
    <div className="flex w-max animate-marquee overflow-hidden gap-12 mask-[linear-gradient(to_right,transparent_0,black_400px,black_calc(100%-200px),transparent_100%)]">
      {[...logos, ...logos].map((logo, index) => (
        <LogoItem key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default LogoMarqueeTrack;
