## Weedool-web-admin-react

## 스택

- [typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [react](https://react.dev/)
- [react-router](https://reactrouter.com/)
- [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [tanstack-query](https://tanstack.com/query/latest)
- [tanstank-table](https://tanstack.com/table/latest)
- [react-hook-form]
- [zod](https://zod.dev/)(schema library)
- [apex-charts](https://apexcharts.com/)

## 코드 컨벤션

- prettier & eslint 사용
- CSS: 카멜케이스 / 변수: 카멜케이스 / 클래스: 파스칼케이스
- 의미 있는 변수명 사용
- 함수명은 동사로 시작
- var 사용 금지

- **view(UI) / Bussiness Logic(hooks) 분리**
- **Compound Components 패턴 컴포넌트 구성**

## 디렉토리 구조

```bash
public/
src/
├── 📁 pages/
│   └── [도메인]/
│       ├── page.tsx
│       └── components/
│
├── 📁 components/                       # 공통 컴포넌트 모음
│   └── layouts/
│   └── routes/
│   └── ui/
│
├── 📁 hooks/                            # 커스텀 훅
│
├── 📁 store/                            # zustand store
│
├── 📁 services/                         # tanstack-query set
│
├── 📁 assets/
│   ├── character(images)/
│   ├── fonts/
│   └── icons/
│
├── 📁 types/
│
├── 📁 constants/
│   └── routes.ts                         # page routes 경로 참조
│   └── endpoints.ts                      # request 경로 참조
│   └── images.ts                         # assets 경로 참조
│
└── 📁 lib/
    ├── validations/
    ├── axios.ts
    └── utils.ts
```

## 라우트

```bash
# Public Routes(인증 불필요)
  /register                               # 회원가입
  /sign-in                                # 로그인

# Private Routes(인증 필요)
  /sign-out                               # 로그아웃
  /overview                               # 오버뷰
  /overview/center/:centerId              # 센터 상세(페이지 단위가 개발자 재량?)

  /schedule                               # 일정 관리

  /clients                                # 내담자 관리
    ├─ :clientId/info                     # 기본정보
    ├─ :clientId/monitoring               # 행동 모니터링
    ├─ :clientId/tests                    # 검사 결과
    └─ :clientId/info/records/:recordId   # 상담 일지

# Super Admin Routes
  /admin                                  # 센터장
```
