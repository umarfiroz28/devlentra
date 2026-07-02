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
      <h2 className="apple-title text-balance mt-3 text-[36px] sm:text-[52px] lg:text-[64px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#6E6E73] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
