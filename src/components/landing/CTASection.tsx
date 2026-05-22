import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Call-to-Action 섹션
 * 사용자를 가입으로 유도하는 강조 섹션입니다
 */
export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-border">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* 제목 */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              오늘부터 시작하세요
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              완전히 설정된 Next.js 스타터킷으로 지금 바로 웹 개발을 시작해보세요.
              복잡한 설정은 없고, 개발에만 집중하면 됩니다.
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/register" className="gap-2">
                무료로 시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">문서 보기</Link>
            </Button>
          </div>

          {/* 부가 정보 */}
          <div className="pt-6 flex flex-col sm:flex-row gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>신용카드 불필요</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>무료 배포 가이드</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>24시간 커뮤니티 지원</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
