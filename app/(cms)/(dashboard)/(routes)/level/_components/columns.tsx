'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Pencil, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Level } from '@prisma/client'

export const columns: ColumnDef<Level>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }>
                    Nama Level
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        }
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }>
                    Status
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        },
        cell: ({ row }) => {
            const { status } = row.original

            return (
                <div className='flex items-center gap-3'>
                    <div
                        className={`w-3 h-3 rounded-full ${
                            status === 'active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    />
                    <span>{status === 'active' ? 'Aktif' : 'Tidak Aktif'}</span>
                </div>
            )
        }
    },
    {
        id: 'actions',
        cell: ({ table, row }) => {
            const { id } = row.original

            return (
                <div className='flex items-center gap-3'>
                    <Button
                        variant='destructive'
                        size='sm'
                        className='w-max'
                        //@ts-ignore
                        onClick={() => table?.options?.meta?.handleDelete(id)}>
                        <Trash className='h-4 w-4' />
                    </Button>
                    <Button
                        variant='default'
                        size='sm'
                        className='w-max'
                        onClick={() =>
                            //@ts-ignore
                            table?.options?.meta?.handleEdit(row.original)
                        }>
                        <Pencil className='h-4 w-4' />
                    </Button>
                </div>
            )
        }
    }
]
