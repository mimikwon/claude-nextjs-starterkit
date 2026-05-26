# 포트폴리오 Starter Kit 📚

당신의 경력을 효과적으로 보여줄 **아름다운 포트폴리오 웹사이트**를 빠르게 만들 수 있는 모던 스타터킷입니다.

## ✨ 주요 특징

```
✅ 모던 디자인 (Shadcn/ui + Tailwind CSS)
✅ 부드러운 애니메이션 (Framer Motion)
✅ 다크모드 자동 지원
✅ 완전 반응형 (모바일/태블릿/데스크톱)
✅ SEO 최적화
✅ TypeScript 타입 안전성
✅ 성능 최적화 (Turbopack)
✅ Vercel 배포 준비 완료
```

## 🛠 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| **Next.js** | 15.5.18 | 풀스택 프레임워크 |
| **React** | 19.1.0 | UI 라이브러리 |
| **TypeScript** | 5 | 타입 안전성 |
| **Tailwind CSS** | 4 | 유틸리티 CSS |
| **Shadcn/ui** | - | UI 컴포넌트 |
| **Framer Motion** | 11.0.3 | 애니메이션 |
| **Next-themes** | 0.4.6 | 테마 관리 |

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── (landing)/
│   │   ├── page.tsx              # 홈 페이지
│   │   └── portfolio/
│   │       └── page.tsx          # 포트폴리오 페이지 ⭐
│   ├── (auth)/                   # 인증 페이지
│   ├── (dashboard)/              # 대시보드 (옵션)
│   └── layout.tsx
│
├── components/
│   ├── portfolio/                # 포트폴리오 섹션
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── landing/                  # 랜딩 페이지
│   ├── layout/                   # 레이아웃
│   ├── theme/                    # 다크모드
│   └── ui/                       # shadcn/ui 컴포넌트
│
└── lib/
    ├── utils.ts
    └── constants.ts
```

## 🚀 빠른 시작

### 1️⃣ 설치

```bash
npm install
```

### 2️⃣ 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열기

### 3️⃣ 포트폴리오 페이지 확인

```
http://localhost:3000/portfolio
```

## ✏️ 포트폴리오 커스터마이징

### 📸 프로젝트 추가

`src/app/(landing)/portfolio/page.tsx` 열기:

```typescript
const projects = [
  {
    id: '1',
    title: 'My Awesome Project',
    description: '프로젝트 설명',
    image: 'https://images.unsplash.com/...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://myproject.com',
    githubUrl: 'https://github.com/me/project',
  },
  // ... 더 많은 프로젝트 추가
];
```

### 🛠 기술 스택 추가

```typescript
const skills = [
  {
    category: '프론트엔드',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: '백엔드',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  // ... 더 많은 카테고리
];
```

### 📞 연락처 정보

```typescript
<ContactSection 
  email="your-email@example.com" 
  socialLinks={socialLinks} 
/>
```

## 📖 페이지 구조

### 홈 페이지 (`/`)

```
Hero Section (제목, 설명, CTA)
   ↓
Features Section (스타터킷 특징)
   ↓
CTA Section (액션 버튼)
```

### 포트폴리오 페이지 (`/portfolio`) ⭐

```
Projects Section
  ├─ 프로젝트 갤러리 (3칼럼 그리드)
  └─ 배포 사이트 & GitHub 링크

Skills Section
  └─ 카테고리별 기술 스택

Contact Section
  ├─ 이메일 & 소셜 미디어
  └─ 메시지 폼
```

## 🎨 스타일 커스터마이징

### 색상 변경

`tailwind.config.ts`:

```typescript
theme: {
  colors: {
    primary: '#3b82f6',      // 파란색
    secondary: '#8b5cf6',    // 보라색
  },
}
```

### 성분 수정

각 컴포넌트의 Tailwind 클래스 수정:

```tsx
// ProjectCard.tsx - 경계 색상 변경
<div className="border-blue-200 dark:border-blue-800">
```

## 🌙 다크모드

자동으로 지원되며, 헤더의 토글 버튼으로 수동 전환 가능:

```tsx
// src/components/theme/ThemeToggle.tsx
- 사용자의 OS 설정 감지
- 수동 토글 버튼
- Tailwind의 dark: 프리픽스 사용
```

## 📦 빌드 및 배포

### 로컬 빌드

```bash
npm run build
npm run start
```

### Vercel 배포 (권장)

```bash
npm install -g vercel
vercel
```

또는 GitHub 리포지토리를 [Vercel](https://vercel.com)에 연결:

1. https://vercel.com 방문
2. "Import Project" 클릭
3. 저장소 선택
4. 배포 완료! 🎉

### 다른 호스팅

- **Netlify**: GitHub 자동 배포
- **AWS Amplify**: AWS 콘솔 연결
- **Railway**: 간단한 배포

## 📸 이미지 호스팅

무료 이미지 서비스:

- **Unsplash**: 고품질 사진 (무료)
- **Cloudinary**: 이미지 최적화
- **GitHub**: 저장소에 직접 저장 (`/public` 폴더)

```typescript
// 옵션 1: 외부 URL
image: 'https://images.unsplash.com/photo-...'

// 옵션 2: 로컬 이미지
image: '/images/my-project.jpg'
```

## 🔍 페이지 메타데이터

각 페이지의 SEO 최적화:

```typescript
export const metadata: Metadata = {
  title: '포트폴리오 | 당신의 이름',
  description: '포트폴리오 설명',
  openGraph: {
    title: '포트폴리오 | 당신의 이름',
    type: 'website',
    url: 'https://yoursite.com',
  },
};
```

## 🚀 성능 최적화

스타터킷에 포함된 최적화:

- ✅ Next.js 자동 최적화
- ✅ 정적 사이트 생성 (SSG)
- ✅ 이미지 자동 최적화 (`next/image`)
- ✅ 코드 분할 (Code Splitting)
- ✅ Turbopack 빌드 엔진

성능 확인:

```bash
npm run build  # 빌드 크기 확인
```

## 📝 스크립트 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # 린트 확인
```

## 🐛 문제 해결

### 포트가 이미 사용 중인 경우

```bash
npm run dev -- -p 3001
```

### 캐시 문제

```bash
rm -rf .next
npm run dev
```

### 빌드 에러

```bash
npm run lint      # 린트 확인
npm install       # 의존성 재설치
npm run build     # 빌드 재시도
```

## 📚 추가 리소스

### 공식 문서

- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)

### 유용한 도구

- [Vercel Analytics](https://vercel.com/analytics)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 📋 체크리스트

포트폴리오 완성 전 확인사항:

- [ ] 이름과 직책 수정
- [ ] 포트폴리오 프로젝트 추가
- [ ] 기술 스택 업데이트
- [ ] 소셜 미디어 링크 추가
- [ ] 이메일 주소 수정
- [ ] 프로젝트 이미지 추가
- [ ] 색상 커스터마이징
- [ ] 모바일 테스트
- [ ] 다크모드 테스트
- [ ] Vercel 배포

## 🤝 기여

개선 사항을 제안하고 싶으신가요?

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

---

## 🎉 시작하기

```bash
# 1. 저장소 클론
git clone <repository>
cd claude-nextjs-starterkit

# 2. 의존성 설치
npm install

# 3. 개발 서버 시작
npm run dev

# 4. 브라우저에서 http://localhost:3000 열기
# 5. 포트폴리오 커스터마이징!
```

**당신의 포트폴리오를 만들어보세요! 🚀**

더 자세한 가이드는 [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)를 참고하세요.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
