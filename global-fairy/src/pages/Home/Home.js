import Hero from "../../layout/Hero/Hero"
import Brand from '../../components/Brand/brand'
import Numbers from '../../components/Numbers/Numbers'
import "./Home.module.css"

const Home = () => {
    return(
        <div>
            <Hero />
            <Brand />
            <Numbers />
        </div>
    )
}

export default Home;