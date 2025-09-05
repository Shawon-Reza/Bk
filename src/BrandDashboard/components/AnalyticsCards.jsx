export function AnalyticsCards() {
  const analyticsData = [
    { value: "24", label: "Total Campaigns", color: "text-blue-600" },
    { value: "89", label: "Creators", color: "text-orange-600" },
    { value: "4.8", label: "Avg Rating", color: "text-green-600" },
    { value: "$250K", label: "Total Invested", color: "text-purple-600" },
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((item, index) => (
          <div key={index} className="bg-slate-200 rounded-lg p-6 text-center">
            <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</div>
            <div className="text-slate-600 text-sm font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
