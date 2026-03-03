import { useState, useEffect } from "react";
function FBVideoPlayer({ url }) {
  const [videoUrl, setVideoUrl] = useState(url);

  useEffect(() => {
    setVideoUrl(url);
  }, [url]);

  return (
    <>
      <iframe
        src={`${videoUrl}&autoplay=1&mute=1`}
        width="100%"
        height="591"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;fullscreen"
        allowFullScreen={true}
      ></iframe>
    </>
  );
}

export default FBVideoPlayer;
