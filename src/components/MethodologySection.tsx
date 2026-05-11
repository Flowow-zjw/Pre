import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import ExpandableImage from './ExpandableImage';

export default function MethodologySection() {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <section id="section-2" className="w-full h-screen bg-bg-light flex flex-col overflow-hidden relative">
      {/* Top 2/3: Interactive Academic SVG Outline */}
      <div className="flex-[2] w-full relative flex items-center justify-center p-4">
        <svg viewBox="0 0 1400 450" className="w-full h-full max-h-[60vh] select-none">
          <defs>
            <marker id="arrow-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#9CA3AF" />
            </marker>
            <marker id="arrow-active" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#A41034" />
            </marker>
            
            {/* Gradients & Filters */}
            <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.05" />
            </filter>
            <filter id="shadow-active" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.15" floodColor="#A41034" />
            </filter>
          </defs>

          {/* Background subtle grid */}
          <path d="M 0 100 L 1400 100 M 0 200 L 1400 200 M 0 300 L 1400 300 M 0 400 L 1400 400" stroke="#f3f4f6" strokeWidth="1" />
          <path d="M 150 0 L 150 500 M 350 0 L 350 500 M 550 0 L 550 500 M 750 0 L 750 500 M 950 0 L 950 500 M 1150 0 L 1150 500 M 1350 0 L 1350 500" stroke="#f3f4f6" strokeWidth="1" />

          {/* Connectors (Edges) */}
          <g>
            {/* Input to Stage 1 */}
            <path d="M 10 200 L 90 200" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrow-gray)"/>
            
            {/* Stage 1 to 2 */}
            <path d="M 280 180 L 430 180" stroke={activeStage >= 2 ? "#A41034" : "#9CA3AF"} strokeWidth={activeStage >= 2 ? "3" : "2"} markerEnd={activeStage >= 2 ? "url(#arrow-active)" : "url(#arrow-gray)"} className="transition-all duration-500"/>
            
            {/* Stage 2 to 3 */}
            <path d="M 620 180 L 770 180" stroke={activeStage >= 3 ? "#A41034" : "#9CA3AF"} strokeWidth={activeStage >= 3 ? "3" : "2"} markerEnd={activeStage >= 3 ? "url(#arrow-active)" : "url(#arrow-gray)"} className="transition-all duration-500"/>
            
            {/* Stage 3 to 4 */}
            <path d="M 960 180 L 1110 180" stroke={activeStage >= 4 ? "#A41034" : "#9CA3AF"} strokeWidth={activeStage >= 4 ? "3" : "2"} markerEnd={activeStage >= 4 ? "url(#arrow-active)" : "url(#arrow-gray)"} className="transition-all duration-500"/>
            
            {/* Stage 4 to Output */}
            <path d="M 1300 200 L 1380 200" stroke={activeStage === 4 ? "#A41034" : "#9CA3AF"} strokeWidth={activeStage === 4 ? "3" : "2"} markerEnd={activeStage === 4 ? "url(#arrow-active)" : "url(#arrow-gray)"}/>
            
            {/* Keyframe Curve (Stage 1 to 3) */}
            <path d="M 190 270 C 190 400, 870 400, 870 270" fill="none" stroke={activeStage >= 3 ? "#A41034" : "#D1D5DB"} strokeWidth={activeStage >= 3 ? "2" : "1.5"} strokeDasharray={activeStage >= 3 ? "none" : "5 5"} markerEnd={activeStage >= 3 ? "url(#arrow-active)" : "url(#arrow-gray)"} className="transition-all duration-500"/>
          </g>

          {/* Nodes */}
          {/* Stage 1 Node */}
          <g onClick={() => setActiveStage(1)} className="cursor-pointer" style={{ transformOrigin: '190px 200px', transform: activeStage === 1 ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
            <rect x="100" y="130" width="180" height="140" rx="16" fill={activeStage === 1 ? "#eff6ff" : "white"} stroke={activeStage === 1 ? "#3B82F6" : "#E5E7EB"} strokeWidth={activeStage === 1 ? "3" : "2"} filter={activeStage === 1 ? "url(#shadow-active)" : "url(#shadow)"} />
            <text x="190" y="155" textAnchor="middle" className={`text-xs font-bold uppercase tracking-wider ${activeStage === 1 ? 'fill-blue-700' : 'fill-gray-500'}`}>Stage 1</text>
            <text x="190" y="175" textAnchor="middle" className="text-sm font-bold fill-gray-800">Panoramic Gen</text>
            <text x="190" y="190" textAnchor="middle" className="text-[10px] font-mono fill-gray-400">MVDiffusion</text>
            {/* Graphic */}
            <g className={activeStage === 1 ? "text-blue-500" : "text-gray-300"}>
              <circle cx="190" cy="235" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
              <ellipse cx="190" cy="235" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="190" cy="235" rx="8" ry="20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </g>
          </g>

          {/* Stage 2 Node */}
          <g onClick={() => setActiveStage(2)} className="cursor-pointer" style={{ transformOrigin: '530px 200px', transform: activeStage === 2 ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
            <rect x="440" y="130" width="180" height="140" rx="16" fill={activeStage === 2 ? "#ecfdf5" : "white"} stroke={activeStage === 2 ? "#10B981" : "#E5E7EB"} strokeWidth={activeStage === 2 ? "3" : "2"} filter={activeStage === 2 ? "url(#shadow-active)" : "url(#shadow)"} />
            <text x="530" y="155" textAnchor="middle" className={`text-xs font-bold uppercase tracking-wider ${activeStage === 2 ? 'fill-green-700' : 'fill-gray-500'}`}>Stage 2</text>
            <text x="530" y="175" textAnchor="middle" className="text-sm font-bold fill-gray-800">Reconstruction</text>
            <text x="530" y="190" textAnchor="middle" className="text-[10px] font-mono fill-gray-400">DUSt3R</text>
            {/* Graphic: Point Cloud + MST */}
            <g className={activeStage === 2 ? "text-green-500" : "text-gray-300"}>
              <path d="M 500 225 L 530 215 L 540 245 L 510 255 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
              <path d="M 500 225 L 510 255 M 510 255 L 540 245" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="500" cy="225" r="3.5" fill="currentColor"/>
              <circle cx="530" cy="215" r="3.5" fill="currentColor"/>
              <circle cx="510" cy="255" r="3.5" fill="currentColor"/>
              <circle cx="540" cy="245" r="3.5" fill="currentColor"/>
              <circle cx="560" cy="225" r="2" fill="currentColor" opacity="0.4"/>
            </g>
          </g>

          {/* Stage 3 Node */}
          <g onClick={() => setActiveStage(3)} className="cursor-pointer" style={{ transformOrigin: '870px 200px', transform: activeStage === 3 ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
            <rect x="780" y="130" width="180" height="140" rx="16" fill={activeStage === 3 ? "#fffbeb" : "white"} stroke={activeStage === 3 ? "#F59E0B" : "#E5E7EB"} strokeWidth={activeStage === 3 ? "3" : "2"} filter={activeStage === 3 ? "url(#shadow-active)" : "url(#shadow)"} />
            <text x="870" y="155" textAnchor="middle" className={`text-xs font-bold uppercase tracking-wider ${activeStage === 3 ? 'fill-orange-700' : 'fill-gray-500'}`}>Stage 3</text>
            <text x="870" y="175" textAnchor="middle" className="text-sm font-bold fill-gray-800">Temporal Diffusion</text>
            <text x="870" y="190" textAnchor="middle" className="text-[10px] font-mono fill-gray-400">ViewCrafter</text>
            {/* Graphic: Frames */}
            <g className={activeStage === 3 ? "text-orange-500" : "text-gray-300"}>
              <rect x="845" y="220" width="16" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="855" y="215" width="16" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="865" y="210" width="20" height="28" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
              <path d="M 835 255 L 895 255" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow-gray)"/>
              <path d="M 875 210 L 885 200" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </g>
          </g>

          {/* Stage 4 Node */}
          <g onClick={() => setActiveStage(4)} className="cursor-pointer" style={{ transformOrigin: '1210px 200px', transform: activeStage === 4 ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
            <rect x="1120" y="130" width="180" height="140" rx="16" fill={activeStage === 4 ? "#fff1f2" : "white"} stroke={activeStage === 4 ? "#E11D48" : "#E5E7EB"} strokeWidth={activeStage === 4 ? "3" : "2"} filter={activeStage === 4 ? "url(#shadow-active)" : "url(#shadow)"} />
            <text x="1210" y="155" textAnchor="middle" className={`text-xs font-bold uppercase tracking-wider ${activeStage === 4 ? 'fill-rose-700' : 'fill-gray-500'}`}>Stage 4</text>
            <text x="1210" y="175" textAnchor="middle" className="text-sm font-bold fill-gray-800">3D Gaussian</text>
            <text x="1210" y="190" textAnchor="middle" className="text-[10px] font-mono fill-gray-400">Optimization</text>
            {/* Graphic: Gaussians */}
            <g className={activeStage === 4 ? "text-rose-500" : "text-gray-300"}>
              <ellipse cx="1200" cy="225" rx="18" ry="10" fill="currentColor" fillOpacity="0.4" transform="rotate(-30 1200 225)"/>
              <ellipse cx="1225" cy="235" rx="14" ry="7" fill="currentColor" fillOpacity="0.5" transform="rotate(20 1225 235)"/>
              <ellipse cx="1210" cy="220" rx="12" ry="12" fill="currentColor" fillOpacity="0.6"/>
              <ellipse cx="1195" cy="240" rx="6" ry="6" fill="currentColor" fillOpacity="0.7"/>
            </g>
          </g>

          {/* Connector Labels (drawn last to sit on top of lines) */}
          <g>
            <text x="50" y="190" textAnchor="middle" className="text-[12px] fill-gray-500 font-mono font-medium">[Input] Text</text>

            <text x="360" y="165" textAnchor="middle" className={`text-[12px] font-sans font-bold ${activeStage >= 2 ? "fill-primary" : "fill-gray-600"}`}>Sparse Views</text>
            <text x="360" y="205" textAnchor="middle" className="text-[11px] font-mono fill-gray-500">Loose Coupling</text>

            <text x="700" y="165" textAnchor="middle" className={`text-[12px] font-sans font-bold ${activeStage >= 3 ? "fill-primary" : "fill-gray-600"}`}>Pt Cloud & Conf.</text>
            <text x="700" y="205" textAnchor="middle" className="text-[11px] font-mono fill-gray-500">Tight Coupling</text>

            <text x="1040" y="165" textAnchor="middle" className={`text-[12px] font-sans font-bold ${activeStage >= 4 ? "fill-primary" : "fill-gray-600"}`}>Dense Views</text>
            <text x="1040" y="205" textAnchor="middle" className="text-[11px] font-mono fill-gray-500">Loose Coupling</text>

            <text x="1340" y="190" textAnchor="middle" className={`text-[12px] font-mono font-medium ${activeStage === 4 ? "fill-primary" : "fill-gray-500"}`}>[Output] 3D Scene</text>

            <text x="530" y="380" textAnchor="middle" className={`text-[13px] font-sans font-bold ${activeStage >= 3 ? "fill-primary" : "fill-gray-500"}`}>Keyframe Preservation</text>
            <text x="530" y="400" textAnchor="middle" className="text-[11px] font-mono fill-gray-400">Semantic Anchorage</text>
          </g>
        </svg>
      </div>

      {/* Bottom 1/3: Dynamic Blackboard */}
      <div className="flex-[1] min-h-[35vh] w-full bg-bg-dark text-bg-light relative overflow-y-auto shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-10 custom-scrollbar border-t border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="p-8 md:px-16 lg:px-32 relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              {/* Stage 1 Content */}
              {activeStage === 1 && (
                <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                  <div className="flex-[1.5]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold font-serif shadow-lg">1</span>
                      <h3 className="text-2xl font-serif font-bold text-white">Panoramic Generation</h3>
                      <span className="ml-2 px-2 py-1 bg-white/10 border border-white/20 rounded font-mono text-[10px] text-gray-300">Loose Coupling</span>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                      Loose coupling only passes appearance images to establish a global semantic prior. MVDiffusion explicitly models cross-view geometric correspondence relationships, ensuring uniform distribution of panoramic generation in the spherical coordinate system.
                    </p>
                    <div className="bg-black/40 border border-white/10 p-4 rounded-xl overflow-x-auto shadow-inner">
                      <BlockMath math={"\\text{CAA}(\\{F_i\\}) = \\text{softmax}\\left(\\frac{Q_i[K_1,...,K_N]^T + M_i}{\\sqrt{d}}\\right)[V_1,...,V_N]"} />
                    </div>
                  </div>
                  <div className="flex-[1] flex flex-col items-center justify-center h-full gap-4">
                    <ExpandableImage src="/MVdiffusion.png" alt="MVdiffusion Phase" className="w-full max-h-48 rounded-xl border border-white/10 shadow-lg" />
                    <div className="relative w-24 h-24 hidden md:block">
                       <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50 animate-[spin_10s_linear_infinite]" />
                       <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_15s_linear_reverse_infinite]" style={{ transform: 'rotateX(75deg)' }} />
                       <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite]" style={{ transform: 'rotateY(75deg)' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 2 Content */}
              {activeStage === 2 && (
                <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                  <div className="flex-[1.5]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold font-serif text-white shadow-lg">2</span>
                      <h3 className="text-2xl font-serif font-bold text-white">Point Cloud Reconstruction</h3>
                      <span className="ml-2 px-2 py-1 bg-white/10 border border-white/20 rounded font-mono text-[10px] text-gray-300">Tight Coupling (Conf)</span>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                      Uses DUSt3R for calibration-free dense 3D reconstruction. The tight coupling mechanism not only passes the point cloud geometry to the next stage, but also passes the matrix confidence predicted by the visual foundation model, building a fault-tolerant moat.
                    </p>
                    <div className="bg-black/40 border border-white/10 p-4 rounded-xl overflow-x-auto group relative shadow-inner">
                      <BlockMath math={"\\mathcal{L}_{align} = \\sum_{(i,j)\\in \\mathcal{E}} \\sum_k \\textcolor{#A41034}{w_{ij}^k} ||T_i p_i^k - T_j p_j^k||^2"} />
                      <div className="absolute opacity-0 group-hover:opacity-100 top-2 right-4 transition-opacity bg-[#A41034]/20 border border-[#A41034] text-white text-xs p-3 rounded-lg backdrop-blur-md max-w-[250px] shadow-2xl pointer-events-none z-50">
                        <strong className="block mb-1 text-[#A41034]">Confidence-Weighted</strong>
                        Combines DUSt3R confidence to filter textureless noise, guiding the downstream generator to focus on high-confidence regions.
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1] bg-white/5 border border-white/10 p-5 rounded-2xl h-full flex flex-col justify-center shadow-inner relative overflow-hidden gap-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"/>
                    
                    <ExpandableImage src="/DUSt3R.png" alt="DUSt3R Phase" className="w-full max-h-36 rounded-xl border border-white/10 shadow-lg relative z-10" />

                    <h5 className="text-green-400 font-mono text-xs mb-1 relative z-10">{'// Minimum Spanning Tree (MST)'}</h5>
                    <div className="flex-1 relative flex items-center justify-center z-10 w-full">
                      <svg width="100%" height="40" viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet">
                        <path d="M 20 20 L 80 10 L 140 20 L 180 10" fill="none" stroke="#22c55e" strokeWidth="2" className="animate-[dash_2s_linear_infinite]" strokeLinecap="round" strokeDasharray="10 5"/>
                        <path d="M 80 10 L 100 30 L 140 20" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
                        <circle cx="20" cy="20" r="3" fill="#fff" className="shadow-[0_0_10px_#22c55e]"/>
                        <circle cx="80" cy="10" r="3" fill="#fff"/>
                        <circle cx="100" cy="30" r="3" fill="#fff"/>
                        <circle cx="140" cy="20" r="3" fill="#fff"/>
                        <circle cx="180" cy="10" r="3" fill="#fff"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 3 Content */}
              {activeStage === 3 && (
                <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                  <div className="flex-[1.5]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold font-serif text-white shadow-lg">3</span>
                      <h3 className="text-2xl font-serif font-bold text-white">Temporal Diffusion Interpolation</h3>
                      <span className="ml-2 px-2 py-1 bg-white/10 border border-white/20 rounded font-mono text-[10px] text-gray-300">Tight Coupling (Poses)</span>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 p-6 rounded-2xl mb-4 relative shadow-inner">
                      <h5 className="font-bold text-gray-200 mb-4 font-serif relative z-10 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-orange-500" />
                         Keyframe Preservation Strategy
                      </h5>
                      
                      <div className="relative mt-2 mb-4 w-full h-8 flex items-center">
                        <div className="absolute left-4 right-4 h-[1px] bg-white/20" />
                        <div className="flex justify-between items-center w-full relative z-10 px-4">
                          {[1, 2, 3, 4, 5].map((anchor, i) => (
                             <div key={i} className="flex items-center">
                               <div className="group relative">
                                 <div className="w-4 h-4 bg-[#A41034] border border-[#121212] rounded-full shadow-[0_0_8px_#A41034]" />
                                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-[#A41034]/50 text-[10px] px-2 py-1 rounded font-mono text-white whitespace-nowrap z-50">Stage 1 Anchor</div>
                               </div>
                               {i < 4 && (
                                 <div className="mx-2 md:mx-6 lg:mx-12 flex gap-1 md:gap-3 lg:gap-6">
                                   <div className="w-1.5 h-1.5 bg-gray-500/80 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.2)]" />
                                   <div className="w-1.5 h-1.5 bg-gray-500/80 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.2)]" />
                                   <div className="w-1.5 h-1.5 bg-gray-500/80 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.2)] md:block hidden" />
                                 </div>
                               )}
                             </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs font-mono text-gray-400 mt-4 leading-relaxed">Red dots represent locked pre-generated anchors, gray dots represent ViewCrafter interpolated frames. This is the <span className="text-[#A41034] font-bold">magic anchor</span> that locks the original text semantics.</p>
                    </div>
                    
                    <p className="text-gray-400 font-light text-sm italic">
                      Transforms the complex 3D spatial geometric consistency constraints into temporal coherence compensation in video generation on the low-dimensional latent manifold.
                    </p>
                  </div>
                  <div className="flex-[1] flex items-center justify-center h-full w-full">
                    <ExpandableImage src="/viewcrafter.png" alt="ViewCrafter Phase" className="w-full max-h-56 rounded-xl border border-white/10 shadow-lg" />
                  </div>
                </div>
              )}

              {/* Stage 4 Content */}
              {activeStage === 4 && (
                <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                  <div className="flex-[1.5]">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center font-bold font-serif text-white shadow-lg">4</span>
                      <h3 className="text-2xl font-serif font-bold text-white">3D Gaussian Splatting</h3>
                      <span className="ml-2 px-2 py-1 bg-white/10 border border-white/20 rounded font-mono text-[10px] text-gray-300">Loose Coupling</span>
                    </div>
                    
                    <p className="text-gray-400 font-light mb-6">
                      Loose coupling not only avoids the black-box conduction of complex gradients, but also reduces 3DGS from mapping to pure appearance optimization based on accurate dense priors. For sparse indoor scenes, we heavily modified the training strategy:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                       <div className="relative overflow-hidden bg-black/40 border-l-2 border-[#A41034] border-t border-r border-b border-white/5 p-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                          <code className="text-white font-mono text-[12px] block mb-2 bg-white/5 p-1 rounded">opacity_reset = False</code>
                          <p className="text-[11px] text-gray-400 font-sans leading-relaxed">Forcibly disabled the reset mechanism to prevent the effective structural point cloud from being mistakenly ablated.</p>
                       </div>
                       <div className="relative overflow-hidden bg-black/40 border-l-2 border-[#A41034] border-t border-r border-b border-white/5 p-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                          <code className="text-white font-mono text-[12px] block mb-2 bg-white/5 p-1 rounded">iterations = 7000</code>
                          <p className="text-[11px] text-gray-400 font-sans leading-relaxed">Abandoned the lengthy 30K iterations to prevent 3DGS from extreme overfitting on dense artifacts.</p>
                       </div>
                       <div className="relative overflow-hidden bg-black/40 border-l-2 border-[#A41034] border-t border-r border-b border-white/5 p-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                          <code className="text-white font-mono text-[12px] block mb-2 bg-white/5 p-1 rounded">max_init_points = 500K</code>
                          <p className="text-[11px] text-gray-400 font-sans leading-relaxed">Implemented point cloud scale clamping based on voxel downsampling to ensure safe passage through the VRAM limit during the split and clone phase.</p>
                       </div>
                    </div>
                  </div>
                  <div className="flex-[1] flex items-center justify-center h-full w-full">
                    <ExpandableImage src="/rander from 3dgs.png" alt="3DGS Render Phase" className="w-full max-h-56 rounded-xl border border-white/10 shadow-lg" />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
