import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
    req: Request,
    { params }: { params: { levelId: string } }
) {
    try {
        const { levelId } = params
        const values = await req.json()

        const level = await db.level.update({
            where: {
                id: levelId
            },
            data: {
                ...values
            }
        })

        return NextResponse.json(level)
    } catch (error) {
        console.log('[UPDATE LEVEL]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { levelId: string } }
) {
    try {
        const { levelId } = params

        const level = await db.level.delete({
            where: {
                id: levelId
            }
        })

        return NextResponse.json(level)
    } catch (error) {
        console.log('[DELETE LEVEL]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}
