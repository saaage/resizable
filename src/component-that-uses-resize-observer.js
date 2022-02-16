import React, { createRef } from "react";
import { ResizeHandle } from "./components/resize-handle";
import { useResizeObserver } from "./use-resize-observer";

export function ComponentThatUsesResizeObserver() {
	const resizeSubject = createRef();
	const contentRect = useResizeObserver(resizeSubject);

	return (
		<div ref={resizeSubject} data-resize-target className="resize-box">
			<pre>
				<code>
					{stringify(contentRect)}
				</code>
			</pre>
			<ResizeHandle side="top" />
			<ResizeHandle side="right" />
			<ResizeHandle side="bottom" />
			<ResizeHandle side="left" />
		</div>
	);
}

function stringify(obj) {
	return JSON.stringify(
		obj,
		(k, v) => (typeof v === "number" ? Math.round(v) : v),
		2
	).replace(/"/g, "");
}