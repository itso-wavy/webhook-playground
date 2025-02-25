function App() {
  const URL = 'http://localhost:5000/webhook';
  const DUMMY_MSG = [
    {
      id: Math.random(),
      type: '상담 임박',
      createdAt: 1740387653000,
      message: '김다연 님의 예정된 상담이 임박했습니다.',
      reservationId: '12345',
    },
    {
      id: Math.random(),
      type: '예약 컨펌',
      createdAt: 1740387680000,
      message: '김다연 님의 상담이 11월 30일 15:00에 예약완료되었습니다.',
      reservationId: '12356',
    },
    {
      id: Math.random(),
      type: '예약 변경',
      createdAt: 1740387683949,
      message:
        '김다연 님의 상담이 11월 30일 15:00에 예약이 16:00로 변경되었습니다.',
      reservationId: '12357',
    },
  ];

  const fetchMessage = async (index: number) => {
    try {
      await fetch(URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(DUMMY_MSG[index - 1]),
      });
      alert('전송 완료');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={() => fetchMessage(1)}>상담 임박</button>
      <button onClick={() => fetchMessage(2)}>예약 컨펌</button>
      <button onClick={() => fetchMessage(3)}>예약 변경</button>
    </>
  );
}

export default App;
