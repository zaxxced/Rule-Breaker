import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { profiles, type Profile } from '../../../data/characters'

const entries: Record<string, { name: string; role: string; image: string; illustration?: string; description: string }> = {
  arkha: { name: 'Arkha', role: 'Karakter utama', image: 'arkha_icon.png', illustration: 'arkha.png', description: 'Protagonis utama yang menjadi pusat dari konflik Rule Breaker.' },
  maran: { name: 'Maran', role: '???', image: 'maran_icon.png', description: 'Identitas dan perannya masih belum terungkap.' },
  rayas: { name: 'Rayas', role: 'Anggota Divisi 7', image: 'rayas_icon.png', illustration: 'rayas.png', description: 'Anggota Divisi 7 yang setia dan berpengalaman.' },
  faedil: { name: 'Faedil', role: 'Anggota Divisi 7', image: 'faedil_icon.png', illustration: 'faedil.png', description: 'Petarung Divisi 7 dengan kemampuan yang terus berkembang.' },
  xio: { name: 'Xio', role: 'Anggota Divisi 7', image: 'xio_icon.png', illustration: 'xio.png', description: 'Salah satu anggota penting dalam ekspedisi Divisi 7.' },
  yume: { name: 'Yume', role: '???', image: 'yume_icon.png', description: 'Sosok misterius yang belum banyak diketahui.' },
  niff: { name: 'Niff', role: 'Jendral Divisi 7', image: 'niff_icon.png', illustration: 'niff.png', description: 'Jendral yang memimpin Divisi 7 dengan ketegasan.' },
  nay: { name: 'Nay', role: 'Letjen Divisi 6', image: 'nay_icon.png', illustration: 'nay.png', description: 'Letjen Divisi 6 dengan reputasi yang disegani.' },
  nana: { name: 'Nana', role: 'Letjen Divisi 7', image: 'nana_icon.png', illustration: 'nana.png', description: 'Letjen yang menjadi tangan kanan Divisi 7.' },
  kila: { name: 'Kila', role: 'Cheater', image: 'kila_icon.png', description: 'Sosok berbahaya yang melampaui batas dunia.' },
  zuya: { name: 'Zuya', role: 'Jendral Divisi 4', image: 'zuya_icon.png', illustration: 'zuya.png', description: 'Jendral Divisi 4 dengan kekuatan yang sulit diprediksi.' },
  mauro: { name: 'Mauro', role: 'Cheater', image: 'mauro_icon.png', description: 'Anomali yang menolak aturan dunia.' },
  caesar: { name: 'Caesar', role: 'Cheater', image: 'caesar_icon.png', description: 'Cheater dengan agenda dan kekuatan tersembunyi.' },
  mita: { name: 'Mita', role: 'Jendral Divisi 5', image: 'mita_icon.png', illustration: 'mita.png', description: 'Jendral Divisi 5 yang menguasai wilayahnya.' },
  pucie: { name: 'Pucie', role: '???', image: 'pucie_icon.png', description: 'Data karakter belum tersedia.' },
  fazz: { name: 'Fazz', role: 'Anggota Divisi 7', image: 'fazz_icon.png', description: 'Anggota Divisi 7 yang aktif di garis depan.' },
  ken: { name: 'Ken', role: 'Jendral Divisi 6', image: 'ken_icon.png', illustration: 'ken.png', description: 'Jendral Divisi 6 yang dikenal karena strateginya.' },
  zuma: { name: 'Zuma', role: 'Anggota Divisi 7', image: 'zuma_icon.png', description: 'Anggota Divisi 7 dengan potensi besar.' },
  aqyl: { name: 'Aqyl', role: 'Jendral Divisi 1', image: 'aqyl_icon.png', illustration: 'aqyl.png', description: 'Jendral pertama dengan pengaruh luas.' },
  rerin: { name: 'Rerin', role: 'Jendral Divisi 2', image: 'rerin_icon.png', illustration: 'rerin.png', description: 'Jendral Divisi 2 yang beroperasi dalam bayangan.' },
  des: { name: 'Des', role: 'Jendral Divisi 3', image: 'des_icon.png', illustration: 'des.png', description: 'Jendral Divisi 3 dengan catatan pertempuran panjang.' },
  kafka: { name: 'Kafka', role: 'Letjen Divisi 3', image: 'kafka_icon.png', description: 'Letjen Divisi 3 yang santai namun berbahaya, dengan ribuan gagak di bawah kendalinya.' },
  harith: { name: 'Harith', role: 'Cheater', image: 'harith_icon.png', description: 'Pria kejam yang menundukkan lawan dengan gravitasi, bagian dari Kultus Suci.' },
  vinzo: { name: 'Stormblitza Vinzo', role: 'Cheater', image: 'vinzo_icon.png', description: 'Pemimpin Kultus Suci yang menyelimuti Calvera dengan kegelapan.' },
  hiro: { name: 'Narua Hiro', role: 'Letjen Divisi 7', image: 'hiro_icon.png', description: 'Letjen Divisi 7 yang tenang dan selalu memikirkan keselamatan rekannya.' },
  arsa: { name: 'Prisma Arsa', role: 'Anggota Divisi 7', image: 'arsa_icon.png', description: 'Anggota Divisi 7 berambut putih dengan aksen merah yang ramah.' },
  azel: { name: 'Azalea Amira', role: 'Anggota Divisi 7', image: 'azel_icon.png', description: 'Anggota Divisi 7 yang tegas dan serius, dan paling sering mengingatkan rekannya.' },
  safira: { name: 'Safira', role: 'Adik Arkha', image: 'safira_icon.png', description: 'Adik kandung Arkha yang ceria dan selalu menunggu kepulangannya.' },
  runza: { name: 'Runza', role: 'Sahabat masa kecil Arkha', image: 'runza_icon.png', description: 'Sahabat masa kecil Arkha yang bandel tapi setia, dan pewaris api Arkha.' },
  noe: { name: 'Catalytic Noe', role: 'Letjen Divisi 6', image: 'noe_icon.png', description: 'Letjen Divisi 6 dengan cairan penyembuh merah gelap yang menyelamatkan banyak nyawa.' },
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
