import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-20 bg-[#232f3e] text-gray-200 max-sm:px-16">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div className="mb-5 p-4 ">
            <h4 className="text-xl pb-4 font-figtree text-[#dddddd] ">
              My Brand
            </h4>
            <p className="text-[#999999] font-comic text-lg max-sm:text-base whitespace-nowrap text-ellipsis overflow-hidden">
              <strong>
                Best Version <br />
              </strong>
              <strong>
                Bafal, Kathmandu <br /> <br />
              </strong>
              <strong>Phone:9840716856</strong> <br />
              <strong>Email:prajwolsubedizzz@gmail.com</strong>
            </p>
            <p className="text-lg font-nunito text-[#999999]"></p>
          </div>
          <div className="mb-5 p-4">
            <h4 className="text-xl pb-4 font-figtree text-[#dddddd] ">
              Useful Links
            </h4>
            <ul className="text-lg font-comic text-[#999999] font-bold max-sm:text-base">
              <li className="hover:text-[#ffffff] cursor-pointer">
                <NavLink to="/products">Home</NavLink>
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                <NavLink to="/offers">Offers</NavLink>
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="mb-5 p-4">
            <h4 className="text-xl pb-4 font-figtree text-[#dddddd] ">
              Services
            </h4>
            <ul className="text-lg font-comic text-[#999999] font-bold max-sm:text-base">
              <li className="hover:text-[#ffffff] cursor-pointer ">
                Web design
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                Social Media Handling
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                Video Editing
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer">
                Thumbnail, Logo{" "}
              </li>
            </ul>
          </div>
          <div className="mb-5 p-4">
            <h4 className="text-xl pb-4 font-figtree text-[#dddddd] ">
              Socials
            </h4>
            <ul className="text-lg font-comic text-[#999999] font-bold max-sm:text-base">
              <li className="hover:text-[#ffffff] cursor-pointer flex items-center">
                <BsLinkedin className="mr-2" />{" "}
                <Link
                  to="https://www.linkedin.com/in/prajwol-subedi-506537219/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer flex items-center">
                <FaTwitter className="mr-2" />{" "}
                <Link to="https://twitter.com/PrajwolSubedi13" target="_blank">
                  Twitter
                </Link>
              </li>

              <li className="hover:text-[#ffffff] cursor-pointer flex items-center">
                <BsYoutube className="mr-2" />
                <Link
                  to="https://www.youtube.com/@prajwolsubedi2109"
                  target="_blank"
                >
                  Youtube
                </Link>
              </li>
              <li className="hover:text-[#ffffff] cursor-pointer flex items-center">
                <BsGithub className="mr-2" />{" "}
                <Link to="https://github.com/prajwolsubedi" target="_blank">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center max-sm:text-base">
        <h1 className="mx-auto font-comic font-bold text-[#999999] flex items-center">
          {" "}
          <RiCopyrightLine className="mr-1" /> Best Version All rights Reserved.
        </h1>
        <h2 className="mx-auto font-comic font-bold text-[#999999] flex items-center">
          {" "}
          2002 - now Designed By Prajwol Subedi{" "}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
