import axios from 'axios';
import React from 'react'
import {useState , useEffect} from 'react'
import Movie from './Movie';
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'


//fetch url is just a prop that we passed to get the url
const Row = ({ title, fetchURL , rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((resp) => {
            setMovies(resp.data.results)
        })
    }, [fetchURL]);

    //making a slider for the movies
    const slideLeft = () => {
        const slider = document.getElementById('slider'+rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider'+rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }


  return (
      <div>
          <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
          <div className='relative flex items-center group'>
              <MdChevronLeft size={35} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden
                  group-hover:block left-0'
                  onClick={ slideLeft } />
              
              <div id={'slider' + rowID}
              className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
                  {
                      movies.map((item, id) => (
                          <Movie key={id} item={item} />
                      ))
                  }
              </div>
              <MdChevronRight size={35} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden
                  group-hover:block right-0'
                  onClick={ slideRight } />

          </div>
    </div>
  )
}

export default Row