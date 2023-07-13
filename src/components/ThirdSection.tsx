import React, { useRef } from "react";

export const ThirdSection = () => {
  const thumbnailRef = useRef<any>();
  const videoRef = useRef<any>();
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(232,251,251,1) 80%, white 20%)",
        backgroundSize: "cover%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-[50%] w-[90%] container">
        <div className="md:w-[50%] gap-10 container flex flex-col md:py-20 py-10 justify-center text-center">
          <p className="font-sans font-medium md:text-5xl text-3xl leading-normal">
            Show visitors what they're signing up for
          </p>
          <p className="text-lg">
            Include a video or photo from one of your sessions to help people
            understand your service (or just to hype ‘em up).
          </p>
        </div>

        <div className=" w-[100%]">
          <img
            ref={thumbnailRef}
            onClick={(e) => {
              thumbnailRef.current.classList.toggle("hidden");
              videoRef.current.classList.toggle("hidden");
              videoRef.current.play();
            }}
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
          />
          <video
            ref={videoRef}
            className="hidden w-full"
            onClick={(e) => {
              videoRef.current.pause();
              thumbnailRef.current.classList.toggle("hidden");
              videoRef.current.classList.toggle("hidden");
            }}
            muted
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </div>
      </div>
    </div>
  );
};
