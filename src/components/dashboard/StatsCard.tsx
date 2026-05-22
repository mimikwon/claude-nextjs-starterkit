import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  DollarSign,
  TrendingUp,
  Target,
} from "lucide-react";

// 아이콘 매핑
const ICON_MAP = {
  Users,
  DollarSign,
  TrendingUp,
  Target,
};

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
}

/**
 * 대시보드 통계 카드 컴포넌트
 * 제목, 수치, 변화율을 표시합니다
 */
export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const Icon = ICON_MAP[icon as keyof typeof ICON_MAP];
  const isPositive = change.startsWith("+");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && (
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-2 pt-2">
          <Badge variant={isPositive ? "default" : "destructive"}>
            {change}
          </Badge>
          <p className="text-xs text-muted-foreground">지난 달 대비</p>
        </div>
      </CardContent>
    </Card>
  );
}
