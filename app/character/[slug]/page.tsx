import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

const entries: Record<string, { name: string; role: string; image: string; description: string }> = {
  arkha: { name: 'Arkha', role: 'Karakter utama', image: 'arkha_icon.png', description: 'Protagonis utama yang menjadi pusat dari konflik Rule Breaker.' },
  maran: { name: 'Maran', role: '???', image: 'maran_icon.png', description: 'Identitas dan perannya masih belum terungkap.' },
  rayas: { name: 'Rayas', role: 'Anggota Divisi 7', image: 'rayas_icon.png', description: 'Anggota Divisi 7 yang setia dan berpengalaman.' },
  faedil: { name: 'Faedil', role: 'Anggota Divisi 7', image: 'faedil_icon.png', description: 'Petarung Divisi 7 dengan kemampuan yang terus berkembang.' },
  xio: { name: 'Xio', role: 'Anggota Divisi 7', image: 'xio_icon.png', description: 'Salah satu anggota penting dalam ekspedisi Divisi 7.' },
  yume: { name: 'Yume', role: '???', image: 'yume_icon.png', description: 'Sosok misterius yang belum banyak diketahui.' },
  niff: { name: 'Niff', role: 'Jendral Divisi 7', image: 'niff_icon.png', description: 'Jendral yang memimpin Divisi 7 dengan ketegasan.' },
  nay: { name: 'Nay', role: 'Letjen Divisi 6', image: 'nay_icon.png', description: 'Letjen Divisi 6 dengan reputasi yang disegani.' },
  nana: { name: 'Nana', role: 'Letjen Divisi 7', image: 'nana_icon.png', description: 'Letjen yang menjadi tangan kanan Divisi 7.' },
  kila: { name: 'Kila', role: 'Cheater', image: 'kila_icon.png', description: 'Sosok berbahaya yang melampaui batas dunia.' },
  zuya: { name: 'Zuya', role: 'Jendral Divisi 4', image: 'zuya_icon.png', description: 'Jendral Divisi 4 dengan kekuatan yang sulit diprediksi.' },
  mauro: { name: 'Mauro', role: 'Cheater', image: 'mauro_icon.png', description: 'Anomali yang menolak aturan dunia.' },
  caesar: { name: 'Caesar', role: 'Cheater', image: 'caesar_icon.png', description: 'Cheater dengan agenda dan kekuatan tersembunyi.' },
  mita: { name: 'Mita', role: 'Jendral Divisi 5', image: 'mita_icon.png', description: 'Jendral Divisi 5 yang menguasai wilayahnya.' },
  pucie: { name: 'Pucie', role: '???', image: 'pucie_icon.png', description: 'Data karakter belum tersedia.' },
  fazz: { name: 'Fazz', role: 'Anggota Divisi 7', image: 'fazz_icon.png', description: 'Anggota Divisi 7 yang aktif di garis depan.' },
  ken: { name: 'Ken', role: 'Jendral Divisi 6', image: 'ken_icon.png', description: 'Jendral Divisi 6 yang dikenal karena strateginya.' },
  zuma: { name: 'Zuma', role: 'Anggota Divisi 7', image: 'zuma_icon.png', description: 'Anggota Divisi 7 dengan potensi besar.' },
  aqyl: { name: 'Aqyl', role: 'Jendral Divisi 1', image: 'aqyl_icon.png', description: 'Jendral pertama dengan pengaruh luas.' },
  rerin: { name: 'Rerin', role: 'Jendral Divisi 2', image: 'rerin_icon.png', description: 'Jendral Divisi 2 yang beroperasi dalam bayangan.' },
  des: { name: 'Des', role: 'Jendral Divisi 3', image: 'des_icon.png', description: 'Jendral Divisi 3 dengan catatan pertempuran panjang.' },
}
export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = entries[slug.toLowerCase()] ?? entries[slug]
  if (!entry) return <main className="grid min-h-screen place-items-center bg-background text-foreground"><p>Character not found.</p></main>
  return <main className="min-h-screen bg-background text-foreground"><header className="border-b border-border px-6 py-5"><Link href="/" className="inline-flex items-center gap-3 font-display text-sm font-bold"><span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Shield /></span>RULE BREAKER WIKI</Link></header><div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-[.9fr_1.1fr] md:py-20"><div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"><Image src={`/placeholder/${entry.image}`} alt={entry.name} fill className="object-cover" priority /></div><section className="flex flex-col justify-center"><Link href="/" className="mb-10 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> Back to archive</Link><p className="text-xs font-bold tracking-[.22em] text-primary">CHARACTER DOSSIER</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">{entry.name}</h1><span className="mt-5 w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">{entry.role}</span><p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground">{entry.description}</p></section></div></main>
}
