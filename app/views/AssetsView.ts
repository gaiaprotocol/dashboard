import { el, View } from "@common-module/app";
import { TheGodsDashboard } from "@gaiaprotocol/dashboard";
import Layout from "./Layout.js";

export default class AssetsView extends View {
  constructor() {
    super();
    Layout.content = this.container = el(
      ".assets-view",
      el("section", el("h2", "The Gods"), new TheGodsDashboard()),
    );
  }
}
