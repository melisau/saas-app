# JavaScript/TypeScript: `const` ve `export default` Mantığı (Türkçe Açıklama)

Bu dosya, projede sıkça gördüğünüz iki anahtar kavramı açıklar: `const` ve `export default`.

## 1) `const` nedir?
- `const`, değişken/bağıntı (binding) tanımlamak için kullanılır.
- "Sabit referans" anlamına gelir: Bir kez atandıktan sonra aynı değişkene yeni bir değer atayamazsınız.
- Ancak bu, atanan değerin MUTLAKA değişmez olduğu anlamına gelmez. Örneğin bir dizi veya nesne `const` ile tanımlansa bile, iç öğelerini/alanlarını değiştirebilirsiniz.
- Değişmeyen olan, değişkenin işaret ettiği referanstır.

Örnekler:
```ts
const x = 5
// x = 7 // HATA: const ile tanımlanmış değişkene yeniden atama yapılamaz.

const user = { name: "Ada" }
user.name = "Ada Lovelace" // Geçerli: Nesnenin içeriği değiştirilebilir.
// user = {} // HATA: user değişkeninin referansı değiştirilemez.
```

Neden `const` tercih edilir?
- Yeniden atamayı engelleyerek daha güvenli ve öngörülebilir kod sağlar.
- Lint kuralları genellikle değişmeyecek bağları `const` ile yazmanızı önerir.

## 2) `export default` nedir?
- ES Modules (ESM) sisteminde bir dosya/modülden dışa aktarma (export) yapmanın iki yolu vardır: "default export" ve "named export".
- `export default`, bir modülün “varsayılan” ana ihracını tanımlar. Modülde bir tane olabilir.

Kullanım şekilleri:
```ts
// 2.1) Bildirimle birlikte default export
export default function Page() {
  return null
}

// 2.2) Önce tanımla, sonra default export et
const CompanionForm = () => {
  return <div>Form</div>
}
export default CompanionForm

// 2.3) Sınıf örneği
export default class ApiClient {}
```

İçe aktarma (import) nasıl yapılır?
```ts
// Default export'u içe alırken isim seçimi size kalır.
import Page from "./page"
import Form from "./CompanionForm"

// Named export'lar süslü parantezle alınır.
import { Button } from "@/components/ui/button"
```

Karşılaştırma: Default vs. Named Export
- Default export: Modülün tek bir ana şeyini dışa vermek istediğinizde idealdir. İçe aktarırken isim serbestliği sağlar.
- Named export: Bir modülden birden fazla öğe (fonksiyon, sabit, bileşen) dışa vermek istediğinizde kullanışlıdır. İçe aktarırken aynı isimleri kullanmanız gerekir.

Örnek birlikte kullanım:
```ts
// module.ts
export const A = 1
export const B = 2
const C = 3
export default C

// consumer.ts
import C, { A, B } from "./module"
```

Next.js projelerinde yaygın desenler
- Sayfa dosyaları (`app/**/page.tsx`) genellikle `export default` ile bir React bileşeni döndürür.
- UI bileşenleri (örn. `components/CompanionForm.tsx`) çoğu zaman `export default` ile dışa aktarılır ki import ederken isimlendirme esnekliği olsun.
- Yardımcı fonksiyon dosyalarında daha çok named export tercih edilir (örn. `lib/utils.ts`'de `export function ...`).

Sık yapılan hatalar
- Bir dosyada birden fazla `export default` kullanmak. (Hata verir.)
- Default export'lu modülü içe alırken süslü parantez kullanmak: `import { Something } from "..."` default için geçerli değildir.
- TypeScript'te `export =` (CommonJS) ve ESM `export default` sözdizimini karıştırmak.

Kısa özet
- `const`: Yeniden atamayı engeller; referans sabittir.
- `export default`: Modülün bir tane olabilen ana dışa aktarmasıdır; import ederken isim serbesttir.

Bu projeden örnek satırlar
- `components/CompanionForm.tsx` dosyasında:
```tsx
const CompanionForm = () => {
  return (<div>CompanionForm</div>)
}
export default CompanionForm
```
- `app/page.tsx` dosyasında:
```tsx
export default function Page() {
  return (<div />)
}
```
