interface NavbarProps {
    // declaring setPage as a function with type string and it wont return anything (void)
    setPage: (page: string) => void;
}

function Navbar({ setPage }: NavbarProps) {

	return (
		<nav>
			<h5 onClick={() => setPage("Home")}>Home</h5>
			<h5 onClick={() => setPage("MyProfile")}>My Profile</h5>
			<h5 onClick={() => setPage("SignIn")}>Sign In</h5>
             <h5 onClick={() => setPage("CalTest")}>Calendar Test</h5>
		</nav>
	);
}

export default Navbar;
