import { useState } from "react";

export default function Picture() {
  const [isBackgroundActive, setBackgroundActive] = useState(false);
  const [isPictureActive, setPictureActive] = useState(false);

  const backgroundClassName = isBackgroundActive
    ? "background background--active"
    : "background";
  const pictureClassName = isPictureActive
    ? "picture picture--active"
    : "picture";

  return (
    <div
      className={backgroundClassName}
      onClick={() => {
        setBackgroundActive(true);
        setPictureActive(false);
      }}
    >
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setPictureActive(true);
          setBackgroundActive(false);
        }}
      />
    </div>
  );
}
