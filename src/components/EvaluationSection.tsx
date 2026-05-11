import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const metrics = [
  { id: 'vram', name: 'Peak VRAM', text2gs: 18.2, ds: '>40.0', unit: 'GB', text2gsWins: true, type: 'cost' },
  { id: 'time', name: 'Execution Time', text2gs: 11.49, ds: 64.4, unit: 'mins', text2gsWins: true, type: 'cost' },
  { id: 'tia', name: 'Text-Image Alignment (TIA)', text2gs: 0.3025, ds: 0.2639, unit: '', text2gsWins: true, type: 'semantic' },
  { id: 'mvc', name: 'Multi-View Consistency', text2gs: 0.9401, ds: 0.9657, unit: '', text2gsWins: false, type: 'geometry' },
  { id: 'rendering', name: 'Rendering Quality', text2gs: 0.4245, ds: 0.6555, unit: '', text2gsWins: false, type: 'geometry' },
  { id: 'lpips', name: 'LPIPS Consistency', text2gs: 0.5524, ds: 0.3315, unit: '', text2gsWins: false, type: 'geometry' }
];

const efficiencyData = [
  { name: 'Peak VRAM (GB)', Text2GS: 18.2, DreamScene: 40.0 },
  { name: 'Execution Time (mins)', Text2GS: 11.49, DreamScene: 64.4 },
];

export default function EvaluationSection() {
  return (
    <section id="section-5" className="w-full py-24 bg-[#FAFAFA] relative border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-0">
        <div className="mb-16">
          <span className="text-[#A41034] font-mono text-sm tracking-wider uppercase font-bold">Section 5</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-6 text-gray-900">
            System Evaluation & Pareto Frontier
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
            We present a systematic comparison against the state-of-the-art (SOTA) DreamScene. Rather than optimizing for a single dimension, Text2GS embodies a <strong className="text-[#A41034]">Pareto optimal trade-off</strong>: prioritizing extreme generation speed, low hardware barriers, and semantic accuracy, whereas DreamScene pursues ultimate geometric and perceptual smoothness at the cost of massive computational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left: Experimental Data Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h3 className="font-serif font-bold text-gray-900 text-xl">Comprehensive Metrics</h3>
              <div className="flex gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#A41034] rounded-sm"/>Text2GS</span>
                <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-gray-300 rounded-sm"/>DreamScene</span>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {metrics.map((m) => (
                <div key={m.id} className="p-4 md:p-6 hover:bg-gray-50/50 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">{m.name}</span>
                      {m.type === 'cost' && <span className="text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Cost (Lower Better)</span>}
                      {m.type === 'semantic' && <span className="text-[10px] uppercase tracking-wider bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Semantics (Higher Better)</span>}
                      {m.type === 'geometry' && <span className="text-[10px] uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Geometry ({m.id === 'lpips' ? 'Lower Better' : 'Higher Better'})</span>}
                    </div>
                    {m.text2gsWins ? (
                      <span className="text-xs font-bold text-[#A41034] flex items-center gap-1">
                        <CheckCircle2 size={14} /> Text2GS Advantage
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                        <AlertTriangle size={14} /> DreamScene Advantage
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 mt-4 relative">
                    {/* Background track line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
                    
                    {/* Text2GS Column */}
                    <div className="flex items-center justify-end gap-3 text-right">
                      <span className="font-mono text-sm font-bold text-[#A41034]">{m.text2gs}</span>
                      <span className="text-xs text-gray-400 w-10 text-right">{m.unit}</span>
                    </div>

                    {/* DreamScene Column */}
                    <div className="flex items-center justify-start gap-3">
                      <span className="font-mono text-sm font-medium text-gray-500">{m.ds}</span>
                      <span className="text-xs text-gray-400 w-10">{m.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Qualitative Analysis & Bar Chart */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             
             {/* Engineering Democ Chart */}
             <div className="bg-[#121212] p-6 rounded-3xl shadow-xl relative overflow-hidden border border-gray-800">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A41034]/20 blur-3xl rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
               <h4 className="font-serif text-xl font-bold text-white mb-2">
                 Engineering Democratization
                 <span className="block mt-1 text-xs font-mono text-gray-400 uppercase tracking-widest">Resource Footprint</span>
               </h4>
               <div className="h-44 mt-6">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={efficiencyData} layout="vertical" margin={{ top: 0, right: 30, left: -20, bottom: 0 }}>
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} width={120} />
                     <Tooltip cursor={{fill: '#1f2937'}} contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#111827', color: '#fff' }} />
                     <Bar dataKey="Text2GS" fill="#A41034" radius={[0, 4, 4, 0]} barSize={12} />
                     <Bar dataKey="DreamScene" fill="#4B5563" radius={[0, 4, 4, 0]} barSize={12} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
               <p className="text-gray-300 text-sm mt-4 leading-relaxed font-light">
                 Text2GS reduces the VRAM requirement by over 55% and achieves a 5.6× speedup compared to heavy-optimization baselines, allowing generation on consumer-grade RTX 3090/4090 GPUs.
               </p>
             </div>

             {/* The Semantic Tradeoff */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  The Semantic vs. Geometric Tension
                </h4>
                <div className="space-y-4 mt-4 text-gray-600 leading-relaxed text-sm">
                  <p>
                    DreamScene excels in geometric continuity (MVC 0.9657) and LPIPS smoothness. However, pursuing extreme global consistency exacts a heavy algorithmic cost: it dilutes text semantics.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-[#A41034] p-4 rounded-r-xl">
                    <p className="text-gray-800 font-medium">Text-Image Alignment (TIA)</p>
                    <p className="mt-1">
                      Text2GS completely bypasses this semantic drift. By strictly anchoring semantics via sparse keyframes early in the pipeline (Stage 1), it preserves a <strong className="text-[#A41034]">TIA of 0.3025</strong> (+14.6% over DreamScene) even in complex unbounded environments.
                    </p>
                  </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
