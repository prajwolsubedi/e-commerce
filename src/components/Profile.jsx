import Navbar from './Navbar'
import Footer from './Footer'
import useScrollToTop from '../hooks/useScrollTop'

const Profile = () => {
  useScrollToTop();
  return (
    <div>
        <Navbar />
            <h2 className="font-mono text-lg text-center p-52 bg-[#d6cfcf]">
            Hello there i hope you sleep well tonight 🙂
        </h2>
        <Footer />
    </div>
  )
}

export default Profile