import { FEATURES } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Palette,
  Moon,
  Smartphone,
  Code,
  Search,
} from "lucide-react";

// 아이콘 매핑
const ICON_MAP = {
  Zap,
  Palette,
  Moon,
  Smartphone,
  Code,
  Search,
};

/**
 * 기능 소개 섹션
 * 스타터킷의 주요 기능들을 카드로 표시합니다
 */
export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            주요 기능들
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            모던 웹 개발에 필요한 모든 기능이 이미 준비되어 있습니다
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {feature.description}
                      </CardDescription>
                    </div>
                    {Icon && (
                      <div className="ml-2 rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
