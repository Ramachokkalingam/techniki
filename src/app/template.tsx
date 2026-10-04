/**
 * A template (unlike a layout) is re-created on every navigation, so the
 * short rise animation below plays each time a page opens. The navbar, footer
 * and background live in layout.tsx and are never re-mounted.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
