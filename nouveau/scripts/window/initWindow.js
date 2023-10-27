import { resetMenuMobile } from "../menuMobile/initMenuMobile.js";

let mediaPrev;

export const initWindow = () => {
	if (window.innerWidth < 976) mediaPrev = "mobile";
	if (window.innerWidth >= 976) mediaPrev = "desk";

	window.addEventListener("resize", handleWindowMediaSwitch);
};

const handleWindowMediaSwitch = () => {
	let mediaCurrent;
	if (window.innerWidth < 976) mediaCurrent = "mobile";
	if (window.innerWidth >= 976) mediaCurrent = "desk";

	if (mediaCurrent !== mediaPrev) {
		if (mediaCurrent === "desk") {
			resetMenuMobile();
		}
	}
};
