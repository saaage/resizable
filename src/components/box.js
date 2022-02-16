import React, { forwardRef } from "react";
import { ResizeHandle } from "./resize-handle";

export const Box = forwardRef((props, ref) => (
	<div ref={ref} data-resize-target className="resize-box">
		<pre>
			<code>
				{JSON.stringify(
					props,
					(k, v) => (typeof v === "number" ? Math.round(v) : v),
					2
				).replace(/"/g, "")}
			</code>
		</pre>
		<ResizeHandle side="top" />
		<ResizeHandle side="right" />
		<ResizeHandle side="bottom" />
		<ResizeHandle side="left" />
	</div>
));

Box.displayName = "Box";
