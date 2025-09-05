export function RecentCollaborations() {
  const collaborations = [
    {
      username: "@beautybyemma",
      followers: "19k followers",
      rating: 4.8,
      avatar: "👩",
    },
    {
      username: "@glowgoddess",
      followers: "25k followers",
      rating: 4.9,
      avatar: "👱‍♀️",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Collaborations</h3>

      <div className="space-y-4">
        {collaborations.map((collab, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-lg">{collab.avatar}</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">{collab.username}</p>
                <p className="text-sm text-slate-600">{collab.followers}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-medium text-slate-700">{collab.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
