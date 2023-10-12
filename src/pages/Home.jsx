import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Techonologies from '../components/Techonologies'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
      <div className="lg:h-screen bg-[url('https://www.html.am/images/backgrounds/background-image-2.gif')] bg-repeat">
        <Profile/>
        <AboutMe/>
        <Techonologies/>
      </div>

      <Projects/>
    </>
  )
}

export default Home
