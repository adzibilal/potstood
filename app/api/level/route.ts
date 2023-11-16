import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    try {
        const level = await db.level.findMany({
            orderBy: {
                createdAt: 'desc'
            },
        })

        return NextResponse.json(level)
    } catch (error) {
        console.log('[GET LEVEL]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}
