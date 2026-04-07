# 홈페이지 웹 커머스 (/shop) 스펙

> 상태: 계획 완료, 구현 대기
> 작성: 2026-04-07
> 플랜: `~/.claude/plans/shiny-enchanting-widget.md`

---

## 개요

홈페이지에 `/shop` 경로를 추가하여 앱과 동일한 Firestore 커머스 백엔드를 공유하는 웹 스토어를 구축한다.

### 핵심 원칙
1. **기존 CF 재사용**: createStoreOrder, verifyStorePayment — 새 비즈니스 로직 없음
2. **SEO 자산 활용**: 11,500개 콘텐츠 페이지에서 상품으로 내부 링크
3. **동일 Firestore**: shop_products, orders, shippingAddresses, rewardPoints 공유

---

## 사전 수정 (Critical)

| # | 파일 | 문제 | 수정 |
|---|------|------|------|
| 1 | `functions/src/store/syncCafe24Products.ts:330` | `storeProducts` 컬렉션명 | → `shop_products` |
| 2 | `functions/src/index.ts` | createStoreOrder/verifyStorePayment export 누락 | export 추가 |
| 3 | `firestore.rules:641` | shop_products 읽기 isAuthenticated() | → `if true` |

---

## 아키텍처

```
카페24 (어드민) → syncCafe24Products CF (30분) → Firestore shop_products
                                                      ↓
                                          ┌───────────┴───────────┐
                                          ↓                       ↓
                                   홈페이지 /shop            앱 샵 탭
                                   (SSG+ISR)               (RN 네이티브)
                                          │                       │
                                          ├─ 장바구니 (Zustand+localStorage)
                                          ├─ createStoreOrder CF (httpsCallable)
                                          ├─ PortOne Browser SDK → PG
                                          └─ verifyStorePayment CF
                                                      ↓
                                                Firestore orders
```

---

## Phase 1: 상품 페이지 (Week 1)

### 파일 구조
```
src/lib/shop/
  types.ts              # 웹용 타입 (앱 types/index.ts 기반)
  products.ts           # adminDb 상품 조회 (getProducts, getProductById)

src/app/[locale]/shop/
  page.tsx              # 상품 목록 (Server Component)
  client.tsx            # 카테고리 필터 (Client Component)
  [productId]/
    page.tsx            # 상품 상세 (SSG+ISR, revalidate=1800)

src/components/shop/
  ProductCard.tsx       # 상품 카드
  ImageCarousel.tsx     # 이미지 캐러셀
```

### SEO
- generateStaticParams: 모든 활성 상품 ID
- generateMetadata: 동적 title/description/OG
- Product JSON-LD (Schema.org)
- sitemap.ts 확장 (/shop + 상품 URL)
- Navbar/Footer에 Shop 메뉴 추가
- i18n: ko.ts/en.ts에 shop 키 추가

---

## Phase 2: 장바구니 + 인증 (Week 2)

### 패키지
```bash
pnpm add zustand
```

### 파일 구조
```
src/lib/shop/
  cartStore.ts          # Zustand + localStorage (skipHydration)
  addressService.ts     # 배송지 API 래퍼

src/app/[locale]/shop/cart/
  page.tsx              # 장바구니 (metadata)
  client.tsx            # 장바구니 UI

src/app/api/shop/addresses/
  route.ts              # GET/POST
  [addressId]/route.ts  # DELETE/PATCH

src/components/shop/
  CartIcon.tsx          # Navbar 뱃지
  AddToCartButton.tsx   # 상세 페이지용
  LoginPromptDialog.tsx # 체크아웃 전 로그인
  AddressForm.tsx       # Daum 주소 API
  AddressList.tsx       # 저장된 배송지
```

---

## Phase 3: 결제 (Week 3)

### 패키지
```bash
pnpm add @portone/browser-sdk
```

### 환경변수
```
NEXT_PUBLIC_PORTONE_STORE_ID=store-xxxxx
NEXT_PUBLIC_PORTONE_CHANNEL_TOSS=channel-key-xxxxx
```

### 파일 구조
```
src/lib/shop/
  orderService.ts       # CF httpsCallable (createStoreOrder, verifyStorePayment)
  payment.ts            # PortOne Browser SDK 래퍼

src/app/[locale]/shop/checkout/
  page.tsx              # 체크아웃 (metadata)
  client.tsx            # 배송지+포인트+결제 UI
  callback/page.tsx     # 모바일 리다이렉트
  complete/page.tsx     # 결제 완료

src/components/shop/
  PointsInput.tsx       # 포인트 사용
  PaymentMethodSelector.tsx  # 카드/네이버/카카오
```

### 결제 플로우
```
"결제하기" → createStoreOrder CF → PortOne.requestPayment() → PG → verifyStorePayment CF → 완료
```

### 금액 계산
```
subtotal = Σ(서버 가격 × 수량)         # CF에서 재계산
shippingFee = 3,000 (50,000↑ 무료, 제주 +3,000)
pointsDiscount = min(보유, subtotal×50%÷10) × 10
totalAmount = subtotal + shippingFee - pointsDiscount
```

---

## Phase 4: 주문 관리 + 콘텐츠 연동 (Week 4)

### 파일 구조
```
src/app/api/shop/orders/
  route.ts                    # GET 주문 목록
  [orderId]/route.ts          # GET 주문 상세

src/app/[locale]/shop/
  orders/page.tsx             # 주문 내역
  orders/client.tsx
  orders/[orderId]/page.tsx   # 주문 상세
  orders/[orderId]/client.tsx
  policy/page.tsx             # 교환/반품 정책

src/app/api/revalidate/route.ts  # On-Demand ISR

src/components/shop/
  RelatedProducts.tsx         # 콘텐츠→상품 내부 링크
```

### 콘텐츠 연동
- 운동 가이드 하단: "이 운동에 필요한 장비" (tags 매칭)
- 음식 가이드 하단: "영양 보충이 필요하다면"
- Footer: 사업자 정보 토글

---

## Phase 5 (선택): 어드민

```
src/app/admin/
  layout.tsx                  # 권한 체크
  orders/page.tsx             # 주문 관리
  orders/[orderId]/page.tsx   # 상태 변경 + 운송장
```

---

## 법적 요구사항

- [ ] 통신판매업 신고 (정부24)
- [ ] Footer 사업자 정보 (상호/대표/사업자번호/통신판매업번호/주소)
- [ ] 이용약관 페이지
- [ ] 개인정보처리방침 페이지
- [ ] 교환/반품 정책 (수령 7일 이내 청약철회)
- [ ] 현금영수증 자동발행 (PortOne cashReceipt)
