import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProfileCard() {
    return (
        <div className="flex items-center p-4 space-x-4  rounded-lg">
            <div className="w-16 h-16">
                <Image
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="Profile Picture"
                    width={64}
                    height={64}
                    className="rounded-full"
                />
            </div>
            <div>
                <span className="text-xl  text-gray-800 dark:text-white">Personal blog by <Link href="https://mobile.twitter.com/dan_abramov" className='text-primary underline hover:no-underline dark:text-primaryLight'>Dan Abramov.</Link></span>
                <p className="text-gray-800 text-xl dark:text-white">I explain with words and code.</p>
            </div>
        </div>

    )
}

export default ProfileCard