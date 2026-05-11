import React from 'react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="section-1" className="min-h-[85vh] w-full flex flex-col justify-center relative bg-bg-dark text-bg-light overflow-hidden px-8 md:px-16 lg:px-32 py-24 -mx-8 md:-mx-16 lg:-mx-32 z-0 border-b border-gray-800">
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Header Institution info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center gap-2"
        >
          <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">CityUHK Qingdao Research Institute</div>
          <div className="w-12 h-[1px] bg-[#A41034]/50 my-2" />
          <div className="text-gray-500 uppercase tracking-wider text-xs">Final Year Project Report 2025/26</div>
        </motion.div>

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 tracking-tight text-white max-w-4xl mx-auto">
            Text2GS: Text-Driven 3D Scene Generation via Progressive Multi-Stage Decoupling
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Democratizing high-quality 3D scene generation on consumer-grade hardware.
          </p>
        </motion.div>

        {/* Student & Supervisor Info - Academic style grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left border-t border-b border-white/10 py-10"
        >
          <div>
            <h3 className="text-[#A41034] text-xs font-bold uppercase tracking-widest mb-4">Student Information</h3>
            <ul className="space-y-3 font-mono text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">Name</span> 
                <span className="text-white">Zeng Jingwei</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">Home University</span> 
                <span className="text-white text-right">Chongqing University</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">Student ID</span> 
                <span className="text-white">2502005</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#A41034] text-xs font-bold uppercase tracking-widest mb-4">Supervision</h3>
            <ul className="space-y-3 font-mono text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">Supervisor</span> 
                <span className="text-white">Prof. Hou Junhui</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
