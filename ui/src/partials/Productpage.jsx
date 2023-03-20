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
            console.log("got the transactions")
            setTransactions(transactions)
          });
      
    }, [])

  useEffect(() => {
    getAllTasks().then(tasks => {
        setTasks(tasks)
      });
  }, [])
  
    return(
        <section>
            <div className="max-w-6xl mx-auto px-6 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="grid gap-15">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                <h1 className="h2 mb-4">GEN 1 Product Coming Soon...</h1>
                <p className="text-xl text-gray-400">In the mean time, we have created a way for you to interact with our data and learn some cool things about how our economic-based model works!</p>
            </div>
            <div>
            <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                <h1 className="h2 mb-4">U.S. Counties Information</h1>
            </div>
            <div>
                <SearchBar tasks = {tasks}/>
            </div>
            </div>
            <div>
                <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                    <h1 className="h2 mb-4 pt-20">Ohio Business Economic Landscape Tool</h1>
                </div>
                <div>
                <TransactionForm transactions={transactions} />
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Productpage;