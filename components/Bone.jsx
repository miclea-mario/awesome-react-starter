import { cn } from '@lib/utils';

const Bone = ({ type, extraClass }) => {
  return (
    <dd
      className={cn(
        'h-4 rounded-full',
        extraClass || 'w-12',
        type === 'pending' && 'animate-pulse bg-gray-300',
        type === 'error' && 'bg-red-300'
      )}
    ></dd>
  );
};

export default Bone;
