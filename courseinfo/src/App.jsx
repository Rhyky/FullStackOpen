const Header = (t) =>{
  return(
  <h1>{t.course}</h1>
  )
}

const Content = (c) =>{
  return(
    <>
    <Part part={c.part1} exer={c.exer1}/>
    <Part part={c.part2} exer={c.exer2}/>
    <Part part={c.part3} exer={c.exer3}/>
    </>
  )
}

const Part = (e) =>{
  return(
    <p>
      {e.part} {e.exer}
    </p>    
  )
}

const Total = (t) => {
  return(
    <p>Number of exercises {t.part[0].exercises+t.part[1].exercises+t.part[2].exercises}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
   <div>
    <Header course={course}/>
    <Content part={parts}/>
    <Total part={parts}/>
   </div>
  )
}

export default App
