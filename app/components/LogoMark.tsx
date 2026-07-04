import Image from "next/image";

type LogoMarkProps = {
  compact?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const markSizeClass = {
  sm: "h-7 w-7 rounded-[9px]",
  md: "h-8 w-8 rounded-[10px]",
  lg: "h-12 w-12 rounded-[16px]",
};

export function LogoMark({
  compact = false,
  size = "md",
  className = "",
}: LogoMarkProps) {
  const wordmarkClass =
    size === "lg"
      ? "text-[21px] font-bold leading-none text-[#1D1D1F]"
      : "text-[14px] font-semibold leading-none text-[#1D1D1F]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`.trim()}
      aria-label="Devlentra logo"
    >
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-[#F5F5F7] shadow-[0_8px_22px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.7)] ${markSizeClass[size]}`}
      >
        <Image
          src="/images/brand/devlentra-logo-mark.png"
          alt=""
          fill
          priority={size === "lg"}
          sizes={size === "lg" ? "48px" : "32px"}
          unoptimized
          className="object-cover"
        />
      </span>
      {compact ? null : (
        <span className={wordmarkClass}>Devlentra</span>
      )}
    </span>
  );
}
