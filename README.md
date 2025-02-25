# webhook-playground

- client 실행
  `cd client && pn run dev`

- server 실행
  `cd server && node index.js`

- 더미데이터

```
{
  "id": 1,
  "type": "상담 임박",
  "createdAt": 1740387653000,
  "message": "김다연 님의 예정된 상담이 임박했습니다.",
  "reservationId": "12345"
},
{
  "id": 2,
  "type": "예약 컨펌",
  "createdAt": 1740387680000,
  "message": "김다연 님의 상담이 11월 30일 15:00에 예약완료되었습니다.",
  "reservationId": "12356"
},
{
  "id": 3,
  "type": "예약 변경",
  "createdAt": 1740387683949,
  "message":  "김다연 님의 상담이 11월 30일 15:00에 예약이 16:00로 변경되었습니다.",
  "reservationId": "12357"
}
```
