import { ReactNode } from "react";

/**
 * Phone-shaped frame so the app feels mobile-first on the web preview.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-[420px] h-[min(900px,95vh)] rounded-[2.5rem] overflow-hidden border border-border shadow-card bg-background">
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide">{children}</div>
      </div>
    </div>
  );
}