export const SkeletonCard = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md w-full animate-pulse">
      <div className="flex space-x-4">
        <div className="flex-1 space-y-6 p-4">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-36 w-full"></div>
    </div>
  )
}
