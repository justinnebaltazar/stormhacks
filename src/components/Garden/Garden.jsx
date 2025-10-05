import styles from "./garden.module.css"
import stand from "../../assets/stand.png"
import pot from "../../assets/pots.png"
import roof from "../../assets/roof.png"
import flower1 from "../../assets/flower1.png"
import flower2 from "../../assets/flower2.png"
import flower3 from "../../assets/flower3.png"
import flower4 from "../../assets/flower4.png"
import supabase from "../../helper/supabaseClient"
import { useState, useEffect } from "react"


export const Garden = () => {
    const [points, setPoints] = useState(0);
    const flowers = [
        {
            pic: flower1,
            points: 20
        },
        {
            pic: flower2,
            points: 40
        },
        {
            pic: flower3,
            points: 60
        },
        {
            pic: flower4,
            points: 80
        }
    ];

    useEffect(() => {
        async function fetchPoints () {

            // get the current user
            const { data: { user }, error: userError } = await supabase.auth.getUser();
            if (userError || !user) {
                console.error(userError);
                return;
            }
            // get user's points
            const { data, error } = await supabase.from("user_points")
                .select("total_points")
                .eq("user_id", user.id)
                .maybeSingle();
            if (error) console.error(error);
            else setPoints(data.total_points || 0)
        }
        fetchPoints();
    }, []);

    // get the number of flowers the user's unlocked
    // keep flower if user's total points is greater than the flower points
    // if flower points is greater, add the empty pot image instead while keeping the flower points
    const unlockedFlowers = flowers.map(f => ({...f, img: points >= f.points ? f.pic : pot}))

    // create a stands array to keep track of the flowers per stand
    const stands = []
    for (let i = 0; i < unlockedFlowers.length; i += 2) {
        // add two into an array
        stands.push(unlockedFlowers.slice(i, i+2))
    }

    return (
       <div className={styles.container}>
        <div className={styles.roofContainer}>
            {/* header */}
            <div className={styles.header}>
                <h1 className={styles.title}>My Garden</h1>
                <p className={styles.text}>Earn points and use them to unlock cute plants!</p>
            </div>
            <img className={styles.roof} src={roof} alt=""/>
        </div>

        {/* map the achievements */}
        <div className={styles.mapContainer}>
            {stands.map((standFlowers, index) => (
                <div className={styles.standContainer} key={index}>
                    
                    {/* map each flower */}
                    <div className={styles.flowermapContainer}>
                        {standFlowers.map((flower, i) => {
                            // if flower image is pot, then flower is locked
                            const isLocked = flower.img === pot
                            return (
                                <div className={styles.flowerContainer} key={i}>
                                    <img className={styles.flower} key={i} src={flower.img} alt={"unlocked flowers"}/>

                                    {/* display the amount of points needed to unlock the flower */}
                                    {isLocked && (
                                
                                        <p className={styles.hiddenText}>earn {flower.points - points} more points to unlock!</p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    
                    {/* stand image */}
                    <img className={styles.stand} src={stand} alt="stand"/>

                </div>
            ))}
        </div>
       </div>


    )
}