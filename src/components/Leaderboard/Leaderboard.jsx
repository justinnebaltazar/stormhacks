import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"
import { getUserScores } from "../../helper/getScores"
import { useNavigate } from "react-router-dom"

export const Leaderboard = () => {
    const [scores, setScores] = useState([])
    const navigate = useNavigate()

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
        <div>
            <h2>Your Leaderboard</h2>
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
    )
}
