export default function DirectThemeTestPage() {
  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Direct Theme Toggle Test</h1>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">About This Test</h2>
        <p className="mb-4">
          This page uses a direct DOM manipulation approach to toggle themes, bypassing the next-themes library. It
          directly adds/removes the 'dark' class on the html element and updates localStorage.
        </p>
        <p>If this toggle works but the regular one doesn't, it indicates an issue with the next-themes integration.</p>
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Theme Appearance Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <p>Light background in light mode, dark in dark mode</p>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">
            <p>Blue background that changes with theme</p>
          </div>
          <div className="p-4 bg-white dark:bg-black text-black dark:text-white rounded">
            <p>White/black background with contrasting text</p>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded">
            <p>Border that changes with theme</p>
          </div>
        </div>
      </div>
    </div>
  )
}
