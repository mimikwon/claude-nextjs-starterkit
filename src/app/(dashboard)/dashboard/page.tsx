import { Metadata } from "next";
import { DASHBOARD_STATS } from "@/lib/constants";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export const metadata: Metadata = {
  title: "대시보드",
  description: "대시보드 페이지",
};

/**
 * 대시보드 페이지
 * 통계 카드와 최근 활동을 표시합니다
 */
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 페이지 제목 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="mt-2 text-muted-foreground">
          주요 통계와 최근 활동을 확인하세요
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* 최근 활동 */}
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <RecentActivity />

        {/* 차트/추가 데이터 영역 (향후 확장 가능) */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">추가 정보</h2>
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            <p>차트나 추가 데이터를 여기에 추가하세요</p>
          </div>
        </div>
      </div>
    </div>
  );
}
