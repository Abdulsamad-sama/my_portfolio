const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center z-[999] bg-[var(--bg-color)]">
      <h1 className="text-5xl md:text-7xl font-extrabold font-chillax text-[var(--text-color)] mb-8 tracking-tight">
        Abdulsamad.
      </h1>
      <div className="w-48 h-[3px] bg-[var(--border-color)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--text-color)] rounded-full"
          style={{
            animation: "loading-bar 1.2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; margin-left: 0; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
