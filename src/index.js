import React from "react";
import ReactDOM from "react-dom";
import { ComponentThatUsesResizeObserver } from "./component-that-uses-resize-observer";
import "./scss/styles.scss";

function App() {
	return (
		<div className="app">
			<h1>resize the box</h1>
			<ComponentThatUsesResizeObserver />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
