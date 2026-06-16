import { cn } from '@lib/utils';

const TodoName = ({ done, name }) => {
  return <span className={cn('flex-1', done && 'line-through')}>{name}</span>;
};

export default TodoName;
