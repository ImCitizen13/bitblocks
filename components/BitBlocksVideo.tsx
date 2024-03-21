import { useRef } from "react";

export default function BitBlocksVideo({ bitblock }: { bitblock: string }) {
  const differentSizes = [1200, 600, 650, 300, 2300, 200, 3000];
  const threshold = differentSizes.length;
  //   const refs = useRef(Array<RefObject<unknown>>(threshold).fill(createRef()));
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {Array(threshold)
        .fill(1)
        .map((_, idx) => {
          return (
            <>
              <h1>{idx + 1}</h1>
              <div
                style={{
                  width: `${differentSizes[idx]}px`,
                  height: `${differentSizes[idx]}px`,
                }}
              >
                <iframe
                  ref={(element) => (refs.current[idx] = element)}
                  sandbox="allow-scripts"
                  loading="lazy"
                  width={"100%"}
                  height={"100%"}
                  key={idx}
                  src={bitblock}
                ></iframe>
              </div>
            </>
          );
        })}
    </div>
  );
}

// https://www.tecforfun.com/frameworks/how-use-useref-access-items-list/
// https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
