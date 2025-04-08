import { BodyNode, DomNode, el, Router, View } from "@common-module/app";
import { Tab, TabGroup } from "@common-module/app-components";
import { XIcon } from "@common-module/svg-icons";
import GaiaProtocolLogo from "../components/GaiaProtocolLogo.js";

export default class Layout extends View {
  private static _current: Layout;

  public static set content(content: DomNode) {
    Layout._current.contentContainer.append(content);
  }

  private tabGroup: TabGroup<string>;
  private contentContainer: DomNode;

  constructor() {
    super();
    Layout._current = this;

    this.container = el(
      ".layout",
      el("header", el("h1", new GaiaProtocolLogo(), "Dashboard")),
      this.tabGroup = new TabGroup(
        new Tab({ label: "Assets", value: "assets" }),
      ),
      this.contentContainer = el("main"),
      el(
        "footer",
        el(
          ".credit",
          "2022-",
          String(new Date().getFullYear()),
          " Gaia Protocol",
        ),
        el(
          ".social",
          el(
            "a",
            new XIcon(),
            {
              href: "https://x.com/Gaia_Protocol",
              target: "_blank",
            },
          ),
        ),
      ),
    ).appendTo(BodyNode);

    this.tabGroup.on("tabSelected", (value) => Router.go(`/${value}`)).init();
  }
}
