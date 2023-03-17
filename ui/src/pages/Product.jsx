import React, { useState, useEffect } from 'react'
import { Tasks } from '../partials/Tasks'
import { getAllTasks, deleteTask, fetchSettings } from '../services/TaskService'
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import SearchBar from '../partials/SearchBar';

function Product() {
  const [tasks, setTasks] = useState([])
  const [numberOfTasks, setNumberOfTasks] = useState([])
  const [isTaskEdited, setTaskEdited] = useState(false)

  useEffect(() => {
    getAllTasks().then(tasks => {
        console.log(tasks)
        setTasks(tasks)
      });
  }, [numberOfTasks, isTaskEdited])


  function delTask(taskId) {
      deleteTask(taskId).then(response => {
        console.log(response)
        setNumberOfTasks(numberOfTasks - 1)
      });
  }

  function taskCreated() {
    setNumberOfTasks(numberOfTasks + 1)
  }

  function taskEdited(res) {
     setTaskEdited(res)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
      </main>
      <SearchBar />
      <div className="container mrgnbtm">
        <div className="row">
        </div>
      </div>
      <div className="container mrgnbtm">
        <Tasks tasks={tasks} deleteTask={delTask} taskEdited={taskEdited}></Tasks>
     </div> 

      <Banner />
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Product;