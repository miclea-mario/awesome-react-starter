import { Time } from '@components';

const todoColumns = [
  {
    id: 'no',
    header: '#',
    accessorKey: 'no',
    extraClass: 'w-10',
  },
  {
    id: 'name',
    header: 'My To Do',
    accessorKey: 'name',
  },
  {
    id: 'createdAt',
    header: 'Created At',
    accessorKey: 'createdAt',
    cell: Time,
  },
  {
    id: 'author',
    header: 'Author',
    accessorKey: 'identity.name',
  },
];

export default todoColumns;
