import { Activity, Bot, Code2, DatabaseZap, ShoppingBag } from "lucide-react";

export function DeviceMockup() {
  return (
    <div className="relative rounded-[34px] border border-[#D2D2D7] bg-[#FDFDFD] p-3 shadow-[0_36px_90px_rgba(29,29,31,0.16)]">
      <div className="overflow-hidden rounded-[26px] border border-[#E8E8ED] bg-white">
        <div className="flex h-11 items-center justify-between border-b border-[#E8E8ED] bg-[#F7F7F8] px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="rounded-full bg-white px-4 py-1 text-xs font-medium text-[#86868B]">
            yourtech.studio
          </span>
        </div>
        <div className="grid gap-4 p-5">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,#EAF3FF,#F4ECFF,#ECFEFF)] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#0071E3]">Product system</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1D1D1F]">
                  AI + commerce pipeline
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0071E3] shadow-sm">
                <Bot className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["Leads", "42%"],
                ["Speed", "98"],
                ["Tasks", "12k"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/80 p-3">
                  <p className="text-xs text-[#86868B]">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-[#1D1D1F]">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
            <div className="rounded-[22px] border border-[#E8E8ED] bg-white p-4">
              <ShoppingBag className="h-5 w-5 text-[#0071E3]" aria-hidden="true" />
              <div className="mt-5 h-3 w-20 rounded-full bg-[#D2D2D7]" />
              <div className="mt-3 h-20 rounded-2xl bg-[linear-gradient(135deg,#F7F7F8,#E8E4DD,#FDFDFD)]" />
            </div>
            <div className="rounded-[22px] border border-[#E8E8ED] bg-[#1D1D1F] p-4 text-white">
              <div className="flex items-center justify-between">
                <Code2 className="h-5 w-5 text-[#8EC5FF]" aria-hidden="true" />
                <DatabaseZap className="h-5 w-5 text-[#B8F7FF]" aria-hidden="true" />
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-5/6 rounded-full bg-white/35" />
                <div className="h-2 w-3/4 rounded-full bg-[#8EC5FF]/60" />
                <div className="h-2 w-2/3 rounded-full bg-white/25" />
              </div>
              <div className="mt-5 rounded-2xl bg-white/10 p-3">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Activity className="h-4 w-4" aria-hidden="true" />
                  Live API health
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-4/5 rounded-full bg-[#8EC5FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
