import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { getAllTasks} from '../services/TaskService';


function Productpage(){
    const [tasks, setTasks] = useState([])

  useEffect(() => {
    getAllTasks().then(tasks => {
        console.log(tasks)
        setTasks(tasks)
      });
  })
    return(
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-4">GEN 1 Product Coming Soon...</h1>
                <p className="text-xl text-gray-400">In the mean time, we have created a way for you to interact with our data and learn some cool things about how our economic-based model works!</p>
            </div>
        <div className="grid gap-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <SearchBar tasks = {tasks}/>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Productpage;