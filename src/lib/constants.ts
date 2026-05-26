// 사이트 전역 상수 정의

export const SITE_NAME = "ModernKit";
export const SITE_DESCRIPTION = "빠르게 웹 개발을 시작할 수 있는 모던 Next.js 스타터킷";

// 랜딩 페이지 네비게이션
export const LANDING_NAV_LINKS = [
  { label: "포트폴리오", href: "/portfolio" },
  { label: "기능", href: "#features" },
  { label: "문서", href: "#docs" },
];

// 대시보드 네비게이션
export const DASHBOARD_NAV_LINKS = [
  {
    label: "대시보드",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    label: "설정",
    href: "/settings",
    icon: "Settings",
  },
];

// 푸터 링크
export const FOOTER_LINKS = [
  {
    title: "제품",
    links: [
      { label: "기능", href: "#features" },
      { label: "요금", href: "#pricing" },
      { label: "문서", href: "#docs" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "블로그", href: "/blog" },
      { label: "연락처", href: "/contact" },
      { label: "서비스 약관", href: "/terms" },
    ],
  },
  {
    title: "법적",
    links: [
      { label: "개인정보보호정책", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "쿠키 정책", href: "/cookies" },
    ],
  },
];

// 기능 섹션 데이터
export const FEATURES = [
  {
    title: "빠른 개발",
    description: "Next.js 15와 최신 도구들로 빠르게 개발을 시작하세요",
    icon: "Zap",
  },
  {
    title: "아름다운 UI",
    description: "shadcn/ui와 Tailwind CSS로 전문적인 UI를 구성할 수 있습니다",
    icon: "Palette",
  },
  {
    title: "다크모드 지원",
    description: "라이트/다크 모드를 자동으로 지원합니다",
    icon: "Moon",
  },
  {
    title: "반응형 디자인",
    description: "모든 화면 크기에 최적화된 반응형 디자인",
    icon: "Smartphone",
  },
  {
    title: "TypeScript",
    description: "타입 안정성으로 더 안전한 코드를 작성하세요",
    icon: "Code",
  },
  {
    title: "SEO 최적화",
    description: "Next.js의 기본 SEO 기능으로 검색 최적화",
    icon: "Search",
  },
];

// 대시보드 통계 데이터
export const DASHBOARD_STATS = [
  {
    title: "총 사용자",
    value: "2,543",
    change: "+12.5%",
    icon: "Users",
  },
  {
    title: "총 매출",
    value: "$45,231.89",
    change: "+8.2%",
    icon: "DollarSign",
  },
  {
    title: "총 방문자",
    value: "12,234",
    change: "+4.3%",
    icon: "TrendingUp",
  },
  {
    title: "전환율",
    value: "3.24%",
    change: "-2.1%",
    icon: "Target",
  },
];

// 최근 활동 데이터
export const RECENT_ACTIVITIES = [
  {
    id: 1,
    user: "John Doe",
    action: "가입했습니다",
    timestamp: "2024-01-15 14:30",
    type: "signup",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "로그인했습니다",
    timestamp: "2024-01-15 13:45",
    type: "login",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "설정을 업데이트했습니다",
    timestamp: "2024-01-15 12:20",
    type: "update",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    action: "계정을 삭제했습니다",
    timestamp: "2024-01-15 11:10",
    type: "delete",
  },
];
