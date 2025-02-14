import React from 'react'
import { useState } from 'react'

function App() {
const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  setmainTask([...mainTask,{title,desc}])
  settitle("")
  setdesc("")
}

const deletehandler=(i)=>{
  let copyTask=[...mainTask]
  copyTask.splice(i,1)
  setmainTask(copyTask)
}

let renderTask= <h2>No tasks Available</h2>


if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between mb-5'>
       <div className='flex justify-between mb-5 w-2/3'>

    <h5 className='text-2xl font-medium'>{t.title}</h5>
    <h6 className='text-lg font-medium'>{t.desc}</h6>
    
    </div>

    <button onClick={()=>{
      deletehandler(i)
    }} className='bg-red-300 px-3 py-2 rounded-md font-bold' >Delete</button>
    </li>
  })
}
  return (
    <>
      <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>My Todo List</h1>
      <form onSubmit={submitHandler}>

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter task here' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter description here' value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }} />
      <button className='bg-black text-white px-4 py-3 text-2xl rounded-md m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default App
