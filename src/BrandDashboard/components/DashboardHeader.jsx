export function DashboardHeader() {
  return (
    <div className="bg-white rounded-lg border-2 border-dashed border-blue-300 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
            <span className="text-blue-400 text-2xl font-bold">T</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">TechFlow Solutions</h2>
            <p className="text-slate-600">Skincare & Wellness | Remote</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium">1055 Fill × 172.77 Hug</div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 font-medium px-4 py-2 rounded-lg transition-colors">
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  )
}
