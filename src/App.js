import React, { Fragment } from "react";
import Issues from "./components/Issues";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import OpenClose from "./components/OpenClose";
import Search from "./components/Search";
import store from "./store";
import { Provider } from "react-redux";
const App = () => {
	return (
		<Provider store={store}>
			<Fragment>
				<Navbar />
				<Header />
				<Search />
				<OpenClose />
				<Issues />
			</Fragment>
		</Provider>
	);
};

export default App;
