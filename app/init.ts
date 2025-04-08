import {
  Router,
  SPAInitializer,
  Theme,
  ThemeManager,
} from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import { GaiaUIPreset } from "@gaiaprotocol/ui-preset";
import AppConfig, { IAppConfig } from "./AppConfig.js";
import AssetsView from "./views/AssetsView.js";
import Layout from "./views/Layout.js";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  SPAInitializer.init();
  GaiaUIPreset.init();

  ThemeManager.theme = Theme.Dark;

  AppCompConfig.updateTabBackgroundOnSelect = (tabBackground, tab) => {
    const leftOffset = tab.htmlElement.offsetLeft;
    const rightInset = tabBackground.calculateRect().width - leftOffset -
      tab.calculateRect().width;
    tabBackground.style({
      clipPath: `inset(0px ${rightInset}px 0px ${leftOffset}px round 9999px)`,
    });
  };

  Router
    .add("/*", Layout)
    .add("/assets", AssetsView);
}
