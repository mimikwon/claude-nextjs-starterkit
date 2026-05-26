'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

/**
 * 포트폴리오 프로젝트 카드 컴포넌트
 * - 프로젝트 이미지, 제목, 설명, 기술 스택 표시
 * - 외부 링크(배포 사이트, GitHub) 제공
 * - Framer Motion으로 애니메이션 효과 적용
 */
export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      // 스크롤할 때 아래에서 위로 나타나는 애니메이션
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* 호버 시 나타나는 오버레이 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* 기술 스택 배지 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* 외부 링크 */}
        <div className="flex gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              배포 사이트
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Code className="w-4 h-4" />
              소스코드
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
