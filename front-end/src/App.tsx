// imports for CSS Baseline from Material-UI
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

// import state management
import { useState } from "react";

// import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CalTest from "./components/CalTest";

function App() {
	// state to keep track of which page is rendered
	const [page, setPage] = useState("Home");

	return (
        // React.Fragment groups multiple children without adding extra nodes to DOM
		<React.Fragment>
            {/* CSS Baseline provides extra styling presets to improve MUI compatibility */}
            <CssBaseline />
            <Navbar setPage={setPage} />
			<div>
				{page === "Home" ? <Home /> : ""}
				{page === "MyProfile" ? <MyProfile /> : ""}
				{page === "SignIn" ? <SignIn setPage={setPage} /> : ""}
				{page === "SignUp" ? <SignUp setPage={setPage} /> : ""}
				{page === "CalTest" ? <CalTest /> : ""}
			</div>
        </React.Fragment>
	);
}

export default App;
