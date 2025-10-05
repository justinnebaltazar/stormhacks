import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"
import { getUserScores } from "../../helper/getScores"
import { useNavigate } from "react-router-dom"
import styles from "../Leaderboard/Leaderboard.module.css"

export const Leaderboard = () => {
    const [scores, setScores] = useState([])
    const navigate = useNavigate()
    const [groupName, setGroupName] = useState("")
    const [description, setDescription] = useState("")
    const [privacy, setPrivacy] = useState("")

    useEffect(() => {
        async function loadScores () {
            const { data: { user }, error: userError } = await supabase.auth.getUser(); 

            if (userError || !user) {
                alert("Please login first");
                navigate("/login")
            }

            try {
                const data = await getUserScores();
                setScores(data);
            } catch (err) {
                alert("Failed to fetch user scores")
            }
        }
        loadScores()
    }, [])
    

    return (
        <div className = {styles.container}>
            <div className = {styles.box}>
            <h2>Leaderboard</h2>
            {scores.length === 0 ? (
                <p>Failed to fetch user scores or no users exist</p>
            ) : (
                <ul>
                    {scores.map(({ total_points, profiles }) => (
                        <li key={profiles.display_name}>
                            {profiles.display_name}: {total_points} pts
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <div className={styles.box}>
                <div>
                    <h2>Create Your Own Group</h2>
                    <form className={styles.form}>
                        <input
                            className={styles.groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            placeholder="Group Name"
                            type="text"
                            value={groupName}
                            required>
                        </input>
                        <input
                            className={styles.description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description..."
                            type="text"
                            value={description}
                            required>
                        </input>
                        <div>
                        <label>
                            <input
                            type="radio"
                            name="privacy"
                            value="Public"
                            checked={privacy === "Public"}
                            onChange={(e) => setPrivacy(e.target.value)}
                            required
                            />
                            Public
                        </label>

                        <label>
                            <input
                            type="radio"
                            name="privacy"
                            value="Private"
                            checked={privacy === "Private"}
                            onChange={(e) => setPrivacy(e.target.value)}
                            required
                            />
                            Private
                        </label>
                        </div>
                        <button className={styles.button}>Generate Invite Code!</button>
                    </form>
                </div>
                <div>
                    <h2>Looking for groups to join?</h2>
                </div>
            </div>
        </div>
    )
}
