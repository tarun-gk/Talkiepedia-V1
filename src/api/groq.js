import transcripts from '../data/transcripts.json'

export async function queryGroq(question) {
  // Build context from all episode transcripts
  const contextParts = []
  for (const [episodeId, episode] of Object.entries(transcripts.episodes)) {
    for (const seg of episode.segments) {
      contextParts.push(
        `[${seg.speaker}, ${seg.company} — Episode "${episodeId}" at ${seg.timestamp}]: "${seg.text}"`
      )
    }
  }
  const context = contextParts.join('\n\n')

  const systemPrompt = `You are Talkiepedia's career assistant. Answer only using the provided episode transcript excerpts below. Always cite which guest and timestamp each claim comes from. Format citations as [Guest Name, Company — timestamp]. If the transcripts don't cover the question, say so honestly instead of inventing an answer.

EPISODE TRANSCRIPTS:
${context}`

  try {
    const response = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question },
        ],
        temperature: 0.3,
        max_tokens: 800,
      }),
    })

    if (!response.ok) {
      // If proxy fails, try direct with env key (dev fallback)
      const directResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: question },
          ],
          temperature: 0.3,
          max_tokens: 800,
        }),
      })

      if (!directResponse.ok) {
        throw new Error(`API error: ${directResponse.status}`)
      }

      const data = await directResponse.json()
      return parseResponse(data)
    }

    const data = await response.json()
    return parseResponse(data)
  } catch (err) {
    console.error('Groq API error:', err)
    throw err
  }
}

function parseResponse(data) {
  const text = data.choices?.[0]?.message?.content || ''

  // Extract citations from response
  const citationRegex = /\[([^,]+),\s*([^—]+)\s*—\s*(\d{2}:\d{2}(?::\d{2})?)\]/g
  const citations = []
  let match

  while ((match = citationRegex.exec(text)) !== null) {
    citations.push({
      guest: match[1].trim(),
      company: match[2].trim(),
      timestamp: match[3].trim(),
      seconds: timestampToSeconds(match[3].trim()),
    })
  }

  return {
    answer: text,
    citations: citations.length > 0 ? citations : extractFallbackCitations(text),
  }
}

function timestampToSeconds(ts) {
  const parts = ts.split(':').map(Number)
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  return 0
}

function extractFallbackCitations(text) {
  // If the regex didn't work, try to find guest names mentioned
  const guests = ['Sumanvitha', 'Bharat Chandra', 'Dhananjay']
  const found = []
  for (const g of guests) {
    if (text.includes(g)) {
      found.push({
        guest: g,
        company: g === 'Sumanvitha' ? 'Collins Aerospace' : g === 'Bharat Chandra' ? 'Microsoft' : 'Forge Alumnus',
        timestamp: '',
        seconds: 0,
      })
    }
  }
  return found
}
