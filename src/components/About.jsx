import Navbar from './Navbar'
import Footer from './Footer'
import useScrollTop from "../hooks/useScrollTop"

const About = () => {
  useScrollTop();
  return (
    <div>
        <Navbar />
        <div className="bg-[#d6cfcf]">
        <h2 className="font-mono text-lg text-center p-52 ">More about me on linkedIn Hurry up follow me!!</h2>
      </div>
        <Footer />
    </div>
  )
}

export default About