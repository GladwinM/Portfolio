import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        My name is{" "}
        <a
          href="https://www.linkedin.com/in/kaungmyatkyaw/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Gladwin Jeuish
        </a>{" "}
        a passionate MERN stack developer, with a keen eye for detail and a love
        for creativity. I've honed my skills in front-end development, back-end
        development, and web development,by pure passion towards the world of
        software development.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.75, 1)} className={style.text}>
        I recently completed my degree at my Masters in Engineering Management
        in MDX University, Dubai, where I developed a strong foundation in
        Project Management , Human resource Management logistics and so on. I
        also do have a Bachelors in Information Technology. During my studies, I
        had the opportunity to work on several projects that allowed me to put
        theory into practice and gain hands-on experience.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1, 1)} className={style.text}>
        What truly set my path apart was my decision to join Micro college, a
        software development school. There, I immersed myself in pair
        programming and real-world projects, mastering the skills required to
        thrive in this dynamic field. I completed the boot camp without a hitch,
        showcasing my dedication and determination to succeed. My commitment to
        the tech community is reflected on my{" "}
        <a
          href="https://github.com/Rhaegar121"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        within a single year. Additionally, my roles in the Students&apos; Union
        honed my problem-solving and communication abilities.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1.25, 1)} className={style.text}>
        I am excited to start my professional journey and am looking for
        opportunities to contribute and grow. If you are looking for a dedicated
        and quick-learning developer, please feel free to reach out. I would
        love to discuss how I can be a valuable addition to your team!.{" "}
        <a
          href="https://drive.google.com/file/d/12jgUtzRsHjH74DV1FvlHxxmPfckQ81Zc/view?usp=drivesdk"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Access my resume
        </a>{" "}
        to explore my journey, qualifications, and the knowledge I bring to the
        table.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, "about", "");
