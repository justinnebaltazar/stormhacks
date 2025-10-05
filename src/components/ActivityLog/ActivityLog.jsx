import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"
import { fetchUserActivities } from "../../helper/fetchActivities"

export const ActivityLog = () => {
    const [loggedActivities, setLoggedActivities] = useState([])
    const [totalActivities, setTotalActivities] = useState(0)

    useEffect(() => {
        async function loadActivities() {
            const { data: { user }, error: userError } = await supabase.auth.getUser(); 

            if (userError || !user) {
                alert("Please login first!")
            } 

            try {
                const data = await fetchUserActivities(user.id, 5);
                setLoggedActivities(data);
            } catch (err) {
                alert("Failed to fetch activities.")
            }
            
        }
        loadActivities();
    }, [])

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Your Recent Activities</h2>
            {loggedActivities.length === 0 ? (
                <p>Complete your first activity!</p>
            ) : (
                <p>
                    You've completed {totalActivities}{" "}
                    {loggedActivities.length === 1 ? "activity" : "activities"} 
                </p>
            )}
            {loggedActivities.length === 0 ? (
                <p>No activities logged yet</p>
            ) : (
                <ul>
                    {loggedActivities.map((entry) => (
                        <li key={entry.id}>
                            <strong>{entry.activities.name}</strong> 
                            <span> ({entry.activities.category})</span><br />
                            <small>+{entry.activities.score} points</small><br />
                            <small>Logged on {new Date(entry.logged_at).toLocaleString()}</small>
                            <hr style={{ margin: "0.5rem 0" }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}