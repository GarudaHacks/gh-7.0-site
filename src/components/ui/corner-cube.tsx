import { cn } from "../../../lib/utils";

interface CornerCubeProps {
  className?: string;
}

export default function CornerCube({ className }: CornerCubeProps) {
  return (
    <div
      className={cn(
        "absolute w-[9px] h-[9px] bg-[#C4A9FF] rounded-sm flex items-center justify-center",
        className
      )}
    />
  );
}
