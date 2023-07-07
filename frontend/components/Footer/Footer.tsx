import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarked,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const blogs = [
    {
      imageSrc: "/1.jpg",
      title: "The cold snowy mountain of annapurna ",
      description:
        "Talk to local people and explore the culture. Talk to local people and explore the culture Talk to local people and explore the culture",
      Date: "27th Sept, 2022",
    },
    {
      imageSrc: "/2.jpg",
      title: "Beautiful Southern Nepal",
      description:
        "Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world",
      Date: "27th Sept, 2022",
    },
    {
      imageSrc: "/3.jpg",
      title: "What travelling solo is like",
      // description: "Travel and Explore Nepal with beautiful culture",
      description: "Travel and Explore Nepal",
      Date: "27th Sept, 2022",
    },
    {
      imageSrc: "/4.jpg",
      title: "Exploring Everest Region",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      Date: "27th Sept, 2022",
    },
    {
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      Date: "27th Sept, 2022",
    },
  ];
  return (
    <div className="bg-white-toned w-full py-12">
      <div className="max-w-[1500px] mx-auto footer__cols px-8 md:px-20 text-black">
        {/* ------------------------ col - 1 -------------------------- */}
        <div className="col-1">
          <div className="footer__logo">
            <h2 className="text-5xl font-nunito font-extrabold ">
              <Link href="/">Travel .</Link>
            </h2>
            <p className="line-clamp-2 my-4 font-lato text-black-gray hover:text-blue cursor-pointer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            </p>
            <ul className="flex flex-col gap-2">
              <Link href="mailto:abc@example.com">
                <li className="footer__details text-black-gray hover:text-blue">
                  <FaEnvelope className="text-xl" />
                  <p>email@example.com</p>
                </li>
              </Link>

              <Link href="phone:9876543210">
                <li className="footer__details text-black-gray hover:text-blue">
                  <FaPhone className="text-xl" />
                  <p>+977 9876543210</p>
                </li>
              </Link>

              <Link href="/">
                <li className="footer__details text-black-gray hover:text-blue">
                  <FaMapMarked className="text-xl" />
                  <p> Baneshwor, Ktm</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="col-1">
          <h3 className="text-lg font-bold my-4">Our Recent Blogs</h3>
          <div className="blog__list flex flex-col gap-2">
            {blogs.slice(0, 4).map((list, index) => (
              <div className="flex flex-col">
                <Link href="/">
                  <p className="text-black-gray font-semibold transition-all duration-150 hover:text-blue">
                    {list.title}
                  </p>

                  {/* <span className="text-sm text-black transition-all duration-150 hover:text-blue">
                    ( {list.Date} )
                  </span> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-1">
          <h3 className="text-lg font-bold my-4">Contact</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <p className="text-black-gray font-semibold transition-all duration-150 hover:text-blue">
                  Partnership
                </p>
              </Link>
              <Link href="/">
                <p className="text-black-gray font-semibold transition-all duration-150 hover:text-blue">
                  FAQ
                </p>
              </Link>
              <Link href="/">
                <p className="text-black-gray font-semibold transition-all duration-150 hover:text-blue">
                  Get in Touch
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-1">
          <h3 className="text-lg font-bold my-4">Socials</h3>
          <div className="social__icons flex gap-4 ">
            <Link href="https://www.facebook.com">
              <div className="icon bg-blue">
                <FaFacebookF className="text-white text-lg" />
              </div>
            </Link>
            <Link href="https://www.twitter.com">
              <div className="icon bg-blue-malibu">
                <FaTwitter className="text-white text-lg " />
              </div>
            </Link>
            <Link href="https://www.instagram.com">
              <div className="icon bg-red-pink">
                <FaInstagram className="text-white text-lg " />
              </div>
            </Link>
            <Link href="https://www.youtube.com">
              <div className="icon bg-red">
                <FaYoutube className="text-white text-lg" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright max-w-[1500px] mx-auto px-8 md:px-20 mt-12 ">
        <div className="info__links border-b-2 border-black-25 pb-4">
          <ul className="flex flex-col md:flex-row gap-4 text-sm font-semibold ">
            <li className="text-black-gray hover:text-blue">
              <Link href="/">Terms and conditions</Link>
            </li>
            <li className="text-black-gray hover:text-blue">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="text-black-gray hover:text-blue">
              <Link href="/">Cookies Policy</Link>
            </li>
            <li className="text-black-gray hover:text-blue">
              <Link href="/">Copyright notification </Link>
            </li>
            <li className="text-black-gray hover:text-blue">
              <Link href="/">Cookies Settings</Link>
            </li>
          </ul>
        </div>
        <div className="copyright__text flex flex-col md:flex-row gap-4 mt-3 items-center justify-start">
          <h3 className="text-xl font-bold text-black-gray hover:text-blue transition-all duration-300">
            <Link href="/">Travel .</Link>
          </h3>
          <p className="text-sm text-black-gray text-center">
            Copyright &copy; 2010-2023 Travel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
