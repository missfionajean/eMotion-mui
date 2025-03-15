// this is our sign up form
import Promo from "./Promo";

interface SignUpProps {
	setPage: (page: string) => void;
}

function SignUp({ setPage }: SignUpProps) {

    return (
        <>
            <section>
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Re-enter password"
                        />
                    </div>

                    <a href="/" type="button">
                        Cancel
                    </a>

                    <button type="submit">
                        Sign Up
                    </button>
                </form>
                <div>
                    <h5>Already have an account? </h5>
                    <a onClick={() => setPage("SignIn")}>
                        Sign In
                    </a>
                </div>
            </section>

            <section>
                <Promo />
            </section>
        </>
    )
}

export default SignUp;