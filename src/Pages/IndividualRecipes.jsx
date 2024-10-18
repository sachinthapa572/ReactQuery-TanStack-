import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FetchIndividualFoodRecipes } from '../Api/api';
import IndividualRecipePlaceholderSkeleton from '../Components/skeleton/IndividualRecipePlaceholderSkeleton';

function IndividualRecipes() {
  const { RecipeId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipe', RecipeId],
    queryFn: () => FetchIndividualFoodRecipes(RecipeId),
  });

  console.log(data);

  return (
    <div>
      {isLoading && <IndividualRecipePlaceholderSkeleton />}
      {isError && (
        <div>
          <h2>Error Fetching Recipe</h2>
          <p>{error.message}</p>
        </div>
      )}
      {data && (
        <div className="max-w-screen-lg mx-auto mt-5 mb-5 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{data.name}</h1>
          <div className="overflow-hidden rounded-lg mb-6 shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>
          <div className="flex justify-between mb-6 text-gray-700 text-sm border-b pb-4">
            <p>
              🕒 Prep: <span className="font-semibold">{data.prepTimeMinutes} mins</span>
            </p>
            <p>
              🍴 Servings: <span className="font-semibold">{data.servings}</span>
            </p>
            <p>
              🔥 Difficulty: <span className="font-semibold">{data.difficulty}</span>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Ingredients</h2>
            <ul className="list-disc list-inside pl-4 text-gray-700">
              {data.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside pl-4 text-gray-700">
              {data.instructions.map((instruction, index) => (
                <li key={index} className="mb-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
          <div className="mb-8 text-gray-700 border-t pt-4 text-sm">
            <p>
              <strong>Calories per Serving:</strong> {data.caloriesPerServing} kcal
            </p>
            <p>
              <strong>Cuisine:</strong> {data.cuisine}
            </p>
            <p>
              <strong>Meal Type:</strong> {data.mealType.join(', ')}
            </p>
            <p>
              <strong>Tags:</strong> {data.tags.join(', ')}
            </p>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-700 border-t pt-4">
            <p>
              ⭐ {data.rating.toFixed(1)} / 5.0 ({data.reviewCount} reviews)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndividualRecipes;
