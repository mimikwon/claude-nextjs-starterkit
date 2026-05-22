"use client";

import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

/**
 * 대시보드 상단 헤더 컴포넌트
 * 검색 입력, 알림 버튼, 유저 아바타를 포함합니다
 */
export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-4 border-b border-border bg-background px-6">
      {/* 검색 바 */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="검색..."
            className="pl-8 pr-3"
          />
        </div>
      </div>

      {/* 우측 액션 아이템 */}
      <div className="flex items-center gap-2">
        {/* 알림 버튼 */}
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        {/* 다크모드 토글 */}
        <ThemeToggle />

        {/* 유저 메뉴 */}
        <Button variant="ghost" size="icon">
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
