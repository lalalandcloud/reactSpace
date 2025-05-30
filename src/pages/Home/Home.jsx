import Nav from "../../components/Nav/Nav";
import './Home.css'

export default function Home() {

    return(

        <div className="divHomeGlo">
            <Nav/>
            <div className="divHomeGlo2">
                <div className="divHome1">
                    <h4>SO, YOU WANT TO TRAVEL</h4>
                    <h1>SPACE</h1>
                    <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="divHome2">
                    <button>EXPLORE</button>
                </div>
            </div>
        </div>
    )
}