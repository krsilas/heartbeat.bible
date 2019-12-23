

export default () => (
  <div className="p-3 mt-3 mx-auto max-w-md">
    <h1 className="font-mono text-2xl font-extrabold mb-4 dark:text-red-600">Settings</h1>
    <div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Dark Mode</span>
        <select disabled class="form-select mt-1 block px-2 py-1 w-1/3 font-mono text-sm text-gray-700">
          <option>Default</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="flex justify-between my-2">
        <span className="py-1 leading-relaxed">Language</span>
        <select disabled class="form-select mt-1 block px-2 py-1 w-1/3 font-mono text-sm text-gray-700">
          <option>Deutsch</option>
        </select>
      </div>
    </div>
    <a href="https://poeditor.com/join/project/8wFuvhJUOM" className="mt-8 inline-block text-grey-600 font-medium font-mono bg-gray-300 px-3 py-2 border border-gray-400 rounded-lg" target="_blank" rel="nofollow norefferer">Help me translate heartbeat.bible</a>
  </div>
)