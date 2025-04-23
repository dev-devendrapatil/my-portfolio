import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        👋 Hi, I am passionate and skilled Frontend Developer
        with over 2 years of experience building responsive, user-centric web
        applications. I specialize in JavaScript, and frameworks
        like React, Tailwind, Angular, and Express.js. I’m a quick learner and thrive in
        Agile environments, collaborating closely with clients and
        cross-functional teams to deliver efficient, scalable, and accessible
        solutions. With a strong focus on performance optimization and
        continuous learning, I love turning real-world problems into solutions and
        user-friendly digital experiences. <br/>💡Let’s work together to bring your
        ideas to life!
      </motion.p>


    </>
  );
};

export default SectionWrapper(About, "about");
