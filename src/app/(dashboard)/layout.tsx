import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

/**
 * 대시보드 레이아웃
 * 좌측 사이드바 + 상단 헤더 구조입니다
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* 사이드바 */}
      <div className="hidden sm:flex w-56 flex-col border-r border-border bg-muted/40">
        <Sidebar />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 상단 헤더 */}
        <DashboardHeader />

        {/* 페이지 콘텐츠 */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-screen-2xl px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
