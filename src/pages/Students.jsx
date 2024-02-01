import axios from 'axios'
import { useState, useEffect } from 'react'

function Students() {
    console.log("Component renders")
    const [students,setStudents] = useState([])

    
    const [counter,setCounter] = useState(0)
  


    // useEffect deals with the lifecycle of my component

    // useEffect takes 2 arguements
    //  1. arrow function
    //  2. dependancy array

    // empty dependancy array signifies that my function will only run once on the mounting phase
    useEffect(()=>{
        console.log("Mounting phase")
        axios.get('https://omar-class-api.adaptable.app/students')
        .then((students)=>{
            console.log(students.data)
            setStudents(students.data)
     
        })
    },[])



    function increaseCounter(){
        setCounter(counter+1)
    }

  return (
    <div>
      <h1>Students</h1>
        <p>{counter}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  )
}

export default Students