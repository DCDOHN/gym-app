import { createClient } from "@/lib/supabase/server";
import WorkoutBubble from "../_components/WorkoutBubble";

export default async function page() {
    const supabase = await createClient();
    const { data: workouts } = await supabase.from("workouts").select();

    return (
        <main>
            <h1>Workouts</h1>
            <section>
                <h2>Your workouts</h2>
                <div>add workout</div>
                {workouts?.map((workout) => (
                    <WorkoutBubble key={workout.id} workoutData={workout} />
                )) || <p>No workouts found.</p>}
            </section>
        </main>
    );
}
