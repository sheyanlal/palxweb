import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import { getAllTasks} from '../services/TaskService';
import TransactionForm from './TransactionForm'
import { getAllTransactions} from '../services/TransactionService'


function Productpage(){
    const [tasks, setTasks] = useState([])
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAllTransactions().then(transactions => {
            setTransactions(transactions)
          });
      
    }, [])

  useEffect(() => {
    getAllTasks().then(tasks => {
        setTasks(tasks)
      });
  }, [])
  
    return(
            <div className="max-w-6xl mx-auto px-6 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                <h1 className="h1 mb-4">GEN 1 Product Coming Soon...</h1>
                <p className="text-2xl text-gray-400">In the mean time, we have created a way for you to interact with our data and learn some cool things about how our economic-based model works!</p>
            </div>
            <div className='productbucket shadow-2xl p-10 rounded-xl'>
            <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                <h1 className="h3 mb-4">U.S. Counties Information</h1>
                <p className="text-xl text-gray-400">Enter in the United States County you live in below to get some basic economic information pertaining to the employment trends in your region!</p>
            </div>
            <div>
                <SearchBar tasks = {tasks}/>
            </div>
            </div>
            <p className='pt-20'></p>
            <div className='productbucket shadow-2xl p-10 rounded-xl'>
                <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                    <h1 className="h3 mb-4 ">Ohio Business Economic Landscape Tool</h1>
                    <p className="text-xl text-gray-400">Ohio Business Owners can enter in their business address below to get a view of the economic and competitive landscape that surrounds them from companies that PALX tracks!</p>
                </div>
                <div>
                <TransactionForm transactions={transactions} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Productpage;