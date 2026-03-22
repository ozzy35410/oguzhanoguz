# Project Text Generator Guide (for AI)

Bu dosya, AI'ın **yalnızca gerekli metinleri** üretmesi için hazırlandı.

Amaç:
- Her proje için 2 katmanda yazı üretmek:
  1) **Projects listesi** için kısa açıklama
  2) **Proje detay sayfası** için daha uzun ve teknik açıklama
- Raporundan gelen bilgiyi düzenleyip gereksiz kısmı atmadan, ama uzatmadan yazmak.

---

## 1) Seçilen 2 referans proje (detaylı örnek)

## A) Image Compression: DCT vs FWT (5/3 Wavelets) and Rate-Distortion

Course: EQ2330 Image and Video Processing  
Period: Fall 2025

### Projects listesinde kullanılan kısa anlatım (1-2 cümle)
Built and evaluated two transform coders (8×8 DCT and 5/3 wavelet FWT), mapping quantization strength to bitrate and reconstruction quality through rate–distortion curves.

### Detay sayfasındaki uzun anlatım (tek paragraf, teknik)
Two compression pipelines were implemented: blockwise 8×8 DCT and multi-scale FWT using 5/3 biorthogonal filter banks with a lifting-based realization. After uniform mid-tread quantization, bitrate was estimated via ideal entropy coding (per-coefficient for DCT and per-subband for FWT), enabling fair rate–distortion comparison across multiple images. Results showed similar performance between DCT and FWT at higher bitrates, while image content (e.g., texture-heavy scenes) strongly influenced PSNR at the same rate. Distortion behavior also reflected theory: image-domain and transform-domain MSE aligned for orthonormal DCT but not for the biorthogonal 5/3 wavelet system.

### Bu projeden çıkarılacak yazı mantığı
- Kısa anlatım: yöntem + kıyas + çıktı (RD/PSNR)
- Uzun anlatım: pipeline adımları + ölçüm yöntemi + bulgular + teorik yorum
- Rapor varsa: özellikle deney düzeni, metrik, sonuç karşılaştırması öne çıkar

---

## B) Recovering a Permutation Key with a Linear FIR Equalizer and Decoding a Scrambled Color Image

Course: EQ1220 Signal Theory  
Period: Fall 2025

### Projects listesinde kullanılan kısa anlatım (1-2 cümle)
Recovered an image-encryption permutation key from a noisy sequence using linear equalization, then successfully decoded a scrambled RGB image.

### Detay sayfasındaki uzun anlatım (tek paragraf, teknik)
A causal FIR equalizer was trained with least-squares on a short 32-symbol preamble, then used for hard bit decisions across the full key stream. Filter order was chosen by sweeping candidate orders and comparing preamble decision errors, MSE, and permutation-uniqueness indicators, followed by image decoding with the recovered key. Robustness was evaluated by injecting controlled bit flips into the recovered key, showing decoding remains interpretable up to roughly 3% BER and becomes unusable beyond about 8% BER.

### Bu projeden çıkarılacak yazı mantığı
- Kısa anlatım: problem + yöntem + elde edilen sonuç
- Uzun anlatım: eğitim/veri kısmı + model/algoritma seçimi + doğrulama + dayanıklılık testi
- Rapor varsa: parametre seçimi, hata analizi ve sınır koşulları mutlaka yazılır

---

## 2) AI'a verilecek kesin görev

AI yalnızca metin üretecek. Kod, sayfa düzeni, stil, klasör gibi konulara hiç girmeyecek.

Her yeni proje için iki metin üretilecek:
1) `list_description` (1-2 cümle)
2) `detail_overview` (120-220 kelime)

Ek olarak:
- `key_components` (6-10 madde)
- `report_highlights` (3-5 madde, rapordan çekilen en kritik bulgular)

---

## 3) AI prompt (kopyala-kullan)

You will write only project text content for a portfolio.

Important constraints:
1. Do NOT write code.
2. Do NOT suggest website styling, layout, or implementation details.
3. Use clear technical English.
4. Avoid buzzwords and exaggerated claims.
5. If a detail is missing in my notes, do not invent numbers.

For each project, output exactly this JSON structure:

[
  {
    "name": "...",
    "course": "...",
    "period": "...",
    "status": "Completed",
    "list_description": "1-2 sentence summary for project list",
    "detail_overview": "120-220 word technical overview for project detail page",
    "key_components": [
      "...",
      "..."
    ],
    "report_highlights": [
      "...",
      "..."
    ]
  }
]

Writing style to imitate:
- In the list text: method + implementation + outcome, very compact.
- In the detail text: pipeline/approach, key parameter choices, evaluation method, and main findings.

My raw notes/reports are below:
[PASTE NOTES HERE]

---

## 4) Hızlı kontrol listesi (çıktıyı almadan önce)

AI çıktısı şunları sağlamalı:
- `list_description` gerçekten kısa mı?
- `detail_overview` rapordaki teknik akışa uyuyor mu?
- `key_components` maddeleri gerçek kullanılan yöntemleri anlatıyor mu?
- `report_highlights` somut bulgu içeriyor mu (genel laf değil)?
- Uydurma metrik/sayı var mı? (Varsa sildir)

Bu dosyanın amacı: AI'dan sadece gerekli metinleri temiz şekilde almak.
