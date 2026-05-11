import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

const evolutionData = [
  { stage: 'Stage 1 (2D Image)', MVC: 94.55, TIA: 31.43, Quality: 47.29 },
  { stage: 'Stage 4 (3D Rendered)', MVC: 94.01, TIA: 30.25, Quality: 42.45 },
];

export default function QualityEvolutionSection() {
  return (
    <section id="section-4" className="w-full py-24 bg-bg-light text-bg-dark">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-0">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Quality Evolution</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The Inherent Tax of 3D Representation
          </h3>
          <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
            Transitioning from 2D generative priors to a unified 3D physical representation strictly enforces photometric consistency. This reconciliation across multiple viewpoints inevitably results in a "quality tax" compared to isolated 2D images.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Metric 1: MVC */}
           <EvolutionCard 
             title="MVC (Semantic Consistency)" 
             dataKey="MVC" 
             color="#3B82F6" 
             drop="-0.57%" 
           />
           {/* Metric 2: TIA */}
           <EvolutionCard 
             title="TIA (Text Alignment)" 
             dataKey="TIA" 
             color="#10B981" 
             drop="-3.78%" 
           />
           {/* Metric 3: Quality */}
           <EvolutionCard 
             title="Rendering Quality" 
             dataKey="Quality" 
             color="#A41034" 
             drop="-10.22%" 
             isMajor
           />
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
           <h4 className="font-serif font-bold text-xl mb-4 text-gray-800">Academic Interpretation</h4>
           <div className="w-16 h-1 bg-primary mb-6" />
           <p className="text-gray-600 leading-relaxed">
             All metrics experience a decline after 3D-GS training. This is not a flaw in the model, but a fundamental characteristic of fitting multi-view data with a finite set of Gaussian primitives. Because photometric reconstruction errors must be balanced across conflicting viewpoint supervisions, the representation learns the <em>"greatest common denominator"</em>. 
             <br /><br />
             This brutally honest data reveals the true boundary of current 3D vision: <strong>3D consistency rarely comes for free.</strong>
           </p>
        </div>
      </div>
    </section>
  );
}

function EvolutionCard({ title, dataKey, color, drop, isMajor = false }: { title: string, dataKey: string, color: string, drop: string, isMajor?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border bg-white ${isMajor ? 'border-primary/30 shadow-md transform lg:-translate-y-4' : 'border-gray-200 shadow-sm'}`}>
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-gray-800">{title}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded ${isMajor ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}>
          {drop}
        </span>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={evolutionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="stage" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis domain={['dataMin - 5', 'dataMax + 5']} tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} fillOpacity={1} fill={`url(#color${dataKey})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
