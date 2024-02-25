export default function ProgressBar({ progress }: { progress: number }): JSX.Element {
  return <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
    <div className={`bg-primary-light h-1.5 rounded-full`} style={{
      width: `${progress < 0 ? 0 : progress}%`
    }}></div>
  </div>
}