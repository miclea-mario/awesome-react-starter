import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { DataTableColumnHeader } from '@components/ui/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { toaster } from '@lib';
import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle, MoreHorizontal, XCircle } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Todo = {
  name: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
};

export const columns: ColumnDef<Todo>[] = [
  {
    id: 'select-col',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
  },
  {
    accessorKey: 'identity.name',
    header: 'User',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Task" />;
    },
  },
  {
    accessorKey: 'done',
    header: () => {
      return <div className="text-right">Done</div>;
    },
    cell: ({ row }) => {
      const done = row.getValue('done');
      return (
        <div className="flex justify-end">
          {done ? (
            <CheckCircle className="size-4" />
          ) : (
            <XCircle className="size-4 text-destructive" />
          )}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const todo = row.original;

      const handleCopyTask = () => {
        navigator.clipboard.writeText(todo.name);
        toaster.success('Task copied to clipboard');
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleCopyTask}>Copy task</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View todo details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
