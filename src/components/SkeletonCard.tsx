export const SkeletonCard = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md w-full animate-pulse">
      <div className="flex space-x-4">
        <div className="flex-1 space-y-6 p-4">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-36 w-full"></div>
    </div>
  )
}
