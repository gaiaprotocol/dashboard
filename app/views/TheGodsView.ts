import { View } from "@common-module/app";
import { TheGodsDashboard } from "@gaiaprotocol/dashboard";
import Layout from "./Layout.js";

export default class TheGodsView extends View {
  constructor() {
    super();
    Layout.content = this.container = new TheGodsDashboard();
  }
}
