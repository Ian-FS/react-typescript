import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "1");

  const incressAndDecressVolume = (simbolo: string) => {
    if (video.current && simbolo === "+" && video.current.volume < 1) {
      video.current.volume = video.current.volume + 0.2;
    }
    if (video.current && simbolo === "-" && video.current.volume > 0.2) {
      video.current.volume = video.current.volume - 0.2;
    }
  };

  useEffect(() => {
    if (!video.current) return;
    const n = parseFloat(volume);
    video.current.volume = parseFloat(volume);
  });

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={"+"} onClick={() => incressAndDecressVolume("+")} />
        <Button children={"-"} onClick={() => incressAndDecressVolume("-")} />
      </div>
      <video
        ref={video}
        style={{ width: "50%" }}
        src="../src/assets/video.mp4"
        controls
        onVolumeChange={() => {
          if (!video.current) return;
          setVolume(video.current?.volume.toString());
        }}
      ></video>
    </div>
  );
}

export default App;
