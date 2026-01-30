import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  


  const submitHandler = (e)=>{
    e.preventDefault();
  
    const copyTask = [...task]
    copyTask.push({title , detail})

    setTask(copyTask);
    console.log(copyTask)

    setTitle('');
    setDetail('');
  } 

  const deleteNote =(idx)=>{
    const copyTask = [...task];
    
    copyTask.splice(idx,1);

    setTask(copyTask);
  }

  return (
    <div>
       
      <div className="h-screen text-white flex flex- border-2 bg-cover bg-[url('')]">

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex w-1/2 items-start p-10 flex-col gap-4 border-2 bg-cover bg-[url('https://images.unsplash.com/photo-1576506542790-51244b486a6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">  
          <h1 className="text-3xl font-bold">Add Notes</h1>

          {/* // PEHLE WALA INPUT  */}
          <input
            className="px-5  w-full py-2 border-2 rounded"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* //DEATILED WALA INPUT */}
          <textarea
            className="px-5 w-full h-30 py-2 lg:border-2 rounded"
            type="text"
            placeholder="Write details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />

          <button className=" active:scale-95 bg-white text-black w-full px-5 py-2 rounded">
            Add Note
          </button>
        </form>

        <div className=" p-10  w-1/2 text-xl bg-cover bg-[url('https://images.unsplash.com/photo-1576506542790-51244b486a6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <h1 className="text-3xl font-bold">Your Notes</h1>
          <div className="flex flex-wrap overflow-auto h-full gap-5 p-2">

            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className=" pt-9 pb-5 flex flex-col items-start h-60 w-48 text-black font-bold rounded-xl p-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/large_2x/sticky-note-paper-background-free-png.png')]"
                >
                  <h3 className="leading-tight font-bold text-xl ">
                    {elem.title}
                  </h3>
                  <p className=" mt-2 leading-tight font-medium text-gray-500 ">
                    {" "}
                    {elem.detail}
                  </p>

                  <button 
                  onClick={()=>{
                    deleteNote(idx);
                  }}
                  className='text-xs mt-auto py-1 w-full text-black bg-red-500  cursor-pointer active:scale-95 rounded-2xl' >
                    Delete
                    </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
