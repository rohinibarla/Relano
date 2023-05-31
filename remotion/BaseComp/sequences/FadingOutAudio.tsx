import { Audio, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {BackgroundMusic} from "../../../script/VideoContent"

export default function FadingOutAudio() {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
 
  return (
    <Audio
    
      src={BackgroundMusic}
      startFrom={20 * fps}
      volume={
        // Slowly fade out
        frame > durationInFrames - fps * 5
          ? 1 -
            interpolate(
              frame,
              [durationInFrames - fps * 5, durationInFrames],
              [0, 1]
            ) **
              1.5
          : 1
      }
    />
  );
}
