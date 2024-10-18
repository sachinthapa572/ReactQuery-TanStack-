import { Typography } from '@material-tailwind/react';

function IndividualRecipePlaceholderSkeleton() {
  return (
    <div className="max-w-screen-lg mx-auto mt-5 mb-5 p-8 bg-white rounded-lg shadow-lg animate-pulse">
      <Typography as="h1" variant="h1" className="mb-4 h-8 w-3/4 rounded-full bg-gray-300">
        &nbsp;
      </Typography>

      <div className="overflow-hidden rounded-lg mb-6 shadow-md">
        <div className="h-56 w-full bg-gray-300 animate-pulse"></div>
      </div>

      <div className="flex justify-between mb-6 text-gray-700 text-sm border-b pb-4">
        <div className="h-4 w-1/4 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded-full"></div>
      </div>

      <div className="mb-8">
        <Typography as="h2" variant="h2" className="h-6 w-1/3 mb-3 rounded-full bg-gray-300">
          &nbsp;
        </Typography>
        <ul className="list-disc list-inside pl-4 text-gray-700">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="h-4 w-3/4 mb-2 bg-gray-300 rounded-full"></li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <Typography as="h2" variant="h2" className="h-6 w-1/3 mb-3 rounded-full bg-gray-300">
          &nbsp;
        </Typography>
        <ol className="list-decimal list-inside pl-4 text-gray-700">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="h-4 w-3/4 mb-2 bg-gray-300 rounded-full"></li>
          ))}
        </ol>
      </div>

      <div className="mb-8 text-gray-700 border-t pt-4 text-sm">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-4 w-1/2 mb-2 bg-gray-300 rounded-full"></div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-700 border-t pt-4">
        <div className="h-4 w-1/4 bg-gray-300 rounded-full"></div>
        <button className="h-10 w-28 bg-gray-300 rounded-md shadow-none animate-pulse"></button>
      </div>
    </div>
  );
}

export default IndividualRecipePlaceholderSkeleton;
