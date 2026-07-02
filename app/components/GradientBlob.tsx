type GradientBlobProps = {
  className?: string;
};

export function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-[999px] bg-[linear-gradient(135deg,#EAF3FF,#F4ECFF,#ECFEFF)] blur-3xl ${className}`}
    />
  );
}
