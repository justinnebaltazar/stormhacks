import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"

export const ActivityLog = () => {
    const [loggedActivities, setLoggedActivities] = useState([])
    const [totalActivities, setTotalActivities] = useState(0)

    useEffect(() => {
        async function fetchActivities() {

            // get current user
            const { data: { user }, error: userError } = await supabase.auth.getUser();

            if (userError || !user ) {
                console.error(userError);
                alert("You must be logged in to log an activity.");
                return;
            }

            const userId = user.id;

            // fetch most recent 5 activities that were logged 
            const { data, error } = await supabase
                .from("user_activities")
                .select(`
                    id,
                    logged_at,
                    activities (
                        name,
                        category,
                        score
                    )
                `)
                .eq("user_id", userId)
                .order("logged_at", { ascending: false })
                .limit(5);
            
            const { data: listLength, error: listError } = await supabase
                

            if (error) {
                console.error(error);
                alert("Error fetching user activities");
                return;
            } else {
                setTotalActivities(data.length)
                setLoggedActivities(data);
            }
            
        }
        fetchActivities();
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