import { useGSAP } from "@gsap/react";
import image1 from "../assets/images/image1.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImage from "./BannerImage";
import Tag from "./Tag";
import { useRef } from "react";
import Items from "./Items";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

export default function Banner() {

    const spanRefs = useRef([]); 
    
    
    const containerRef = useRef(null); 

  useGSAP(() => {
    gsap.from("#banner-minimal-goods", {
      y: -180,
      scale: 10.7,
      scrollTrigger: {
        trigger: "#banner-minimal-goods",
        scroller: "body",
        start: "top 55%",
        end: "bottom -5%",
        scrub: 2,
      },
    });

    gsap.to("#banner-section2-nav", {
      position: "sticky",
      duration: 1,
      scrollTrigger: {
        trigger: "#banner-section2-nav",
        scroller: "body",
        scrub: 2.5,
        start: "top 0%",
        end: "top 0%",
      },
    });

    // banner text
spanRefs.current.forEach((span) => {
    // const startValue = `top ${10 + idx * 10}% `; 
    
    gsap.timeline({
      scrollTrigger: {
        trigger: span,                
        start: "top 11%",            
        end: "+=100",               
        scrub: 1,                                 
        pin: false,                   
      }
    })
    .to(span, {
      y: 100,                
      opacity: 0,           
      duration: 4,           
      
    });
  });
  


     
  });

  return (
    <main className="">
      {/* section 1----------- */}

      <section
        style={{ backgroundImage: `url(${image1})` }}
        className="min-h-screen  bg-cover bg-center bg-no-repeat "
      ></section>

      <div
        id="banner-section2-nav"
        // style={{ backgroundColor: "rgb(46, 42, 39)" }}
        className="px-8 w-full top-0   z-10"
      >
        <nav
        //   style={{ backgroundColor: "rgb(46, 42, 39)" }}
          className=" w-full  font-medium text-base flex  justify-between py-7    "
        >
          <ul className="flex items-center gap-3">
            <li>ARTICLES</li>
            <li>SHOP</li>
            <li>SUBMIT</li>
          </ul>

          <h1 id="banner-minimal-goods" className="font-bold text-xl">
            MinimalGoods
          </h1>

          <h2>(2021), All rights reserved</h2>
        </nav>
      </div>
      {/* section2 --------- */}
      <section className="overflow-hidden" >
      <div
        id="banner-section2"
        // style={{ backgroundColor: "rgb(46, 42, 39)" }}
        className="    px-8"
      >
        {/* inner content------- */}
        <div className="">
          {/* text content--------- */}
          <div
          ref={containerRef}
            id="banner-inner-content-text"
            className="text-[#e8e2da]  text-[170px]  font-bold flex-col py-10  flex  items-center justify-center"
          >
          {["Discover", "the best in", "minimal", "design"].map((text, index) => (
        <span
          key={index}
          ref={(el) => (spanRefs.current[index] = el)} // Store span refs in the array
          style={{ backgroundColor: index > 0 ? "rgb(46, 42, 39)" : "transparent" }}
          className="block w-full text-center leading-none tracking-tighter"
        >
          {text}
        </span>
      ))}

          
          </div>
        </div>
      </div>
      </section>
       
      <div>
            <BannerImage/>
        </div>
        <div>
            <Tag/>
        </div>

        <div>
            <Items/>
        </div>
   
    </main>
  );
}
