새 React 컴포넌트 파일을 생성합니다.

**사용 방법:**
```
/component:add-component ComponentName [category]
```

**예제:**
```
/component:add-component Button
/component:add-component UserCard dashboard
/component:add-component SkillsList portfolio
```

**매개변수:**
- `ComponentName` (필수): PascalCase 컴포넌트 이름
- `category` (선택): ui, layout, dashboard, auth, portfolio 등 (기본값: ui)

**생성되는 파일:**
- 경로: `src/components/[category]/ComponentName.tsx`
- TypeScript + React 18 함수형 컴포넌트
- Tailwind CSS 스타일링
- JSDoc 주석 포함
- "use client" 지시어 (Next.js 클라이언트 컴포넌트)

**예: add-component TestButton ui 실행 시 생성되는 파일:**
```
src/components/ui/TestButton.tsx
```

---

## 스크립트 로직

컴포넌트 이름과 카테고리를 받아서:
1. 카테고리 폴더가 없으면 생성
2. ComponentName.tsx 파일 생성
3. 기본 TypeScript 템플릿 코드 추가
4. Tailwind CSS 클래스 포함

@ARGUMENTS
