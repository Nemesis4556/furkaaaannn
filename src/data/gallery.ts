/**
 * Galeri görselleri.
 *
 * NOT: Mevcut görseller temsili placeholder görsellerdir.
 * İşletmenin gerçek fotoğrafları teslim edildiğinde bu listeden değiştirilmelidir.
 * Admin paneli eklendiğinde galeri yönetimi bu katman üzerinden yapılabilir.
 */

export interface GalleryItem {
  src: string
  alt: string
  caption: string
  /** Masonry görünümde dikey vurgu için */
  tall?: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/gal-1.jpg',
    alt: 'Loş ışıklı garajda klasik araç (temsili görsel)',
    caption: 'Servis Ortamı',
  },
  {
    src: '/images/gal-2.jpg',
    alt: 'Lift üzerinde siyah aracın far detayı (temsili görsel)',
    caption: 'Araç Detayı',
    tall: true,
  },
  {
    src: '/images/gal-3.jpg',
    alt: 'Lastik değişim makinesinde çalışan servis çalışanı (temsili görsel)',
    caption: 'Detay İşçilik',
    tall: true,
  },
  {
    src: '/images/svc-motor.jpg',
    alt: 'Motor kaputu altında çalışan servis çalışanı (temsili görsel)',
    caption: 'Mekanik Çalışma',
  },
  {
    src: '/images/gal-4.jpg',
    alt: 'Siyah beyaz turbo motor detayı (temsili görsel)',
    caption: 'Motor Detayı',
  },
  {
    src: '/images/svc-fren.jpg',
    alt: 'Fren diski ve kaliperi detay görüntüsü (temsili görsel)',
    caption: 'Fren Sistemi',
  },
]
