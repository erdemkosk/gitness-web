import { useTypewriter } from '@/hooks/useTypewriter'

export default function Hero() {
  const command = useTypewriter('$ gitness --duration 1y --output console https://github.com/erdemkosk/gitness', 50)
  const analyzing = useTypewriter('→ Analyzing repository health...', 50, 2000)
  const calculating = useTypewriter('→ Calculating bus factor...', 50, 3000)
  const metrics = [
    useTypewriter('📊 Repository: erdemkosk/gitness', 30, 4000),
    useTypewriter('──────────────────────────────────────────────────', 30, 4200),
    useTypewriter('🌿 Branch: default', 30, 4500),
    useTypewriter('🕒 Analysis Period: Last 1 year', 30, 4500),
    useTypewriter('', 30, 4700),
    useTypewriter('🎯 Core Metrics', 30, 5000),
    useTypewriter('────────────────', 30, 5200),
    useTypewriter('🚌 Bus Factor: 4', 30, 5500),
    useTypewriter('📚 Knowledge Distribution: 75.5%', 30, 5800),
    useTypewriter('📝 Total Commits: 330', 30, 6100),
    useTypewriter('👥 Active Contributors: 45.5%', 30, 6400),
    useTypewriter('🔄 Recent Contributors: 6', 30, 6700),
    useTypewriter('', 30, 6900),
    useTypewriter('⏰ Commit Frequency', 30, 7200),
    useTypewriter('────────────────', 30, 7400),
    useTypewriter('📅 Daily Average: 3.77 commits', 30, 7700),
    useTypewriter('📅 Weekly Average: 26.38 commits', 30, 8000),
    useTypewriter('📅 Monthly Average: 113.07 commits', 30, 8300),
    useTypewriter('📅 Most Active Day: Monday', 30, 8600),
    useTypewriter('🕒 Peak Activity Time: 18:00', 30, 8900),
  ]

  const asciiArt = `    ██████╗ ██╗████████╗███╗   ██╗███████╗███████╗███████╗
   ██╔════╝ ██║╚══██╔══╝████╗  ██║██╔════╝██╔════╝██╔════╝
   ██║  ███╗██║   ██║   ██╔██╗ ██║█████╗  ███████╗███████╗
   ██║   ██║██║   ██║   ██║╚██╗██║██╔══╝  ╚════██║╚════██║
   ╚██████╔╝██║   ██║   ██║ ╚████║███████╗███████║███████║
    ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝`

  return (
    <div className="bg-[#1A1E23] min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D5D]/10 to-[#40BFBF]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Keep Your Codebase
                <span className="bg-gradient-to-r from-[#FF5D5D] to-[#40BFBF] text-transparent bg-clip-text"> Fit & Healthy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your team against knowledge loss and bus factor risks. Ensure equal knowledge distribution and stay prepared for unexpected team changes with real-time codebase health monitoring.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/erdemkosk/gitness" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#FF5D5D] hover:bg-[#FF4040] rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#FF5D5D]/20 hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </span>
              </a>
              <a 
                href="#demo"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#40BFBF] hover:bg-[#35A3A3] rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#40BFBF]/20 hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  See Demo
                </span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="bg-[#1A1E23]/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl terminal-window border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5D5D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD4C]"></div>
                <div className="w-3 h-3 rounded-full bg-[#40BFBF]"></div>
              </div>
              <div className="font-mono text-sm text-gray-300 whitespace-pre overflow-x-auto">
                <p className="mb-2">{command}<span className="terminal-cursor"></span></p>
                <p className="text-[#40BFBF] mb-4">{analyzing}</p>
                <pre className="text-[#FF5D5D] mb-4 animate-fadeIn">{analyzing.length === analyzing.split('').length && asciiArt}</pre>
                <p className="text-gray-400 mb-2">{calculating}</p>
                
                {metrics.map((metric, index) => (
                  <p 
                    key={index} 
                    className={`${
                      metric.includes('Core Metrics') || metric.includes('Commit Frequency') || metric.startsWith('📊')
                        ? 'text-[#40BFBF] font-bold'
                        : metric.includes('Analysis Period')
                        ? 'text-gray-400'
                        : metric.includes('Bus Factor') || metric.includes('Knowledge Distribution')
                        ? 'text-[#35A3A3]'
                        : metric.includes('──')
                        ? 'text-gray-600'
                        : 'text-gray-300'
                    } ${metric === '' ? 'my-2' : 'mb-1'}`}
                  >
                    {metric}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 