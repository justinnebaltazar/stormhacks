import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"
import styles from "../ActivityTracker/ActivityTracker.module.css"

export const ActivityTracker = () => {
    [activities, setActivities] = useState([])
    
    useEffect(() => {
        async function fetchActivities() {
            const {data, error} = await supabase.from("activities").select("*");

            if (error) console.error(error);
            else setActivities(data);
        }
        fetchActivities()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <h2>Pick your eco-friendly activity!</h2>
                <select>
                    
                </select>
            </div>
        </div>
    )
}