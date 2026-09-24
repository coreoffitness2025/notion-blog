# notion-blog

## 세션 간 공유 상태 (필수)

**세션 시작 시 `~/corevia-hub/shared/STATE.md` 를 반드시 읽어라** — 모든 Claude 세션(SNS/블로그/커머스) 공통 상태 문서. 굵직한 작업 완료·결정 시 해당 섹션을 직접 갱신하라.

- 다른 세션에 즉시 영향 주는 결정 시: STATE.md 갱신 + cross-session messaging(SendMessage)으로 해당 세션에 직접 통지
