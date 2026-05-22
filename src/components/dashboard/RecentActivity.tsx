import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RECENT_ACTIVITIES } from "@/lib/constants";

/**
 * 최근 활동 목록 컴포넌트
 * 사용자의 최근 활동을 시간순으로 표시합니다
 */
export function RecentActivity() {
  const getActivityColor = (type: string) => {
    switch (type) {
      case "signup":
        return "default";
      case "login":
        return "secondary";
      case "update":
        return "outline";
      case "delete":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getActivityLabel = (type: string) => {
    switch (type) {
      case "signup":
        return "가입";
      case "login":
        return "로그인";
      case "update":
        return "수정";
      case "delete":
        return "삭제";
      default:
        return "활동";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {RECENT_ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-border/50 p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.user}</p>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
              </div>
              <div className="text-right">
                <Badge variant={getActivityColor(activity.type)}>
                  {getActivityLabel(activity.type)}
                </Badge>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
