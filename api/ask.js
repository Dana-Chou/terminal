export const config = { runtime: 'edge' };

const ALLOWED_ORIGINS = [
  'https://danachou.com',
  'https://www.danachou.com',
  'http://localhost:3000',
];

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const origin = req.headers.get('origin') || '';
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.messages) {
    return new Response('Bad request', { status: 400 });
  }

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: body.model || 'claude-sonnet-4-5',
      max_tokens: Math.min(body.max_tokens || 200, 500),
      stream: true,
      system: body.system,
      messages: body.messages,
    }),
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': origin,
    },
  });
}
