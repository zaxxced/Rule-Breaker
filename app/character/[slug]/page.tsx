import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { profiles, type Profile } from '../../../data/characters'

const entries: Record<string, { name: string; role: string; image: string; illustration?: string }> = {
  arkha: { name: 'Arkha', role: 'Karakter utama', image: 'arkha_icon.png', illustration: 'arkha.png' },
  maran: { name: 'Maran', role: '???', image: 'maran_icon.png', illustration: 'maran.png' },
  rayas: { name: 'Rayas', role: 'Anggota Divisi 7', image: 'rayas_icon.png', illustration: 'rayas.png' },
  faedil: { name: 'Faedil', role: 'Anggota Divisi 7', image: 'faedil_icon.png', illustration: 'faedil.png' },
  xio: { name: 'Xio', role: 'Anggota Divisi 7', image: 'xio_icon.png', illustration: 'xio.png' },
  yume: { name: 'Yume', role: '???', image: 'yume_icon.png' },
  niff: { name: 'Niff', role: 'Jendral Divisi 7', image: 'niff_icon.png', illustration: 'niff.png' },
  nay: { name: 'Nay', role: 'Letjen Divisi 6', image: 'nay_icon.png', illustration: 'nay.png' },
  nana: { name: 'Nana', role: 'Letjen Divisi 7', image: 'nana_icon.png', illustration: 'nana.png' },
  kila: { name: 'Kila', role: 'Cheater', image: 'kila_icon.png' },
  zuya: { name: 'Zuya', role: 'Jendral Divisi 4', image: 'zuya_icon.png', illustration: 'zuya.png' },
  mauro: { name: 'Mauro', role: 'Cheater', image: 'mauro_icon.png' },
  caesar: { name: 'Caesar', role: 'Cheater', image: 'caesar_icon.png' },
  mita: { name: 'Mita', role: 'Jendral Divisi 5', image: 'mita_icon.png', illustration: 'mita.png' },
  pucie: { name: 'Pucie', role: '???', image: 'pucie_icon.png' },
  fazz: { name: 'Fazz', role: 'Anggota Divisi 7', image: 'fazz_icon.png' },
  ken: { name: 'Ken', role: 'Jendral Divisi 6', image: 'ken_icon.png', illustration: 'ken.png' },
  zuma: { name: 'Zuma', role: 'Anggota Divisi 7', image: 'zuma_icon.png' },
  aqyl: { name: 'Aqyl', role: 'Jendral Divisi 1', image: 'aqyl_icon.png', illustration: 'aqyl.png' },
  rerin: { name: 'Rerin', role: 'Jendral Divisi 2', image: 'rerin_icon.png', illustration: 'rerin.png' },
  des: { name: 'Des', role: 'Jendral Divisi 3', image: 'des_icon.png', illustration: 'des.png' },
  kafka: { name: 'Kafka', role: 'Letjen Divisi 3', image: 'kafka_icon.png' },
  harith: { name: 'Harith', role: 'Cheater', image: 'harith_icon.png' },
  vinzo: { name: 'Stormblitza Vinzo', role: 'Cheater', image: 'vinzo_icon.png' },
  hiro: { name: 'Narua Hiro', role: 'Letjen Divisi 7', image: 'hiro_icon.png' },
  arsa: { name: 'Prisma Arsa', role: 'Anggota Divisi 7', image: 'arsa_icon.png' },
  azel: { name: 'Azalea Amira', role: 'Anggota Divisi 7', image: 'azel_icon.png' },
  safira: { name: 'Safira', role: 'Adik Arkha', image: 'safira_icon.png' },
  runza: { name: 'Runza', role: 'Sahabat masa kecil Arkha', image: 'runza_icon.png' },
  noe: { name: 'Catalytic Noe', role: 'Letjen Divisi 6', image: 'noe_icon.png' },
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

      <div className="mx-auto max-w-3xl px-6 pt-12 pb-4 md:pt-20 md:pb-6">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Back to archive
        </Link>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card">
          <Image src={`/placeholder/${entry.illustration ?? entry.image}`} alt={entry.name} fill className="object-cover" priority />
        </div>

        <p className="mt-10 text-xs font-bold tracking-[.22em] text-primary">CHARACTER DOSSIER</p>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">{entry.name}</h1>
        <span className="mt-5 inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
          {profile?.role ?? entry.role}
        </span>
      </div>

      {profile && (
        <div className="mx-auto max-w-3xl space-y-10 px-6 pb-24">
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
