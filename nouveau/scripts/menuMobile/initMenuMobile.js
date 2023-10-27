export const initMenuMobile = () => {
	const buttonOpener = document.querySelector(".menu__mobile--opener");
	buttonOpener.addEventListener("click", handleMenuMobileOpening);
};

const handleMenuMobileOpening = () => {
	const menuMobile = document.querySelector(".menu--mobile");
	menuMobile.classList.toggle("opened");
};

export const resetMenuMobile = () => {
	const menuMobile = document.querySelector(".menu--mobile");
	if ([...menuMobile.classList].includes("opened"))
		menuMobile.classList.toggle("opened");
};
