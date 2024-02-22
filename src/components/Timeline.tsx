export default function Timeline({ children }: { children: React.ReactNode }) {
  return <ol className="relative border-s border-gray-200">{children}</ol>;
}
