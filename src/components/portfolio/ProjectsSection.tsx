'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * 포트폴리오 프로젝트 섹션
 * - 여러 프로젝트를 그리드로 표시
 * - 제목과 설명 포함
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            포트폴리오
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            제가 진행한 주요 프로젝트들입니다. 각 프로젝트를 통해 다양한 기술을 경험했습니다.
          </p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
