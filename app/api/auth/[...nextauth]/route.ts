import NextAuth, { Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { db } from '@/lib/db'

interface UserData {
    id: string
    name: string
    username: string
    email: string
    avatar: string
    isReset: boolean
    noWhatsApp: string
    role: string
}

// Update the CustomUser interface to include the UserData type
interface CustomUser extends User {
    userData?: UserData
}

// Update the CustomSession interface to use CustomUser
interface CustomSession extends Session {
    user: CustomUser
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                const user = await db.user.findUnique({
                    where: {
                        email: credentials!.email
                    }
                })
                console.log(user, 'user')
                console.log(user?.password, 'user pass')
                console.log(credentials!.password, 'cred pass')
                if (!user) return null

                if (user && user.password === credentials!.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-out'
    },
    callbacks: {
        async signIn(userDetail) {
            if (Object.keys(userDetail).length === 0) {
                return false
            }

            if (userDetail && userDetail.account?.provider === 'google') {
                const user = await db.user.findUnique({
                    where: {
                        email: userDetail.user.email || ''
                    }
                })

                if (!user) {
                    const currentDate = new Date()
                    const formattedDate = currentDate
                        .toISOString()
                        .replace(/[-T:\.Z]/g, '') // Mendapatkan tanggal dan waktu tanpa karakter khusus
                    const randomUsername = `user${formattedDate}`

                    try {
                        const newUser = await db.user.create({
                            data: {
                                email: userDetail.user.email!,
                                username: randomUsername,
                                password: '63440b5489efa0eab22a5a7dc6e6fb3e', //potstood123
                                name: userDetail.user.name || randomUsername
                            }
                        })
                        return true
                    } catch (error) {
                        return false
                    }
                }
            }

            return true
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/dashboard`
        },
        async session({ session, token, user }) {
            if (session && session.user) {
                const userData = await db.user.findUnique({
                    where: { email: session.user?.email! },
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        email: true,
                        avatar: true,
                        isReset: true,
                        noWhatsApp: true,
                        role: true
                    }
                })

                // @ts-ignore
                session.user.userData = userData
            }

            return session
        }
    }
})

export { handler as GET, handler as POST }
