import React from 'react';

export default function DemoSection() {
  return (
    <section id="section-7" className="w-full min-h-screen bg-black relative flex flex-col items-center justify-center overflow-hidden py-12">
      <div className="relative z-10 text-center flex flex-col items-center px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Video Demo
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
          The pipeline establishes a complete progressive generation architecture. This video demonstrates the rendered results of the 3D scenes.
        </p>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center p-4 w-full overflow-hidden">
        <video 
          controls 
          autoPlay 
          loop 
          muted 
          className="max-w-full max-h-[60vh] md:max-h-[70vh] rounded-xl border border-white/10 shadow-2xl bg-black/50"
        >
          <source src={`${import.meta.env.BASE_URL}correct_8s_video.mp4`} type="video/mp4" />
          <p className="text-white">Video not available.</p>
        </video>
      </div>

      {/* Footer Acknowledgement */}
      <div className="text-center z-10 px-4 mt-8">
        <p className="text-gray-500 font-sans text-sm">
          "Text2GS: Breaking the coupling black box, making high-quality 3D scene prototyping truly accessible."<br />
          <span className="text-gray-400 mt-2 block">Thank you to the committee members.</span>
        </p>
      </div>
    </section>
  );
}
