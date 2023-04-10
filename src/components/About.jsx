import React from "react";

import * as Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img className="w-16 h-16 object-contain" src={icon} alt={title} />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variant={fadeIn("", "", 0.1, 1)}
      >
        <ul className="">
          <li>
            Full-Stack 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁/Java 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with focus on 𝗥𝗲𝗮𝗰𝘁𝗝𝗦/Spring
            Boot library.
          </li>
          <li>
            worked on several personal projects using 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 (𝗥𝗲𝗮𝗰𝘁𝗝𝗦), Java
            (Spring Boot), 𝗡𝗼𝗱𝗲𝗝𝗦, 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗝𝗦, 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱𝗖𝗦𝗦, 𝗦𝗖𝗦𝗦, and other
            technologies with 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 Design and 𝗠𝗼𝗯𝗶𝗹𝗲-𝗙𝗶𝗿𝘀𝘁 Approaches
            being my focus.
          </li>
          <li>Strongly believe in my abilities and am eager to learn.</li>
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default About;
