import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InlineMath, BlockMath } from 'react-katex';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dataset' | 'gs' | 'fid'>('dataset');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-4xl bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="flex items-center px-6 py-4 border-b border-white/10 bg-black/40 text-gray-400 font-mono text-sm">
          <span className="text-primary mr-3">❯</span> God-Mode Q&A Console (Ctrl+K)
        </div>

        <div className="flex border-b border-white/5 bg-black/20">
          <TabButton active={activeTab === 'dataset'} onClick={() => setActiveTab('dataset')}>
            Appx B: Dataset
          </TabButton>
          <TabButton active={activeTab === 'gs'} onClick={() => setActiveTab('gs')}>
            Appx C: 3D-GS Config
          </TabButton>
          <TabButton active={activeTab === 'fid'} onClick={() => setActiveTab('fid')}>
            FID Analytics
          </TabButton>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 text-gray-300">
          {activeTab === 'dataset' && (
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-white mb-4">Prompt Complexity Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <DatasetCategory title="Simple (5)" items={["A cozy bedroom with a bed and nightstand", "A minimalist living room with a sofa"]} />
                 <DatasetCategory title="Medium (5)" items={["A modern kitchen with marble countertops and stainless steel appliances", "A comfortable living room with a fireplace and wooden furniture"]} />
                 <DatasetCategory title="Complex (5)" items={["A luxurious master bedroom with a king-size bed, chandelier, and floor-to-ceiling windows", "An open-plan kitchen and dining area with an island, pendant lights..." ]} />
              </div>
              <p className="text-sm text-gray-500 italic mt-6">* Avoid cherry-picking: 100% success rate across all 30 experiments (15 prompts x 2 variants). Complete list available in Appendix B.</p>
            </div>
          )}

          {activeTab === 'gs' && (
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-white mb-4">3D Gaussian Splatting Training Logic</h3>
              <div className="bg-black/50 p-6 rounded-xl border border-white/5 overflow-x-auto">
                 <BlockMath math={"\\mathcal{L} = (1-\\lambda) \\times \\mathcal{L}_1 + \\lambda \\times \\mathcal{L}_{D-SSIM}"} />
                 <BlockMath math={"= 0.8 \\times \\mathcal{L}_1 + 0.2 \\times \\mathcal{L}_{D-SSIM}"} />
              </div>
              <ul className="list-disc pl-5 space-y-2 mt-4 font-mono text-sm">
                <li><span className="text-blue-300">opacity_reset_interval:</span> 100000 (Disabled to prevent removing valid points natively inferred from sparse views)</li>
                <li><span className="text-blue-300">densify_grad_threshold:</span> <span className="text-orange-300">0.0002</span></li>
                <li><span className="text-blue-300">max_init_points:</span> 500,000</li>
              </ul>
            </div>
          )}

          {activeTab === 'fid' && (
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-white mb-4">Addressing FID Limitations</h3>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-primary font-medium mb-6">
                Overall FID: 92.77
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap mb-6">
                <thead><tr className="border-b border-gray-600 text-gray-400"><th className="pb-2">Category</th><th className="pb-2">Average FID</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-800"><td className="py-2">Simple</td><td className="py-2">164.9</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-2">Medium</td><td className="py-2">158.1</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-2">Complex</td><td className="py-2">161.7</td></tr>
                </tbody>
              </table>
              <div className="bg-white/5 p-4 rounded-xl border-l-4 border-l-gray-400">
                <strong className="text-white block mb-2">Vocal Response to Committee:</strong>
                <p className="text-sm italic text-gray-400">"Constrained by GPU computation per student and experiment cycle times, we acknowledge FID was calculated on a small sample size (8-24 images per scene). The absolute values lack broad statistical significance, however, their highly consistent distribution across Simple/Medium/Complex categories cross-validates the framework's robustness against varying semantic complexities."</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-sm font-medium transition-colors ${
        active ? 'text-white bg-white/10 border-b-2 border-primary' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  );
}

function DatasetCategory({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-black/30 p-4 rounded-xl border border-white/5">
      <h5 className="font-bold text-white mb-3">{title}</h5>
      <ul className="space-y-3 text-sm text-gray-400">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
