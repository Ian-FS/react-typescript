import { useRef } from "react";
import Button from "./Button";

function App() {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={"Play"} onClick={() => video.current?.play()} />
        <Button children={"Pause"} onClick={() => video.current?.pause()} />
      </div>
      <video
        ref={video}
        style={{ width: "50%" }}
        src="../src/assets/video.mp4"
        controls
      ></video>
    </div>
  );
}

export default App;
