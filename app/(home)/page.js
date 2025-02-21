'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero hero--two min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
          >
            <div className="hero__content">
              <div className="hero-title">
                <motion.h5
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-3 flex items-center"
                >
                  Hello,
                  <motion.img
                    whileHover={{ rotate: 20 }}
                    alt="waving"
                    width={40}
                    height={40}
                    className="hero-img ml-2"
                    src="/waving-hand.png"
                  />
                </motion.h5>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hero-text-primary mb-4 text-4xl md:text-5xl font-bold"
                >
                  I'm Ladin Fazal
                </motion.h2>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="hero-subtitle"
              >
                <h5 className="mb-4 text-xl md:text-2xl">Web Developer</h5>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hero-text"
              >
                <p className="mb-5 text-gray-600">React.js | Next.js | WordPress Developer Experienced in building scalable web apps with React.js and Next.js, and creating tailored WordPress solutions. Passionate about crafting engaging, high-performance websites.</p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="hero-btn flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="banner-btn1">
                  <a className="inline-block bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-color" href="mailto:ladinawan4@gmail.com" style={{color: '#fff'}}>Contact Me</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="banner-btn2">
                  <a className="ts-btn4 border-2 border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors" href="/CV/cv.webp" download>Download CV</a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 px-4"
          >
            <div className="hero__thumb">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hero-animation"
              >
                <div className="hero-box bg-white p-6 rounded-2xl shadow-xl">
                  <div className="hero-content text-center">
                    <motion.div
                      className=""
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.img
                        alt="Profile"
                        width={450}
                        height={450}
                        className="main-img rounded-full mx-auto object-cover"
                        src="/2022116.jpg"
                       />
                      <motion.div
                        variants={{
                          initial: { opacity: 0 },
                          hover: { opacity: 1 }
                        }}
                        className="absolute inset-0 bg-black bg-opacity-80 rounded-full flex flex-col items-center justify-center"
                      >
                        <h3 className="text-xl font-bold text-white mb-6">My Skills</h3>
                        <motion.div
                          className="grid grid-cols-3 gap-4 p-4"
                          variants={{
                            initial: { scale: 0.8, opacity: 0 },
                            hover: { scale: 1, opacity: 1 }
                          }}
                        >
                          <motion.img whileHover={{ scale: 1.1 }} alt="HTML" width={48} height={48} className="inner-img mx-auto" src="/skills/html.png" />
                          <motion.img whileHover={{ scale: 1.1 }} alt="CSS" width={48} height={48} className="inner-img mx-auto" src="/skills/css.png" />
                          <motion.img whileHover={{ scale: 1.1 }} alt="JavaScript" width={48} height={48} className="inner-img mx-auto" src="/skills/javascript.png" />
                          <motion.img whileHover={{ scale: 1.1 }} alt="React" width={48} height={48} className="inner-img mx-auto" src="/skills/react.png" />
                          <motion.img whileHover={{ scale: 1.1 }} alt="Node.js" width={48} height={48} className="inner-img mx-auto" src="/skills/next-logo.png" />
                          <motion.img whileHover={{ scale: 1.1 }} alt="MongoDB" width={48} height={48} className="inner-img mx-auto" src="/skills/mongodb.png" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="slider-mouse-scroll"
      >
        <motion.a
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          href="#"
          className="mouse-scroll-icon"
        />
      </motion.div>
    </motion.section>
  )
}