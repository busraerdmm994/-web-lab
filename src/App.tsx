import UIKit from './pages/UIKit';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-pink-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="logo.png" alt="Logo" className="w-10 h-10 object-contain rounded-md" />
          <div className="text-xl font-bold text-accent dark:text-pink-400 uppercase tracking-wider">
            Büşra Erdem
          </div>
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="ml-4 p-2 rounded-full bg-white/50 dark:bg-slate-800 hover:scale-110 transition-all shadow-sm border border-pink-200 dark:border-slate-700"
            aria-label="Tema Değiştir"
          >
            <span className="hidden dark:inline text-yellow-400 text-xl">☀️</span>
            <span className="inline dark:hidden text-primary text-xl">🌙</span>
          </button>
        </div>
        <nav>
          <ul className="flex gap-6 font-medium text-gray-700 dark:text-slate-200">
            <li><a href="#hakkimda" className="hover:text-accent dark:hover:text-pink-400 transition">Hakkımda</a></li>
            <li><a href="#projeler" className="hover:text-accent dark:hover:text-pink-400 transition">Projeler</a></li>
            <li><a href="#iletisim" className="hover:text-accent dark:hover:text-pink-400 transition">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl shrink-0">
            <img src="profil.jpeg" alt="Büşra Erdem" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-gray-700 dark:text-slate-300">
            <h1 className="text-4xl font-extrabold mb-4 text-primary dark:text-white transition-colors">Yazılım Mühendisi Portföyü</h1>
            <p className="text-lg leading-relaxed mb-6 transition-colors">
              Yapay Zeka, Doğal Dil İşleme (NLP) ve Makine Öğrenimi alanlarında kendini geliştiren, Yazılım Mühendisliği 3. sınıf öğrencisiyim. TEKNOFEST ve ATP-Alibaba NLP Hackathonlarında finalist olarak yer aldım. Metin sınıflandırma, duygu analizi ve varlık tanıma (NER) görevleri için LLM tabanlı modeller geliştirdim. 
              Savunma Teknolojileri ve Nitelikli Mühendisler Topluluğu Yazılım Ekibinde iki yıldır görev almakta; otonom sistemler ve Gazebo simülasyonu konusunda deneyim sahibiyim.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['React', 'Python', 'NLP', 'YOLO', 'ROS 2'].map((skill) => (
                <span key={skill} className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold uppercase shadow-md">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 italic border-b-2 border-accent w-fit mx-auto pb-2 text-primary dark:text-pink-300">Proje ve Başarılarım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              { title: "İnsansız Deniz Aracı - Finalist", img: "deniz-araci.jpg", tags: ["YOLO", "Gazebo", "Vision"], description: "TEKNOFEST 2025 kapsamında otonom navigasyon algoritmaları geliştirdim.", achievement: "İstanbul Finalisti" },
              { title: "ATP-Alibaba & TEKNOFEST NLP", img: "nlp-proje.jpg", tags: ["LLM", "NER", "Transformers"], description: "Turkcell yorumlarında Duygu Analizi ve NER modelleri geliştirdim.", achievement: "Çift Başarı: Finalist" },
              { title: "Hava Savunma Sistemleri", img: "hss.png", tags: ["Tracking", "YOLO"], description: "YOLO ile Dost-Düşman tespiti ve ByteTrack ile düşman takibi sistemlerini kurdum.", achievement: "TEKNOFEST 2025" },
              { title: "TUBITAK Bilgem Araştırmaları", img: "tubitak.jpg", tags: ["LLM", "AI", "Defence"], description: "Türkçe dilinde küfür tespiti için LLM ince ayar teknikleri geliştiriyorum.", achievement: "TUBITAK Bilgem Bursiyeri" },
              { title: "EVCS Güvenlik Analizi", img: "evcs-security.jpg", tags: ["Random Forest", "Cyber"], description: "Elektrikli araç şarj altyapısındaki siber saldırıları analiz ettim.", achievement: "Akademik Proje" }
            ].map((proje, index) => (
              <article key={index} className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all group flex flex-col border border-pink-100 dark:border-slate-800">
                <div className="h-48 bg-pink-50 dark:bg-slate-800 overflow-hidden relative text-[10px] font-bold uppercase text-white">
                  <img src={proje.img} alt={proje.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {proje.tags.map(tag => <span key={tag} className="bg-accent/90 dark:bg-pink-600 px-2 py-0.5 rounded shadow-sm">{tag}</span>)}
                  </div>
                </div>
                <div className="p-6 flex flex-grow flex-col">
                  <div className="text-accent dark:text-pink-400 text-[10px] font-bold uppercase mb-1 tracking-widest">{proje.achievement}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary dark:text-pink-100 leading-tight">{proje.title}</h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{proje.description}</p>
                  <div className="mt-5 pt-4 border-t border-pink-50 dark:border-slate-800 flex justify-between items-center text-accent dark:text-pink-400 font-bold text-xs uppercase">
                    <span className="text-pink-400 dark:text-pink-500 font-medium italic normal-case">Fırat Üniversitesi</span>
                    <button className="hover:text-primary transition-colors">Detaylar →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 italic border-b-2 border-accent w-fit mx-auto pb-2 text-primary dark:text-pink-300">Bağlantıda Kalalım</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-pink-100 dark:border-slate-800 flex flex-col md:flex-row gap-12 text-gray-700 dark:text-slate-300 text-sm">
            <div className="flex-1 space-y-8">
              <h3 className="text-2xl font-bold text-primary dark:text-pink-200">İletişim Bilgilerim</h3>
              <p>📍 Muğla<br/>📧 busraerdem994@gmail.com</p>
              <div className="flex gap-4 pt-4 font-bold">
                <a href="https://linkedin.com/in/büşra-erdem" target="_blank" rel="noreferrer" className="bg-pink-50 dark:bg-slate-800 text-accent px-6 py-2 rounded-xl hover:bg-accent hover:text-white transition-all">LinkedIn</a>
                <a href="https://github.com/busraerdmm994" target="_blank" rel="noreferrer" className="bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-6 py-2 rounded-xl hover:bg-gray-800 hover:text-white transition-all">GitHub</a>
              </div>
            </div>
            <form className="flex-[1.5] space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Ad Soyad" className="bg-pink-50/50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 p-4 rounded-2xl focus:ring-2 focus:ring-accent outline-none w-full" />
                <input type="email" placeholder="E-posta" className="bg-pink-50/50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 p-4 rounded-2xl focus:ring-2 focus:ring-accent outline-none w-full" />
              </div>
              <textarea rows={4} placeholder="Mesajınız..." className="bg-pink-50/50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 p-4 rounded-2xl focus:ring-2 focus:ring-accent outline-none w-full resize-none"></textarea>
              <button type="submit" className="w-full bg-accent text-white font-extrabold py-4 rounded-2xl hover:bg-primary transition-colors shadow-lg">MESAJI GÖNDER</button>
            </form>
          </div>
        </section>
      </main> 

      {/* UI Kit Bölümü - Föy Gereksinimi */}
      <hr className="my-10 border-pink-200 dark:border-slate-800 max-w-6xl mx-auto" />
      <div className="max-w-6xl mx-auto">
         <UIKit />
      </div>

      <footer className="bg-white dark:bg-slate-900 py-8 mt-20 text-center border-t border-pink-100 dark:border-slate-800 text-gray-500 dark:text-slate-400 italic">
        <p>© 2025 Büşra Erdem. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;