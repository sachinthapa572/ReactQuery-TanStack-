import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails } from '../Api/api';

const userData = async (id) => {
  const response = await fetchUserDetails(id);
  return response.data || {};
};

function Home() {
  const userId = 1;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users', userId], // usestate hook
    queryFn: () => userData(userId), // useEffect hook
    // gcTime: 50000,  // Garbage collection time (save the data in the cache )
    staleTime: 50000, // Stale time (make the data is fresh so that the data is not request to the server)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        <h2>Error Fetching User</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
      <p>Website: {data?.website}</p>
    </div>
  );
}

export default Home;
