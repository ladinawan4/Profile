'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-medium">Hello,</h2>
              <motion.img
                src="/img/hero/waving-hand.png"
                alt="Waving hand"
                width={40}
                height={40}
                className="inline-block"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-500">
              I'M SERAZAM MONIR
            </h1>
            <h3 className="text-2xl sm:text-3xl text-cyan-500 font-medium">
              Web Developer
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl">
              Over the past 12+ years. I've created well-crafted mobile and web apps by connecting Business goals with user needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me Now
              </motion.button>
              <motion.button
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <Image
                src="/img/hero/bg1.jpg"
                alt="Serazam Monir"
                width={320}
                height={320}
                className="rounded-full object-cover p-2 bg-white absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-3 h-3 rounded-full bg-blue-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-pink-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  )
}

