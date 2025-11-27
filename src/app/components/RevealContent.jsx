"use client";

export default function RevealContent({ project, onBack }) {
  return (
    // WIDTH: 100vw (Full Screen)
    <div className="overflow-y-auto relative flex-shrink-0 w-screen h-screen text-black bg-white">
      {/* Back Button (Absolute Left) */}
      <button
        onClick={onBack}
        className="absolute left-8 top-1/2 z-50 p-4 rounded-full shadow-xl transition-all transform -translate-y-1/2 bg-zinc-100 hover:bg-zinc-200 group"
      >
        {/* <ArrowLeft className="transition-transform group-hover:-translate-x-1" /> */}
      </button>

      {/* Content Container */}
      <div className="px-12 pt-32 pb-20 mx-auto max-w-4xl">
        <h1 className="mb-8 text-6xl font-black tracking-tighter md:text-8xl">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-widest uppercase text-zinc-400">
              Overview
            </h3>
            <p className="text-xl font-medium leading-relaxed">
              {project.description}
            </p>
            <div className="mt-8 w-24 h-1 bg-black" />
          </div>

          <div className="space-y-4">
            {/* Mock Gallery */}
            <div className="h-64 rounded-lg bg-zinc-200" />
            <div className="h-40 rounded-lg bg-zinc-200" />
            <div className="h-40 rounded-lg bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
