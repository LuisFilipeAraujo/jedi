import AboutMe from "./AboutMe"
import Image from "./Image"

function Background(){
    return(
        <div className="background">

            <div className="left">
                <AboutMe />
            </div>

            <div className="right">
                <Image />
            </div>
            
        </div>
    )
}

export default Background