import React from "react";
import Axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const handleClick = async () => {
    if (user) {
      await Axios.delete(
        "https://mernapp-render-be.onrender.com/api/workouts/" + workout._id,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
        .then((response) => {
          dispatch({ type: "DELETE_WORKOUT", payload: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
}

export default WorkoutDetails;
