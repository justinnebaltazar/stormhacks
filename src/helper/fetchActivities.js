import supabase from "./supabaseClient";

/* takes logged activities */
export async function fetchUserActivities(userId, limit = null) {
    let query = supabase
        .from("user_activities")
        .select(`
            id,
            logged_at,
            activities ( name, category, score )
        `)
        .eq("user_id", userId)
        .order("logged_at", { ascending: false });

    if (limit) query = query.limit(limit);

    const { data, error } = await query;

    if (error) {
        console.error("Error fetching activities:", error);
        throw error; // so the caller can handle it
    }

    return data || [];
}
