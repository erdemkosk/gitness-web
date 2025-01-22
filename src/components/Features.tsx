import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "Bus Factor Calculation",
      description: "Analyze knowledge distribution and critical developer count in your repo",
      icon: "🚌",
      gradient: "from-[#FF5D5D]/20 to-[#FF8080]/20",
      iconBg: "bg-[#FF5D5D]/10"
    },
    {
      title: "Contribution Analysis",
      description: "Examine contributor statistics and activity patterns",
      icon: "📊",
      gradient: "from-[#40BFBF]/20 to-[#35A3A3]/20",
      iconBg: "bg-[#40BFBF]/10"
    },
    {
      title: "Multi VCS Support",
      description: "Work with GitHub and Bitbucket integrations",
      icon: "🔄",
      gradient: "from-[#FFBD4C]/20 to-[#FFD700]/20",
      iconBg: "bg-[#FFBD4C]/10"
    },
    {
      title: "Branch Support",
      description: "You can analyze any branch of your repository",
      icon: "🌿",
      gradient: "from-[#40BFBF]/20 to-[#35A3A3]/20",
      iconBg: "bg-[#40BFBF]/10"
    },
    {
      title: "Risk Assessment",
      description: "Identify potential knowledge silos and bottlenecks",
      icon: "🎯",
      gradient: "from-[#FF5D5D]/20 to-[#FF8080]/20",
      iconBg: "bg-[#FF5D5D]/10"
    },
    {
      title: "Detailed Reports",
      description: "Get comprehensive insights about your codebase",
      icon: "📑",
      gradient: "from-[#FFBD4C]/20 to-[#FFD700]/20",
      iconBg: "bg-[#FFBD4C]/10"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D5D]/5 to-[#40BFBF]/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1A1E23_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1E23] mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to keep your codebase healthy and your team productive
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full transform hover:-translate-y-1 hover:shadow-lg">
                <div className={`text-4xl mb-4 p-3 ${feature.iconBg} rounded-xl inline-block backdrop-blur-sm`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1E23] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 