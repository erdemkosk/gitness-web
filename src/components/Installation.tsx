export default function Installation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Quick Start
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 text-white">
          <code className="block mb-4">
            npm install gitness
          </code>
          <code className="block">
            npx gitness analyze your-repo
          </code>
        </div>
      </div>
    </section>
  )
} 