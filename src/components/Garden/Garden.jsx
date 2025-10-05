import styles from "./garden.module.css"
import flower1 from "../../../public/flower1.png"
import flower2 from "../../../public/flower2.png"
import flower3 from "../../../public/flower3.png"
import flower4 from "../../../public/flower4.png"
import supabase from "../../helper/supabaseClient"
import { useState, useEffect } from "react"


export const Garden = () => {
const [points, setPoints] = useState();
    const flowers = {
        flower1: {
            pic: {flower1},
            points: 20
        },
        flower2: {
            pic: {flower2},
            points: 40
        },
        flower3: {
            pic: {flower3},
            points: 60
        },
        flower4: {
            pic: {flower4},
            points: 80
        }
    };

    useEffect(() => {
        async function fetchPoints () {
            const { data, error } = await supabase.from("user_points").select("total_points");
            if (error) console.error(error);
            else setPoints(data)
        }
        fetchPoints();
    }, []);

    const numAchievements = Math.floor(points / 20)
    return (
       <h1>My garden</h1>


    )
}