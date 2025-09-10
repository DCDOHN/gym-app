import { createClient } from "@/lib/supabase/server";

export default async function Page() {
    const supabase = await createClient();
    const { data: workouts } = await supabase.from("workouts").select();

    return <pre>{JSON.stringify(workouts)}</pre>;
}
