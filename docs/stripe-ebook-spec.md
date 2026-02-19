# Stripe 전자책 결제 연동 스펙

## 선행 조건
- [ ] 개인사업자 등록
- [ ] Stripe 계정 생성 (https://stripe.com)
- [ ] Stripe API 키 발급 (Secret Key + Publishable Key)
- [ ] 이메일 발송 서비스 설정 (Resend 추천, 무료 월 3,000건)
- [ ] 전자책 PDF 최종본 준비

## 구조
```
구매 클릭 → POST /api/checkout (Stripe Checkout 세션 생성)
→ Stripe 결제 페이지 → 결제 완료
→ POST /api/webhook (Stripe webhook 수신)
→ 구매자 이메일로 PDF 다운로드 링크 발송
```

## 구현 파일 (3개)

### 1. `src/app/api/checkout/route.ts`
- Stripe Checkout Session 생성
- 상품: Core of Fitness (PDF)
- 가격: ₩11,000 (일회성)
- success_url: /ebook/success
- cancel_url: /ebook

### 2. `src/app/api/webhook/route.ts`
- Stripe webhook endpoint
- `checkout.session.completed` 이벤트 처리
- 구매자 이메일 추출 → PDF 다운로드 링크 이메일 발송
- webhook signature 검증 필수

### 3. `src/app/ebook/success/page.tsx`
- 결제 완료 안내 페이지
- "이메일로 전자책이 발송되었습니다" 메시지

## 환경 변수 (.env.local)
```
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
RESEND_API_KEY=re_xxx
EBOOK_PDF_URL=https://xxx (비공개 다운로드 URL)
```

## Vercel 설정
- 환경 변수 등록
- Stripe webhook URL: `https://coreviafitness.com/api/webhook`

## 수수료
- Stripe: 3.5% + ₩400 (한국 카드 기준)
- ₩11,000 기준 → 약 ₩750 수수료 → 순수익 약 ₩9,150

## 참고
- Stripe 한국 지원: 사업자등록증 필요
- 테스트: sk_test_ 키로 먼저 테스트 후 라이브 전환
