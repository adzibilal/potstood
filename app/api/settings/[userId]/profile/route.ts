import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(
    req: Request,
    { params }: { params: { userId: string } }
) {
    try {
        const user = await db.user.findUnique({
            where: {
                id: params.userId
            },
            include: {
                Platform: true
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.log('[GET USER]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params
        const values = await req.json()

        const user = await db.user.update({
            where: {
                id: userId
            },
            data: {
                name: values.name,
                email: values.email,
                username: values.username,
                noWhatsApp: values.noWhatsApp
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.log('[UPDATE USER]', error)
        return new NextResponse(`'Internal Error' - ${error}`, { status: 500 })
    }
}
