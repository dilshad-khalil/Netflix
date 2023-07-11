import React from 'react'
import {useState , useEffect} from 'react'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'
import Movie from './Movie';
import { UserAuth } from './context/AuthContext';
import {db} from './firebase'
import { doc, setDoc , updateDoc , onSnapshot } from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'



const SavedShows = () => {

  const [movies, setMovies] = useState([]);
   
  const { user } = UserAuth();
   
  //making a slider for the movies
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  
  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      updateDoc(movieRef, {
        saveShows:result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saveShows);
    })
  }, [user?.email])
  

  
  return (
    <>
     <div>
          <h2 className='text-white font-bold md:text-xl p-4 '>My Shows</h2>
          <div className='relative flex items-center group'>
              <MdChevronLeft size={35} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden
                  group-hover:block left-0'
             onClick={ slideLeft }
                  />
              
              <div id={'slider'}
              className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
                  {
                      movies.map((item, id) => (
                           <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block 
                  cursor-pointer relative p-2'>
                  <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title} />
                 <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100
                     text-white'>
                     <p className='white-space-normal text-xs font-bold md:text-sm
                     flex justify-center items-center h-full text-center p-2'>{item.title}</p>
                            <p
                              onClick={()=> deleteShow(item.id)}
                              className=' absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                 </div>

    </div>
                      ))
                  }
              </div>
              <MdChevronRight size={35} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden
                  group-hover:block right-0'
             onClick={ slideRight }
                  />

          </div>
    </div></>
  )
}

export default SavedShows