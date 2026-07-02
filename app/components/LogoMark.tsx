type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="Devlentra logo">
      <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-[9px] bg-[#1D1D1F] text-[11px] font-bold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
        <span className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(0,113,227,0.92),rgba(29,29,31,0)_58%)]" />
        <span className="relative">D</span>
      </span>
      {compact ? null : (
        <span className="font-semibold text-[#1D1D1F]">Devlentra</span>
      )}
    </span>
  );
}
