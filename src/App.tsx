import { useRef, useState } from "react";
import Button from "./Button";

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  const addTime = () =>
    video.current &&
    (video.current.currentTime = video.current.currentTime + 2);

  const incressSpeedVideo = (speed: number) =>
    video.current && (video.current.playbackRate = speed);

  const incressAndDecressVolume = (simbolo: string) => {
    if (video.current && simbolo === "+" && video.current.volume < 1) {
      video.current.volume = video.current.volume + 0.2;
    }
    if (video.current && simbolo === "-" && video.current.volume > 0.2) {
      video.current.volume = video.current.volume - 0.2;
    }
  };

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
        <Button children={"+"} onClick={() => incressAndDecressVolume("+")} />
        <Button children={"-"} onClick={() => incressAndDecressVolume("-")} />
        <Button children={"Mute"} onClick={() => setIsMuted(!isMuted)} />
        <Button children={"+2s"} onClick={addTime} />
        <Button children={"1.25x"} onClick={() => incressSpeedVideo(1.25)} />
        <Button children={"1.5x"} onClick={() => incressSpeedVideo(1.5)} />
        <Button children={"2x"} onClick={() => incressSpeedVideo(2)} />
        <Button
          children={"PiP"}
          onClick={() => video.current?.requestPictureInPicture()}
        />
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
