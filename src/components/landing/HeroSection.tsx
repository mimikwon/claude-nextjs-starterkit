'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 랜딩 페이지 Hero 섹션
 * - 메인 제목, 설명 텍스트, CTA 버튼 포함
 * - Framer Motion 애니메이션으로 동적 효과 적용
 */
export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          {/* 배지 */}
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg border border-border bg-muted/50 px-3 py-1 text-sm font-medium"
          >
            새로운 포트폴리오 스타터킷 🎉
          </motion.div>

          {/* 메인 제목 */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            당신의 포트폴리오를 만들어보세요
          </motion.h1>

          {/* 설명 */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion으로 구성된
            포트폴리오 스타터킷입니다. 아름다운 포트폴리오를 빠르게 만들어보세요.
          </motion.p>

          {/* CTA 버튼들 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" asChild>
              <Link href="/portfolio" className="gap-2">
                포트폴리오 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">스타터킷 소개</Link>
            </Button>
          </motion.div>

          {/* 하이라이트 텍스트 */}
          <motion.p
            variants={itemVariants}
            className="pt-6 text-sm text-muted-foreground"
          >
            모던 디자인과 최신 기술로 당신의 경력을 돋보이게 하세요
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
