import React, { type SyntheticEvent, useState, useRef } from "react";
import styles from "./Bitblocks.module.css";
import Image from "next/image";
import { type Ordinal } from "queries/types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

export type BitblockCellProps = {
  name: string;
  image_url: string;
  contentType?: string;
  originalInscription?: Ordinal;
  originalInscriptionNumber: string;
};

const BitblocksCell = ({
  props,
  threshold,
  i,
}: {
  props: BitblockCellProps;
  threshold: number;
  i: number;
}) => {
  const [enterTimeout, setEnterTimeout] = useState<
    gsap.core.Timeline | undefined
  >(undefined);
  const [leaveTimeout, setLeaveTimeout] = useState<
    gsap.core.Timeline | undefined
  >(undefined);
  const [changeImg, setChangeImg] = useState(false);
  const [url, setUrl] = useState<string>(
    // props.originalInscription?.image_url ?? ""
    `https://ord-mirror.magiceden.dev/content/${props.originalInscriptionNumber}`,
    // `https://ordin-delta.vercel.app/content/${props.originalInscriptionNumber}`
  );

  const handleMouseEnterEvent = (e: SyntheticEvent) => {
    e.persist();
    setTimeout(() => {
      setChangeImg(true);
    }, 100);
  };

  const handleMouseLeaveEvent = (e: SyntheticEvent) => {
    e.persist();
    setTimeout(() => {
      setChangeImg(false);
    }, 100);
  };

  const container = useRef(null);
  const image = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { contextSafe } = useGSAP({ scope: container });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const onClickImage = contextSafe(() => {
    if (image.current) {
      gsap.to(image.current, { rotation: "+=360" });
    }
  });
  // console.log("Original Image:", props.image_url)
  const mouseEnterAnimation = contextSafe(() => {
    gsap.to(image.current, { rotation: "+=360" });
  });
  const mouseLeaveAnimation = contextSafe(() => {
    gsap.to(image.current, { rotation: "-=360" });
  });
  // console.log("Hover Image:", url)

  return (
    <div ref={container} id={styles.main}>
      <div id={styles.container}>
        <div id={styles.image}>
          <Image
            ref={image}
            onMouseEnter={(event) => {
              handleMouseEnterEvent(event);
              // mouseEnterAnimation()
            }}
            onMouseLeave={(event) => {
              handleMouseLeaveEvent(event);
              // mouseLeaveAnimation()
            }}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            onClick={onClickImage}
            height={250} //changeImg ? 300 : threshold}
            width={250} //changeImg ? 300 : threshold}
            src={changeImg ? url : props.image_url}
            alt={props.name + "/" + i}
          />
        </div>
        <h1 id={styles.title}>{props.name}</h1>
        <h1 id={styles.originalInscription}>
          {props.originalInscription?.name}
        </h1>
      </div>
    </div>
  );
};

export default BitblocksCell;
//<script id="bitblocks" src="/content/0c1392c543de6ec0148a44f4495944a66eb9a904d6e260ec2439cba7f45dbfe5i0" data-s="6fa1297620a6f7c81776afff90e13f218495f41c30bd6ceed37c3bb19fbcd3bbi0"></script>
