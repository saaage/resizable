import { useEffect, useState, useRef } from "react";

export function useResizeObserver(targetRef) {
	const [contentRect, setContentRect] = useState({});
	const resizeObserver = useRef(null);

	useEffect(() => {
		if ("ResizeObserver" in window) {
			observe(ResizeObserver);
		} else {
			import("resize-observer-polyfill").then(observe);
		}

		function observe(ResizeObserver) {
			resizeObserver.current = new ResizeObserver(entries => {
				const { width, height, top, right, bottom, left } = entries[0].contentRect;
				setContentRect({ width, height, top, right, bottom, left });
			});
			if (targetRef.current) {
				resizeObserver.current.observe(targetRef.current);
			}
		}

		return disconnect;
	}, [targetRef]);

	function disconnect() {
		if (resizeObserver.current) {
			resizeObserver.current.disconnect();
		}
	}

	return contentRect;
}
