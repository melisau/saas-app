# Converso Projesi - Türkçe Açıklama

Bu repo, Next.js 15 (App Router) ve TypeScript kullanılarak oluşturulmuş bir web uygulaması iskeletidir. Stil sistemi Tailwind CSS v4'e dayanır. UI bileşenleri shadcn yaklaşımıyla inşa edilir; class-variance-authority (CVA) ve tailwind-merge yardımıyla esnek varyant/size desenleri kullanılır.

## Hızlı Başlangıç
- Geliştirme sunucusu: `npm run dev`
- Derleme: `npm run build`
- Üretim sunucusu: `npm start`
- Lint: `npm run lint`

Tarayıcıdan http://localhost:3000 adresine gidin.

## Mimari Genel Bakış
- Framework: Next.js 15 App Router (app/ dizini).
- Dil: TypeScript (tsconfig.json ile `@/*` alias'ı).
- Stil: Tailwind CSS v4 (app/globals.css) + `tw-animate-css` yardımcı animasyon sınıfları.
- UI Yardımcıları: shadcn tarzı bileşenler; `class-variance-authority`, `tailwind-merge`, `clsx` ve `lucide-react`.
- Rotalar: `app/` altında sayfa yönlendirmeleri (Home, Companions, My Journey, Subscription, Sign In vb.).
- Navigasyon: `components/Navbar.tsx` ve `components/NavItems.tsx` ile üst menü.

## Dizin Yapısı ve Önemli Dosyalar

- app/
  - layout.tsx: Uygulamanın kök yerleşimi. Google font (Bricolage Grotesque) ve `<Navbar/>` burada bağlanır. Metadata (title/description) tanımlıdır. `app/globals.css` burada import edilir.
  - page.tsx: Ana sayfa. Basit içerik ve `components/ui/button` örnek kullanımı içerir.
  - globals.css: Tailwind v4 import'u, tema değişkenleri (oklch renk sistemi), light/dark temalar ve Base/Components/Utilities katmanlarında pek çok yardımcı sınıf tanımı.
  - companions/
    - page.tsx: "Companions Library" placeholder sayfası.
    - new/page.tsx: "NewCompanion" placeholder (yeni öğe/arkadaş oluşturma sayfası).
    - [id]/page.tsx: Dinamik rota; belirli bir companion oturum sayfası için iskelet.
  - my-journey/page.tsx: "Profile" placeholder.
  - subscription/page.tsx: "Subscription" placeholder.
  - sign-in/page.tsx: "Sign In" placeholder (kimlik doğrulama entegrasyonları için başlangıç noktası).

- components/
  - Navbar.tsx: Üst menü; sol tarafta logo (`/public/images/logo.svg`), sağda `NavItems` ve şimdilik metin olarak "Sign In" bulunur.
  - NavItems.tsx: Navigasyon bağlantıları listesi. `usePathname` alınmış, aktif link vurgusu ileride bu değerle kolayca eklenebilir.
  - ui/button.tsx: shadcn tarzı Button bileşeni. `cva` ile varyant ve size desenleri, `cn` ile sınıf birleştirme kullanır.

- lib/
  - utils.ts: `cn(...classes)` yardımcı fonksiyonu. `clsx` + `tailwind-merge` ile Tailwind sınıflarını akıllıca birleştirir.

- public/
  - images/logo.svg: Navbar logosu (Next.js Image bileşeniyle kullanılıyor).

- components.json: shadcn yapılandırması. Tailwind CSS konumu `app/globals.css`. Alias'lar: `@/components`, `@/lib`, `@/components/ui`, `@/lib/utils`, `@/hooks`.
- next.config.ts: Next.js yapılandırma iskeleti (şimdilik boş seçenekler).
- tsconfig.json: TypeScript ayarları, `paths` ile `@/*` alias'ı, `strict: true` vb.
- package.json: Bağımlılıklar ve script'ler. `next 15.5.x`, `react 19`, `tailwindcss 4`.

## Detaylı Açıklamalar (Adım Adım)

### 1) app/layout.tsx
- Google font `Bricolage_Grotesque` yüklenir ve `--font-bricolage` CSS değişkenine bağlanır.
- `metadata` ile sayfa başlığı ve açıklaması ayarlanır.
- `RootLayout` bileşeni `<html>` ve `<body>` iskeletini oluşturur; `<Navbar/>` ve `{children}` render edilir.
- `globals.css` import edilerek Tailwind ve tema stilleri uygulamaya yayılır.

### 2) components/Navbar.tsx
- `next/link` ile logo tıklandığında ana sayfaya yönlendirir.
- `next/image` ile `/public/images/logo.svg` optimize şekilde gösterilir.
- `NavItems` menüsü ve statik "Sign In" metni vardır. (İsteğe bağlı iyileştirme: `Link href="/sign-in"` yaparak tıklanabilir hâle getirilebilir.)
- Stil: `.navbar` sınıfı `globals.css` içinde tanımlanmıştır (genişlik/padding/bg/responsive).

### 3) components/NavItems.tsx
- `navItems` dizisi: Home (`/`), Companions (`/companions`), My Journey (`/my-journey`), Subscription (`/subscription`).
- `usePathname()` ile mevcut yol alınır. (İsteğe bağlı: aktif link vurgusu için `pathname === href` kontrolü.)
- Render: `flex` düzeninde `Link` elemanları.

### 4) app/page.tsx (Ana Sayfa)
- Basit bir örnek içerik ve UI: bir başlık, basit bir button ve `shadcn` Button bileşeni.
- `components/ui/button` kullanımı doğrulanır: `<Button>start</Button>`.

### 5) app/companions/*
- `companions/page.tsx`: Liste/kütüphane görünümü için placeholder.
- `companions/new/page.tsx`: Yeni companion oluşturma formu/akışı için placeholder.
- `companions/[id]/page.tsx`: Belirli companion oturumu/detayı için dinamik rota iskeleti.

### 6) app/my-journey, app/subscription, app/sign-in
- Şimdilik placeholder içerikler. İleride veriye bağlı olarak SSR/SSG veya client component kararları verilebilir.

### 7) components/ui/button.tsx
- `cva` ile `buttonVariants` oluşturulur: `variant` (default, destructive, outline, secondary, ghost, link) ve `size` (default, sm, lg, icon).
- `Button` bileşeni `asChild` desteğiyle Radix `Slot` ile uyumludur (farklı elementleri button gibi stillendirme imkânı).
- Erişilebilirlik: `focus-visible` ve `aria-invalid` durumları için uygun ring/border sınıfları eklenmiştir.

### 8) lib/utils.ts
- `cn(...inputs)` fonksiyonu Tailwind sınıflarını çakışmasız birleştirir (clsx + tailwind-merge).

### 9) app/globals.css
- Tailwind v4 `@import` ve `@layer` yapısı kullanılır.
- `:root` ve `.dark` altında ok-lch tabanlı renk değişkenleri; `@theme inline` ile CSS değişkenleri Tailwind token'larına bağlanır (ör. `--color-primary`, `--radius-*`).
- `@layer base`: tüm elemanlar için temel border/outline; `body`, `main`, `h1` gibi global ayarlar.
- `@layer components`: navbar, button, kart, grid, badge, companion bölümü, transcript (mesaj alanı) gibi çok sayıda yardımcı sınıf. Uygulamanın "gerçek zamanlı öğretim" konseptine uygun alanlar (mikrofon, transcript) için hazırlık mevcut.
- `@layer utilities`: `no-scrollbar` yardımcı sınıfı.

### 10) components.json
- shadcn şeması. `tailwind` css yolu `app/globals.css`. alias'lar `@/components`, `@/lib`, `@/components/ui`, `@/lib/utils`, `@/hooks`.

### 11) next.config.ts, tsconfig.json, package.json
- next.config.ts: Gelişmiş ayarlar için boş iskelet.
- tsconfig.json: `paths` ile `@/*` alias'ı, `strict: true`, `moduleResolution: bundler`.
- package.json: Next 15, React 19, Tailwind 4, shadcn ekosistem bağımlılıkları ve script'ler.

## Önerilen Küçük İyileştirmeler (Opsiyonel)
1) Aktif Link Vurgusu (NavItems): `usePathname()` ile `pathname === href` durumunda `font-semibold` veya `underline` gibi bir sınıf ekleyin.
2) Navbar Sign In: "Sign In" metnini `Link href="/sign-in"` yapın ve `btn-signin` sınıfını uygulayın.
3) 404 Sayfası: `app/not-found.tsx` ekleyerek özel "Sayfa bulunamadı" görünümü sağlayın.

Bu dosya, projenin mevcut durumunu ve temel tasarım kararlarını özetler. Geliştirme ilerledikçe bu belgeyi güncel tutmanız önerilir.
