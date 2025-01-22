import { motion } from 'framer-motion'

export default function Metrics() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const metrics = [
    {
      title: "Bus Factor Score",
      description: "Minimum number of developers needed to maintain the project",
      ranges: [
        { label: "Critical", value: "< 2", color: "bg-[#FF5D5D]" },
        { label: "Warning", value: "2-3", color: "bg-[#FFBD4C]" },
        { label: "Good", value: "≥ 4", color: "bg-[#40BFBF]" }
      ],
      icon: "🚌"
    },
    {
      title: "Knowledge Distribution",
      description: "How evenly the codebase knowledge is spread across team",
      ranges: [
        { label: "Critical", value: "< 25%", color: "bg-[#FF5D5D]" },
        { label: "Warning", value: "25-50%", color: "bg-[#FFBD4C]" },
        { label: "Good", value: "> 50%", color: "bg-[#40BFBF]" }
      ],
      icon: "📚"
    },
    {
      title: "Active Contributors",
      description: "Percentage of contributors with significant impact",
      ranges: [
        { label: "Critical", value: "< 30%", color: "bg-[#FF5D5D]" },
        { label: "Warning", value: "30-50%", color: "bg-[#FFBD4C]" },
        { label: "Good", value: "> 50%", color: "bg-[#40BFBF]" }
      ],
      icon: "👥"
    }
  ]

  const outputFormats = [
    {
      name: "Console",
      description: "Interactive CLI output with ASCII art and colors",
      example: "gitness --output console https://github.com/user/repo",
      icon: "💻"
    },
    {
      name: "JSON",
      description: "Structured data format for programmatic analysis",
      example: "gitness --output json https://github.com/user/repo > analysis.json",
      icon: "📊"
    },
    {
      name: "Markdown",
      description: "Formatted report ideal for documentation",
      example: "gitness --output markdown https://github.com/user/repo > report.md",
      icon: "📝"
    }
  ]

  return (
    <section className="py-20 bg-[#1A1E23] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D5D]/5 to-[#40BFBF]/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Understanding Your Metrics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track these key indicators to ensure your codebase stays healthy and maintainable
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1E2329] p-6 rounded-2xl border border-gray-800"
            >
              <div className="text-3xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{metric.title}</h3>
              <p className="text-gray-400 mb-6">{metric.description}</p>
              <div className="space-y-3">
                {metric.ranges.map((range, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-400">{range.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{range.value}</span>
                      <div className={`w-2 h-2 rounded-full ${range.color}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible Output Formats
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get your analysis results in the format that works best for your workflow
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {outputFormats.map((format, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1E2329] p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-3xl mb-4">{format.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{format.name}</h3>
                <p className="text-gray-400 mb-4">{format.description}</p>
                <div className="bg-[#1A1E23] p-3 rounded-lg">
                  <code className="text-sm text-[#40BFBF]">{format.example}</code>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 