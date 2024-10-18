import { useQuery } from '@tanstack/react-query';
import { api } from '../Api/api';
const fetchStockData = async () => {
  try {
    const response = await api.get(
      'https://finnhub.io/api/v1/stock/market-status?exchange=US&token=cs74fopr01qkeulic54gcs74fopr01qkeulic550'
    );
    return response.data || [];
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to fetch stock data');
  }
};

function Polling() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['stock'],
    queryFn: fetchStockData,
    refetchInterval: 2000, // refetch the data every 2 seconds
    refetchIntervalInBackground: true, // when the tab is not active the data is fetched in the background
  });

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>
          <h2>Error Fetching Stock Data</h2>
          <p>{error.message}</p>
        </div>
      ) : (
        <div>
          <h1>Stock Data</h1>
          <p>
            Market Status: {data?.exchange}
            {data?.t}
          </p>
          <p>Market Time: {data?.marketTime}</p>
        </div>
      )}
    </>
  );
}
export default Polling;
