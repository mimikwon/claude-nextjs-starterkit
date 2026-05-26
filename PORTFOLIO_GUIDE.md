# 포트폴리오 스타터킷 가이드

포트폴리오 스타터킷으로 당신의 경력을 효과적으로 표현해보세요!

## 📋 목차

- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [커스터마이징](#커스터마이징)
- [배포하기](#배포하기)

## 🛠 기술 스택

```
프론트엔드:
  - Next.js 15 (풀스택 프레임워크)
  - React 19 (UI 라이브러리)
  - TypeScript (타입 안전성)
  - Tailwind CSS (유틸리티 CSS)
  - Shadcn/ui (UI 컴포넌트)
  - Framer Motion (애니메이션)
  - Next.js 테마 (다크모드 지원)

스타일링:
  - Tailwind CSS 4
  - 다크 모드 자동 지원
  - 반응형 디자인

배포:
  - Vercel (Next.js 공식 호스팅)
```

## 📁 프로젝트 구조

```
src/
├── app/                          # Next.js 앱 라우터
│   ├── (landing)/               # 랜딩 페이지 레이아웃
│   │   ├── page.tsx            # 홈 페이지
│   │   ├── portfolio/
│   │   │   └── page.tsx        # 포트폴리오 페이지 (⭐ 핵심)
│   │   └── layout.tsx
│   ├── (auth)/                  # 인증 페이지 레이아웃
│   ├── (dashboard)/             # 대시보드 레이아웃
│   └── layout.tsx               # 글로벌 레이아웃
│
├── components/
│   ├── portfolio/               # 포트폴리오 컴포넌트 (⭐ 핵심)
│   │   ├── ProjectCard.tsx      # 프로젝트 카드
│   │   ├── ProjectsSection.tsx  # 프로젝트 섹션
│   │   ├── SkillsSection.tsx    # 기술 스택 섹션
│   │   └── ContactSection.tsx   # 연락처 섹션
│   │
│   ├── landing/                 # 랜딩 페이지 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   ├── theme/                   # 테마 관련 컴포넌트
│   └── ui/                      # shadcn/ui 컴포넌트들
│
└── lib/
    ├── utils.ts                 # 유틸리티 함수
    └── constants.ts             # 상수
```

## 🚀 시작하기

### 1. 프로젝트 설치

```bash
# 저장소 클론
git clone <repository-url>
cd claude-nextjs-starterkit

# 의존성 설치
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 `http://localhost:3000` 열기

### 3. 포트폴리오 페이지 확인

```
http://localhost:3000/portfolio
```

포트폴리오 페이지에서:
- 📸 프로젝트 갤러리 (ProjectsSection)
- 🛠 기술 스택 (SkillsSection)
- 💬 연락처 정보 (ContactSection)

## ✏️ 커스터마이징

### 1. 포트폴리오 데이터 수정

`src/app/(landing)/portfolio/page.tsx`의 데이터를 수정하세요:

```typescript
const projects = [
  {
    id: '1',
    title: 'Your Project Title',      // 프로젝트 제목
    description: 'Project description', // 설명
    image: 'https://...',               // 프로젝트 이미지 URL
    technologies: ['React', 'Node.js'], // 사용 기술
    liveUrl: 'https://...',             // 배포 사이트 URL
    githubUrl: 'https://...',           // GitHub URL
  },
  // ... 더 많은 프로젝트
];
```

### 2. 기술 스택 수정

```typescript
const skills = [
  {
    category: '프론트엔드',
    items: ['React', 'Next.js', 'TypeScript', '...'],
  },
  // ... 더 많은 카테고리
];
```

### 3. 연락처 정보 수정

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourname',
    icon: <Github className="w-5 h-5" />,
  },
  // ... 더 많은 링크
];
```

### 4. 이메일 변경

`src/app/(landing)/portfolio/page.tsx`에서:

```typescript
<ContactSection 
  email="your-email@example.com" 
  socialLinks={socialLinks} 
/>
```

### 5. 메타데이터 수정

`src/app/(landing)/portfolio/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: '포트폴리오 | 당신의 이름',
  description: '당신의 포트폴리오 설명',
};
```

## 🎨 스타일 커스터마이징

### 테마 색상 변경

`tailwind.config.ts`에서 Tailwind 테마 커스터마이징:

```typescript
theme: {
  colors: {
    primary: '#3b82f6',  // 기본 색상
    // ...
  },
}
```

### 컴포넌트 스타일

각 컴포넌트의 Tailwind CSS 클래스 수정:

```tsx
// ProjectCard.tsx
<div className="rounded-lg border border-gray-200 ...">
  {/* 여기의 클래스들을 수정하세요 */}
</div>
```

## 📊 페이지 구조

### 포트폴리오 페이지 흐름

```
/portfolio
├── ProjectsSection
│   ├── 제목 & 설명
│   └── ProjectCard[] (그리드)
│       ├── 프로젝트 이미지
│       ├── 제목 & 설명
│       ├── 기술 스택 배지
│       └── 링크 (배포, GitHub)
│
├── SkillsSection
│   ├── 제목 & 설명
│   └── 기술 카테고리별 배지
│
└── ContactSection
    ├── 이메일
    ├── 소셜 미디어 링크
    └── 메시지 폼
```

## 🌙 다크모드

스타터킷은 자동으로 다크모드를 지원합니다:

- 사용자의 시스템 설정 감지
- 수동 토글 가능 (Header의 ThemeToggle)
- Tailwind의 `dark:` 프리픽스로 다크 스타일 정의

## 🚢 배포하기

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

또는 GitHub에 푸시하고 Vercel 웹 대시보드에서 연결:

1. `https://vercel.com` 방문
2. "Import Project" 클릭
3. 저장소 선택
4. 배포 완료!

### 다른 호스팅 옵션

- **Netlify**: GitHub 연결 후 자동 배포
- **AWS Amplify**: AWS 콘솔에서 앱 연결
- **Docker**: `npm run build` → 컨테이너화

## ⚡ 성능 최적화

스타터킷에 포함된 최적화:

- ✅ Next.js 자동 최적화
- ✅ 이미지 최적화 (next/image)
- ✅ 정적 생성 (SSG)
- ✅ 동적 라우팅
- ✅ 다크모드 성능

## 🔍 SEO 최적화

메타데이터 설정:

```typescript
export const metadata: Metadata = {
  title: '포트폴리오 | 이름',
  description: '설명',
  openGraph: {
    title: '포트폴리오 | 이름',
    description: '설명',
    type: 'website',
    url: 'https://yoursite.com',
  },
  keywords: ['개발자', 'React', 'Next.js'],
};
```

## 📝 추가 팁

### 이미지 호스팅

무료 이미지 호스팅 옵션:

- **Unsplash**: 고품질 무료 이미지
- **Cloudinary**: 이미지 최적화
- **Imgur**: 간단한 이미지 업로드
- **GitHub Pages**: 저장소에 이미지 저장

### 프로젝트 이미지 추가

```typescript
{
  id: '1',
  title: 'My Project',
  // 옵션 1: Unsplash URL
  image: 'https://images.unsplash.com/photo-xxx',
  
  // 옵션 2: 자신의 이미지 (public 폴더)
  // image: '/images/my-project.jpg',
}
```

### 이메일 폼 동작

현재는 간단한 폼이지만, 실제 이메일 전송을 원한다면:

1. **Resend** (권장): `npm install resend`
2. **SendGrid**: API 키 설정
3. **Nodemailer**: Node.js 이메일

## 🐛 문제 해결

### Framer Motion 에러

```bash
npm install framer-motion
```

### 다크모드가 작동하지 않음

`src/components/theme/ThemeProvider.tsx`가 `app/layout.tsx`에 감싸있는지 확인:

```tsx
<ThemeProvider>
  {children}
</ThemeProvider>
```

### 빌드 에러

```bash
npm run lint      # 린트 확인
npm run build     # 빌드 테스트
```

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)

## 🤝 기여

이 스타터킷을 개선하고 싶으신가요?

```bash
# 1. 포크 및 클론
git clone <your-fork-url>

# 2. 브랜치 생성
git checkout -b feature/your-feature

# 3. 변경사항 커밋
git commit -m "feat: add amazing feature"

# 4. 푸시
git push origin feature/your-feature

# 5. PR 제출
```

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

---

**Happy Coding! 🚀**

당신의 포트폴리오로 멋진 경력을 만들어보세요!
