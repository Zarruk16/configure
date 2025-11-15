import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Gem name mappings - normalize names to match GemSelect URLs
const gemNameMap = {
  // Precious
  'Diamond': 'diamond',
  'Emerald': 'emerald',
  'Ruby': 'ruby',
  'Sapphire': 'sapphire',
  'Alexandrite': 'alexandrite',
  'Benitoite': 'benitoite',
  'Jadeite': 'jadeite',
  'Paraiba Tourmaline': 'paraiba-tourmaline',
  'Red Spinel': 'spinel',
  
  // Semi-Precious
  'Agate': 'agate',
  'Amazonite': 'amazonite',
  'Amethyst': 'amethyst',
  'Ametrine': 'ametrine',
  'Apatite': 'apatite',
  'Aquamarine': 'aquamarine',
  'Aventurine': 'aventurine',
  'Bloodstone': 'bloodstone',
  'Carnelian': 'carnelian',
  'Chalcedony': 'chalcedony',
  'Chrysoprase': 'chrysoprase',
  'Citrine': 'citrine',
  'Fluorite': 'fluorite',
  'Garnet': 'garnet',
  'Goshenite': 'goshenite',
  'Heliodor': 'heliodor',
  'Hematite': 'hematite',
  'Howlite': 'howlite',
  'Iolite': 'iolite',
  'Jasper': 'jasper',
  'Kyanite': 'kyanite',
  'Labradorite': 'labradorite',
  'Lapis Lazuli': 'lapis-lazuli',
  'Larimar': 'larimar',
  'Lepidolite': 'lepidolite',
  'Malachite': 'malachite',
  'Moonstone': 'moonstone',
  'Morganite': 'morganite',
  'Obsidian': 'obsidian',
  'Onyx': 'onyx',
  'Opal': 'opal',
  'Peridot': 'peridot',
  'Prehnite': 'prehnite',
  'Pyrite': 'pyrite',
  'Rainbow Moonstone': 'rainbow-moonstone',
  'Rhodochrosite': 'rhodochrosite',
  'Rhodonite': 'rhodonite',
  'Rose Quartz': 'rose-quartz',
  'Serpentine': 'serpentine',
  'Smoky Quartz': 'smoky-quartz',
  'Sodalite': 'sodalite',
  'Spinel': 'spinel',
  'Sunstone': 'sunstone',
  'Tanzanite': 'tanzanite',
  'Tiger\'s Eye': 'tigers-eye',
  'Topaz': 'topaz',
  'Tourmaline': 'tourmaline',
  'Turquoise': 'turquoise',
  'Unakite': 'unakite',
  'Zircon': 'zircon',
  'Tsavorite': 'tsavorite-garnet',
  'Dumortierite': 'dumortierite',
  
  // Organic Gems
  'Amber': 'amber',
  'Ammolite': 'ammolite',
  'Bone': 'bone',
  'Bog Oak': 'bog-oak',
  'Coral': 'coral',
  'Copal': 'copal',
  'Fossilized Wood': 'fossilized-wood',
  'Ivory': 'ivory',
  'Jet': 'jet',
  'Mother-of-Pearl': 'mother-of-pearl',
  'Nacre': 'nacre',
  'Odontolite': 'odontolite',
  'Pearl': 'pearl',
  'Shell': 'shell',
  'Tortoiseshell': 'tortoiseshell',
  'Tagua Nut': 'tagua-nut',
  
  // Man-Made
  'Synthetic Diamond': 'synthetic-diamond',
  'Synthetic Ruby': 'synthetic-ruby',
  'Synthetic Sapphire': 'synthetic-sapphire',
  'Synthetic Spinel': 'synthetic-spinel',
  'Synthetic Quartz': 'synthetic-quartz',
  'Synthetic Quartz Crystal Clusters': 'synthetic-quartz',
  'Synthetic Emerald': 'synthetic-emerald',
  'Synthetic Alexandrite': 'synthetic-alexandrite',
  'Synthetic Moissanite': 'moissanite',
  'Synthetic Aquamarine': 'synthetic-aquamarine',
  'Synthetic Topaz': 'synthetic-topaz',
  'Synthetic Opal': 'synthetic-opal',
  'Synthetic Jadeite': 'synthetic-jadeite',
  'Synthetic Lapis Lazuli': 'synthetic-lapis-lazuli',
  'Synthetic Turquoise': 'synthetic-turquoise',
  'Synthetic Malachite': 'synthetic-malachite',
  'Cubic Zirconia': 'cubic-zirconia',
  'Opalite': 'opalite',
  'Swarovski Crystal': 'swarovski-crystal',
  'Bismuth Crystal': 'bismuth',
  'Glass Gemstones': 'glass',
  'Goldstone': 'goldstone',
  'Paste': 'paste',
  'YAG': 'yag',
  'GGG': 'ggg',
  'Lab-Created Garnet': 'lab-created-garnet',
  'Neoceram': 'neoceram',
  'Glass-filled Gems': 'glass-filled-gems',
  'Iridescent Glass': 'iridescent-glass',
  'Triplets & Doublets': 'triplets-doublets',
  'Synthetic Opal Doublet': 'synthetic-opal-doublet',
  'Lab-Created Emerald Overgrowth': 'lab-created-emerald',
  'Reconstituted Stones': 'reconstituted-stones',
  'Foil-Backed or Coated Stones': 'foil-backed-stones',
  'Girdled Stones': 'girdled-stones',
  'Resin-Impregnated Stones': 'resin-impregnated-stones',
  'Acrylic / Polymer Gems': 'acrylic-polymer-gems',
  
  // Extended Natural
  'Amblygonite': 'amblygonite',
  'Andalusite': 'andalusite',
  'Axinite': 'axinite',
  'Azurite': 'azurite',
  'Brookite': 'brookite',
  'Charoite': 'charoite',
  'Chrysocolla': 'chrysocolla',
  'Clinohumite': 'clinohumite',
  'Diaspore (Zultanite)': 'zultanite',
  'Dioptase': 'dioptase',
  'Dravite': 'dravite',
  'Dumortierite': 'dumortierite',
  'Ekanite': 'ekanite',
  'Enstatite': 'enstatite',
  'Euclase': 'euclase',
  'Fluorite (Collector-grade)': 'fluorite',
  'Gaspeite': 'gaspeite',
  'Grandidierite': 'grandidierite',
  'Hackmanite': 'hackmanite',
  'Hemimorphite': 'hemimorphite',
  'Hessonite': 'hessonite',
  'Howlite': 'howlite',
  'Idocrase (Vesuvianite)': 'vesuvianite',
  'Iolite (Uncommon grades)': 'iolite',
  'Jeremejevite': 'jeremejevite',
  'Kornerupine': 'kornerupine',
  'Kämmererite': 'kammererite',
  'Larimar': 'larimar',
  'Lazulite': 'lazulite',
  'Liddicoatite': 'liddicoatite',
  'Magnesite': 'magnesite',
  'Musgravite': 'musgravite',
  'Muscovite': 'muscovite',
  'Painite': 'painite',
  'Pectolite': 'pectolite',
  'Petalite': 'petalite',
  'Pietersite': 'pietersite',
  'Prehnite (Collector grades)': 'prehnite',
  'Scapolite': 'scapolite',
  'Seraphinite': 'seraphinite',
  'Serendibite': 'serendibite',
  'Shattuckite': 'shattuckite',
  'Smithsonite': 'smithsonite',
  'Sphalerite': 'sphalerite',
  'Sphene (Titanite)': 'sphene',
  'Stichtite': 'stichtite',
  'Sugilite': 'sugilite',
  'Taaffeite': 'taaffeite',
  'Thulite': 'thulite',
  'Tremolite': 'tremolite',
  'Variscite': 'variscite',
  'Vesuvianite': 'vesuvianite',
  'Zoisite': 'zoisite'
}

const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'gems')

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true })
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(filepath)
    
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close()
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath)
        }
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject)
      } else {
        file.close()
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath)
        }
        reject(new Error(`Failed to download: ${response.statusCode}`))
      }
    })
    
    request.on('error', (err) => {
      file.close()
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
      }
      reject(err)
    })
    
    request.setTimeout(10000, () => {
      request.destroy()
      file.close()
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
      }
      reject(new Error('Request timeout'))
    })
  })
}

async function downloadGemImage(gemName) {
  const normalizedName = gemNameMap[gemName] || gemName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')
  const filename = `${normalizedName}.jpg`
  const filepath = path.join(assetsDir, filename)
  
  // Skip if already exists
  if (fs.existsSync(filepath)) {
    console.log(`✓ ${gemName} already exists`)
    return
  }
  
  // Try multiple URL patterns for GemSelect
  const urls = [
    `https://www.gemselect.com/gem-info/${normalizedName}/${normalizedName}-gem.jpg`,
    `https://www.gemselect.com/gem-info/${normalizedName}/${normalizedName}.jpg`,
    `https://www.gemselect.com/images/${normalizedName}.jpg`,
    `https://www.gemselect.com/gem-info/${normalizedName}/images/${normalizedName}.jpg`,
    `https://www.gemselect.com/other-info/gem-images/${normalizedName}.jpg`,
    `https://www.gemselect.com/gem-info/${normalizedName}/gem-image.jpg`
  ]
  
  for (const url of urls) {
    try {
      console.log(`Downloading ${gemName} from ${url}...`)
      await downloadImage(url, filepath)
      console.log(`✓ Downloaded ${gemName}`)
      return
    } catch (error) {
      // Try next URL
      continue
    }
  }
  
  console.log(`✗ Failed to download ${gemName}`)
}

// Get all gem names from the component
const allGems = [
  // Precious
  'Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Alexandrite', 'Benitoite', 'Jadeite', 'Paraiba Tourmaline', 'Red Spinel',
  // Semi-Precious
  'Agate', 'Amazonite', 'Amethyst', 'Ametrine', 'Apatite', 'Aquamarine', 'Aventurine', 'Bloodstone', 'Carnelian',
  'Chalcedony', 'Chrysoprase', 'Citrine', 'Fluorite', 'Garnet', 'Goshenite', 'Heliodor', 'Hematite', 'Howlite',
  'Iolite', 'Jasper', 'Kyanite', 'Labradorite', 'Lapis Lazuli', 'Larimar', 'Lepidolite', 'Malachite', 'Moonstone',
  'Morganite', 'Obsidian', 'Onyx', 'Opal', 'Peridot', 'Prehnite', 'Pyrite', 'Rainbow Moonstone', 'Rhodochrosite',
  'Rhodonite', 'Rose Quartz', 'Serpentine', 'Smoky Quartz', 'Sodalite', 'Spinel', 'Sunstone', 'Tanzanite',
  'Tiger\'s Eye', 'Topaz', 'Tourmaline', 'Turquoise', 'Unakite', 'Zircon', 'Tsavorite', 'Dumortierite',
  // Organic Gems
  'Amber', 'Ammolite', 'Bone', 'Bog Oak', 'Coral', 'Copal', 'Fossilized Wood', 'Ivory', 'Jet',
  'Mother-of-Pearl', 'Nacre', 'Odontolite', 'Pearl', 'Shell', 'Tortoiseshell', 'Tagua Nut'
]

// Download images with delay to avoid rate limiting
async function downloadAll() {
  console.log('Starting gem image downloads...\n')
  for (let i = 0; i < allGems.length; i++) {
    await downloadGemImage(allGems[i])
    // Add delay between downloads
    if (i < allGems.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
  console.log('\nDownload complete!')
}

downloadAll().catch(console.error)

