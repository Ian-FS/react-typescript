import { useRef, useState } from "react";
import Button from "./Button";

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={isPlay ? "Play" : "Pause"}
          onClick={() => {
            isPlay ? video.current?.play() : video.current?.pause();
            setIsPlay(!isPlay);
          }}
        />
        <Button children={"Mute"} onClick={() => setIsMuted(!isMuted)} />
      </div>
      <video
        ref={video}
        style={{ width: "50%" }}
        src="../src/assets/video.mp4"
        controls
        muted={isMuted}
      ></video>
    </div>
  );
}

export default App;
