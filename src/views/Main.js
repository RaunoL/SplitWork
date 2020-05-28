import React, {useState} from "react";
import ProjectItem from "../components/ProjectItem"
import AddButton from "../components/AddButton"
import getUserProjects from "../database/getUserProjects"
function Main(props) {
    const {setProject} = props
    
    const [userProjects, setUserProjects] = useState([])
    getUserProjects().then((result)=>{
        setUserProjects(result)
    })
    const Projects = userProjects.map((item, index)=>
    <ProjectItem setProject={setProject} key={index} name={item.projName} />)
        return (
            <div>
                {Projects}
                <AddButton />
            </div>

        )
    }
export default Main