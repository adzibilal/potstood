import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
    req: Request,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params
        const values = await req.json()

        console.log('values.image', values.image)
        const user = await db.user.update({
            where: {
                id: userId
            },
            data: {
                avatar: values.image
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        console.log('[CHANGE AVA]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}
