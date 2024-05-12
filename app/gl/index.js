import Tempus from "@darkroom.engineering/tempus";
// import { gsap } from "../lib/gsap.client";

export class Gl {
  static isInitialized = false;
  static items = new Map();
  static isActive = false;

  static init(wrapper) {
    if (!wrapper) throw new Error("Wrapper is required");
    if (this.isInitialized) return;

    this.isInitialized = true;
    // console.log("init gl", canvas);

    // maybe can be removed
    this.resize({
      width: wrapper.clientWidth,
      height: wrapper.clientHeight,
    });

    this.isActive = true;
    Tempus.add(this.render.bind(this));

    // queueMicrotask(() => {
    //   console.log("creating webgl things");
    // });
  }

  static addFromDom(el, id) {
    if (this.items.get(id)) return;
    this.items.set(id, el);
    // console.log("addFromDom", el, this.isInitialized, id);
  }

  static removeFromDom(id) {
    if (!this.items.get(id)) return;
    this.items.delete(id);
    // console.log("removeFromDom", id);
  }

  static resize({ width, height }) {
    Viewport.width = width;
    Viewport.height = height;
    // console.log("gl:resize", width, height);
  }

  static scroll(data) {
    // console.log("gl:scroll", data);
  }

  static render(time) {
    if (!this.isActive) return;
    // console.log(time);
  }
}

/** Viewport */
export class Viewport {
  static width = 0;
  static height = 0;

  static get dpr() {
    return window.devicePixelRatio;
  }

  static get aspect() {
    return this.width / this.height;
  }
}
