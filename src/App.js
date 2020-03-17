import React from "react";
import "./App.css";
import store from "./state";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./view/home/home";
import Company from "./view/company/company";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/company/:companyId" component={Company} />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
