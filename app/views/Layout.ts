import { BodyNode, DomNode, el, Router, View } from "@common-module/app";
import GaiaProtocolLogo from "../components/GaiaProtocolLogo.js";

export default class Layout extends View {
  private static _current: Layout;

  public static set content(content: DomNode) {
    Layout._current.contentContainer.append(content);
  }

  private contentContainer: DomNode;

  constructor() {
    super();
    Layout._current = this;

    this.container = el(
      ".layout",
      el(
        "nav",
        el(
          "h1",
          el("a", new GaiaProtocolLogo(), "Dashboard", {
            onclick: () => Router.go("/"),
          }),
        ),
      ),
      this.contentContainer = el("main"),
    ).appendTo(BodyNode);
  }
}
