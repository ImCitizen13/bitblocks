import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./DoubleImage.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const SingleImage = ({ src }: { src: string }) => {
  const _src = src;
  return (
    <Image className="img" width={200} height={200} src={src} alt={"image"} />
  );
};

const DoubleImage = ({
  mainImg,
  hoverImg,
}: {
  mainImg: string;
  hoverImg: string;
}) => {
  // Elements
  // const [top, setTop] = useState<Element>()
  // const [bottom, setBottom] = useState<Element>()
  const [image, setImage] = useState(mainImg);
  const [images, setImages] = useState(Array(5).fill(5));
  const container = useRef(null);

  const { contextSafe } = useGSAP({ scope: container });
  // const [element, setElement] = useState(SingleImage({src: mainImg}))
  // Animations
  const [leaveTimeout, setLeaveTimeout] = useState<
    gsap.core.Timeline | undefined
  >(undefined);
  const [enterTimeout, setEnterTimeout] = useState<
    gsap.core.Timeline | undefined
  >(undefined);

  const layout = contextSafe(() => {
    //get Url
    //Remove image
    // setImage("");
    // Iterate 5 times
    // setIterations(Array(5));
    // Add Images iterations times
    //Added in the maping

    // Store new Images

    // Apply Animation on the first image
    gsap.set("#double:first-child ", {
      scale: 0.9,
      filter: "saturate(200%) hue-rotate(90deg)",
    });
  });
  useEffect(() => {
    layout();
  }, []);

  const imageViews = images.map((_, index) => {
    return <SingleImage key={index} src={image} />;
  });
  const mouseEnter = contextSafe((_imageViews: React.JSX.Element[]) => {
    if (leaveTimeout) {
      leaveTimeout.kill();
    }

    setEnterTimeout(
      gsap
        .timeline({
          defaults: {
            duration: 0.3,
            ease: "steps(3)",
          },
        })
        .set(_imageViews, { willChange: "clip-path" })
        .fromTo(
          "#double:nth-child(1)",
          {
            clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
          },
          {
            clipPath: "polygon(100% 50%, 100% 50%, 100% 100%, 100% 100%)",
          },
          0.4,
        )
        .fromTo(
          "#double:nth-child(2)",
          {
            clipPath: "polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 100%, 50% 100%, 50% 100%, 0% 100%)",
          },
          0.6,
        )
        .fromTo(
          "#double:nth-child(3)",
          {
            clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)",
          },
          {
            clipPath: "polygon(50% 50%, 100% 50%, 100% 50%, 50% 50%)",
          },
          0,
        )
        .fromTo(
          "#double:nth-child(4)",
          {
            clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)",
          },
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 50%, 0% 50%)",
          },
          0.2,
        ),
    );
    return;
  });
  const mouseLeave = (_imageViews: React.JSX.Element[]) => {
    if (enterTimeout) {
      enterTimeout.kill();
    }

    setLeaveTimeout(
      gsap
        .timeline({
          defaults: {
            duration: 0.5,
            ease: "steps(3)",
          },
        })
        .set(_imageViews, { willChange: "clip-path" })
        .to(
          "#double:nth-child(1)",
          {
            clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
          },
          0,
        )
        .to(
          "#double:nth-child(2)",
          {
            clipPath: "polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)",
          },
          0.6,
        )
        .to(
          "#double:nth-child(3)",
          {
            clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)",
          },
          0.2,
        )
        .to(
          "#double:nth-child(4)",
          {
            clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)",
          },
          0.4,
        ),
    );
    return;
  };
  return (
    <div
      ref={container}
      id="double"
      onMouseEnter={() => {
        mouseEnter(imageViews);
      }}
      onMouseLeave={() => {
        mouseLeave(imageViews);
      }}
    >
      {/* <div className={styles.img}></div> */}
      {imageViews}
      {/* {element} */}
    </div>
  );
};

export default DoubleImage;
