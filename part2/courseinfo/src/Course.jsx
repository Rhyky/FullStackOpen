const Header = ({name}) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({parts}) => {
    return (    
        <div>{parts.map((part) => 
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>
            )}
        </div>   
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((acc, part)=> acc+part.exercises, 0)

    return(
    <>
        <div style={{fontWeight:"bold"}} >Total of {total} exercises</div>
    </>
    )
}

const CourseFrame = ({courses}) => {
    return(
    <>{courses.map((course)=>
        <div key={course.id}>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>     
        </div>
    )}
    </>
    )
}


const Course = (props) => {    
    return (
    <>
        <h1>Web development curriculum</h1>
        <CourseFrame courses={props.course}></CourseFrame>
    </>
    )
}

export default Course