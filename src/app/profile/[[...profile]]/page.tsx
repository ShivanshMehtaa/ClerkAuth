// server components just for example
// for protection through component level
// client components protection through middleware
import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'
const Profile = async () => {

    const { userId } = auth();
    const isAuthenticated = !!userId;
    const user = await currentUser();

    if (!isAuthenticated) redirect("/");

    return (
        <div className='flex flex-col mt-8 items-center justify-center'>

            <h1 className='text-2xl'> {user?.username} </h1>
            <p>{user?.createdAt}</p>
            <UserProfile />
        </div>
    )
}

export default Profile
