import Button from '../components/Button';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="p-8 space-y-10 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <h1 className="text-3xl font-bold dark:text-white border-b pb-4">LAB-4 UI Kit Sayfası</h1>

      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold dark:text-pink-300 italic text-primary">1. Button Varyantları</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      {/* Alert Section */}
      <section className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-semibold dark:text-pink-300 italic text-primary">2. Alert Varyantları</h2>
        <Alert variant="info" title="Bilgi">Sistem güncellendi.</Alert>
        <Alert variant="success" title="Başarılı">Dosya yüklendi.</Alert>
        <Alert variant="warning" title="Uyarı">Oturum kapanıyor.</Alert>
        <Alert variant="error" title="Hata">Bağlantı kesildi!</Alert>
      </section>
    </div>
  );
}
