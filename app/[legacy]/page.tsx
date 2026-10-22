import { notFound, redirect } from 'next/navigation'

const legacySlugs = new Set([
  'arkha',
  'rayas',
  'faedil',
  'xio',
  'nay',
  'nana',
  'niff',
  'zuya',
  'mita',
  'ken',
  'aqyl',
  'rerin',
  'des',
  'mauro',
  'caesar',
  'kila',
  'fazz',
  'zuma',
  'maran',
  'yume',
  'pucie',
])

export default async function LegacyCharacterPage({
  params,
}: {
  params: Promise<{ legacy: string }>
}) {
  const { legacy } = await params
  const match = legacy.match(/^(.+)\.html$/i)
  const slug = match?.[1].toLowerCase()

  if (!slug || !legacySlugs.has(slug)) notFound()

  redirect(`/character/${slug}`)
}
