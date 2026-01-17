# CLAUDE.md

**비바수뷰티 랜딩페이지** - 영통/망포 속눈썹 전문점

---

## 프로젝트 개요

- **브랜드명**: 비바수뷰티 (VivasooBeauty)
- **타입**: Astro 5 + Tailwind CSS 4 랜딩페이지
- **도메인**: https://yourdomain.com (설정 필요)
- **배포**: Vercel (권장) / Netlify
- **언어**: 한국어
- **목적**:
  1. 네이버 검색 노출 최적화 (영통 속눈썹, 망포 속눈썹)
  2. Facebook 광고 효율 극대화
  3. 속눈썹 전문점 온라인 홈페이지
  4. 네이버 예약 연동으로 예약 편의성 향상

---

## 비즈니스 정보

### 매장 정보

- **정확한 주소**: 경기도 수원시 영통구 영통로501번길 48-14 3층 (영통동 951-4)
- **전화번호**:
  - 대표: 0507-1413-5222
  - 모바일: 010-7368-5222
- **네이버 플레이스 ID**: 2013429549
- **좌표**: 위도 37.2653300, 경도 127.0770750

### 영업시간

```
월-일: 10:00 - 21:00
휴게시간: 18:00 - 19:00 (매일)
정기 휴무: 없음
```

### 온라인 채널

- **인스타그램**: [@vivasoo.b](https://www.instagram.com/vivasoo.b)
- **카카오톡 채널**: [_xeexnfn](http://pf.kakao.com/_xeexnfn)
- **네이버 블로그**: [kkiikk33](https://blog.naver.com/kkiikk33)
- **네이버 지도**: [비바수뷰티](https://map.naver.com/p/entry/place/2013429549)

### 주요 서비스

**속눈썹 연장**:
- 기본 연장: 55,000원
- 2D연장: 70,000원
- 특수컬: 65,000원
- 마스카라연장: 75,000원 (픽서 필수)
- LED 연장 추가: +20,000원
- 언더래쉬: +20,000원
- 리터치: 본 시술의 50%

**속눈썹 펌**:
- 클리닉펌: 40,000원
- 블랙펌 [BEST]: 45,000원
- 프리미엄 영양펌: 50,000원
- **LED펌포인트연장 [인기]**: ~~90,000원~~ → 70,000원 (이벤트)
- 언더펌: +30,000원
- 동시펌(2인): 80,000원

**눈썹 디자인**: (추가 정보 필요)

**예약 시스템**:
- 예약금: 10,000원 (노쇼 방지)
- 환불 기준: 2일 전 100% / 1일 전·당일 0%
- 지각 자동 취소: 연장 10분, 펌 15분 이상

---

## 기술 스택

### 프레임워크
- **Astro 5.16+**: SSG(정적 사이트 생성)로 네이버봇 크롤링 100% 보장
- **Tailwind CSS 4**: Vite 플러그인 방식 (v3와 다름)

### SEO & 분석
- **@astrojs/sitemap**: sitemap.xml 자동 생성
- **Google Tag Manager**: Facebook Pixel 비동기 로딩
- **Schema.org LocalBusiness**: 지역 비즈니스 마크업

### 주요 특징
- **0KB JavaScript** (기본): Astro Islands 아키텍처
- **SSG 렌더링**: 네이버봇이 완전한 HTML 크롤링 가능
- **자동 이미지 최적화**: `<Image />` 컴포넌트
- **베이지 고급 브랜딩**: Stone 팔레트 + 로즈골드 악센트
- **프리미엄 동영상 Hero**: Instagram 스타일 블러 배경 + 완벽한 반응형 최적화

### Hero 동영상 최적화 (2026-01-17 완료)

**파일 위치**:
- 동영상: `/public/videos/vivasu-hero-optimized.mp4` (668KB), `.webm` (660KB)
- Poster: `/public/videos/poster.jpg` (35KB)

**반응형 전략** (Instagram 프리미엄 스타일):
1. **모바일 (< 768px)**:
   - 세로 동영상 전체 화면 `object-fit: cover`
   - 블러 배경 숨김 (대역폭 절약)
   - 최적화된 모바일 경험

2. **태블릿 (768-1024px)**:
   - 동영상 중앙 배치 (90vh)
   - 둥근 모서리 16px
   - 블러 배경 활성화
   - 양쪽 베이지 그라데이션

3. **데스크톱 (> 1024px)**:
   - 동영상 중앙 배치 (85vh)
   - 둥근 모서리 24px
   - 블러 배경 (blur 60px, brightness 0.7)
   - 프리미엄 그림자 효과

4. **초대형 화면 (> 1920px)**:
   - 최대 높이 1000px 제한
   - 동영상 왜곡 방지

**SEO 최적화**:
- `preload="metadata"` - 초기 로딩 최적화
- `poster="/videos/poster.jpg"` - LCP(Largest Contentful Paint) 개선
- Schema.org VideoObject 마크업
- 동영상 메타데이터 구조화

**Facebook Pixel 추적**:
```javascript
// 자동 재생 이벤트
fbq('track', 'ViewContent', { content_name: 'Hero Video' })

// 진행률 추적 (25%, 50%, 75%, 100%)
fbq('trackCustom', 'VideoProgress', { progress: '25%' })
```

**iOS Safari 자동재생 보장**:
- Intersection Observer로 화면 진입 시 재생
- `playsinline` 속성으로 전체화면 방지
- `muted` 속성으로 자동재생 허용

**성능 최적화**:
- WebM 우선 로드 (Chrome/Firefox)
- MP4 폴백 (Safari/IE)
- Hardware Acceleration (`will-change: transform`)
- 동영상 2개 로드하지만 모바일에서는 1개만 표시

---

## 브랜딩 & 디자인 시스템

### 브랜드 컬러 (베이지 고급)

```css
:root {
  /* Primary Beige (Tailwind Stone) */
  --beige-50: #FAFAF9;      /* 밝은 배경 */
  --beige-100: #FBF4DE;     /* 메인 배경 (Aesop 스타일) */
  --beige-200: #F5F5F4;     /* 카드 배경 */
  --beige-300: #E7E5E4;     /* 구분선 */

  /* Accent Colors */
  --rose-gold: #FBD1DF;     /* 로즈골드 */
  --gold: #F6C63F;          /* 골드 */
  --bronze: #764013;        /* 브론즈 브라운 */

  /* Text Colors (WCAG AA 준수) */
  --text-primary: #292524;   /* stone-800 - 제목 */
  --text-secondary: #57534E; /* stone-600 - 본문 */
  --text-subtle: #78716C;    /* stone-500 - 보조 */
}
```

### 타이포그래피

```css
/* Heading (Noto Serif KR) */
h1 { font-size: 2.5rem; font-weight: 600; }
h2 { font-size: 2rem; font-weight: 500; }
h3 { font-size: 1.5rem; font-weight: 500; }

/* Body (Noto Sans KR) */
body { font-size: 1rem; font-weight: 400; }
```

**폰트 임포트**:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### UI 컴포넌트

**Primary 버튼** (로즈골드 그라데이션):
```css
.btn-primary {
  background: linear-gradient(135deg, #FBD1DF 0%, #F6C63F 100%);
  color: #292524;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
}
```

**Secondary 버튼** (베이지):
```css
.btn-secondary {
  background: #F5F5F4;
  color: #57534E;
  border: 1px solid #E7E5E4;
}
```

---

## 타겟 고객 분석

### 주 타겟

- **연령**: 20-30대 여성
- **지역**: 영통, 망포, 용인 흥덕지구/보라동
- **특성**:
  - 직장인 (영통역 롯데쇼핑플라자 상권)
  - 주기적 속눈썹 관리 고객
  - 가격보다 품질·자연스러움 중시
  - 월 1회 정기 관리 가능 (60,000~80,000원)

### 부 타겟

- **학생** (수원 최대 학원가)
- **가격 민감도 높음** (30,000~50,000원)
- **SNS 마케팅 반응** 좋음

### 선호 서비스

- **직모인 경우**: 속눈썹 연장 (매달 관리)
- **화장 자주**: 펌
- **속눈썹 긴 편**: 펌
- **속눈썹 짧고 적음**: 연장 또는 LED펌포인트연장 (★인기)

---

## 경쟁사 분석 (영통/망포 지역)

### 시장 특성

- **경쟁 강도**: 낮음 (영통/망포 속눈썹 전문점 적음)
- **유동인구**: 많음 (롯데쇼핑플라자, 홈플러스, 학원가)
- **상권 특성**: 영통지구 아파트단지 밀집, 경희대 수원캠퍼스 인접

### 전국 평균 가격대

- 클래식 연장: 40,000~60,000원
- 볼륨/하이브리드: 70,000~150,000원
- 메가볼륨: 150,000원 이상
- 숨고 평균: 39,000원

### 비바수뷰티 포지셔닝

- **가격대**: 50,000~80,000원 (중가 시장)
- **차별화**: LED펌포인트연장 (한 번 받으면 끊을 수 없다는 인기 아이템)
- **품질**: 4단계 클리닉 시술, 꺾임·지글거림 최소화
- **경력**: 수진원장 (경력 확인 필요)

---

## SEO 전략

### 주요 키워드

**지역 키워드** (우선순위 높음):
- 영통 속눈썹
- 망포 속눈썹
- 수원 속눈썹 연장
- 영통 눈썹문신
- 망포 속눈썹 펌

**기술 키워드**:
- LED 속눈썹 연장
- 펌포인트연장
- 연장 후 펌
- 속눈썹 리프팅

**롱테일 키워드**:
- 영통역 속눈썹 잘하는 곳
- 망포 속눈썹 추천
- 수원 자연스러운 속눈썹

### 네이버 서치어드바이저 등록

**1단계: 사이트 소유권 확인**

`src/layouts/Layout.astro`에 인증 태그 추가:

```html
<meta name="naver-site-verification" content="발급받은코드" />
```

**2단계: 사이트맵 제출**

1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속
2. 웹마스터 도구 → 사이트 선택
3. [요청 > 사이트맵 제출] → `https://yourdomain.com/sitemap-index.xml` 입력
4. 14-16일 대기

**3단계: 블로그 연동**

- 블로그(kkiikk33)에서 홈페이지 링크 추가
- 정기적 콘텐츠 업데이트 (시술 후기, 이벤트)

---

## 랜딩페이지 구조

### 권장 섹션 순서 (전환율 최적화)

```
1. Hero
   - 헤드라인: "속눈썹 붙이는 시간이 아까우신가요?"
   - Before/After 메인 이미지
   - CTA #1: 카카오톡 상담하기

2. 신뢰 요소 띠
   - "누적 고객 1,200명" (네이버 리뷰 260개 기반)
   - "평균 4.9점" (네이버 플레이스 평점)
   - "재방문율 87%" (추정)

3. 서비스 메뉴 & 가격표
   - 속눈썹 연장 (7개 메뉴)
   - 속눈썹 펌 (6개 메뉴)
   - 인기 아이템 뱃지 (LED펌포인트연장, 블랙펌)

4. Before/After 갤러리
   - 최소 15장 (다양한 스타일)
   - Lazy Loading 적용

5. CTA #2
   - 네이버 예약하기

6. 시술 과정 설명
   - 1. 상담 → 2. 디자인 → 3. 시술 → 4. 완성

7. 시술자 소개 (수진원장)
   - 경력, 자격증
   - 교육 이수 내역

8. 고객 리뷰
   - 네이버 리뷰 260개 하이라이트
   - 별점 + 텍스트 후기 3-5개

9. CTA #3
   - 전화 상담하기 (클릭투콜)

10. FAQ
    - 지속 기간, 관리 방법, A/S 등

11. 위치 & 영업시간
    - 네이버 지도 임베드
    - 교통편 안내 (영통역, 망포역)
    - 주차 정보

12. Footer
    - 연락처, 주소
    - CTA #4: 카카오톡 채널 추가
```

### 전환율 목표

- **평균 랜딩페이지**: 6.6%
- **목표**: 10% 이상 (뷰티 업종 고의도)

---

## Schema.org 마크업

### LocalBusiness Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "비바수뷰티",
  "image": "https://yourdomain.com/logo.png",
  "telephone": "0507-1413-5222",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "영통로501번길 48-14 3층",
    "addressLocality": "영통구",
    "addressRegion": "수원시",
    "addressCountry": "KR",
    "postalCode": "16227"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.2653300,
    "longitude": 127.0770750
  },
  "url": "https://yourdomain.com",
  "priceRange": "₩₩",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "260"
  },
  "sameAs": [
    "https://www.instagram.com/vivasoo.b",
    "https://blog.naver.com/kkiikk33",
    "http://pf.kakao.com/_xeexnfn"
  ]
}
</script>
```

---

## 외부 서비스 연동

### 카카오톡 채널

- **채널 ID**: _xeexnfn
- **URL**: http://pf.kakao.com/_xeexnfn
- **용도**:
  - 예약 문의
  - 상담
  - 프로모션 안내
  - 예약 리마인더

### 네이버 예약

- **플레이스 ID**: 2013429549
- **연동 방법**:
  - 콜라보살롱 또는 용감한뷰티 솔루션 활용
  - 네이버 예약 → 카카오톡 알림 발송 가능
  - 통합 캘린더로 예약 중복 방지

### Google Tag Manager

- **GTM ID**: GTM-XXXXXX (발급 필요)
- **Facebook Pixel**: (Pixel ID 필요)
- **설정 위치**: `src/layouts/Layout.astro`

---

## 개발 로드맵

### Phase 1: 기본 구조 (1-2일)

- [ ] 베이지 색상 시스템 적용
- [ ] Hero 섹션 (헤드라인 + Before/After)
- [ ] 서비스 메뉴 & 가격표
- [ ] CTA 버튼 3개 배치
- [ ] LocalBusiness Schema 추가

### Phase 2: 콘텐츠 (2-3일)

- [ ] Before/After 갤러리 (이미지 15장 필요)
- [ ] 시술자 소개 (사진, 경력 필요)
- [ ] 고객 리뷰 (네이버 리뷰 스크래핑 또는 수동)
- [ ] FAQ 섹션
- [ ] 시술 과정 설명

### Phase 3: 연동 (1-2일)

- [ ] 네이버 지도 임베드
- [ ] 카카오톡 채널 버튼
- [ ] 클릭투콜 버튼 (모바일)
- [ ] 네이버 예약 연동 (선택)

### Phase 4: SEO & 배포 (1일)

- [ ] sitemap.xml 확인
- [ ] robots.txt 설정
- [ ] 네이버 서치어드바이저 등록
- [ ] Facebook Pixel 연동
- [ ] Vercel 배포
- [ ] 도메인 연결

---

## 필요한 자료

### 이미지

- [ ] **로고** (고해상도 PNG, 투명 배경) - **중요: 추후 요청 예정**
- [ ] Before/After 사진 15장
- [ ] 시술자 프로필 사진
- [ ] 매장 외관/내부 사진
- [ ] 시술 과정 사진

### 텍스트

- [ ] 시술자 경력 및 자격증
- [ ] 교육 이수 내역
- [ ] 차별화 포인트 (상세)
- [ ] FAQ 질문/답변
- [ ] 추가 프로모션 정보

### 기타

- [ ] 네이버 인증 코드
- [ ] Google Tag Manager ID
- [ ] Facebook Pixel ID
- [ ] 도메인 (구매 또는 보유)

---

## 빌드 명령어

```bash
# 개발 서버 실행 (포트 4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

---

## Git 커밋 컨벤션

```
Add [기능]: 새 기능 추가
Update [기능]: 기존 기능 개선
Fix [버그]: 버그 수정
Enhance [기능]: 성능/품질 향상
```

**예시**:
```bash
git commit -m "Add service menu section with pricing"
git commit -m "Update hero section with beige color system"
git commit -m "Fix mobile responsive issue on gallery"
```

---

## 문제 해결

### 브라우저에서 페이지가 안 보일 때

```bash
# 개발 서버 재시작
Ctrl+C
npm run dev
```

### Tailwind 스타일이 적용 안 될 때

1. `src/styles/global.css`에 `@import "tailwindcss"` 있는지 확인
2. `src/layouts/Layout.astro`에서 `import '../styles/global.css'` 있는지 확인
3. 브라우저 새로고침 (Cmd+Shift+R)

### sitemap.xml 404 오류

빌드 후에만 생성됩니다:

```bash
npm run build
npm run preview
# http://localhost:4321/sitemap-index.xml 확인
```

---

## 참고 자료

### 공식 문서
- [Astro 공식 문서](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [네이버 서치어드바이저](https://searchadvisor.naver.com/)

### 영감
- `/Users/kangjunho/WebstormProjects/seo-areum-smp` - 순수 HTML 랜딩페이지

---

**마지막 업데이트**: 2026-01-17
**Astro 버전**: 5.16.11
**Tailwind 버전**: 4.1.18

---

## 🚨 중요 리마인더

**로고 요청**: 추후 고해상도 로고 파일(PNG, 투명 배경)을 요청할 예정입니다. 준비해주세요!
