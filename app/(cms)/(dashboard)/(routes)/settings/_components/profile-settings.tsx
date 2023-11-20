'use client'
import { FileUpload } from '@/components/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User } from '@prisma/client'
import axios from 'axios'
import { Camera, Mail, AtSign, Phone, Pen, Edit } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ProfileSettings = () => {
    const { data: session } = useSession()

    const [userId, setUserId] = useState(undefined)
    const [isEditing, setIsEditing] = useState(false)
    const [isPhotoEdit, setIsPhotoEdit] = useState(false)
    const [profile, setProfile] = useState<User>()
    const [dataEdit, setDataEdit] = useState<User>()

    const getProfile = async () => {
        if (!userId) return
        try {
            const res = await axios.get(`/api/settings/${userId}/profile`)

            console.debug(res.data)
            setProfile(res.data)
        } catch (error) {
            toast.error('Gagal mengambil data profile')
        }
    }

    useEffect(() => {
        //@ts-ignore
        setUserId(session?.user.userData.id)
    }, [session])

    useEffect(() => {
        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    const toggleEdit = () => {
        setDataEdit(profile)
        setIsEditing(!isEditing)
    }

    const handleEdit = async () => {
        if (!userId) return
        toast.loading('Loading...')
        try {
            const res = await axios.patch(
                `/api/settings/${userId}/profile`,
                dataEdit
            )
            setIsEditing(false)
            getProfile()
            toast.dismiss()
            toast.success('Profile berhasil diubah')
        } catch (error) {
            console.error(error)
            toast.dismiss()
            toast.error('Profile gagal diubah')
        }
    }

    const changeAva = async (image: string) => {
        if (!userId) return

        console.error(image, 'image')
        toast.loading('Loading ...')

        const data = {
            image: image
        }
        try {
            const res = await axios.patch(
                `/api/settings/${userId}/profile/ava`,
                data
            )

            setIsPhotoEdit(false)
            getProfile()
            toast.dismiss()
            toast.success('Foto berhasil diubah')
        } catch (error) {
            console.error(error)
            toast.dismiss()
            toast.error('Foto gagal diubah')
        }
    }

    return (
        <div className='bg-white p-5 rounded-xl relative'>
            {!isEditing && profile && (
                <Button
                    className='absolute z-20 right-5'
                    variant='outline'
                    onClick={toggleEdit}>
                    <Pen width={12} className='mr-2' /> Edit
                </Button>
            )}
            {profile && (
                <>
                    <div className='flex gap-10 items-start max-sm:flex-col'>
                        {/* AVA COMPONENT */}
                        {!isPhotoEdit ? (
                            <div className='relative w-max aspect-square'>
                                {profile.avatar ? (
                                    <Image
                                        width={200}
                                        height={200}
                                        alt=''
                                        src={profile.avatar}
                                        className='rounded-full aspect-square object-cover'
                                    />
                                ) : (
                                    <div className='w-40 h-40 p-1 rounded-full bg-zinc-200'></div>
                                )}
                                <div
                                    onClick={() => {
                                        setIsPhotoEdit(true)
                                    }}
                                    className='bg-green-600 hover:bg-green-500 cursor-pointer absolute bottom-0 right-0 text-white w-10 h-10 flex items-center justify-center rounded-full '>
                                    <Camera />
                                </div>
                            </div>
                        ) : (
                            <div className=''>
                                <FileUpload
                                    endpoint='avaImage'
                                    onChange={url => {
                                        if (url) {
                                            changeAva(url)
                                        }
                                    }}
                                />
                                <div className='text-xs text-muted-foreground mt-10 '>
                                    1:1 aspect ratio recommended
                                </div>
                            </div>
                        )}
                        {!isEditing && (
                            <div className=''>
                                <div className='bg-blue-200 text-blue-700 uppercase px-3 py-1 text-xs rounded-sm w-max'>
                                    {profile.role}
                                </div>
                                <h1 className='text-3xl font-bold text-zinc-800 mt-2 mb-1'>
                                    {profile.name}
                                </h1>
                                <div className='text-zinc-500 flex items-center gap-1 mb-1'>
                                    <Mail width={18} height={18} />{' '}
                                    {profile.email}
                                </div>
                                <div className='text-zinc-500 flex items-center gap-1'>
                                    <AtSign width={18} height={18} />{' '}
                                    {profile.username}
                                </div>
                                <div className='text-zinc-500 flex items-center gap-1'>
                                    <Phone width={18} height={18} />{' '}
                                    {profile.noWhatsApp
                                        ? profile.noWhatsApp
                                        : '-'}
                                </div>
                            </div>
                        )}{' '}
                        {isEditing && dataEdit && (
                            <div className='w-full'>
                                <div className='text-xs font-semibold mb-1'>
                                    Nama
                                </div>
                                <Input
                                    className='mb-3 w-full'
                                    defaultValue={dataEdit.name}
                                    onChange={event => {
                                        setDataEdit({
                                            ...dataEdit,
                                            name: event.target.value
                                        })
                                    }}
                                />
                                <div className='text-xs font-semibold mb-1'>
                                    Email
                                </div>
                                <Input
                                    className='mb-3 w-full bg-zinc-100'
                                    type='email'
                                    defaultValue={dataEdit.email}
                                    readOnly
                                    onChange={event => {
                                        setDataEdit({
                                            ...dataEdit,
                                            email: event.target.value
                                        })
                                    }}
                                />
                                <div className='text-xs font-semibold mb-1'>
                                    Username
                                </div>
                                <Input
                                    className='mb-3 w-full'
                                    defaultValue={dataEdit.username}
                                    onChange={event => {
                                        setDataEdit({
                                            ...dataEdit,
                                            username: event.target.value
                                        })
                                    }}
                                />
                                <div className='text-xs font-semibold mb-1'>
                                    No WhatsApp
                                </div>
                                <Input
                                    className='mb-3 w-full'
                                    placeholder='No WhatsApp ...'
                                    defaultValue={dataEdit.noWhatsApp ?? ''}
                                    onChange={event => {
                                        setDataEdit({
                                            ...dataEdit,
                                            noWhatsApp: event.target.value
                                        })
                                    }}
                                />

                                <div className='flex gap-2 items-center'>
                                    <Button
                                        variant='primary'
                                        onClick={handleEdit}>
                                        Simpan
                                    </Button>
                                    <Button
                                        variant='secondary'
                                        onClick={toggleEdit}>
                                        Batal
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default ProfileSettings
