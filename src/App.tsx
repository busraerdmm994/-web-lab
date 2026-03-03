/* App.tsx */
import './App.css'

function App() {
  return (
    <>
      {/* Erişilebilirlik için Skip Link */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <div className="site-title">Büşra Erdem Portföy</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h1>Büşra Erdem - Yazılım Mühendisi Portföyü</h1>
          <figure>
            <img src="profil.jpeg" alt="Büşra Erdem'in çalışma masasında çekilmiş vesikalık fotoğrafı" />
            <figcaption>Büşra Erdem - Yazılım Mühendisi Adayı</figcaption>
          </figure>
          <p>
            Merhaba! Ben Büşra. Yapay Zeka, Doğal Dil İşleme (NLP) ve Makine Öğrenimi alanlarında kendini geliştiren, 
            Yazılım Mühendisliği 3. sınıf öğrencisiyim...
          </p>
          
          {/* Uygulama-5: Beceri Etiketleri */}
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>NLP</li>
            <li>YOLO</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Uygulama-6: Grid Yapısı Burada Devreye Giriyor */}
          <div className="project-grid">
            
            <article className="project-card">
              <img src="deniz-araci.jpg" alt="Otonom deniz aracı" />
              <div className="card-content">
                <h3>TEKNOFEST İnsansız Deniz Aracı</h3>
                <p>Otonom Waypoint Takibi ve Engel Kaçınma Sistemi.</p>
                <ul className="skill-tags">
                  <li>YOLO</li>
                  <li>Gazebo</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img src="nlp-proje.jpg" alt="NLP projesi" />
              <div className="card-content">
                <h3>NLP Hackathon - Finalist</h3>
                <p>LLM Fine-Tuning ile Küfür ve Varlık Tanıma (NER).</p>
                <ul className="skill-tags">
                  <li>Transformers</li>
                  <li>Python</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img src="hss.png" alt="Hava Savunma Sistemi" />
              <div className="card-content">
                <h3>Hava Savunma Sistemleri</h3>
                <p>YOLO ile Dost-Düşman tespiti ve ByteTrack ile nesne takibi.</p>
                <ul className="skill-tags">
                  <li>Object Tracking</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img src="evcs-security.jpg" alt="Güvenlik diyagramı" />
              <div className="card-content">
                <h3>EVCS Güvenlik Analizi</h3>
                <p>Random Forest modeli eğiterek siber saldırı tespiti.</p>
                <ul className="skill-tags">
                  <li>Scikit-learn</li>
                </ul>
              </div>
            </article>

          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required>
                  <option value="">-- Seçiniz --</option>
                  <option value="staj">Staj ve İş Teklifleri</option>
                  <option value="soru">Soru</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={30}></textarea>
              </div>
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 BusraErdem. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App