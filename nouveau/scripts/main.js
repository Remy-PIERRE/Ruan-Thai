import { initMenuMobile } from "./menuMobile/initMenuMobile.js";
import { initWindow } from "./window/initWindow.js";

const initPage = () => {
	initWindow();
	initMenuMobile();
};

initPage();
