export default function Footer() {
  return (
    <footer className="bg-[#1A1E23] relative overflow-hidden">
      {/* Background gradient and dots */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D5D]/10 to-[#40BFBF]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"></div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Gitness</h3>
            <p className="text-gray-400">Keep your codebase fit and healthy</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-[#40BFBF] transition-colors">Features</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-[#40BFBF] transition-colors">Demo</a></li>
              <li><a href="https://github.com/erdemkosk/gitness" className="text-gray-400 hover:text-[#40BFBF] transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/erdemkosk" className="text-gray-400 hover:text-[#FF5D5D] transition-colors">GitHub</a></li>
              <li><a href="#documentation" className="text-gray-400 hover:text-[#FF5D5D] transition-colors">Documentation</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FF5D5D] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mustafa Erdem Köşk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 