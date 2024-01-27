import { Carousel } from "flowbite-react";
import slide01 from "../assets/image/slide01.jpg";
import slide02new from "../assets/image/slide02new.jpg";
import slide03 from "../assets/image/slide03.jpg";
import slide04 from "../assets/image/slide04.jpg";
import pc from "../assets/image/pc.jpg";
import pc2 from "../assets/image/pc2.jpg";
import pc3 from "../assets/image/pc3.jpg";
import { useEffect, useState } from "react";

function CarouselBar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowSize < 700 ? (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src={slide01} alt="..." />
            <img src={[slide02new]} alt="..." />
            <img src={slide03} alt="..." />
            <img src={slide04} alt="..." />
          </Carousel>
        </div>
      ) : 
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={pc} alt="..." />
        <img src={pc2} alt="..." />
        <img src={pc3} alt="..." />
        {/* <img src={slide04} alt="..." /> */}
       
      </Carousel>
    </div>
      }
    </>
  );
}

export default CarouselBar;
