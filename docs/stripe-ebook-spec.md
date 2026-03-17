# 전자책 결제 연동 스펙 (토스페이먼츠)

## 선행 조건
- [x] 개인사업자 등록
- [ ] 토스페이먼츠 계정 생성 (https://developers.tosspayments.com)
- [x] 통신판매업 신고
- [ ] 토스 API 키 발급 (Client Key + Secret Key)
- [x] 전자책 PDF 최종본 준비

## 구조
```
구매자 이름/전화번호 입력
→ 구매하기 클릭 → Toss SDK requestPayment()
→ 토스 결제 페이지 → 결제 완료
→ /ebook/success?paymentKey=xxx&orderId=xxx&amount=30000
→ POST /api/ebook/confirm (토스 결제 승인)
→ POST /api/ebook/download (워터마크 PDF 생성 + 다운로드)
```

## 구현 파일

### API Routes
- `src/app/api/ebook/confirm/route.ts` — 토스 결제 승인 API
- `src/app/api/ebook/download/route.ts` — 워터마크 PDF 생성 + 다운로드

### Pages
- `src/app/[locale]/ebook/client.tsx` — 구매 폼 (이름/전화번호 + 토스 SDK)
- `src/app/[locale]/ebook/success/page.tsx` — 결제 완료 페이지
- `src/app/[locale]/ebook/success/client.tsx` — 결제 확인 + 다운로드 UI

### Utilities
- `src/lib/watermark.ts` — pdf-lib 기반 워터마크 삽입

### Assets
- `private/ebook.pdf` — 원본 전자책 (비공개)
- `private/fonts/NotoSansKR-Regular.ttf` — 한글 워터마크 폰트

## 환경 변수
```
NEXT_PUBLIC_TOSS_CLIENT_KEY=test_ck_xxx   # 클라이언트 키
TOSS_SECRET_KEY=test_sk_xxx               # 시크릿 키
```

## Vercel 설정
- 환경 변수 등록 (위 2개)
- `next.config.ts`에 `outputFileTracingIncludes` 설정 완료

## 워터마크
- pdf-lib + @pdf-lib/fontkit + NotoSansKR
- 각 페이지에 대각선 반투명 텍스트: `{이름} {전화번호}`
- 3곳 반복 배치, opacity 0.25

## 수수료
- 토스페이먼츠: 3.3% + α (카드 기준)
- ₩30,000 기준 → 약 ₩990 수수료 → 순수익 약 ₩29,010

## 상품 정보
- 상품명: Core of Fitness (PDF)
- 가격: ₩30,000 (일회성)
- 용도: 이벤트 미끼 상품
