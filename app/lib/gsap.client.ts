import Tempus from "@darkroom.engineering/tempus";
import gsap from "gsap";

// import { CustomEase } from "gsap/dist/CustomEase";
// import { SplitText } from "gsap/dist/SplitText";

// gsap.registerPlugin(CustomEase, SplitText);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
// const EASE = CustomEase.create("ease", "0.175, 0.885, 0.32, 1");

gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

gsap.defaults({
  duration: DURATION,
  // ease: EASE,
});

gsap.ticker.remove(gsap.updateRoot);

Tempus.add((time: number) => {
  gsap.updateRoot(time / 1000);
});

export { DURATION, GOLDEN_RATIO, gsap };
