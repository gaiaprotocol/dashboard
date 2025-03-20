import { el, View } from "@common-module/app";
import Layout from "./Layout.js";

export default class TheGodsView extends View {
  constructor() {
    super();
    Layout.content = this.container = el(".the-gods-view", "The Gods View");
  }
}
