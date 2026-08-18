/**
 * Hizmet kategorileri.
 *
 * NOT: Bu kategoriler örnek yapıdadır — işletme tarafından doğrulanacaktır.
 * Teslim öncesi gerçek hizmet listesi ile güncellenmelidir.
 * Admin paneli eklendiğinde ekleme/düzenleme/silme bu katman üzerinden yönetilebilir.
 */

export interface Service {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'periyodik-bakim',
    title: 'Periyodik Bakım',
    description:
      'Aracınızın düzenli bakım kontrolleri ve bakım işlemleri için bizimle iletişime geçin.',
    image: '/images/svc-bakim.jpg',
    imageAlt: 'Motora yağ dolduran servis çalışanı (temsili görsel)',
  },
  {
    id: 'motor-mekanik',
    title: 'Motor & Mekanik',
    description:
      'Motor ve mekanik aksamla ilgili sorunlarınız için servisimizle görüşebilirsiniz.',
    image: '/images/svc-motor.jpg',
    imageAlt: 'El feneriyle motoru inceleyen servis çalışanı (temsili görsel)',
  },
  {
    id: 'fren-sistemi',
    title: 'Fren Sistemi',
    description:
      'Fren sistemi kontrol ve bakım ihtiyaçlarınız için bize ulaşın.',
    image: '/images/svc-fren.jpg',
    imageAlt: 'Fren diski değişimi yapan servis çalışanı (temsili görsel)',
  },
  {
    id: 'ariza-tespiti',
    title: 'Arıza Tespiti',
    description:
      'Aracınızdaki arızanın tespiti için servisimizle iletişime geçebilirsiniz.',
    image: '/images/svc-ariza.jpg',
    imageAlt: 'Lifte kaldırılmış araç başında diagnostik tableti kullanan servis çalışanı (temsili görsel)',
  },
  {
    id: 'elektrik-elektronik',
    title: 'Elektrik & Elektronik',
    description:
      'Elektrik ve elektronik sistem sorunları için bilgi alabilirsiniz.',
    image: '/images/svc-elektrik.jpg',
    imageAlt: 'Araç elektrik tesisatını ölçüm cihazıyla kontrol eden servis çalışanı (temsili görsel)',
  },
  {
    id: 'klima-sogutma',
    title: 'Klima & Soğutma',
    description:
      'Klima ve soğutma sistemi bakım ihtiyaçlarınız için bize danışın.',
    image: '/images/svc-klima.jpg',
    imageAlt: 'Klima servis manifoldu ile çalışan servis çalışanı (temsili görsel)',
  },
]
