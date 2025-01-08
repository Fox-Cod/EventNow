import { OpenAIApi } from 'openai';

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY, // Убедись, что ключ добавлен в .env
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { location, radius } = req.body;

    try {
      const prompt = `
        У меня есть координаты пользователя: (${location.lat}, ${location.lng}).
        Найди ближайшие события (концерты, выставки, встречи и т.д.) в радиусе ${radius} км.
        Верни список событий в формате: [{"lat": координата широты, "lng": координата долготы, "title": "Название события"}].
      `;

      const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
        temperature: 0.7,
      });

      const events = JSON.parse(response.data.choices[0].text.trim());
      res.status(200).json({ events });
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
