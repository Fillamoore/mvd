// app/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Display Options</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Show Overall Score
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Enable Sound Effects
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Auto-save Progress
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Show Completion Percentage
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}