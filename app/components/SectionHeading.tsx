type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold text-[#0071E3]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance mt-3 text-[34px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#1D1D1F] sm:text-[48px] lg:text-[60px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#6E6E73] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
