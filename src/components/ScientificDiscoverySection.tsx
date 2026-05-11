import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const radarData = [
  { subject: 'MVC (Semantic)', 'Variant 124': 93.8, 'Variant 1234': 94.0, fullMark: 100 },
  { subject: 'TIA (Alignment)', 'Variant 124': 31.3, 'Variant 1234': 30.2, fullMark: 100 },
  { subject: 'Sharpness', 'Variant 124': 48.7, 'Variant 1234': 42.4, fullMark: 100 },
  { subject: 'Density', 'Variant 124': 31.8, 'Variant 1234': 53.1, fullMark: 100 },
  { subject: 'LPIPS (Inversed)', 'Variant 124': 33.9, 'Variant 1234': 44.7, fullMark: 100 }, // Inversed so higher is better on radar
];

const tableData = [
  { metric: 'MVC (CLIP) ↑', v124: '0.9382', v1234: '0.9401', diff: '+0.20%', p: '0.627', sig: '×', desc: 'Multi-View Consistency. Evaluates the semantic consistency of the generated 3D scene across varied camera poses. Higher means more consistent.' },
  { metric: 'TIA (CLIP) ↑', v124: '0.3132', v1234: '0.3025', diff: '-3.42%', p: '0.001', sig: '✓', desc: 'Text-Image Alignment. Measures alignment between rendered images and the source text prompt. A drop indicates interpolation may dilute literal text features while adding structure.' },
  { metric: 'Rendering Quality ↑', v124: '0.4878', v1234: '0.4245', diff: '-12.98%', p: '0.012', sig: '✓', desc: 'Represents the sharpness and visual quality of fine high-frequency textures. Higher is better.' },
  { metric: 'LPIPS ↓', v124: '0.6604', v1234: '0.5524', diff: '-16.35%', p: '<0.001', sig: '✓✓', highlight: true, desc: 'Learned Perceptual Image Patch Similarity. Measures the perceptual structural gap. A lower value indicates a more coherent, smoothly structured scene with fewer artifacts.' },
  { metric: 'Point Cloud Density', v124: '31.8M', v1234: '53.1M', diff: '+67%', p: '-', sig: '-', desc: 'The total number of Gaussian points in the generated 3D structure. Drastically more points signify a denser, more continuous geometry.' },
];

export default function ScientificDiscoverySection() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section id="section-3" className="w-full py-24 bg-bg-dark text-bg-light relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-0">
        <div className="mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Scientific Discovery</h2>
           <p className="text-gray-400 max-w-2xl">Unveiling the counter-intuitive trade-offs in progressive decoupling via controlled ablation studies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left: Radar Chart */}
          <div className="h-[400px] bg-black/40 rounded-3xl border border-white/10 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '14px' }}
                />
                <Legend />
                <Radar name="Variant 124 (8 Views)" dataKey="Variant 124" stroke="#888" fill="#888" fillOpacity={0.4} />
                <Radar name="Variant 1234 (24 Views)" dataKey="Variant 1234" stroke="#A41034" fill="#A41034" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Right: Academic Table with Tooltip */}
          <div className="relative flex flex-col justify-center">
            {/* The LaTeX style Three-Line Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-t-2 border-b border-gray-100/50">
                    <th className="py-3 px-4 font-serif font-medium">Metric</th>
                    <th className="py-3 px-4 font-serif font-medium">Variant 124</th>
                    <th className="py-3 px-4 font-serif font-medium">Variant 1234</th>
                    <th className="py-3 px-4 font-serif font-medium">Diff</th>
                    <th className="py-3 px-4 font-serif font-medium italic">p-value</th>
                  </tr>
                </thead>
                <tbody className="border-b-2 border-gray-100/50">
                  {tableData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`transition-colors duration-200 cursor-pointer ${hoveredRow === row.metric ? 'bg-primary/20' : 'hover:bg-white/5'}`}
                      onMouseEnter={() => setHoveredRow(row.metric)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td className="py-3 px-4">{row.metric}</td>
                      <td className="py-3 px-4">{row.v124}</td>
                      <td className="py-3 px-4 font-bold">{row.v1234}</td>
                      <td className={`py-3 px-4 ${row.diff.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{row.diff}</td>
                      <td className="py-3 px-4 text-gray-400">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Floating Tooltip Card */}
            <AnimatePresence>
              {hoveredRow && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute -bottom-8 translate-y-full left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[420px] bg-white text-bg-dark rounded-xl shadow-2xl p-6 border border-gray-200 z-30 pointer-events-none"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-bold">{hoveredRow}</h5>
                  </div>
                  
                  {tableData.map((row) => (
                    row.metric === hoveredRow && (
                      <p key={row.metric} className="text-sm text-gray-700 leading-relaxed mb-3">
                        {row.desc}
                      </p>
                    )
                  ))}

                  {(hoveredRow === 'LPIPS ↓' || hoveredRow === 'Rendering Quality ↑') && (
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm font-mono text-gray-500 mb-1">Paired t-test: p &lt; 0.05</p>
                      <p className="text-sm font-mono text-gray-500">Cohen's d = -2.507 <span className="inline-block bg-primary/10 text-primary px-2 rounded ml-2">Large Effect</span></p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mechanism Deep Dive */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-white/5 shadow-inner">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-serif">Mechanism Deep Dive:</span> 
            Temporal Low-pass Filtering Effect
          </h4>
          <p className="text-gray-400 leading-relaxed mb-6">
            Why does point cloud density jump by <strong className="text-white">67%</strong> and perceptual smoothness improve drastically, while high-frequency sharpness drops by <strong className="text-white">12.98%</strong>?
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10">
               <h5 className="text-white font-medium mb-2">1. Video Prior Suppression</h5>
               <p className="text-sm text-gray-400">To ensure inter-frame coherence, the ViewCrafter diffusion model applies temporal low-pass filtering to high-frequency textures, leading to inherently lower sharpness in interpolated views compared to the keyframes.</p>
             </div>
             <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10">
               <h5 className="text-white font-medium mb-2">2. 3DGS Greatest Common Denominator</h5>
               <p className="text-sm text-gray-400">When 3D Gaussian Splatting attempts to fit these dense, slightly smoothed interpolated views alongside sharp keyframes, photometric reconstruction algorithms are forced to seek a compromise, resulting in a system-wide dilution of sharp edges.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
