import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';

function Profile() {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [savedArticlesCount, setSavedArticlesCount] = useState(1);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('newsx-details'));
        setUsername(user.username);
        setEmail(user.email);
        setName(user.name);
    }, [])

    return (
        <div className="" > 
            <ProfileDetails username={username} email={email} name={name} />

            {/* saved articles */}
            <div className='m-0 md:m-6 p-6 bg-primaryBlue w-full md:w-1/2 xl:w-1/3 text-white rounded-md shadow-lg'>
                <p className='text-xl mb-4 text-white capitalize'>my saved articles</p>
                {
                    savedArticlesCount === 0 ? 
                    <p className='text-white text-center mb-6'>You haven't saved any Articles yet.!</p>
                    :
                    <>
                        <p className='mb-6'>Total saved Articles: {savedArticlesCount}</p>
                        <div className='w-full flex justify-end'>
                            <div className="bg-darkBlue px-4 py-2 rounded-md flex gap-1 items-center" onClick={() => {
                                alert("saving option will be available soon...!");
                            }}>
                                View
                                <AiOutlineRight className='h-4 w-4'/>
                            </div>
                        </div>
                    </>
                }
                
            </div>

        </div>
    );
}

function ProfileDetails({username, email, name}) {
    return (
        <>
            <p className='mb-10'>My Profile</p>
            <div className="w-full flex items-center justify-center mb-14">
                <div className='grid gap-1'>
                    <FaUserCircle  className='h-32 w-32 text-darkBlue'/>
                    <p className='text-center text-2xl'>{username}</p>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-sm mb-2'>Full name :</p>
                <p className='text-xl mb-10'>{name}</p>
                <p className='text-sm mb-2'>Email :</p>
                <p className='text-xl mb-10'>{email}</p>
            </div>
        </>
    );
}


export default Profile;