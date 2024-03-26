import AboutMe from "./AboutMe"
import Image from "./Image"
import MyInfo from "./MyInfo"
import MyTech from "./MyTech"
import MyTech2 from "./MyTech2"
import MyTech3 from "./MyTech3"

function Background(){
    return(
        <div className="background">

            <div className="left">
                <AboutMe />
                <MyInfo />
                <MyTech3 />
            </div>

            <div className="right">
                <Image />
                <MyTech />
                <MyTech2 />
            </div>
            
        </div>
    )
}

export default Background