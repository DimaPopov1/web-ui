import {useRef, useState, useEffect} from "react";
import {useCookies} from 'react-cookie';
import {AxiosError} from 'axios';
import {Link, useNavigate, useLocation, NavLink} from 'react-router-dom';

import axios from "../../routes/authApi";
import useAuth from "../../hooks/useAuth";

const LOGIN_API_URL = '/login';

const Login = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);
    const [cookies, setCookie] = useCookies();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_API_URL,
                JSON.stringify({login: user, password: pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            const role = response?.data.role;

            setAuth({role: role});
            setCookie('Authorization', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('Authorization', accessToken);


            setUser('');
            setPwd('');

            navigate(from, {replace: true});
        } catch (error: unknown) {
            if (error instanceof AxiosError && error.response?.status === 400) {
                setErrMsg(error.response.data);
            } else {
                setErrMsg('No Server Response')
            }
            if (errRef.current) {
                errRef.current.focus();
            }
        }
    }

    const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setUser(target.value)
    }
    const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setPwd(target.value)
    }
    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={handleUsername}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePassword}
                    value={pwd}
                    required
                />
                <button>Login</button>
            </form>

            <span className="line">
                  <NavLink to="/Register">Sign Up</NavLink>
                        </span>

        </section>
    )
}

export default Login;