import React from 'react'; 
// import ProjectCards from '../../components/Project'
// import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// function Wrapper(props) {
//     return <div className="wrapper">{props.children}</div>;
// }

// function Portfolio () {  

//     return (
//         <section className="container">
//           <div className="project">
//             <h2 className="top-title">Bootcamp Portfolio</h2>
//             <hr></hr>
//           </div>

//           <Wrapper id="card-data">
//             {portfolio.map((project) => (
//               <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
//             ))}
//           </Wrapper>
//         </section>
    
//     );
//   }

// export default Portfolio;

// import React from 'react';

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="works-grid-container">
            <div className="works-grid-item box1" >
                <a href="https://group-project-90s-rewind.herokuapp.com">Deployed Application</a>
                <a href="https://github.com/shanehancock64/GroupProject2">GitHub Repository</a>
            </div>
            <div className="works-grid-item box2">
                <a href="https://youtu.be/W_-CxzDOOrA">Deployed Application</a>
                <a href="https://github.com/lnbredemeyer/Object-Relational-Mapping-H13">GitHub Repository</a>
            </div>
            <div className="works-grid-item box3" >
                <a href="https://youtu.be/lYlIFH6_cbw">Deployed Application</a>
                <a href="https://github.com/lnbredemeyer/Employee-Tracker-H12">GitHub Repository</a>
            </div>
            <div className="works-grid-item box4" >
                <a href="https://lnbredemeyer.github.io/sound-scouter-p1/">Deployed Application</a>
                <a href="https://github.com/lnbredemeyer/sound-scouter-p1">GitHub Repository</a>
            </div>
            <div className="works-grid-item box5" >
                <a href="https://lnbredemeyer.github.io/weather-dashboard-H6/">Deployed Application</a>
                <a href="https://github.com/lnbredemeyer/weather-dashboard-H6">GitHub Repository</a>
            </div>
            <div className="works-grid-item box6" >
                <a href="https://lnbredemeyer.github.io/Work-Day-Scheduler-H5/">Deployed Application</a>
                <a href="https://github.com/lnbredemeyer/Work-Day-Scheduler-H5">GitHub Repository</a>
            </div>
            </div>
        </section>
    )
}

export default Portfolio;