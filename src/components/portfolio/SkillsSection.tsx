'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface Skill {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * 기술 스택 섹션
 * - 카테고리별로 기술 스택 표시
 * - 프론트엔드, 백엔드, 도구 등으로 분류
 */
export function SkillsSection({ skills }: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
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
            기술 스택
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            다양한 프로그래밍 언어와 프레임워크를 경험했습니다.
          </p>
        </motion.div>

        {/* 기술 카테고리 그리드 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              {/* 카테고리 제목 */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>

              {/* 스킬 배지 모음 */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
