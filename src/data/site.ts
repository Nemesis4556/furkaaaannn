/**
 * Merkezi işletme verisi.
 * Admin paneli eklendiğinde bu dosya bir API/CMS katmanına taşınabilir.
 */

export const site = {
  name: 'FURKAN OTO',
  tagline: 'ÖZEL SERVİS',
  fullName: 'Furkan Oto Özel Servis',
  domain: 'furkanoto.tr',
  city: 'Akhisar / Manisa',
  address: 'Kethüda Mahallesi, 374. Sokak No:60/A, 45200 Akhisar / Manisa',
  phoneDisplay: '0534 316 34 12',
  phoneHref: 'tel:+905343163412',
  whatsappNumber: '905343163412',
  whatsappMessage:
    'Merhaba, Furkan Oto Özel Servis hakkında bilgi almak ve servis/randevu oluşturmak istiyorum.',
  rating: 5.0,
  reviewCount: 34,
  /**
   * Google Maps yol tarifi bağlantısı.
   * İşletmenin doğrulanmış Google Maps konum linki ile değiştirilmelidir.
   */
  googleMapsQuery: 'Furkan Oto Özel Servis, Kethüda Mahallesi 374. Sokak No:60/A, Akhisar, Manisa',
} as const

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.googleMapsQuery,
)}`

export const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
] as const
