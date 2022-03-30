import React from 'react';

const App = () => {

  const courses = [
    { id: 1, name: 'React', lessons: 6 },
    { id: 2, name: 'JavaScript', lessons: 7 },
    { id: 3, name: 'CSS', lessons: 3 },
    { id: 4, name: 'HTML', lessons: 5 },
  ]

  function removeCourse(courseId) {
    console.log('Remove', courseId)
  }

  return (
    <>
      <h1 >Courses</h1>
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <h2>{course.name}</h2>
              <div>
                <div>Lessons: {course.lessons}</div>
                <div>
                  <button onClick={() => removeCourse(course.id)}>
                    Remove
                    </button>
                </div>
              </div>
              </div>
          )
        }
        )}
    </>
  )
}

export default App;
