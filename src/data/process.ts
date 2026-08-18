/**
 * Servis süreci adımları.
 *
 * NOT: Bu akış resmi bir işletme prosedürü olarak sunulmamaktadır;
 * ziyaretçiye süreci anlatmak için hazırlanmış genel bir bilgilendirmedir.
 */

export interface ProcessStep {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'İletişime Geçin',
    description: 'Telefon veya WhatsApp üzerinden bize ulaşın.',
  },
  {
    title: 'Aracınızı Tanımlayın',
    description: 'Aracınızı ve yaşadığınız sorunu kısaca anlatın.',
  },
  {
    title: 'Servis Planlaması',
    description: 'Size uygun zamanı birlikte planlayalım.',
  },
  {
    title: 'İşlem & Bilgilendirme',
    description: 'Süreç boyunca sizi bilgilendirelim.',
  },
  {
    title: 'Aracınızı Teslim Alın',
    description: 'Aracınızı teslim alın, yola güvenle devam edin.',
  },
]
