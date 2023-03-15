import React, {useState, useEffect} from "react";
import { usePostLoginMutation, usePostSignupMutation } from "@/state/api";
const Login = ({setUser, setSecret}) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [triggerLogin, resultLogin] = usePostLoginMutation();
    const [triggerSignup] = usePostSignupMutation();
    const handleLogin = () => {
        triggerLogin({username, password})
    }
    const handleSignup = () => {
        triggerSignup({username, password})
    }
    useEffect(() => {
        if (resultLogin.data?.response) {
            setUser(username);
            setSecret(password);
        }
    
    }, [resultLogin.data]); // eslint-disable-line
    
    return (
			<div className='login-page'>
				<div className='login-container'>
					<h2 className='title'>Chat-GPT</h2>
					<p
						className='register-change'
						onClick={() => setIsRegister(!isRegister)}
					>
						{isRegister ? 'Already a user ?' : 'Are you a new user?'}
					</p>
					<div>
						<input
							className='login-input'
							type='text'
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className='login-input'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
                </div>
                <div className="login-action">
                    {isRegister ? (
                        <button type="button" onClick={handleSignup}>Register</button>
                    ): (<button type="button" onClick={handleLogin}>Login</button>)}
                </div>
				</div>
			</div>
		);
};

export default Login;
