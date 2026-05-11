import React from 'react';
import { motion } from 'motion/react';
import ExpandableImage from './ExpandableImage';

export default function MotivationSection() {
  return (
    <section id="section-1-motivation" className="w-full py-24 bg-bg-light text-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Dilemma</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Breaking the Geometry-Appearance Black Box
          </h3>
          <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
            Traditional methods fall into a profound coupling trap. End-to-end SDS optimization leads to over-smoothing and Janus artifacts, while feed-forward methods struggle with structural holes under sparse views.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Failure Case A: SDS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-gray-100 p-2 rounded-2xl shadow-sm border border-gray-200 h-64 overflow-hidden flex items-center justify-center">
               <ExpandableImage 
                 src="/Final Year Project Mid-term Summary Report_page2_image.png" 
                 alt="SDS Optimization Traps"
                 className="w-full h-full rounded-xl"
               />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">SDS Optimization Traps</h4>
              <p className="text-gray-600 text-sm">
                Methods like DreamFusion rely heavily on 2D priors, often causing multiple faces (Janus) and over-smoothed planar surfaces because they lack explicit geometric structural awareness.
              </p>
            </div>
          </motion.div>

          {/* Failure Case B: Feed-Forward */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-gray-100 p-2 rounded-2xl shadow-sm border border-gray-200 h-64 overflow-hidden flex items-center justify-center">
               <ExpandableImage 
                 src="/0003.png" 
                 alt="Feed-Forward Tearing"
                 className="w-full h-full rounded-xl"
               />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Feed-Forward Tearing</h4>
              <p className="text-gray-600 text-sm">
                Single-step forward generation cannot guarantee global multi-view consistency. When views are extremely sparse, it leads to massive structural holes and stretched ellipsoid artifacts.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 p-8 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <h4 className="text-xl font-serif font-bold mb-3">Our Proposition: Progressive Decoupling</h4>
          <p className="text-gray-700 leading-relaxed">
            Instead of a black-box end-to-end approach, we propose reforming the ill-posed mapping into four controllable sub-tasks. By establishing a mixed information-passing mechanism, we perfectly balance local geometric robustness, scene-level high-fidelity textures, and global multi-view consistency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
