import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * 랜딩 페이지 Hero 섹션
 * 메인 제목, 설명 텍스트, CTA 버튼을 포함합니다
 */
export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* 배지 */}
          <div className="inline-block rounded-lg border border-border bg-muted/50 px-3 py-1 text-sm font-medium">
            새로운 스타터킷 출시 🎉
          </div>

          {/* 메인 제목 */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            빠르게 시작하는 웹 개발
          </h1>

          {/* 설명 */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된 모던 스타터킷입니다.
            완전히 설정된 프로젝트에서 바로 개발을 시작하세요.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/register" className="gap-2">
                지금 시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">더 알아보기</Link>
            </Button>
          </div>

          {/* 하이라이트 텍스트 */}
          <p className="pt-6 text-sm text-muted-foreground">
            개발자를 위해 만들어진, 개발자에 의한 스타터킷
          </p>
        </div>
      </div>
    </section>
  );
}
