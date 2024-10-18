import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export function SimplePagination({ active, next, prev }) {
    
  return (
    <div className="flex items-center gap-8">
      <IconButton size="sm" variant="outlined" onClick={prev} disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="white" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{' '}
        <strong className="text-gray-900">5</strong>
      </Typography>
      <IconButton size="sm" variant="outlined" onClick={next} disabled={active === 5}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
