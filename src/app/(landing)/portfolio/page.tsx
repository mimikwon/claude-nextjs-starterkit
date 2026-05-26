import { Metadata } from 'next';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Mail, Users, ExternalLink, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: '포트폴리오 | ModernKit',
  description: '제 프로젝트, 기술 스택, 그리고 연락처입니다.',
  openGraph: {
    title: '포트폴리오 | ModernKit',
    description: '제 프로젝트, 기술 스택, 그리고 연락처입니다.',
    type: 'website',
  },
};

/**
 * 포트폴리오 페이지
 * - 프로젝트 갤러리
 * - 기술 스택
 * - 연락처 정보
 */
export default function PortfolioPage() {
  // 포트폴리오 프로젝트 데이터 (예시)
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Next.js와 Stripe를 활용한 풀스택 전자상거래 플랫폼',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'React와 Firebase를 사용한 실시간 협업 작업 관리 도구',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/tasks',
    },
    {
      id: '3',
      title: 'AI Chat Application',
      description: 'OpenAI API와 Next.js를 활용한 인공지능 채팅 애플리케이션',
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35b76d1?w=400&h=300&fit=crop',
      technologies: ['Next.js', 'OpenAI', 'WebSocket', 'MongoDB'],
      githubUrl: 'https://github.com/example/ai-chat',
    },
    {
      id: '4',
      title: 'Analytics Dashboard',
      description: 'Chart.js와 D3.js를 사용한 데이터 시각화 대시보드',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      technologies: ['React', 'Chart.js', 'D3.js', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/dashboard',
    },
    {
      id: '5',
      title: 'Blog Platform',
      description: 'MDX와 Next.js를 활용한 정적 생성 블로그 플랫폼',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/blog',
    },
    {
      id: '6',
      title: 'Mobile App',
      description: 'React Native로 개발한 크로스플랫폼 모바일 애플리케이션',
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
      githubUrl: 'https://github.com/example/mobile',
    },
  ];

  // 기술 스택 데이터
  const skills = [
    {
      category: '프론트엔드',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn/ui',
        'Framer Motion',
        'Redux',
        'TanStack Query',
      ],
    },
    {
      category: '백엔드',
      items: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'Prisma',
        'REST API',
        'GraphQL',
        'Docker',
      ],
    },
    {
      category: '도구 및 환경',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Docker',
        'Vercel',
        'AWS',
        'Firebase',
        'npm/yarn',
      ],
    },
  ];

  // 소셜 미디어 링크
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <Gift className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:superlong1004@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection email="superlong1004@gmail.com" socialLinks={socialLinks} />
    </>
  );
}
