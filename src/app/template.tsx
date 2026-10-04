import "./typography.css";
import FieldBackground from "@/components/background/FieldBackground";

// Next.js wraps every page in this file automatically,
// so layout.tsx and globals.css don't need to be touched.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FieldBackground />
      {children}
    </>
  );
}
