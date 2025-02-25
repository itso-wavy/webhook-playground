import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: true, // Access-Control-Allow-Origin 헤더
    credentials: true, // Access-Control-Allow-Credentials 헤더
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'HELLO WORLD' });
});

let clients = [];

// SSE 연결
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 클라이언트 추적
  clients.push(res);

  // 연결 종료 시 클라이언트 제거
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

// Webhook 이벤트 수신
app.post('/webhook', (req, res) => {
  clients.forEach(client =>
    client.write(`data: ${JSON.stringify(req.body)}\n\n`)
  );

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`서버 ${PORT} 포트에서 실행 중...`);
});
