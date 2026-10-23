import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { profiles, type Profile } from '../../../data/characters'

const entries: Record<string, { name: string; role: string; image: string; illustration?: string; description: string }> = {
  arkha: { name: 'Arkha', role: 'Karakter utama', image: 'arkha_icon.png', illustration: 'arkha.png', description: 'Pemuda 18 tahun yang bimbang antara jejak ayahnya dan hidup biasa, tapi selalu memilih untuk bertarung.' },
  maran: { name: 'Maran', role: '???', image: 'maran_icon.png', illustration: 'maran.png', description: 'Anak ketiga presiden dengan kekuatan penghancur batasan, yang kini berada di tangan Kultus Suci.' },
  rayas: { name: 'Rayas', role: 'Anggota Divisi 7', image: 'rayas_icon.png', illustration: 'rayas.png', description: 'Pengguna kekuatan pasir yang arogan, menyimpan dendam pada Caesar dan luka lama soal cinta yang ditolak.' },
  faedil: { name: 'Faedil', role: 'Anggota Divisi 7', image: 'faedil_icon.png', illustration: 'faedil.png', description: 'Petarung berkecepatan super yang tenang dan pantang takut, diam-diam jatuh hati pada Xio.' },
  xio: { name: 'Xio', role: 'Anggota Divisi 7', image: 'xio_icon.png', illustration: 'xio.png', description: 'Penyembuh berambut merah muda yang keras kepala, dan sering menjadi tumpuan tim Rivers.' },
  yume: { name: 'Yume', role: '???', image: 'yume_icon.png', description: 'Teman masa kecil Arkha yang kini berada di Kultus Suci, dengan masa lalu yang kelam.' },
  niff: { name: 'Niff', role: 'Jendral Divisi 7', image: 'niff_icon.png', illustration: 'niff.png', description: 'Jendral Divisi 7 termuda yang mampu memotong ruang, dan kemampuannya nyaris tak tertandingi.' },
  nay: { name: 'Nay', role: 'Letjen Divisi 6', image: 'nay_icon.png', illustration: 'nay.png', description: 'Letjen Divisi 6 yang kemampuan Warp-nya dibatasi medan, tapi tetap menyelamatkan para peserta Ujian.' },
  nana: { name: 'Nana', role: 'Letjen Divisi 7', image: 'nana_icon.png', illustration: 'nana.png', description: 'Letjen Divisi 7 yang tegas dan tenang, sosok yang menguatkan Arkha saat ia hampir menyerah.' },
  kila: { name: 'Kila', role: 'Cheater', image: 'kila_icon.png', description: 'Cheater pemanipulasi pikiran yang kejam dan menjadi tokoh kunci di balik Kultus Suci.' },
  zuya: { name: 'Zuya', role: 'Jendral Divisi 4', image: 'zuya_icon.png', illustration: 'zuya.png', description: 'Jendral Divisi 4 bertubuh mungil yang menguasai waktu, dan disukai anak-anak.' },
  mauro: { name: 'Mauro', role: 'Cheater', image: 'mauro_icon.png', description: 'Cheater kelas A dan buronan lama yang sulit dilacak berkat kemampuan teleportasinya.' },
  caesar: { name: 'Caesar', role: 'Cheater', image: 'caesar_icon.png', description: 'Cheater dingin yang bisa menghilang, dan pernah mengkhianati timnya demi ambisinya sendiri.' },
  mita: { name: 'Mita', role: 'Jendral Divisi 5', image: 'mita_icon.png', illustration: 'mita.png', description: 'Jendral Divisi 5 yang anggun dan menguasai api, dijuluki Nona Api.' },
  pucie: { name: 'Pucie', role: '???', image: 'pucie_icon.png', description: 'Peneliti Divisi 7 yang bisa berganti gender dan pembuat cairan penyembuh yang menyelamatkan banyak nyawa.' },
  fazz: { name: 'Fazz', role: 'Anggota Divisi 7', image: 'fazz_icon.png', description: 'Anggota Divisi 7 yang santai dengan kekuatan es, sahabat Zuma sejak lama.' },
  ken: { name: 'Ken', role: 'Jendral Divisi 6', image: 'ken_icon.png', illustration: 'ken.png', description: 'Jendral Divisi 6 yang dikenal paling tidak serius di antara para jendral.' },
  zuma: { name: 'Zuma', role: 'Anggota Divisi 7', image: 'zuma_icon.png', description: 'Anggota Divisi 7 yang humoris dan berisik, dengan mata elang dan pistol kecil di tangannya.' },
  aqyl: { name: 'Aqyl', role: 'Jendral Divisi 1', image: 'aqyl_icon.png', illustration: 'aqyl.png', description: 'Jendral tertua di Divisi 1 yang misterius, dengan palu cahaya yang mengguncang lawan.' },
  rerin: { name: 'Rerin', role: 'Jendral Divisi 2', image: 'rerin_icon.png', illustration: 'rerin.png', description: 'Jendral Divisi 2 yang mencolok dan mematikan, dan kebal terhadap semua racun.' },
  des: { name: 'Des', role: 'Jendral Divisi 3', image: 'des_icon.png', illustration: 'des.png', description: 'Jendral Divisi 3 paling cerdas yang tidak punya kemampuan khusus, hanya mengandalkan fisik dan logika.' },
  kafka: { name: 'Kafka', role: 'Letjen Divisi 3', image: 'kafka_icon.png', description: 'Letjen Divisi 3 yang santai namun berbahaya, dengan ribuan gagak di bawah kendalinya.' },
  harith: { name: 'Harith', role: 'Cheater', image: 'harith_icon.png', description: 'Pria kejam berkekuatan gravitasi dari Kultus Suci, yang meninggalkan luka dalam di masa lalu Runza dan Yume.' },
  vinzo: { name: 'Stormblitza Vinzo', role: 'Cheater', image: 'vinzo_icon.png', description: 'Pemimpin Kultus Suci yang menyelimuti Calvera dengan kegelapan dan mengincar kekuatan Maran.' },
  hiro: { name: 'Narua Hiro', role: 'Letjen Divisi 7', image: 'hiro_icon.png', description: 'Letjen Divisi 7 yang tenang dan selalu mengkhawatirkan keselamatan rekannya.' },
  arsa: { name: 'Prisma Arsa', role: 'Anggota Divisi 7', image: 'arsa_icon.png', description: 'Anggota Divisi 7 berambut putih beraksen merah yang ramah, dan sempat terluka parah di salju Calvera.' },
  azel: { name: 'Azalea Amira', role: 'Anggota Divisi 7', image: 'azel_icon.png', description: 'Anggota Divisi 7 yang tegas dan serius, dan paling sering mengingatkan rekannya.' },
  safira: { name: 'Safira', role: 'Adik Arkha', image: 'safira_icon.png', description: 'Adik Arkha yang ceria, dan selalu menunggu kepulangan kakaknya.' },
  runza: { name: 'Runza', role: 'Sahabat masa kecil Arkha', image: 'runza_icon.png', description: 'Sahabat masa kecil Arkha yang bandel tapi setia. Apinya kini diwariskan kepada Arkha.' },
  noe: { name: 'Catalytic Noe', role: 'Letjen Divisi 6', image: 'noe_icon.png', description: 'Letjen Divisi 6 yang menyembuhkan luka dengan cairan merah gelap, dan menyelamatkan banyak nyawa.' },
}

const profileData = profiles as Record<string, Profile>

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params
  const slug = rawSlug.toLowerCase()
  const entry = entries[slug]
  if (!entry) return <main className="grid min-h-screen place-items-center bg-background text-foreground"><p>Character not found.</p></main>

  const profile = profileData[slug]
  const facts: [string, string | undefined][] = profile
    ? [
        ['First Appear', profile.firstAppear],
        ['Pseudonym', profile.pseudonym],
        ['Age', profile.age],
        ['Height', profile.height],
        ['Gender', profile.gender],
        ['Role', profile.role],
        ['Characteristics', profile.characteristics],
        ['Likes', profile.likes],
        ['Dislikes', profile.dislikes],
      ]
    : []

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-5">
        <Link href="/" className="inline-flex items-center gap-3 font-display text-sm font-bold">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Shield /></span>
          RULE BREAKER WIKI
        </Link>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-[.9fr_1.1fr] md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card">
          <Image src={`/placeholder/${entry.illustration ?? entry.image}`} alt={entry.name} fill className="object-cover" priority />
        </div>

        <section className="flex flex-col justify-center">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-4" /> Back to archive
          </Link>
          <p className="text-xs font-bold tracking-[.22em] text-primary">CHARACTER DOSSIER</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">{entry.name}</h1>
          <span className="mt-5 w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
            {profile?.role ?? entry.role}
          </span>
          <p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground">{entry.description}</p>
        </section>
      </div>

      {profile && (
        <div className="mx-auto max-w-5xl space-y-10 px-6 pb-24">
          {profile.firstAppear && (
            <p className="text-xs font-bold tracking-[.22em] text-primary">FIRST APPEAR: {profile.firstAppear.toUpperCase()}</p>
          )}

          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {facts
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label} className="bg-card p-5">
                  <dt className="text-[10px] font-bold tracking-[.2em] text-muted-foreground">{label.toUpperCase()}</dt>
                  <dd className="mt-2 whitespace-pre-line text-sm leading-6">{value}</dd>
                </div>
              ))}
          </dl>

          {profile.power && (
            <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="font-display text-sm font-bold tracking-[.2em] text-primary">POWER</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-7">{profile.power}</p>
            </section>
          )}

          {profile.summary && profile.summary.length > 0 && (
            <section>
              <h2 className="font-display text-sm font-bold tracking-[.2em] text-primary">SUMMARY</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                {profile.summary.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </main>
  )
}
