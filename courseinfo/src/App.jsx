const Header = ({name}) =>{ 
  return(
  <h1>{name}</h1>
  )
}

const Content = ({parts}) =>{
  const [part1, part2, part3] = parts    
  return(
    <>
    <Part {...part1}/>    
    <Part {...part2}/>    
    <Part {...part3}/>     
    </>
  )
}

const Part = ({name, exercises}) =>{  
  return(
    <p>
      {name} {exercises}
    </p>    
  )
}

const Total = ({parts}) => {
  const [part1, part2, part3] = parts  
  return(
    <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
   <div>
    <Header {...course}/>
    <Content {...course}/>
    <Total {...course}/>
   </div>
  )
}

export default App
