import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

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
        let myInterval = setInterval(() => {
            console.log("Interval")
        }, 1000);
        console.log("Mounting phase")
        axios.get('https://omar-class-api.adaptable.app/students')
        .then((students)=>{
            console.log(students.data)
            setStudents(students.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        // return is used for actions performed during the unmounting phase
        return ()=>{
            console.log("unmounting")
            clearInterval(myInterval)
        }
    },[])


    useEffect(()=>{
        console.log("Updating phase")

        if(counter===3){
            alert("Congratulations")
        }
    },[counter])




    function increaseCounter(){
        setCounter(counter+1)

       

    }

  return (
    <div>
      <h1>Students</h1>
        <p>{counter}</p>
      <button onClick={increaseCounter}>+</button>
      {students.length===0 && <p>...loading</p>}
      {students.map((oneStudent)=>{
        return(
            <div key={oneStudent.id}>
                <h2>{oneStudent.name}</h2>
                <p>{oneStudent.country}</p>
                <Link to={`/students/${oneStudent.id}`}><button>Go To {oneStudent.name}'s page</button></Link>
            </div>
        )
      })}
    </div>
  )
}

export default Students