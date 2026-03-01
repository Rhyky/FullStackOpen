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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using pops to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
   <div>
    <Header course={course}/>
    <Content part1={part1} part2={part2} part3={part3}
      exer1={exercises1} exer2={exercises2} exer3={exercises3}/>
    <Total exer1={exercises1} exer2={exercises2} exer3={exercises3}/>
   </div>
  )
}

export default App
