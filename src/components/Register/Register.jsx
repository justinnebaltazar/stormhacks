
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../helper/supabaseClient";
import styles from "./Register.module.css";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: name,
                },
                emailRedirectTo: "http://localhost:5173/login", // temporary link
            },
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data.user) {
            await supabase
                .from("profiles")
                .insert([{ user_id: data.user.id, display_name: name }]);
        }

        if (data) {
            alert("User account created!");
            navigate("/login");
        }

        setEmail("");
        setPassword("");
        setName("");
    };

    return (
        <div className={styles.container}>
            {message && <p className={styles.message}>{message}</p>}
            <div className={styles.formBox}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.heading}>Create an account!</h2>

                    <input
                        className={styles.input}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Name"
                        required
                    />
                    
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

                    <button className={styles.button} type="submit">
                        Create Account
                    </button>

                    <p className={styles.footerText}>
                        Already have an account?{" "}
                        <Link className={styles.link} to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
