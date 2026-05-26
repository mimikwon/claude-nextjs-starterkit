import Link from "next/link";
import { SITE_NAME, DASHBOARD_NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// 아이콘 매핑 - 타입 안정성 강화
type IconKey = keyof typeof ICON_MAP;

const ICON_MAP = {
  LayoutDashboard,
  Settings,
  LogOut,
} as const;

/**
 * 대시보드 사이드바 컴포넌트
 * 네비게이션 메뉴와 로그아웃 버튼을 포함합니다
 */
export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-2 border-r border-border bg-muted/40 p-4">
      {/* 로고 */}
      <Link href="/dashboard" className="flex items-center space-x-2 font-bold mb-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50">
          <span className="text-white text-sm font-bold">M</span>
        </div>
        <span className="hidden sm:inline">{SITE_NAME}</span>
      </Link>

      {/* 네비게이션 메뉴 */}
      <nav className="flex-1 space-y-2">
        {DASHBOARD_NAV_LINKS.map((link) => {
          // 타입 안정성 강화: iconName이 유효한지 확인
          if (!(link.icon in ICON_MAP)) {
            console.warn(`Unknown icon: ${link.icon}`);
            return null;
          }

          const Icon = ICON_MAP[link.icon as IconKey] as LucideIcon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 구분선 */}
      <Separator />

      {/* 로그아웃 버튼 */}
      <Button variant="outline" className="w-full justify-start" asChild>
        <button className="flex items-center space-x-2">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">로그아웃</span>
        </button>
      </Button>
    </div>
  );
}
