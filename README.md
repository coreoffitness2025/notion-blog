# Corevia 홈페이지

Corevia 기업 홈페이지 + 블로그 + 고객 사례 웹사이트입니다.
Next.js 15 (App Router) + Notion CMS 기반으로 구축되어 있습니다.

## 사이트 구조

- `/` - 랜딩 페이지 (기업 소개, 솔루션 요약, CTA)
- `/company` - 기업 소개 (미션, 팀, 핵심 가치)
- `/solution` - 솔루션 소개 (Corevia Fitness, Trainer, 운동 평가 AI)
- `/posts` - 블로그 목록 (Notion DB 기반)
- `/posts/[slug]` - 블로그 상세
- `/cases` - 고객 사례 목록 (Notion DB 기반)
- `/cases/[slug]` - 고객 사례 상세
- `/contact` - 문의 페이지

## 빠른 시작

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 환경변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가:

```env
# Notion API 토큰 (필수)
# Notion Integration에서 발급받은 Internal Integration Token
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxx

# Notion Database ID (필수)
# Posts DB의 ID (URL에서 확인: notion.so/{database_id}?v=...)
NOTION_DATABASE_ID=2d6fd6e407fe8012bfb3e6c85e5bd908

# 사이트 URL (권장)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 3. 개발 서버 실행

```bash
pnpm run dev
```

### 4. 빌드

```bash
pnpm run build
```

## Notion DB 스키마

Posts DB에 다음 속성들을 설정하세요:

| 속성명 | 타입 | 필수 | 설명 |
|--------|------|------|------|
| Name | Title | ✅ | 게시글 제목 |
| Status | Select 또는 Status | ✅ | "Published" 옵션 필요 |
| Published Date | Date | 권장 | 발행일 |
| Slug | Rich text | 권장 | URL 슬러그 |
| Type | Select | 권장 | "Blog" 또는 "Case" |
| Excerpt | Rich text | 선택 | 요약 |
| Cover | Files & media | 선택 | 커버 이미지 |
| Tags | Multi-select | 선택 | 태그 |

### Type 속성 설명

- `Blog` - 블로그 게시글 (/posts에 표시)
- `Case` - 고객 사례 (/cases에 표시)
- Type이 없는 게시글은 블로그로 분류됩니다.

## Notion Integration 설정

1. [Notion Developers](https://www.notion.so/my-integrations)에서 새 Integration 생성
2. "Read content" 권한만 선택
3. Notion DB 페이지에서 Integration 연결 (••• → Connections)
4. Integration Token을 `NOTION_TOKEN`으로 사용

## Vercel 배포

1. GitHub에 push
2. Vercel에서 프로젝트 import
3. 환경변수 설정:
   - `NOTION_TOKEN`
   - `NOTION_DATABASE_ID`
   - `NEXT_PUBLIC_SITE_URL`

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Notion API
- **Package Manager**: pnpm

## 문의

coreoffitenss2025@gmail.com
