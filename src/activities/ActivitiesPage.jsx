/*import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";*/

/*export default function ActivitiesPage() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activitylist");

  /*if (loading) return <p>Loading activities...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ul id="activities">
        {activities?.map((activity) => (
          <li key={activity.id}>
            <p>{activity.name}</p>
          </li>
        ))}
      </ul>
    </>
  );

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

  return (
    <li>
      <p>{activity.name}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}*/

import { useAuth } from "../auth/AuthContext";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {token && <ActivityForm />}
    </>
  );
}
