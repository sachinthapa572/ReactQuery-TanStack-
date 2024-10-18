import { useQuery } from '@tanstack/react-query';
import { FetchFoodRecipes } from '../Api/api';
import { CardDefault } from '../Components/CommonCard';
import { Typography } from '@material-tailwind/react';
import { CardPlacehoderSkeleton } from '../Components/skeleton/CardPlaceholderSkeleton';
import { SimplePagination } from '../Components/ui/Pagination';
import { useState } from 'react';

function Recipes() {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === totalPages) return; 
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipes', active],
    queryFn: () => FetchFoodRecipes(active),
    staleTime: 86400000, // Stale time (make the data fresh)
    gcTime: 86400000, // Garbage collection time (cache data)
  });

  const totalPages = data?.totalPages || 5;

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10 min-h-screen bg-gray-700-50">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && (
          <>
            {new Array(6).fill(0).map((_, index) => (
              <CardPlacehoderSkeleton key={index} />
            ))}
          </>
        )}

        {isError && (
          <div className="col-span-full text-center">
            <Typography variant="h2" className="text-red-500">
              Error: {error.message}
            </Typography>
          </div>
        )}

        {data?.recipes?.map((curElem) => {
          const { id, name, image, rating, reviewCount } = curElem;
          const roundedRating = Math.round(rating);
          return (
            <CardDefault
              key={id}
              id={id}
              heading={name}
              image={image}
              rating={roundedRating}
              reviewCount={reviewCount}
            />
          );
        })}

        <SimplePagination active={active} next={next} prev={prev} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Recipes;