import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  let courses = props.courses; 
  let category = props.category;
  const[likedCourses, setLikedCourses] = useState([])

  function getCourses(){
    if(category === "All"){
      let allcourses = [];

      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allcourses.push(courseData);
        })
      })
      return allcourses;
    }
    else{
      //We will pass specific category array
      return courses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
      getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      ))
    }
    </div>
  )
}

export default Cards;

