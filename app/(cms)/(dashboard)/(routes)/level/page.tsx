'use client'

import { Level } from '@prisma/client'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import SkeletonTable from './_components/skeleton-table'

const LevelPage = () => {
    const [level, setLevel] = useState<Level[]>()

    const getLevel = async () => {
        try {
            const res = await axios.get(`/api/level`)
            setLevel(res.data)
        } catch (error) {
            toast.error('Gagal mengambil data level')
        }
    }

    useEffect(() => {
        getLevel()
    }, [])
    return (
        <div className='bg-white p-5 mr-5 rounded-xl'>
            <h1 className='font-semibold text-zinc-800 text-xl'>
                Data Level Platform
            </h1>
            {level ? (
                <DataTable columns={columns} data={level} onRefresh={getLevel}/>
            ) : (
                <SkeletonTable />
            )}
        </div>
    )
}

export default LevelPage
