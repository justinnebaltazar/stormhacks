import styles from "./Login.module.css"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../../helper/supabaseClient";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email, 
            password: password
        });

        if (error) {
            setMessage(error.message)
            setEmail("")
            setPassword("")
            return
        }

        if (data) {
            // should navigate to
            console.log("successful login")
        }
        

    }
  
    return (
    <div className={styles.container}>
        <div className={styles.login}>
            <h2 className={styles.title}>Login</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
            />

            <input
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
            />

            <button className={styles.button} type="submit">Login</button>
            </form>

            <p className={styles.text}>
            Don’t have an account? <Link className={styles.link} to='/register'>Register</Link>
            </p>
        </div>
    </div>
  );
};