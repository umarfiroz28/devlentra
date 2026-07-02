import { processSteps } from "../data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-[#FBFBFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-container">
        <div className="text-center">
          <p className="apple-eyebrow">Process</p>
          <h2 id="process-title" className="apple-section-title mx-auto mt-3 max-w-[820px]">
            A simple process. A polished result.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="apple-card p-6 sm:p-7">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#F5F5F7] text-[#0071E3]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="apple-caption">Step {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#1D1D1F]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-7 text-[#6E6E73]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
