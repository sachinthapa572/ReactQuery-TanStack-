import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

export function CardDefault({ id, image, rating, heading, reviewCount }) {
  return (
    <Card className="transition-transform transform hover:scale-105 duration-300 shadow-lg rounded-lg overflow-hidden w-full bg-white">
      <CardHeader className="relative h-60">
        <img className="w-full h-full object-center" src={image} alt="card-image" />
      </CardHeader>
      <CardBody className="p-6 bg-blue-gray-800 text-white">
        <Typography variant="h5" className="mb-2 font-semibold text-lg">
          {heading}
        </Typography>
        <Typography className="text-sm">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
          &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
        </Typography>
        <div className="flex items-center justify-between pt-4">
          <Rating value={rating} readonly />
          <span className="text-xs text-gray-300">{reviewCount} reviews</span>
        </div>
      </CardBody>
      <CardFooter className="p-4 bg-blue-gray-900 text-center">
        <NavLink to={`/foodRecipe/${id}`}>
          <Button className="text-white bg-blue-600 hover:bg-blue-700">Read More</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}
