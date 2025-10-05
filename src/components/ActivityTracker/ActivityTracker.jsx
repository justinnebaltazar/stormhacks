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
        setMessage("");

        if (!selectedActivity) {
            setMessage("select an activity");
            return;
        }

        // get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) {
            console.error(userError);
            setMessage("error fetching user");
            return;
        }

        if (!user) {
            setMessage("you must be logged in to log an activity");
            return;
        }

        // insert activity
        const { error: insertError } = await supabase.from("user_activities").insert([
            {
                user_id: user.id,
                activity_id: selectedActivity,
                logged_at: new Date().toISOString(),
            },
        ]);

        if (insertError) {
            console.error(insertError);
            setMessage("error logging selected activity");
        } else {
            setMessage("activity logged successfully!");
            setSelectedActivity("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <h2>Pick your eco-friendly activity!</h2>
                <select value={selectedActivity} onChange={handleSelectActivity}>
                    <option value="">Select an activity...</option>
                    {activitiesList.map((action) => (
                        <option key={action.id} value={action.id}>
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
        </div>
    );
};
