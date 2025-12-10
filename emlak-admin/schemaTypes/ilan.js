// schemaTypes/ilan.js

export default {
  name: 'ilan',
  title: 'İlanlar', // Panelin solunda görünecek isim
  type: 'document',
  fields: [
    {
      name: 'baslik',
      title: 'İlan Başlığı',
      type: 'string',
      validation: rule => rule.required() // Boş geçilemesin
    },
    {
      name: 'slug',
      title: 'Link Yapısı (Slug)',
      type: 'slug',
      options: {
        source: 'baslik', // Başlıktan otomatik oluştur (örn: satilik-daire)
        maxLength: 200,
      },
      validation: rule => rule.required()
    },
    {
      name: 'fiyat',
      title: 'Fiyat (TL)',
      type: 'number',
    },
    {
      name: 'resim',
      title: 'Ana Resim',
      type: 'image',
      options: {
        hotspot: true, // Resmi kırpabilmek için
      },
    },
    {
      name: 'galeri',
      title: 'Diğer Resimler',
      type: 'array',
      of: [{type: 'image'}] // Birden fazla resim eklemek için
    },
    {
      name: 'aciklama',
      title: 'İlan Açıklaması',
      type: 'text' // Uzun yazılar için
    }
  ],
}