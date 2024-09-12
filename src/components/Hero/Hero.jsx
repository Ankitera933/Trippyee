import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/search?q=${query}`
      );
      const searchResults = response.data;
      console.log(searchResults);
      navigate("/search", { state: { searchResults } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Let's Discover <br />
              The World 
              <br /> Together
            </motion.h1>
          </div>
        
          <div className="flexColStart hero-desc">
            <h1> Plan your trip with AI</h1>  
            <span className="secondaryText">plan your whole trip by simply typing your destination </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter location want to visit"
            />
            <button className="button" onClick={handleSearchClick}>
              Search
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={35} end={100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Luxury Hotels</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={2500} end={3500} /> <span>+</span>
              </span>
              <span className="secondaryText">Trips Planned</span>
            </div>
          </div>
        </div>

        <motion.div
          className="secondaryText location-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, yoyo: Infinity }}
        >
          Changu Lake aka Tsongmo, Sikkim
        </motion.div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <motion.img
              src="./h4.jpg"
              alt="houses"
              className="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.img
              src="./k2.jpg"
              alt="houses"
              className="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
