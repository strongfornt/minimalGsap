import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import image1 from "../assets/images/oimage2.jpeg";
import image2 from "../assets/images/oimage1.jpeg";
import image3 from "../assets/images/oimage3.jpeg";
import image4 from "../assets/images/oimage4.jpeg";
import image5 from "../assets/images/oimage5.jpeg";
import image6 from "../assets/images/oimage6.jpeg";
import image7 from "../assets/images/oimage7.jpeg";
import image8 from "../assets/images/oimage8.jpeg";
import image9 from "../assets/images/oimage9.jpeg";
import image10 from "../assets/images/oimage10.jpeg";
import image11 from "../assets/images/oimage11.jpeg";
import image12 from "../assets/images/oimage12.jpeg";
import image13 from "../assets/images/oimage13.jpeg";
import image14 from "../assets/images/oimage14.jpeg";
import image15 from "../assets/images/oimage15.jpeg";
import image16 from "../assets/images/oimage16.jpeg";
import image17 from "../assets/images/oimage17.jpeg";
import image18 from "../assets/images/oimage18.jpeg";
import image19 from "../assets/images/oimage19.jpeg";
import image20 from "../assets/images/oimage20.jpeg";

export default function Items() {
    const [activeTitle, setActiveTitle] = useState(0);
  const imgSectionCardRef = useRef([]);
  const imageCollections = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8, image9, image10],
    [image11, image12, image13, image14],
    [image15, image16, image17, image18, image19, image20],
  ];

  
  
  
  const titles = ["Furniture", "Decor", "Office", "Tech"];

  useGSAP(() => {
   
      let ItemsTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#items-title-container",
          scroller: "body",
          //   markers: true,
          start: "top 55%",
          end: "bottom -30%",
          scrub: true,
        },
      });

      ItemsTl.to("#items-title-container h1", {
        position: "sticky",
      });
   


      //managing image section =
    imgSectionCardRef.current.forEach((div, idx) => {
      const imgElements = div.querySelectorAll("img");

      let imgSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: div,
          scroller: "body",
          start: `top ${idx === 0 ? '10%':'80%'}`,
          end: `bottom ${idx === 1 || idx === 3 ? "70%" : "top"}`,
          scrub: 2,
          onEnter: () => setActiveTitle(idx),
          onEnterBack: () => setActiveTitle(idx) 
       
        },
      });

      imgSectionTl.fromTo(
        ["#banner-section2-nav", "body"],
        {
          backgroundColor: idx === 1 || idx === 3 ? "#2e2a27" : "#e8e2da",
          color: idx === 1 || idx === 3 ? "#e8e2da" : "#2e2a27",
        },
        {
          backgroundColor: idx === 1 || idx === 3 ? "#e8e2da" : "#2e2a27",
          color: idx === 1 || idx === 3 ? "#2e2a27" : "#e8e2da",
        }
      );

      imgElements.forEach((img, idx) => {
        imgSectionTl.to(
          img,
          {
            y: idx === 1 || idx === 2 || idx === 4 ? -100 : idx === 5 && -230,
          },
          0
        );
      });
    });
  });

  

  return (
    <>
      <section id="items-title-container" className="px-7 ">
        {/* items title - */}

        {titles.map((text, idx) => (
          <h1
            key={idx}
            className={`text-[15vw] top-[50%]  font-bold ${idx === activeTitle ? 'block': 'hidden'} `}
          >
            {text}
          </h1>
        ))}

        {/* img section----- */}
        <section className="space-y-52">
          {imageCollections?.map((images, index) => (
            <div
              key={index}
              ref={(el) => (imgSectionCardRef.current[index] = el)}
              id="img-section"
              className={`   ${
                index === 1 || index === 3 ? "min-h-[150vh]" : "min-h-screen"
              } relative`}
            >
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt=""
                  className={`absolute ${
                    (idx === 0 && "max-h-80") ||
                    (idx === 1 && "max-h-40 left-[60%] top-5") ||
                    (index === 1 || index === 3
                      ? idx === 2 && "max-h-72 top-[20%] left-[30%]"
                      : idx === 2 && "max-h-72 top-[30%] left-[30%]") ||
                    (index === 1 || index === 3
                      ? idx === 3 && "max-h-[60vh] top-[25%] right-0"
                      : idx === 3 && "max-h-[60vh] bottom-0 right-0") ||
                    (idx === 4 && "max-h-[60vh] bottom-0 left-0") ||
                    (idx === 5 && "max-h-80 bottom-0 left-[30%]")
                  }  `}
                />
              ))}
            </div>
          ))}
        </section>

        <div className="min-h-[70vh]"></div>
      </section>
    </>
  );
}
