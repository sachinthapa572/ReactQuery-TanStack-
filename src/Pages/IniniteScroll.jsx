import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchFoodRecipes } from '../Api/api';
import { CardDefault } from '../Components/CommonCard';
import { Typography } from '@material-tailwind/react';
import { CardPlacehoderSkeleton } from '../Components/skeleton/CardPlaceholderSkeleton';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function IniniteScroll() {
  const limit = 12;

  // Infinite Query from React Query
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['recipes'],
      queryFn: ({ pageParam = 0 }) => FetchFoodRecipes({ limit, skip: pageParam }),
      getNextPageParam: (lastPage, allPages) => {
        const totalRecipes = lastPage.total || 0;
        const loadedRecipes = allPages.flatMap((page) => page.recipes).length;
        return loadedRecipes < totalRecipes ? loadedRecipes : undefined;
      },
      staleTime: 86400000, // Data stays fresh for 1 day
      cacheTime: 86400000, // Cache the data for 1 day
    });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10 min-h-screen bg-gray-700-50">
      {/* Recipe Cards Grid */}
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

        {/* Rendering fetched recipes */}
        {data?.pages?.map((page) =>
          page.recipes.map((curElem) => {
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
          })
        )}
      </div>

      {/* Skeleton loader for additional pages */}
      <div className="flex justify-center mt-8">
        {isFetchingNextPage && (
          <>
            {new Array(3).fill(0).map((_, index) => (
              <CardPlacehoderSkeleton key={index} />
            ))}
          </>
        )}
      </div>

      {/* Element to trigger the next page loading */}
      <div ref={ref} className="flex justify-center mt-4">
        {hasNextPage && !isFetchingNextPage && (
          <Typography className="text-gray-500">Loading more recipes...</Typography>
        )}
      </div>
    </div>
  );
}

export default IniniteScroll;
