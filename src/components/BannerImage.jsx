import { useGSAP } from "@gsap/react";
import image2 from "../assets/images/image2.jpg";
import gsap from "gsap";

export default function BannerImage() {
  useGSAP(() => {
    let imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner-image-container",
        scroller: "body",
        scrub: 2,
        start: "top 11%",
        end: "bottom top",
        pin: true,
      },
    });

    imgTl
      .fromTo(
        "#banner-image-container img",
        {
          width: "30rem",
          height: "30rem",
          borderRadius: "50%",
        },
        {
          width: "100%",
          height: "100%",
          borderRadius: "0%",
          duration: 5,
        }
      )
      .fromTo(
        ["body", "#banner-section2-nav", "#banner-image-container"],
        {
          backgroundColor: "#2e2a27",
          color: "#e8e2da",
        },
        {
          backgroundColor: "#e8e2da",
          color: "#2e2a27",

          duration: 2,
        },
        0
      );

    imgTl.fromTo(
      "#banner-section2-nav nav",
      {
        borderBottom: "1px solid",
        borderColor: "#2e2a27",
      },
      {
        borderBottom: "1px solid",
        borderColor: "#2e2a27",
        duration: 2,
      },
      0 // Start at the same time as the previous animation
    );



  });
  return (
    <>
      <div
        id="banner-image-container"
        className="flex items-center justify-center px-8    min-h-[calc(100vh-56px)] min-w-full "
      >
        <img
          src={image2}
          alt=""
          className="h-[30rem] w-[30rem] object-cover object-center rounded-full"
        />
      </div>
    </>
  );
}
