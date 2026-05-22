import Link from "next/link";
import { SITE_NAME, LANDING_NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu } from "lucide-react";

/**
 * 랜딩 페이지용 헤더 컴포넌트
 * 사이트 로고, 네비게이션 링크, 다크모드 토글, 로그인 버튼을 포함합니다
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <span>{SITE_NAME}</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8">
          {LANDING_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 버튼들 */}
        <div className="flex items-center space-x-4">
          {/* 모바일 메뉴 버튼 (숨겨진 상태) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* 다크모드 토글 */}
          <ThemeToggle />

          {/* 로그인 버튼 */}
          <Button variant="default" asChild>
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
