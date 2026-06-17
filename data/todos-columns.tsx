import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { DataTableColumnHeader } from '@components/ui/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { toaster } from '@lib';
import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle, Copy, MoreHorizontal, TrashIcon, XCircle } from 'lucide-react';

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
            table.getIsAllRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
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

      const toggleDone = () => {
        // Simulate toggling the done state of the task
        const newDoneState = !todo.done;
        toaster.promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(newDoneState);
            }, 1000);
          }),
          {
            loading: 'Updating task status...',
            success: (newState) => {
              return {
                message: `Task marked as ${newState ? 'done' : 'not done'}`,
                action: {
                  label: 'Undo',
                  onClick: () => {
                    toggleDone();
                  },
                },
              };
            },
            error: 'Failed to update task status',
          }
        );
      };

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={handleCopyTask}>
                <Copy /> Copy task
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={toggleDone}>
                {todo.done ? (
                  <>
                    <XCircle /> Unmark as done
                  </>
                ) : (
                  <>
                    <CheckCircle /> Mark as done
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <TrashIcon />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
