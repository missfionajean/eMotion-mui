// import { useState } from 'react'
import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CalTest from "./components/CalTest";
// import Promo from "./components/Promo";

function App() {
	//
	const [page, setPage] = useState("Home");

	return (
		<>
			<Navbar setPage={setPage} />
			<div>
				{page === "Home" ? <Home /> : ""}
				{page === "MyProfile" ? <MyProfile /> : ""}
				{page === "SignIn" ? <SignIn setPage={setPage} /> : ""}
				{page === "SignUp" ? <SignUp setPage={setPage} /> : ""}
				{page === "CalTest" ? <CalTest /> : ""}
			</div>
		</>
	);
}

export default App;
