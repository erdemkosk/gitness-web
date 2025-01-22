import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Demo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const repo = 'erdemkosk/gitness'

  const steps = [
    {
      name: 'Set up job',
      logs: [
        'Set up job using ubuntu-latest',
        'Getting code from GitHub',
        'Runner environment: Ubuntu-22.04',
      ]
    },
    {
      name: 'Checkout repository',
      logs: [
        'Checking out repository...',
        'git init .',
        'git remote add origin https://github.com/${repo}',
        'Repository checkout completed'
      ]
    },
    {
      name: 'Run Gitness Analysis',
      logs: [
        '🚀 Starting Gitness analysis...',
        'Running analysis in Docker container',
        '📊 Analyzing repository health...',
        '→ Fetching repository data...',
        '→ Analyzing commit history...',
        '→ Calculating bus factor...',
        '✨ Analysis complete!',
      ]
    },
    {
      name: 'Generate Report',
      logs: [
        '📝 Generating analysis report...',
        '📊 Repository: ${repo}',
        '🕒 Analysis Period: Last 1 year',
        '🎯 Core Metrics',
        '────────────────',
        '🚌 Bus Factor: 4',
        '📚 Knowledge Distribution: 75.5%',
        '📝 Total Commits: 330',
        '👥 Active Contributors: 45.5%',
        '🔄 Recent Contributors: 6',
        '',
        '⏰ Commit Frequency',
        '────────────────',
        '📅 Daily Average: 3.77 commits',
        '📅 Weekly Average: 26.38 commits',
        '📅 Monthly Average: 113.07 commits',
        '📅 Most Active Day: Monday',
        '🕒 Peak Activity Time: 18:00',
        '',
        '✅ Report generated successfully!'
      ]
    }
  ]

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    setLogs([])
    setCurrentStep(0)

    // Simüle edilmiş GitHub Actions akışı
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i)
      const step = steps[i]
      
      setLogs(prev => [...prev, `\n⚡ ${step.name}`])
      
      for (const log of step.logs) {
        await new Promise(resolve => setTimeout(resolve, 500))
        setLogs(prev => [...prev, log.replace('${repo}', repo)])
      }
    }

    setIsAnalyzing(false)
  }

  return (
    <section id="demo" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D5D]/5 to-[#40BFBF]/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1A1E23_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1E23] mb-4">
            Live Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a simulated GitHub Actions analysis of the Gitness repository
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Note: This is a demonstration. For real analysis, add Gitness to your GitHub Actions workflow.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg mb-8">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-gray-600 mb-2 text-sm">Repository</label>
                <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700">
                  {repo} - Bus factor analysis tool
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full sm:w-auto px-6 py-3 bg-[#40BFBF] hover:bg-[#35A3A3] rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
                >
                  {isAnalyzing ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Running Analysis...
                    </>
                  ) : (
                    <>Run Analysis</>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-[#1A1E23] rounded-lg p-4 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5D5D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD4C]"></div>
                <div className="w-3 h-3 rounded-full bg-[#40BFBF]"></div>
                <span className="text-gray-400 text-xs ml-2">GitHub Actions Workflow</span>
              </div>
              
              <div className="h-[400px] overflow-y-auto space-y-1 font-mono">
                {logs.map((log, index) => (
                  <div 
                    key={index}
                    className={`${
                      log.startsWith('⚡') 
                        ? 'text-[#40BFBF] font-bold mt-4' 
                        : log.startsWith('→')
                        ? 'text-[#FFBD4C]'
                        : log.startsWith('✅')
                        ? 'text-green-400'
                        : log.match(/^[📊🕒🎯🚌📚📝👥🔄⏰📅]/)
                        ? 'text-[#40BFBF]'
                        : 'text-gray-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
                {isAnalyzing && currentStep < steps.length && (
                  <div className="text-[#40BFBF] animate-pulse">▋</div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 