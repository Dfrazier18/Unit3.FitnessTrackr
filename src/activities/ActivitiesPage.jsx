import useQuery from "../api/useQuery";

export default function ActivitiesPage() {
  const { data: activities, loading, error } = useQuery("/activities");

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ul id="activities">
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
