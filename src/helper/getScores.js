import supabase from "./supabaseClient";

export async function getUserScores() {
    let query = supabase
        .from("user_points")
        .select(`
            total_points,
            profiles (display_name)
        `)
        .order("total_points", { ascending: false })

    const { data, error } = await query;

    console.log(data);

    if (error) {
        console.error("Error fetching scores:", error);
        throw error;
    }
    
    return data || [];
 }