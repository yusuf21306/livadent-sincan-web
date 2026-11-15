/**
 * Özel Livadent Ağız ve Diş Sağlığı Poliklinikleri (Sincan & Kahramankazan)
 * Kurumsal Bilgiler, Hekim Kadrosu, Tıbbi Bilgilendirme Rehberi ve Etkileşim Yönetimi
 * Son Güncelleme Tarihi: 15.11.2026
 * İnternet Sitesi Editörü: Dt. Tuğçe Nur Kulen Çakmak (dentliva@gmail.com)
 */

const CLINIC_CONFIG = {
  brandName: "Özel Livadent Ağız ve Diş Sağlığı Poliklinikleri",
  responsibleManager: "Dt. Tuğçe Nur Kulen Çakmak",
  webEditor: "Dt. Tuğçe Nur Kulen Çakmak",
  email: "dentliva@gmail.com",
  lastUpdated: "15.11.2026",
  supervisingAuthority: "T.C. Sağlık Bakanlığı / Ankara İl Sağlık Müdürlüğü",
  professionalChamber: "Türk Dişhekimleri Birliği (TDB) / Ankara Dişhekimleri Odası (ADO)",
  branches: {
    sincan: {
      key: "sincan",
      shortName: "Sincan Şubesi",
      officialName: "Özel Livadent Sincan Ağız ve Diş Sağlığı Polikliniği",
      tradeName: "Kulen Ağız ve Diş Sağlığı Hizmetleri Ticaret Limited Şirketi",
      address: "Gökçek Mahallesi, 352. Sokak No:1/2 (Törekent / GOP Metro Durağı Yakını), 06930 Sincan / Ankara",
      phoneDisplay: "+90 545 339 32 86",
      phoneHref: "+905453393286",
      whatsappNumber: "905453393286",
      hours: "Pazartesi – Cumartesi: 09:00 – 22:00 (Pazar Kapalı)"
    },
    kazan: {
      key: "kazan",
      shortName: "Kahramankazan Şubesi",
      officialName: "Özel Livadent Kahramankazan Ağız ve Diş Sağlığı Polikliniği",
      address: "Satıkadın Mahallesi, Mimar Sinan Caddesi, Söylemez Apartmanı No:2/B9, 06980 Kahramankazan / Ankara",
      phoneDisplay: "+90 542 101 87 86",
      phoneHref: "+905421018786",
      whatsappNumber: "905421018786",
      hours: "Pazartesi – Cumartesi: 09:00 – 19:00 (Pazar Kapalı)"
    }
  }
};

/**
 * Hekim Kadrosu Verisi (Sincan Şubesi & Kahramankazan Şubesi)
 * NOT: Yeni hekim isimleri ve mezuniyet bilgileri eklendiğinde ilgili satırları
 * güncellemeniz yeterlidir. 1219 sayılı Kanun gereği yalnızca tescilli resmi unvan
 * ("Dt." / Diş Hekimi) kullanılmaktadır.
 */
const DOCTORS_DATA = [
  {
    id: "sincan-1",
    branch: "sincan",
    branchLabel: "Sincan Şubesi",
    initials: "TK",
    roleBadge: "Kurucu & Mesul Müdür",
    name: "Dt. Tuğçe Nur Kulen Çakmak",
    title: "Kurucu Diş Hekimi & Editör",
    university: "Diş Hekimliği Fakültesi Mezunu (Bilgi güncellenecektir)",
    scope: "Genel Diş Hekimliği, Oral Diagnoz, Koruyucu ve Restoratif Uygulamalar, Endodonti, Protetik Tedaviler",
    hours: "Pzt – Cmt: 09:00 – 22:00 aralığında planlı hasta kabulü"
  },
  {
    id: "sincan-2",
    branch: "sincan",
    branchLabel: "Sincan Şubesi",
    initials: "SÇ",
    roleBadge: "Kurucu Hekim",
    name: "Dt. Sinan Can Çakmak",
    title: "Kurucu Diş Hekimi",
    university: "Diş Hekimliği Fakültesi Mezunu",
    scope: "Genel Diş Hekimliği, Restoratif Dolgu, Endodonti, Protetik ve Cerrahi Uygulamalar",
    hours: "Pzt – Cmt: 09:00 – 22:00 aralığında planlı hasta kabulü",
    onlineUrl: "https://www.doktorsitesi.com/sinan-can-cakmak/dis-hekimi/ankara"
  },
  {
    id: "sincan-3",
    branch: "sincan",
    branchLabel: "Sincan Şubesi",
    initials: "DH",
    roleBadge: "Sincan Kadrosu",
    name: "Dt. [Sincan 3. Hekim Adı Soyadı]",
    title: "Diş Hekimi",
    university: "Diş Hekimliği Fakültesi Mezunu (Kadro bilgisi eklenecektir)",
    scope: "Genel Diş Hekimliği, Cerrahi Diş Çekimi, Protetik Uygulamalar ve Koruyucu Bakım",
    hours: "Pzt – Cmt: 09:00 – 22:00 aralığında planlı hasta kabulü"
  },
  {
    id: "kazan-1",
    branch: "kazan",
    branchLabel: "Kahramankazan Şubesi",
    initials: "DH",
    roleBadge: "Kahramankazan Kadrosu",
    name: "Dt. [Kahramankazan 1. Hekim Adı Soyadı]",
    title: "Diş Hekimi",
    university: "Diş Hekimliği Fakültesi Mezunu (Kadro bilgisi eklenecektir)",
    scope: "Genel Diş Hekimliği, Oral Diagnoz, Restoratif Dolgu, Kanal Tedavisi ve Diş Eti Bakımı",
    hours: "Pzt – Cmt: 09:00 – 19:00 aralığında planlı hasta kabulü"
  },
  {
    id: "kazan-2",
    branch: "kazan",
    branchLabel: "Kahramankazan Şubesi",
    initials: "DH",
    roleBadge: "Kahramankazan Kadrosu",
    name: "Dt. [Kahramankazan 2. Hekim Adı Soyadı]",
    title: "Diş Hekimi",
    university: "Diş Hekimliği Fakültesi Mezunu (Kadro bilgisi eklenecektir)",
    scope: "Genel Diş Hekimliği, Çocuk Ağız Sağlığı Uygulamaları, Protetik ve Cerrahi İşlemler",
    hours: "Pzt – Cmt: 09:00 – 19:00 aralığında planlı hasta kabulü"
  }
];

/**
 * Tedavi Konularına Özel Doğrulanmış Görsel Kaynakları (Klinik Fotoğrafı Değil)
 */
const TREATMENT_IMAGES = {
  oralDiagnoz: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  dentalImplant: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1000&q=80",
  cokluImplant: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
  kanalTedavisi: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1000&q=80",
  zirkonyumKuron: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=80",
  hareketliProtez: "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?auto=format&fit=crop&w=1000&q=80",
  disEtiTedavisi: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
  disTasiTemizligi: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1000&q=80",
  restoratifDolgu: "https://images.unsplash.com/photo-1606811951341-756fdd437682?auto=format&fit=crop&w=1000&q=80",
  cocukPedodonti: "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?auto=format&fit=crop&w=1000&q=80",
  fissurFlorur: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80",
  ortodontiCerrahi: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
};

/**
 * Sağlığı Koruyucu Tıbbi Bilgilendirme Başlıkları
 */
const TREATMENTS_DATA = [
  {
    id: "oral-diagnoz",
    category: "genel-kanal",
    categoryLabel: "Genel & Tanı",
    image: TREATMENT_IMAGES.oralDiagnoz,
    title: "Oral Diagnoz ve Tanısal Radyoloji (İlk Muayene)",
    summary: "Ağız içi dokuların, dişlerin ve çene kemiklerinin klinik muayene ve radyografik görüntüleme ile değerlendirilmesi sürecidir.",
    overview:
      "Oral diagnoz, ağız ve diş sağlığı sorunlarının erken dönemde tespit edilebilmesi amacıyla yapılan ayrıntılı ilk muayene aşamasıdır. Klinik gözleme ek olarak periapikal veya panoramik radyografik görüntülemeler ile diş kökleri, çene kemiği yapısı ve komşu anatomik oluşumlar incelenir.",
    indications: [
      "Altı aylık periyodik koruyucu ağız ve diş sağlığı kontrollerinde",
      "Ağrı, hassasiyet veya şişlik şikayetlerinin kaynağının araştırılmasında",
      "Gömülü dişlerin ve çene kemiğindeki değişimlerin saptanmasında"
    ],
    process: [
      "Genel sağlık öyküsü, kronik hastalıklar ve kullanılan ilaçların kayıt altına alınması",
      "Diş, diş eti ve ağız mukozasının klinik muayenesi",
      "Gerekli görülen durumlarda tanısal radyografik görüntüleme alınması ve planlama paylaşımı"
    ],
    aftercare: [
      "Yılda iki kez düzenli kontrol muayenesi önerilir.",
      "Gebelik veya gebelik şüphesi radyografi öncesinde mutlaka hekime bildirilmelidir."
    ]
  },
  {
    id: "dental-implant",
    category: "implant-cerrahi",
    categoryLabel: "İmplant & Cerrahi",
    image: TREATMENT_IMAGES.dentalImplant,
    title: "Dental İmplant Uygulamaları Hakkında Bilgilendirme",
    summary: "Eksik dişlerin fonksiyon ve görünümünü desteklemek amacıyla çene kemiğine yerleştirilen biyouyumlu titanyum kök yapılarıdır.",
    overview:
      "Dental implantlar, tekli veya çoklu diş eksikliklerinde komşu dişlere işlem yapılmadan diş kökü görevi görmek üzere çene kemiğine yerleştirilen materyallerdir. İmplant uygulaması; hastanın sistemik sağlık durumu, kemik hacmi ve anatomik sınırları radyografik olarak analiz edildikten sonra planlanır.",
    indications: [
      "Tek diş eksikliğinde komşu sağlıklı dişlerin küçültülmesini önlemek amacıyla",
      "Çoklu diş eksikliklerinde sabit protez planlaması oluşturmak için",
      "Tam dişsizlik olgularında protez tutuculuğunu artırmak amacıyla"
    ],
    process: [
      "Klinik muayene ve radyografik analiz ile kemik yapısının değerlendirilmesi",
      "Lokal anestezi altında steril şartlarda implantın çene kemiğine yerleştirilmesi",
      "Kemik iyileşmesi (osseointegrasyon) tamamlandıktan sonra üst yapı protezinin hazırlanması"
    ],
    aftercare: [
      "Cerrahi işlem sonrası ilk 24 saat sıcak gıdalardan kaçınılmalı ve soğuk kompres uygulanmalıdır.",
      "İmplant çevresi dokuların sağlığı için düzenli arayüz temizliği ve hekim kontrolleri sürdürülmelidir."
    ]
  },
  {
    id: "coklu-tam-implant",
    category: "implant-cerrahi",
    categoryLabel: "İmplant & Cerrahi",
    image: TREATMENT_IMAGES.cokluImplant,
    title: "Çoklu İmplant ve Tam Çene Protez Planlaması",
    summary: "Birden fazla diş kaybı veya tam dişsizlik durumlarında sabit veya destekli protez oluşturmaya yönelik klinik değerlendirme süreçleridir.",
    overview:
      "Birden fazla dişin kaybedildiği durumlarda çiğneme dengesinin yeniden kurulması amacıyla belirli anatomik noktalara birden fazla implant yerleştirilmesi değerlendirilebilir. Çene kemiğinin anatomik yapısına ve kemik hacmine bağlı olarak klasik sabit köprüler ya da dört veya altı implant destekli tam çene sistemleri (All-on-4 / All-on-6 prensipleri) hekim tarafından planlanır.",
    indications: [
      "Arka bölgede destek dişlerin bulunmadığı çoklu diş eksikliklerinde",
      "Hareketli damak protezi kullanımında tutuculuk sorunu yaşayan tam dişsiz olgularda"
    ],
    process: [
      "Panoramik ve gerekli hallerde üç boyutlu tomografik görüntüleme ile kemik analizi",
      "İmplant yerleşim açılarının ve protez kapanış ilişkilerinin planlanması",
      "Biyolojik iyileşme süresinin ardından sabit veya çıkarılabilir üst yapının uygulanması"
    ],
    aftercare: [
      "İmplant destekli protezlerin alt yüzeyleri ağız duşu ve özel arayüz diş ipleriyle temizlenmelidir.",
      "Düzenli periyodik muayeneler ile vida ve doku uyumu kontrol edilmelidir."
    ]
  },
  {
    id: "kanal-tedavisi",
    category: "genel-kanal",
    categoryLabel: "Endodonti",
    image: TREATMENT_IMAGES.kanalTedavisi,
    title: "Endodonti (Kök Kanal Tedavisi Uygulamaları)",
    summary: "Dişin içindeki sinir ve damar dokusunun (pulpa) iltihaplanması durumunda dişin ağızda korunmasına yönelik tedavi yöntemidir.",
    overview:
      "Derin çürükler veya travmalar sonucu dişin canlı dokusunun etkilenmesi ağrı ve enfeksiyona yol açabilir. Kök kanal tedavisi; hasarlı pulpa dokusunun uzaklaştırılması, kök kanallarının mekanik ve kimyasal olarak temizlenip dezenfekte edilmesi ve sızdırmaz kanal dolgu materyalleriyle kapatılması işlemidir.",
    indications: [
      "Sıcak-soğuk uyaranlara karşı uzun süren ağrı ve gece ağrısı durumlarında",
      "Derin çürük nedeniyle pulpa odasının etkilendiği dişlerde",
      "Kök ucunda radyografik olarak görülen iltihabi lezyon varlığında"
    ],
    process: [
      "Radyografi ile kök kanal anatomisinin incelenmesi ve lokal anestezi uygulanması",
      "Çürük dokunun temizlenmesi, kök kanallarının şekillendirilmesi ve antiseptik solüsyonlarla yıkanması",
      "Kanalların sızdırmaz biçimde doldurulması ve üst dolgu/kuron restorasyonunun yapılması"
    ],
    aftercare: [
      "Anestezi geçene kadar yemek yenilmemelidir.",
      "Tedavi sonrası birkaç gün çiğneme basıncıyla hafif hassasiyet hissedilmesi olağandır."
    ]
  },
  {
    id: "zirkonyum-kuron",
    category: "protez-diseti",
    categoryLabel: "Protetik Tedavi",
    image: TREATMENT_IMAGES.zirkonyumKuron,
    title: "Protetik Diş Tedavisi (Zirkonyum ve Porselen Kuronlar)",
    summary: "Madde kaybına uğramış dişlerin korunması veya eksik diş boşluklarının tamamlanması amacıyla uygulanan sabit kaplama ve köprülerdir.",
    overview:
      "Büyük madde kaybı nedeniyle dolgu ile onarılması güçleşen dişler, çiğneme kuvvetlerine karşı kuron (kaplama) uygulamalarıyla korunur. Dişin konumu, komşu dokularla ilişkisi ve kapanış kuvvetleri göz önüne alınarak metal destekli porselen veya biyouyumlu zirkonyum altyapılı seramik restorasyonlar tercih edilebilir.",
    indications: [
      "Geniş çürük veya kırık sonucu madde kaybı bulunan dişlerin korunmasında",
      "Kanal tedavisi sonrası kırılma riskini azaltmak amacıyla",
      "Diş eksikliklerinde sabit köprü veya implant üstü protez hazırlanmasında"
    ],
    process: [
      "Klinik muayene ve oklüzyon analizi sonrası protez planının oluşturulması",
      "Diş hazırlığı ve hassas ölçü alma işlemlerinin tamamlanması",
      "Altyapı ve estetik provalar sonrası sabit restorasyonun yapıştırılması"
    ],
    aftercare: [
      "Kuron ve köprülerin diş eti kenarları diş ipi ve arayüz fırçası ile temizlenmelidir.",
      "Sert kabuklu yiyeceklerin dişle kırılmasından kaçınılmalıdır."
    ]
  },
  {
    id: "hareketli-protez",
    category: "protez-diseti",
    categoryLabel: "Protetik Tedavi",
    image: TREATMENT_IMAGES.hareketliProtez,
    title: "Tam ve Bölümlü Hareketli Protez Uygulamaları",
    summary: "Çok sayıda diş eksikliğinde çiğneme ve konuşma fonksiyonlarını desteklemek üzere hasta tarafından takılıp çıkarılabilen protezlerdir.",
    overview:
      "Sabit protez veya implant planlamasının tercih edilmediği ya da mümkün olmadığı tam veya kısmi dişsizlik durumlarında hareketli protezler değerlendirilir. Hassas tutuculu, kroşeli (bölümlü) veya tam protezler ağız dokularından alınan ölçülere göre kişiye özel hazırlanır.",
    indications: [
      "Ağızda sabit köprü desteği sağlayacak yeterli doğal diş bulunmayan hastalarda",
      "Tam dişsizlik durumunda çiğneme fonksiyonunun kazandırılmasında"
    ],
    process: [
      "Ağız içi yumuşak ve sert dokuların muayenesi ile anatomik ölçülerin alınması",
      "Çene ilişkilerinin ve diş dizim provasının gerçekleştirilmesi",
      "Protez teslimi ve sonrasında vuruk/uyum kontrollerinin yapılması"
    ],
    aftercare: [
      "Hareketli protezler her yemekten sonra fırça ve su ile temizlenmelidir.",
      "Gece uyurken ağız dokularının dinlenmesi adına protezin çıkarılarak temiz kapta saklanması önerilir."
    ]
  },
  {
    id: "dis-eti-tedavisi",
    category: "protez-diseti",
    categoryLabel: "Periodontoloji",
    image: TREATMENT_IMAGES.disEtiTedavisi,
    title: "Periodontoloji (Diş Eti Hastalıkları, Küretaj ve Bakım)",
    summary: "Diş eti kanaması, diş eti iltihabı (gingivitis) ve destek kemik dokusunu etkileyen periodontal hastalıkların değerlendirilmesi ve tedavisidir.",
    overview:
      "Plak ve diş taşı birikimine bağlı gelişen diş eti iltihabı erken dönemde kanama ve şişlik ile belirti verir. İlerleyen durumlarda dişleri tutan kemik dokusunda kayıp meydana gelebilir (periodontitis). Periodontal tedavi kapsamında diş taşı temizliği, derin küretaj (kök yüzeyi düzleştirme) ve gerekli olgularda flep uygulamaları gerçekleştirilir.",
    indications: [
      "Fırçalama sırasında diş eti kanaması ve kızarıklık görülmesi",
      "Diş eti çekilmesi, cep oluşumu ve kalıcı ağız kokusu şikayetleri",
      "Dişlerde sallanma veya aralanma gözlemlenmesi"
    ],
    process: [
      "Diş eti cep ölçümleri ve radyografik kemik seviyesi tespiti",
      "Diş taşlarının uzaklaştırılması ve kök yüzeylerinin pürüzsüzleştirilmesi",
      "Hastaya özel ağız hijyeni eğitimi ve düzenli periodontal takip randevuları"
    ],
    aftercare: [
      "İşlem sonrası birkaç gün soğuk hassasiyeti görülmesi normaldir.",
      "Arayüz fırçası ve diş ipi kullanımı hastalığın tekrarını önlemede temel unsurdur."
    ]
  },
  {
    id: "dis-tasi-temizligi",
    category: "genel-kanal",
    categoryLabel: "Koruyucu Bakım",
    image: TREATMENT_IMAGES.disTasiTemizligi,
    title: "Diş Taşı Temizliği (Detertraj) ve Yüzey Polisajı",
    summary: "Diş yüzeyinde sertleşmiş plak ve tartar birikimlerinin ultrasonik cihazlar ve el aletleriyle uzaklaştırılması işlemidir.",
    overview:
      "Tükürük mineralleri ile sertleşen dental plak zamanla fırçalama ile uzaklaştırılamayan diş taşlarına dönüşür. Diş taşı temizliği (detertraj), diş minesine zarar vermeden titreşimli ultrasonik uçlar yardımıyla tartarların temizlenmesi ve ardından yüzeyin polisaj patıyla pürüzsüzleştirilmesi sürecidir.",
    indications: [
      "Dişlerin diş etine yakın yüzeylerinde sarı-kahverengi sert birikintilerin oluşması",
      "Diş eti iltihabının başlangıç aşamasında kontrol altına alınması",
      "Rutin altı aylık koruyucu ağız sağlığı bakımı kapsamında"
    ],
    process: [
      "Ağız içi muayene ile diş taşı yoğunluğunun belirlenmesi",
      "Ultrasonik cihazla diş taşlarının ve eklentilerin uzaklaştırılması",
      "Döner fırça ve polisaj patı ile yüzey lekelerinin temizlenmesi"
    ],
    aftercare: [
      "Temizlik sonrası ilk 24 saat aşırı sıcak-soğuk veya koyu renkli gıdalardan kaçınılması faydalıdır.",
      "Düzenli fırçalama yeni tartar oluşumunu yavaşlatır."
    ]
  },
  {
    id: "restoratif-dolgu",
    category: "genel-kanal",
    categoryLabel: "Restoratif",
    image: TREATMENT_IMAGES.restoratifDolgu,
    title: "Restoratif Diş Dolgusu Uygulamaları",
    summary: "Çürük dokuların temizlenmesinin ardından dişin anatomik formunu ve çiğneme fonksiyonunu geri kazandıran dolgu işlemleridir.",
    overview:
      "Diş çürüğü minesel veya dentin düzeyinde iken erken müdahale edildiğinde canlı sinir dokusu korunarak diş restore edilebilir. Çürük temizlendikten sonra diş rengiyle uyumlu kompozit rezin dolgular katmanlar halinde uygulanıp ışıkla sertleştirilir.",
    indications: [
      "Başlangıç ve orta derinlikteki diş çürükleri",
      "Kenar sızıntısı oluşan veya kırılmış eski dolguların yenilenmesi",
      "Küçük mine kırıkları ve aşınmaların onarılması"
    ],
    process: [
      "Klinik ve radyografik muayene sonrası çürüğün temizlenmesi",
      "Diş yüzeyinin adeziv sistemlerle hazırlanması ve kompozit dolgu yerleştirilmesi",
      "Kapanış yüksekliği kontrolü ve yüzey cilalama işlemi"
    ],
    aftercare: [
      "Anestezi uygulanmışsa uyuşukluk tamamen geçene kadar yemek yenilmemelidir.",
      "Derin dolgularda birkaç gün hafif soğuk hassasiyeti görülebilir."
    ]
  },
  {
    id: "cocuk-pedodonti",
    category: "cocuk-ortodonti",
    categoryLabel: "Pedodonti",
    image: TREATMENT_IMAGES.cocukPedodonti,
    title: "Çocuk Ağız ve Diş Sağlığı (Süt Dişi Tedavileri)",
    summary: "Çocukluk çağında süt dişlerinin ve yeni süren daimi dişlerin çürükten korunması ile tedavisini kapsayan uygulamalardır.",
    overview:
      "Süt dişlerinin erken kaybedilmesi, alttan gelecek daimi dişlerin yer darlığı yaşamasına ve çene gelişiminde bozulmalara zemin hazırlayabilir. Pedodontik yaklaşımda çocukların klinik ortama güvenle alışması, süt dişi dolguları, gerektiğinde süt dişi çekimi sonrası yer tutucu planlaması ve koruyucu uygulamalar ön planda tutulur.",
    indications: [
      "İlk süt dişinin sürmesinden itibaren başlayan düzenli gelişim kontrolleri",
      "Süt dişlerinde görülen çürük ve ağrı şikayetleri",
      "Erken diş kayıplarında daimi diş yerinin korunması"
    ],
    process: [
      "Çocuğun yaşına uygun iletişimle korku oluşturmadan muayene yapılması",
      "Süt dişlerinin durumuna göre dolgu, amputasyon/kanal veya yer tutucu değerlendirmesi",
      "Ebeveynlere beslenme ve fırçalama alışkanlığı konusunda rehberlik edilmesi"
    ],
    aftercare: [
      "Okul öncesi dönemde diş fırçalama işlemi ebeveyn gözetiminde ve desteğinde yapılmalıdır.",
      "Altı aylık kontroller ile daimi dişlerin sürme sırası takip edilmelidir."
    ]
  },
  {
    id: "fissur-florur",
    category: "cocuk-ortodonti",
    categoryLabel: "Koruyucu Uygulama",
    image: TREATMENT_IMAGES.fissurFlorur,
    title: "Fissür Örtücü ve Topikal Florür Uygulamaları",
    summary: "Çürük riski yüksek çocuklarda ve yeni süren azı dişlerinde mineyi güçlendirmeye ve olukları korumaya yönelik aşındırma gerektirmeyen koruyucu işlemlerdir.",
    overview:
      "6 yaş civarında süren birinci büyük azı dişlerinin çiğneme yüzeylerindeki derin girinti ve oluklar (fissürler), fırça kıllarının tam ulaşamaması nedeniyle çürümeye yatkındır. Fissür örtücü uygulamasıyla bu oluklar koruyucu akışkan bir tabaka ile kapatılır. Topikal florür vernikleri ise mine yapısının asit ataklarına karşı direncini destekler.",
    indications: [
      "Yeni sürmüş çürüksüz daimi büyük ve küçük azı dişleri",
      "Çürük riski yüksek olan çocuk ve ergen hastalar"
    ],
    process: [
      "Diş yüzeyinin temizlenmesi ve izole edilmesi",
      "Aşındırma olmadan fissür örtücü materyalin oluklara uygulanıp ışıkla sertleştirilmesi",
      "Hekimin uygun gördüğü aralıklarla florür verniği uygulanması"
    ],
    aftercare: [
      "Florür uygulaması sonrasında hekimin belirttiği süre (genellikle 1–2 saat) yemek yenilmemesi önerilir.",
      "Fissür örtücüler altı aylık kontrollerde gözden geçirilir."
    ]
  },
  {
    id: "ortodonti-cerrahi",
    category: "cocuk-ortodonti",
    categoryLabel: "Ortodonti & Cerrahi",
    image: TREATMENT_IMAGES.ortodontiCerrahi,
    title: "Ortodontik Değerlendirme ve Gömülü 20 Yaş Dişi Çekimleri",
    summary: "Diş ve çene kapanış düzensizliklerinin (tel / şeffaf plak) değerlendirilmesi ile gömülü dişlerin cerrahi olarak alınması süreçleridir.",
    overview:
      "Dişlerdeki çapraşıklık ve çeneler arası kapanış bozuklukları sabit braket sistemleri veya hekim değerlendirmesine göre şeffaf plak (aligner) yöntemleriyle ele alınabilir; gerekli durumlarda ilgili dal konsültasyonu planlanır. Ayrıca çene kemiğinde yer darlığı nedeniyle süremeyen ve komşu dişe baskı yapan gömülü 20 yaş dişlerinin cerrahi çekimi panoramik röntgen incelemesi sonrasında gerçekleştirilir.",
    indications: [
      "Dişlerde çapraşıklık, aralanma veya kapanış uyumsuzluğu bulunması",
      "Tekrarlayan ağrı, şişlik veya enfeksiyona neden olan yarı ya da tam gömülü yirmi yaş dişleri",
      "Ortodontik planlama gereği yer kazanılması gereken olgular"
    ],
    process: [
      "Klinik muayene ve panoramik radyografi ile diş köklerinin ve sinir kanallarının incelenmesi",
      "Gömülü diş çekimlerinde lokal anestezi altında steril cerrahi işlem uygulanması",
      "Ortodontik değerlendirmelerde dijital/fiziki ölçü ve uygun tedavi planının belirlenmesi"
    ],
    aftercare: [
      "Cerrahi çekim sonrasında ilk 24 saat tükürmeme, sıcak tüketmeme ve soğuk uygulama kurallarına uyulmalıdır.",
      "Ortodontik aparey ve braket kullanan hastalarda ara yüz temizliği aksatılmamalıdır."
    ]
  }
];

/**
 * Sıkça Sorulan Tıbbi ve Kurumsal Sorular
 */
const FAQ_DATA = [
  {
    question: "Sincan ve Kahramankazan şubelerinizin çalışma saatleri nelerdir?",
    answer:
      "Özel Livadent Sincan Şubemiz Pazartesi–Cumartesi günleri 09:00–22:00 saatleri arasında; Kahramankazan Şubemiz ise Pazartesi–Cumartesi günleri 09:00–19:00 saatleri arasında hizmet vermektedir. Şubelerimiz Pazar günleri kapalıdır."
  },
  {
    question: "Rutin ağız ve diş sağlığı kontrolü hangi sıklıkla yapılmalıdır?",
    answer:
      "Herhangi bir ağrı veya şikayet bulunmasa dahi genel diş hekimliği yaklaşımında her 6 ayda bir düzenli klinik kontrol önerilmektedir. Erken dönemde saptanan başlangıç çürükleri ve diş eti sorunları daha koruyucu yaklaşımlarla yönetilebilir."
  },
  {
    question: "Diş taşı temizliği (detertraj) diş minesine zarar verir mi?",
    answer:
      "Uygun teknik ve ultrasonik uçlar kullanılarak diş hekimi tarafından yapılan diş taşı temizliği diş minesine zarar vermez. İşlem, diş yüzeyine yapışmış tartar birikimlerinin uzaklaştırılmasını amaçlar; işlem sonrası birkaç gün sürebilen hafif soğuk hassasiyeti geçicidir."
  },
  {
    question: "Online formdan gönderdiğim randevu talebi polikliniğe nasıl ulaşır?",
    answer:
      "KVKK Aydınlatma Metni ve Açık Rıza onayını verdikten sonra formu gönderdiğinizde; bilgileriniz sunucuda depolanmadan seçtiğiniz şubenin resmi WhatsApp hattına (Sincan: 0545 339 32 86 / Kahramankazan: 0542 101 87 86) veya dentliva@gmail.com adresine hazır mesaj şablonu olarak yönlendirilir. Poliklinik ekibimiz sizinle iletişime geçerek randevunuzu teyit eder."
  },
  {
    question: "Çocuklarda ilk diş hekimi muayenesi ve koruyucu uygulamalar ne zaman başlamalıdır?",
    answer:
      "İlk süt dişinin sürmesini takiben veya en geç 1 yaş civarında ilk koruyucu kontrol önerilir. 6 yaş civarında süren daimi azı dişleri için fissür örtücü ve hekim değerlendirmesine göre topikal florür uygulamaları koruyucu sağlık kapsamında planlanabilir."
  },
  {
    question: "Web sitenizde neden tedavi ücretleri, hasta yorumları veya öncesi-sonrası fotoğraflar yer almıyor?",
    answer:
      "Polikliniklerimiz 12 Kasım 2025 tarihli Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik ve TDB mevzuatına tam uyum sağlamaktadır. İlgili mevzuat gereğince sağlık kuruluşlarının web sitelerinde ücret, promosyon, hasta memnuniyet yorumları ve talep oluşturmaya yönelik mukayeseli görsellere yer verilmesi yasaktır."
  }
];

/**
 * Zorunlu Yasal Metinler ve Çift Şubeli Kurumsal Künye
 */
const LEGAL_DOCS = {
  kunye: {
    meta: "Kurumsal Bilgiler & 12 Kasım 2025 Yönetmeliği Uyumu",
    title: "Kurumsal Künye ve Ruhsat Bilgileri",
    body: `
      <h4>1. Ruhsatlı Poliklinik Şubeleri ve Ticari Unvan Bilgisi</h4>
      <ul>
        <li><strong>${CLINIC_CONFIG.branches.sincan.officialName}</strong><br>
        İşleten Ticari Unvan: <strong>${CLINIC_CONFIG.branches.sincan.tradeName}</strong><br>
        Adres: ${CLINIC_CONFIG.branches.sincan.address}<br>
        Tel: <a href="tel:${CLINIC_CONFIG.branches.sincan.phoneHref}">${CLINIC_CONFIG.branches.sincan.phoneDisplay}</a> | Çalışma Saatleri: ${CLINIC_CONFIG.branches.sincan.hours}</li>
        <li><strong>${CLINIC_CONFIG.branches.kazan.officialName}</strong><br>
        Adres: ${CLINIC_CONFIG.branches.kazan.address}<br>
        Tel: <a href="tel:${CLINIC_CONFIG.branches.kazan.phoneHref}">${CLINIC_CONFIG.branches.kazan.phoneDisplay}</a> | Çalışma Saatleri: ${CLINIC_CONFIG.branches.kazan.hours}</li>
      </ul>

      <h4>2. Mesul Müdür ve İnternet Sitesi Editörü</h4>
      <p><strong>Mesul Müdür:</strong> ${CLINIC_CONFIG.responsibleManager}<br>
      <strong>İnternet Sitesi Editörü / Sorumlu Hekim:</strong> ${CLINIC_CONFIG.webEditor}<br>
      <strong>Editör E-posta &amp; İletişim:</strong> <a href="mailto:${CLINIC_CONFIG.email}">${CLINIC_CONFIG.email}</a> | <a href="tel:${CLINIC_CONFIG.branches.sincan.phoneHref}">${CLINIC_CONFIG.branches.sincan.phoneDisplay}</a></p>

      <h4>3. Denetleyici İdari Kurum ve Meslek Örgütü</h4>
      <ul>
        <li><strong>Denetleyici Kurum:</strong> ${CLINIC_CONFIG.supervisingAuthority}</li>
        <li><strong>Bağlı Olunan Meslek Örgütü:</strong> ${CLINIC_CONFIG.professionalChamber}</li>
        <li><strong>Mevzuat Dayanağı:</strong> 1219 sayılı Kanun, 3359 sayılı Sağlık Hizmetleri Temel Kanunu, Ağız ve Diş Sağlığı Hizmeti Sunulan Özel Sağlık Kuruluşları Hakkında Yönetmelik ve 12 Kasım 2025 tarihli (33075 sayılı R.G.) Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik.</li>
      </ul>

      <h4>4. İçerik Güncellik Beyanı</h4>
      <p>Web sitesinde yer alan tüm tıbbi bilgilendirme içerikleri düzenli olarak kontrol edilmektedir. <strong>Son Güncelleme Tarihi: ${CLINIC_CONFIG.lastUpdated}</strong></p>
    `
  },
  kvkk: {
    meta: "6698 Sayılı Kişisel Verilerin Korunması Kanunu",
    title: "KVKK Aydınlatma Metni",
    body: `
      <h4>1. Veri Sorumlusunun Kimliği</h4>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verileriniz ve özel nitelikli kişisel sağlık verileriniz; başvuru yaptığınız şubeye göre <strong>${CLINIC_CONFIG.branches.sincan.officialName}</strong> (Ticari Unvan: <strong>${CLINIC_CONFIG.branches.sincan.tradeName}</strong>) veya <strong>${CLINIC_CONFIG.branches.kazan.officialName}</strong> tarafından veri sorumlusu sıfatıyla aşağıda açıklanan kapsamda işlenmektedir.</p>

      <h4>2. İşlenen Kişisel Veriler</h4>
      <p>Randevu veya bilgi talep formunu kullanmanız halinde; ad-soyad, telefon numarası, tercih edilen şube/saat bilgisi ile gönüllü olarak ilettiğiniz ağız ve diş sağlığı şikayeti/konu bilginiz (KVKK Madde 6 kapsamında özel nitelikli kişisel veri) işlenmektedir.</p>

      <h4>3. İşleme Amaçları ve Hukuki Sebepler</h4>
      <ul>
        <li>Ağız ve diş sağlığı muayene, teşhis ve tedavi süreçlerinin planlanması (KVKK m. 6/3),</li>
        <li>Randevu ve bilgi taleplerinize seçtiğiniz şubenin telefon/WhatsApp hattı veya kurumsal e-posta üzerinden dönüş yapılması (KVKK m. 5/1 ve m. 6/2 açık rıza şartı),</li>
        <li>Sağlık mevzuatı uyarınca yetkili kamu kurumlarına karşı yasal yükümlülüklerin yerine getirilmesi (KVKK m. 5/2-ç).</li>
      </ul>

      <h4>4. Veri Güvenliği ve Haklarınız (Madde 11)</h4>
      <p>Web sitemiz üzerindeki form bilgileri sunucu veritabanında saklanmamakta, yalnızca sizin onayınızla seçtiğiniz şubenin resmi iletişim kanalına yönlendirilmektedir. KVKK Madde 11 kapsamındaki taleplerinizi yazılı olarak şube adreslerimize veya <strong><a href="mailto:${CLINIC_CONFIG.email}">${CLINIC_CONFIG.email}</a></strong> adresine iletebilirsiniz.</p>
    `
  },
  "acik-riza": {
    meta: "KVKK Madde 5 ve Madde 6 Uyarınca",
    title: "İletişim ve Randevu Talebi Açık Rıza Metni",
    body: `
      <p>Başvurduğum poliklinik birimi (<strong>${CLINIC_CONFIG.branches.sincan.officialName}</strong> — ${CLINIC_CONFIG.branches.sincan.tradeName} veya <strong>${CLINIC_CONFIG.branches.kazan.officialName}</strong>) tarafından sunulan KVKK Aydınlatma Metni’ni okudum ve anladım.</p>
      <p>Web sitesindeki formda paylaştığım ad-soyad, telefon numarası, seçtiğim şube, tercih edilen zaman ve varsa ağız sağlığı konuma ilişkin bilgilerin; yalnızca tarafıma randevu ve bilgilendirme dönüşü yapılması amacıyla işlenmesine ve seçtiğim şube iletişim kanalı (WhatsApp / e-posta / telefon) üzerinden iletişime geçilmesine <strong>özgür irademle açık rıza veriyorum</strong>.</p>
      <p>Açık rızamı dilediğim zaman <a href="mailto:${CLINIC_CONFIG.email}">${CLINIC_CONFIG.email}</a> adresine bildirerek geri çekebileceğimi biliyorum.</p>
    `
  },
  cerez: {
    meta: "Gizlilik ve Çerez Yönetimi",
    title: "Çerez (Cookie) ve Gizlilik Politikası",
    body: `
      <h4>1. Sitemizde Kullanılan Yerel Depolama</h4>
      <p>Bu internet sitesi yalnızca çerez bilgilendirme onayınızı hatırlamak amacıyla tarayıcınızın <code>localStorage</code> alanını kullanır. Üçüncü taraf reklam, yeniden pazarlama veya davranışsal izleme çerezi kullanılmamaktadır.</p>
      <h4>2. Tercihlerin Yönetimi</h4>
      <p>Tarayıcı ayarlarınızdan çerezleri ve site verilerini dilediğiniz zaman temizleyebilirsiniz. İletişim: <a href="mailto:${CLINIC_CONFIG.email}">${CLINIC_CONFIG.email}</a></p>
    `
  }
};

/* ==========================================================================
   Başlatma ve DOM Etkileşimleri
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initStickyHeader();
  initSideDrawer();
  initHeroSlider();
  initCinematicAccordion();
  renderDoctors("tumu");
  initDoctorFilters();
  renderTreatments("tumu");
  initTreatmentFilters();
  renderFaq();
  initModals();
  initMobileNav();
  initBranchSelectors();
  initAppointmentForm();
  initCookieBanner();
});

/* DentMec Tarzı Açılış Preloader Animasyonu + Hero Giriş Tetikleyici */
function triggerHeroEntrance() {
  const els = [
    document.getElementById("dynamic-tag"),
    document.getElementById("dynamic-title"),
    document.getElementById("dynamic-desc"),
    document.querySelector(".slide-btn"),
    document.querySelector(".hero-form-modern")
  ];
  els.forEach((el) => {
    if (el) el.classList.add("text-visible");
  });
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const skipBtn = document.getElementById("preloaderClose");

  const hidePreloader = () => {
    if (preloader && !preloader.classList.contains("is-hidden")) {
      preloader.classList.add("is-hidden");
    }
    setTimeout(triggerHeroEntrance, 120);
  };

  if (skipBtn) {
    skipBtn.addEventListener("click", hidePreloader);
  }

  if (document.readyState === "complete") {
    setTimeout(hidePreloader, 750);
  } else {
    window.addEventListener("load", () => {
      setTimeout(hidePreloader, 750);
    });
    setTimeout(hidePreloader, 2200);
  }
}

/* Sticky Header Scroll Transition */
function initStickyHeader() {
  const stickyEl = document.getElementById("stickyHeader");
  if (!stickyEl) return;

  const onScroll = () => {
    stickyEl.classList.toggle("sticky", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* Sağ Kurumsal Bilgi Çekmecesi (DentMec Sidemenu Drawer) */
function initSideDrawer() {
  const drawer = document.getElementById("sideDrawer");
  const backdrop = document.getElementById("sideDrawerBackdrop");
  const toggleBtn = document.getElementById("sideDrawerToggle");
  const closeBtn = document.getElementById("sideDrawerClose");
  if (!drawer || !toggleBtn) return;

  const setDrawer = (open) => {
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    if (backdrop) backdrop.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => setDrawer(true));
  if (closeBtn) closeBtn.addEventListener("click", () => setDrawer(false));
  if (backdrop) backdrop.addEventListener("click", () => setDrawer(false));

  drawer.querySelectorAll("[data-legal-doc]").forEach((btn) => {
    btn.addEventListener("click", () => setDrawer(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      setDrawer(false);
    }
  });
}

/* Hero Ken Burns Slider (DentMec Dinamik Metin & Stagger Animasyonu) */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide-item");
  const dots = document.querySelectorAll(".hero-dot");
  const dTag = document.getElementById("dynamic-tag");
  const dTitle = document.getElementById("dynamic-title");
  const dDesc = document.getElementById("dynamic-desc");
  const dBtn = document.querySelector(".slide-btn");
  if (!slides.length || !dots.length) return;

  let current = 0;
  let timer = null;

  function setTextAnim(show) {
    [dTag, dTitle, dDesc, dBtn].forEach((el) => {
      if (el) el.classList.toggle("text-visible", show);
    });
  }

  function applySlideData(index) {
    const dataWrap = slides[index].querySelector(".slide-data");
    if (!dataWrap) return;
    const tag = dataWrap.querySelector(".data-tag");
    const title = dataWrap.querySelector(".data-title");
    const desc = dataWrap.querySelector(".data-desc");
    if (dTag && tag) dTag.innerHTML = tag.innerHTML;
    if (dTitle && title) dTitle.innerHTML = title.innerHTML;
    if (dDesc && desc) dDesc.innerHTML = desc.innerHTML;
  }

  function showSlide(index, skipHide) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === current);
      d.setAttribute("aria-pressed", String(i === current));
    });

    if (skipHide) {
      applySlideData(current);
      return;
    }

    setTextAnim(false);
    setTimeout(() => {
      applySlideData(current);
      setTextAnim(true);
    }, 320);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => showSlide(current + 1, false), 6000);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx, false);
      startAuto();
    });
  });

  showSlide(0, true);
  startAuto();
}

/* Sinematik Yatay Akordeon Branş Galerisi */
function initCinematicAccordion() {
  const panels = document.querySelectorAll(".c-panel");
  if (!panels.length) return;

  panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
      if (e.target.closest("[data-open-treatment]")) return;
      panels.forEach((p) => p.classList.remove("active"));
      panel.classList.add("active");
    });

    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth > 820) {
        panels.forEach((p) => p.classList.remove("active"));
        panel.classList.add("active");
      }
    });
  });
}

/* Hekimlerimiz (Toplu Görünüm + Şube Kategorizasyonu) */
function renderDoctors(branchFilter) {
  const container = document.getElementById("doctors-grid");
  if (!container) return;

  const list =
    branchFilter === "tumu"
      ? DOCTORS_DATA
      : DOCTORS_DATA.filter((d) => d.branch === branchFilter);

  container.innerHTML = list
    .map((doc) => {
      const chipClass = doc.branch === "sincan" ? "branch-chip--sincan" : "branch-chip--kazan";
      return `
      <article class="modern-team-card" data-branch="${doc.branch}">
        <div class="modern-card-visual">
          <div class="doctor-branch-badge">
            <span class="branch-chip ${chipClass}">&#9679; ${doc.branchLabel}</span>
            <span class="role-chip">${doc.roleBadge}</span>
          </div>
          <div class="doctor-monogram" aria-hidden="true">${doc.initials}</div>
        </div>
        <div class="modern-card-info">
          <h3 class="modern-doc-name">${doc.name}</h3>
          <span class="modern-doc-title">${doc.title} &bull; ${doc.branchLabel}</span>
          <div class="modern-card-line"></div>
          <div class="modern-doc-meta">
            <span>${doc.university}</span>
            <strong>${doc.scope}</strong>
            <span>${doc.hours}</span>
            ${doc.onlineUrl ? `<a href="${doc.onlineUrl}" target="_blank" rel="noopener noreferrer" class="doc-online-link">Online Randevu (DoktorSitesi) &#8599;</a>` : ""}
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function initDoctorFilters() {
  const wrap = document.getElementById("doctor-branch-filters");
  if (!wrap) return;

  wrap.querySelectorAll(".branch-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".branch-filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderDoctors(btn.getAttribute("data-branch-filter"));
    });
  });
}

/* Tedavilerimiz / Overlapping Tıbbi Bilgilendirme Kartları */
function renderTreatments(filterKey) {
  const container = document.getElementById("blog-cards-grid");
  if (!container) return;

  const filtered =
    filterKey === "tumu"
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((item) => item.category === filterKey);

  container.innerHTML = filtered
    .map(
      (item) => `
      <article class="premium-blog-card">
        <div class="pbc-img-wrapper">
          <span class="pbc-badge">${item.categoryLabel}</span>
          <img src="${item.image}" alt="${item.title}" class="pbc-img" loading="lazy" />
        </div>
        <div class="pbc-content">
          <div>
            <h3 class="pbc-title">${item.title}</h3>
            <p class="pbc-desc">${item.summary}</p>
          </div>
          <button type="button" class="pbc-btn" data-open-treatment="${item.id}">
            Tıbbi Bilgilendirmeyi Oku &rarr;
          </button>
        </div>
      </article>
    `
    )
    .join("");

  container.querySelectorAll("[data-open-treatment]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openTreatmentModal(btn.getAttribute("data-open-treatment"));
    });
  });
}

function initTreatmentFilters() {
  const filterWrap = document.getElementById("treatment-filters");
  if (!filterWrap) return;

  filterWrap.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderTreatments(btn.getAttribute("data-filter"));
    });
  });
}

/* SSS Akordeon */
function renderFaq() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  container.innerHTML = FAQ_DATA.map(
    (item, idx) => `
    <div class="faq-item${idx === 0 ? " is-open" : ""}">
      <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? "true" : "false"}">
        <span>${item.question}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-panel" style="${idx === 0 ? "max-height: 400px;" : ""}">
        <div class="faq-panel__inner">${item.answer}</div>
      </div>
    </div>
  `
  ).join("");

  container.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".faq-item");
      const panel = parent.querySelector(".faq-panel");
      const isOpen = parent.classList.contains("is-open");

      container.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
        el.querySelector(".faq-panel").style.maxHeight = null;
      });

      if (!isOpen) {
        parent.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* Modallar */
let activeModalEl = null;

function openModal(modalEl) {
  if (!modalEl) return;
  activeModalEl = modalEl;
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalEl = null;
}

function openTreatmentModal(id) {
  const data = TREATMENTS_DATA.find((t) => t.id === id);
  if (!data) return;

  const modal = document.getElementById("info-modal");
  document.getElementById("info-modal-meta").textContent = `${data.categoryLabel} | Sağlığı Koruyucu Bilgilendirme`;
  document.getElementById("info-modal-title").textContent = data.title;
  document.getElementById("info-modal-body").innerHTML = `
    <h4>Genel Tıbbi Bilgi</h4>
    <p>${data.overview}</p>

    <h4>Hangi Durumlarda Değerlendirilir?</h4>
    <ul>${data.indications.map((i) => `<li>${i}</li>`).join("")}</ul>

    <h4>Klinik Uygulama Süreci Nasıl İşler?</h4>
    <ul>${data.process.map((p) => `<li>${p}</li>`).join("")}</ul>

    <h4>İşlem Sonrası Dikkat Edilmesi Gerekenler</h4>
    <ul>${data.aftercare.map((a) => `<li>${a}</li>`).join("")}</ul>

    <div class="compliance-box" style="margin-top: 18px;">
      <strong>Yasal Bilgilendirme Notu</strong>
      Bu sayfada yer alan bilgiler yalnızca sağlığı koruyucu ve geliştirici nitelikte genel bilgilendirme amaçlıdır. Kişiye özgü tanı ve tedavi planlaması için mutlaka diş hekiminize başvurunuz.
    </div>
  `;
  openModal(modal);
}

function openLegalModal(docKey) {
  const doc = LEGAL_DOCS[docKey];
  if (!doc) return;

  const modal = document.getElementById("legal-modal");
  document.getElementById("legal-modal-meta").textContent = doc.meta;
  document.getElementById("legal-modal-title").textContent = doc.title;
  document.getElementById("legal-modal-body").innerHTML = doc.body;
  openModal(modal);
}

function initModals() {
  document.querySelectorAll("[data-legal-doc]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openLegalModal(btn.getAttribute("data-legal-doc"));
    });
  });

  document.querySelectorAll("[data-open-treatment]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openTreatmentModal(btn.getAttribute("data-open-treatment"));
    });
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.querySelectorAll("[data-close-modal]").forEach((closer) => {
      closer.addEventListener("click", () => closeModal(modal));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModalEl) {
      closeModal(activeModalEl);
    }
  });
}

/* Mobil Menü */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navEl = document.getElementById("main-nav");
  if (!toggleBtn || !navEl) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navEl.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navEl.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => {
      navEl.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* Şube Seçim Butonları (Şube Kartlarından Forma Otomatik Seçim) */
function initBranchSelectors() {
  const branchSelect = document.getElementById("branchSelect");
  const formWrap = document.getElementById("randevu-form-kutu");
  if (!branchSelect || !formWrap) return;

  document.querySelectorAll("[data-select-branch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetBranch = btn.getAttribute("data-select-branch");
      branchSelect.value = targetBranch;
      formWrap.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

/* KVKK Çift Onaylı Çift Şubeli Randevu Formu */
function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const branchKey = form.elements["branchSelect"].value;
    const branchInfo = CLINIC_CONFIG.branches[branchKey] || CLINIC_CONFIG.branches.sincan;
    const fullName = form.elements["fullName"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const preferredDay = form.elements["preferredDay"].value;
    const subject = form.elements["subject"].value;
    const notes = form.elements["notes"].value.trim();
    const kvkkRead = form.elements["kvkkRead"].checked;
    const kvkkConsent = form.elements["kvkkConsent"].checked;

    if (!fullName || !phone) {
      showFeedback("error", "Lütfen ad-soyad ve telefon numarası alanlarını eksiksiz doldurunuz.");
      return;
    }

    if (!kvkkRead || !kvkkConsent) {
      showFeedback(
        "error",
        "6698 sayılı KVKK uyarınca Aydınlatma Metni ve Açık Rıza onay kutucuklarının işaretlenmesi zorunludur."
      );
      return;
    }

    const messageText = [
      `Merhaba, ${branchInfo.officialName} web sitesi üzerinden randevu / bilgi talebi iletiyorum.`,
      `Seçilen Şube: ${branchInfo.shortName}`,
      `Ad Soyad: ${fullName}`,
      `Telefon: ${phone}`,
      `Tercih Edilen Zaman: ${preferredDay}`,
      `Başvuru Konusu: ${subject}`,
      notes ? `Not: ${notes}` : null,
      "KVKK Aydınlatma Metni ve Açık Rıza onayı verilmiştir."
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${branchInfo.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    const mailUrl = `mailto:${CLINIC_CONFIG.email}?subject=${encodeURIComponent(
      `${branchInfo.shortName} Randevu Talebi - ${fullName}`
    )}&body=${encodeURIComponent(messageText)}`;

    feedback.className = "form-feedback form-feedback--success is-visible";
    feedback.innerHTML = `
      <strong>${branchInfo.shortName} için talebiniz hazırlandı.</strong><br>
      Verileriniz sunucuda depolanmadan doğrudan seçtiğiniz şube hattına yönlendirilir:
      <div class="form-feedback__links">
        <a class="btn btn--primary" style="padding: 8px 15px; font-size: 0.8rem;" href="${waUrl}" target="_blank" rel="noopener noreferrer">${branchInfo.shortName} WhatsApp ile Gönder</a>
        <a class="btn btn--silver" style="padding: 8px 15px; font-size: 0.8rem;" href="${mailUrl}">E-posta ile Gönder</a>
        <a class="btn btn--silver" style="padding: 8px 15px; font-size: 0.8rem;" href="https://www.doktorsitesi.com/sinan-can-cakmak/dis-hekimi/ankara" target="_blank" rel="noopener noreferrer">DoktorSitesi Online Randevu &#8599;</a>
      </div>
    `;
  });

  function showFeedback(type, msg) {
    feedback.className = `form-feedback form-feedback--${type} is-visible`;
    feedback.textContent = msg;
  }
}

/* Çerez Bilgilendirme Çubuğu */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  if (!banner || !acceptBtn) return;

  try {
    if (!localStorage.getItem("livadent_cookie_ack")) {
      banner.classList.add("is-visible");
    }
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("livadent_cookie_ack", "accepted");
      banner.classList.remove("is-visible");
    });
  } catch {
    banner.classList.add("is-visible");
    acceptBtn.addEventListener("click", () => {
      banner.classList.remove("is-visible");
    });
  }
}
