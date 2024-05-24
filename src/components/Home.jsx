import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hi, I&apos;m{" "}
        <motion.span variants={fadeIn("", "", 0.5, 1)} className={style.name}>
          Gladwin Jeuish
        </motion.span>
      </p>

      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.desc}>
        I am a passionate  MERN-stack developer
      </motion.p>
      <motion.button
        variants={fadeIn("", "", 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <span className={style.btn_hover}>Really?</span>
        <span className={style.btn}>Uncover the Mystery</span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
