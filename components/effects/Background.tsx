"use client";

export default function Background() {
  return (
    <>
      {/* Top Glow */}
      <div className="fixed top-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-cyan-500 opacity-15 blur-[220px] -z-50" />

      {/* Bottom Glow */}
      <div className="fixed bottom-[-250px] left-[-200px] w-[700px] h-[700px] rounded-full bg-blue-600 opacity-15 blur-[220px] -z-50" />
    </>
  );
}
