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
    <p>Number of exercises {t.exer1+t.exer2+t.exer3}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }  
  const part2 = {
    name: 'Using pops to pass data',
    exercises: 7
  }  
  const part3 = {
    name: 'State of a component',
    exercises: 14
}

  return (
   <div>
    <Header course={course}/>
    <Content part1={part1.name} part2={part2.name} part3={part3.name}
      exer1={part1.exercises} exer2={part2.exercises} exer3={part3.exercises}/>
    <Total exer1={part1.exercises} exer2={part2.exercises} exer3={part3.exercises}/>
   </div>
  )
}

export default App
