import { Router, SPAInitializer } from "@common-module/app";
import AppConfig, { IAppConfig } from "./AppConfig.js";
import Layout from "./views/Layout.js";
import TheGodsView from "./views/TheGodsView.js";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  SPAInitializer.init();

  Router
    .add("/*", Layout)
    .add("/thegods", TheGodsView);
}
