
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImages } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

const PostCreationComponent = () => {
  return (
    <>
      {/* <h1 className='border-2 w-96'>Share page</h1> */}
      <div className='w-96 broder-2 border-gray-300 rounded-full m-10'>
        <div className='flex border-2 gap-2 p-2 focus:outline-none focus:ring-0'>
            <img src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-8 h-8 rounded-full focus:outline-none focus:ring-0'/>
            <input type="search" name="search_ber" id="search" placeholder="What's on your mind..."  className='w-80 h-8 bg-gray-200 font-sans border-2 rounded-2xl p-2 border-gray-300 px-4 focus:outline-none focus:ring-0'/>
        </div>
        <div className='grid grid-cols-3 border-2 gap-2 p-2'>
        <div className='flex items-center gap-2 border p-2 rounded'>
            <FontAwesomeIcon icon={faVideo} className="text-green-400" />
            <h4 className='text-sm'>Live video</h4>
          </div>
          <div className='flex items-center gap-2 border p-2 rounded'>
            <FontAwesomeIcon icon={faImages} className="text-purple-400" />
            <h4 className='text-sm'>Photo/video</h4>
          </div>
          <div className='flex items-center gap-2 border p-2 rounded'>
            <FontAwesomeIcon icon={faFlag} className="text-red-500" />
            <h4 className='text-sm'>Live event</h4>
          </div>
        </div>
      </div>

    </>
  )
}

export default PostCreationComponent
