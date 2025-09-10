import { createClient } from "@/lib/supabase/server";

export default async function WorkoutBubble({
    workoutData,
}: {
    workoutData?: any;
}) {
    const supabase = await createClient();
    const { data: workoutExercises } = await supabase
        .from("workout_exercises")
        .select("*")
        .eq("workout_id", workoutData.id);

    console.log("workoutExercises => ", workoutExercises);
    return (
        <div className="border p-4 m-2 rounded shadow">
            <h3>{workoutData.workout_name}</h3>
            {workoutExercises?.map((exercise) => (
                <p key={exercise.id}>{exercise.name}</p>
            ))}
            <button>start workout</button>
        </div>
    );
}
