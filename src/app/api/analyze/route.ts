import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { repository } = await request.json()

    if (!repository) {
      return NextResponse.json(
        { message: 'Repository URL is required' },
        { status: 400 }
      )
    }

    // Güvenlik kontrolü
    if (!repository.match(/^[a-zA-Z0-9-_/.]+$/)) {
      return NextResponse.json(
        { message: 'Invalid repository format' },
        { status: 400 }
      )
    }

    // Mock response - gerçek analiz yerine örnek veri
    const mockResult = {
      repository: repository,
      busFactor: 4,
      knowledgeDistribution: 75.5,
      activeContributors: 6,
      commitStats: {
        total: 330,
        daily: 3.77,
        weekly: 26.38,
        monthly: 113.07,
        mostActiveDay: "Monday",
        peakTime: "18:00"
      },
      riskLevel: "LOW",
      recommendations: [
        "Consider documenting complex parts of the codebase",
        "Encourage more peer reviews",
        "Schedule regular knowledge sharing sessions"
      ],
      analysisDate: new Date().toISOString()
    }

    // Simüle edilmiş gecikme
    await new Promise(resolve => setTimeout(resolve, 2000))

    return NextResponse.json(mockResult)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { message: 'Analysis failed. Please try again later.' },
      { status: 500 }
    )
  }
} 