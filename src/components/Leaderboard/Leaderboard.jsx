import { useEffect, useState } from "react"
import supabase from "../../helper/supabaseClient"

export const Leaderboard = () => {
    const [allScores, setallScores] = useState([])

    useEffect(() => {
        async function fetchUserScores () {
            console.log("in progress")
                
        } 
    })
    

    return (
        <div>

        </div>
    )
}