"use client";

import React from "react";

/**
 * 예제 컴포넌트
 * add-component 커맨드로 생성되는 기본 템플릿입니다
 */
interface ExampleProps {
  title?: string;
  children?: React.ReactNode;
}

export function Example({ title = "Example Component", children }: ExampleProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children || <p>컴포넌트 내용을 여기에 추가하세요.</p>}
      </div>
    </div>
  );
}
