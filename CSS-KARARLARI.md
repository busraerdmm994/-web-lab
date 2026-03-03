CSS Kararları
1. Breakpoint Seçimi
Neden 640px ve 1024px seçtim?: Bu değerler modern web standartları ve popüler kütüphanelerle uyumlu olduğu için tercih edilmiştir. 640px genişliği tablet geçişini, 1024px ise masaüstü deneyiminin başladığı sınırı temsil eder.

İçeriğim bu noktalarda nasıl değişiyor?: Mobilde dikey olan yerleşimler 640px'te yataya dönmekte, 1024px'te ise içerik genişliği sınırlandırılarak sayfa ortalanmaktadır. Bu sayede geniş ekranlarda okuma kolaylığı sağlanırken, küçük ekranlarda alan verimliliği korunur.

2. Layout Tercihleri
Header için neden Flexbox seçtim?: Header bileşenleri genellikle tek bir eksen (yatay) üzerinde hizalandığı için Flexbox ideal tercihti. Logo ve navigasyon linklerini iki uca yaslamak (justify-content: space-between) Flexbox ile oldukça pratiktir.

Proje kartları için neden Grid seçtim?: Kartlar hem satır hem de sütun bazlı iki boyutlu bir dizilim gerektirdiği için Grid kullanılmıştır. Grid, kartların yüksekliklerini otomatik olarak eşitleyerek daha düzenli bir galeri görünümü sunar.

auto-fit mi auto-fill mi kullandim, neden?: auto-fit kullandım; çünkü bu özellik, yeterli kart olmadığında mevcut kartların tüm alanı kaplayacak şekilde genişlemesini sağlar. Bu, özellikle az sayıda proje gösterildiğinde sayfanın boş görünmesini engeller.

3. Design Tokens
Hangi renk paletini seçtim ve neden?: Kontrastı yüksek, modern bir görünüm için koyu ana renkler ve yumuşak pembe tonlarını içeren bir palet seçtim. Bu seçim, profesyonel bir duruş sergilerken aynı zamanda kişisel bir dokunuş katmaktadır.

Spacing skalasını nasıl belirledim?: Tutarlılık sağlamak adına 8px'lik (0.5rem) temel bir birim üzerinden 8, 16 ve 32px şeklinde artan bir skala oluşturdum. Bu matematiksel oran, elemanlar arasındaki hiyerarşinin görsel olarak dengeli durmasını sağlar.

Fluid typography için clamp değerlerini nasıl ayarladım?: Yazı boyutlarını clamp(minimum, tercih-edilen, maksimum) formülüyle, rem ve vw birimlerini harmanlayarak kurdum. Böylece yazılar mobilde okunabilir sınırlarda kalırken, büyük ekranlarda ekran genişliğine göre akıcı bir şekilde büyür.

4. Responsive Stratejiler
Mobile-first yaklaşımını nasıl uyguladim?: Tüm ana stilleri en küçük ekran genişliğine göre yazıp, @media (min-width: ...) sorgularıyla büyük ekranlar için eklemeler yaptım. Bu strateji, kodun daha temiz kalmasını ve performansın artmasını sağladı.

Hangi elemanlar breakpoint'lerde değişiyor?: Navigasyon menüsü, "Hakkımda" bölümündeki esnek kutular ve proje galerisindeki sütun sayıları breakpoint noktalarında yapısal değişikliğe uğruyor. Mobilde dikey olan yığınlar, tablette ve masaüstünde yatay dizilimlere evriliyor.

Görsel boyutları nasıl yönettim?: Görsellerde max-width: 100% ve height: auto kullanarak taşmaları önledim; proje kartlarında ise object-fit: cover ile oranları korudum. Profil fotoğrafında aspect-ratio: 1 kullanarak her cihazda tam yuvarlak bir görünüm elde ettim.