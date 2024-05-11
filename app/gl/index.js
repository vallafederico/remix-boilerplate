export class Gl {
  static isInitialized = false;

  static init(canvas) {
    if (!canvas) throw new Error("Canvas is required");
    if (this.isInitialized) return;

    this.isInitialized = true;

    // console.log("init gl", canvas);
  }
}
