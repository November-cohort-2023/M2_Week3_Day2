import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function StudentDetails() {
    const [student,setStudent] = useState({})

    const {id} = useParams()

    console.log(id)

    

    useEffect(()=>{
        axios.get(`https://omar-class-api.adaptable.app/students/${id}`)
        .then((oneStudent)=>{
            console.log(oneStudent.data)
            setStudent(oneStudent.data)
        })
    },[])

  



  return (
    <div>
        <h1>Student Information</h1>

            {student && (
                <div>
                   <h2>{student.name}</h2> 
                   <p>{student.country}</p>
                </div>
            )}



    </div>
  )
}

export default StudentDetails