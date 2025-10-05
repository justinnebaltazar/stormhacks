import { useEffect, useState } from "react";
import supabase from "../../helper/supabaseClient";
import styles from "../ActivityTracker/ActivityTracker.module.css";

export const ActivityTracker = () => {
    const [activitiesList, setActivitiesList] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchActivities() {
            const { data, error } = await supabase.from("activities").select("*");
            if (error) console.error(error);
            else setActivitiesList(data);
        }
        fetchActivities();
    }, []);

    const handleSelectActivity = (e) => {
        setSelectedActivity(e.target.value);
    };

    const handleSubmitActivity = async () => {
        if (!selectedActivity) {
            setMessage("Please select an activity first.");
            return;
        }

        setMessage("");

        // get the current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            console.error(userError);
            setMessage("You must be logged in to log an activity.");
            return;
        }

        const userId = user.id;

        // find the selected activity
        const activity = activitiesList.find(a => a.id === parseInt(selectedActivity));
        if (!activity) {
            setMessage("Invalid activity selected.");
            return;
        }

        // insert into user_activities table
        const { error: insertError } = await supabase
            .from("user_activities")
            .insert([{
                user_id: userId,
                activity_id: activity.id,
                logged_at: new Date().toISOString(),
            }]);

        if (insertError) {
            console.error(insertError);
            setMessage("Error logging activity.");
            return;
        }

        // get points total
        const { data: userPointsData, error: pointsError } = await supabase
            .from("user_points")
            .select("total_points")
            .eq("user_id", userId)
            .maybeSingle(); // changed single to maybeSingle

        if (pointsError) {
            console.error(pointsError);
            setMessage("Error fetching user points.");
            return;
        }

        const currentPoints = userPointsData?.total_points || 0;
        const newTotal = currentPoints + activity.score;

        // update or insert new points total
        const { error: upsertError } = await supabase
            .from("user_points")
            .upsert({ user_id: userId, total_points: newTotal });

        if (upsertError) {
            console.error(upsertError);
            setMessage("Error updating user points.");
            return;
        }

        setMessage(`Activity logged! +${activity.score} points added (total: ${newTotal}).`);
    };


    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <h2>Pick your eco-friendly activity</h2>
                <select value={selectedActivity} onChange={handleSelectActivity}>
                    <option value="">Select an activity...</option>
                    {activitiesList.map((action) => (
                        <option key={`${action.id}-${action.name}`} value={action.id}>
                            {action.name} ({action.score})
                        </option>
                    ))}
                </select>

                <button className={styles.button} onClick={handleSubmitActivity}>
                    Log Activity
                </button>
                {/* can remove later - just shows if activity was logged or not */}
                {message && <p className={styles.message}>{message}</p>}
                
            </div>
            <p>Scroll down to see your recent activity log and leaderboard!</p>
        </div>
    );
};
