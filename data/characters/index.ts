// Satu file JSON per karakter. Untuk karakter baru:
// 1. Buat file data/characters/<slug>.json
// 2. Tambahkan satu baris import di bawah dan satu nama di objek profiles.

import arkha from './arkha.json'
import zuya from './zuya.json'
import aqyl from './aqyl.json'
import des from './des.json'
import faedil from './faedil.json'
import ken from './ken.json'
import mita from './mita.json'
import nana from './nana.json'
import niff from './niff.json'
import rerin from './rerin.json'
import xio from './xio.json'
import rayas from './rayas.json'
import caesar from './caesar.json'
import kila from './kila.json'
import mauro from './mauro.json'
import maran from './maran.json'
import yume from './yume.json'
import nay from './nay.json'
import pucie from './pucie.json'
import fazz from './fazz.json'
import zuma from './zuma.json'
import kafka from './kafka.json'
import harith from './harith.json'
import vinzo from './vinzo.json'
import hiro from './hiro.json'
import arsa from './arsa.json'
import azel from './azel.json'
import safira from './safira.json'
import runza from './runza.json'
import noe from './noe.json'

export type Profile = {
  slug: string
  firstAppear?: string
  name?: string
  pseudonym?: string
  age?: string
  height?: string
  gender?: string
  role?: string
  characteristics?: string
  likes?: string
  dislikes?: string
  power?: string
  summary?: string[]
}

export const profiles: Record<string, Profile> = { arkha, zuya, aqyl, des, faedil, ken, mita, nana, niff, rerin, xio, rayas, caesar, kila, mauro, maran, yume, nay, pucie, fazz, zuma, kafka, harith, vinzo, hiro, arsa, azel, safira, runza, noe }
