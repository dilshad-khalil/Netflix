import React from 'react'
import {useState , useEffect} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../Components/context/AuthContext'
import { db } from './firebase'
import { doc, arrayUnion, updateDoc } from 'firebase/firestore'

const Movie = ({ item }) => {
  const { user } = UserAuth();

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false) 
  const movieID = doc(db , 'users' , `${user?.email}`)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          img:item.backdrop_path
        })
      })
    } else {
      alert('Please Log in to your account')
    }
  }


  return (
   <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block 
     cursor-pointer relative p-2'>
         <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
         <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100
         text-white'>
             <p className='white-space-normal text-xs font-bold md:text-sm
             flex justify-center items-center h-full text-center p-2'>{item.title}</p>
             <p onClick={saveShow}>
                 {like ? <FaHeart className='absolute
                 top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute
                 top-4 left-4 text-gray-300'/>}
             </p>
         </div>

    </div>
  )
}

export default Movie