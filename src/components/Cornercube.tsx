interface CornerCubeProp {
  className?: string;
}

export default function CornerCube({ className = "" }: CornerCubeProp) {
  return (
    <div
      className={`absolute flex items-center justify-center pointer-events-none w-5 h-5 z-60 ${className}`}
    >
      <div className="rotate-45 bg-[#F9F5FF] border border-[#C4A9FF] w-[10px] h-[10px]" />
    </div>
  );
}
