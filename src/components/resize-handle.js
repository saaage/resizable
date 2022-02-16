import React from "react";

export function ResizeHandle({ side }) {
	const mouseDirection = side === "top" || side === "bottom" ? "Y" : "X";

	function start(mouseDownEvent) {
		const box = document.querySelector("[data-resize-target]");
		const { top, right, bottom, left } = box && box.getBoundingClientRect();

		function resize(e) {
			console.log("YO", e);
			const mousePos = e[`client${mouseDirection}`];
			if (side === "top") {
				box.style.top = `${mousePos}px`;
				box.style.height = `${bottom - mousePos}px`;
			}
			if (side === "right") {
				box.style.width = `${mousePos - left}px`;
			}
			if (side === "bottom") {
				box.style.height = `${mousePos - top}px`;
			}
			if (side === "left") {
				box.style.left = `${mousePos}px`;
				box.style.width = `${right - mousePos}px`;
			}
		}

		window.addEventListener("touchmove", resize);
		window.addEventListener(
			"touchend",
			() => {
				window.removeEventListener("touchstart", resize);
			},
			{ once: true }
		);
	}

	return <div className={`resize-handle ${side}`} onTouchStart={start} />;
}
