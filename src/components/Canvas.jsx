import React, { Suspense, useMemo } from 'react'
import { Canvas as R3FCanvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture, Environment } from '@react-three/drei'
import { MeshStandardMaterial, MeshPhysicalMaterial, PlaneGeometry, Color, DoubleSide, TextureLoader, RepeatWrapping, Mesh, Box3, Vector3, Vector2 } from 'three'
import './Canvas.css'

// Enhanced color extraction function
const extractColorFromName = (colorName) => {
  if (!colorName) return '#808080'
  
  const name = colorName.toLowerCase().trim()
  
  // Direct color keyword matching (most specific first)
  if (name.includes('colorless') || name.includes('diamond') || name === 'white' || name.includes('pearl')) {
    if (name.includes('faint') || name.includes('light') || name.includes('near')) return '#F5F5F5'
    return '#FAFAF8'
  }
  if (name.includes('black') || name.includes('onyx') || name.includes('obsidian') || name.includes('jet')) return '#0A0A0A'
  if (name.includes('red') || name.includes('ruby') || name.includes('crimson') || name.includes('scarlet') || name.includes('garnet') || name.includes('blood')) {
    if (name.includes('deep') || name.includes('burgundy') || name.includes('wine') || name.includes('pigeon')) return '#8B0000'
    if (name.includes('pink')) return '#FF69B4'
    if (name.includes('orange')) return '#FF4500'
    if (name.includes('purple')) return '#8B008B'
    return '#DC143C'
  }
  if (name.includes('blue') || name.includes('sapphire') || name.includes('aqua') || name.includes('cyan') || name.includes('lapis')) {
    if (name.includes('deep') || name.includes('navy') || name.includes('midnight') || name.includes('royal')) return '#00008B'
    if (name.includes('light') || name.includes('sky') || name.includes('powder') || name.includes('pale')) return '#87CEEB'
    if (name.includes('cornflower')) return '#6495ED'
    if (name.includes('steel')) return '#4682B4'
    if (name.includes('turquoise') || name.includes('teal')) return '#40E0D0'
    return '#1E90FF'
  }
  if (name.includes('green') || name.includes('emerald') || name.includes('jade') || name.includes('malachite') || name.includes('peridot')) {
    if (name.includes('deep') || name.includes('forest') || name.includes('dark')) return '#006400'
    if (name.includes('light') || name.includes('mint') || name.includes('pale') || name.includes('sage')) return '#90EE90'
    if (name.includes('yellow')) return '#9ACD32'
    if (name.includes('blue')) return '#008B8B'
    if (name.includes('apple') || name.includes('lime')) return '#32CD32'
    return '#228B22'
  }
  if (name.includes('yellow') || name.includes('gold') || name.includes('citrine') || name.includes('topaz') || name.includes('amber')) {
    if (name.includes('fancy') && name.includes('vivid')) return '#FFD700'
    if (name.includes('fancy') && name.includes('intense')) return '#FFA500'
    if (name.includes('fancy') || name.includes('light') || name.includes('pale')) return '#FFFFE0'
    if (name.includes('dark') || name.includes('deep')) return '#B8860B'
    if (name.includes('gold')) return '#FFD700'
    return '#FFD700'
  }
  if (name.includes('pink') || name.includes('rose') || name.includes('morganite') || name.includes('rhodochrosite') || name.includes('rhodonite')) {
    if (name.includes('fancy') && name.includes('vivid')) return '#FF1493'
    if (name.includes('fancy') && name.includes('intense')) return '#FF69B4'
    if (name.includes('fancy') || name.includes('light') || name.includes('dusty')) return '#FFB6C1'
    if (name.includes('hot') || name.includes('bright')) return '#FF69B4'
    return '#FFC0CB'
  }
  if (name.includes('purple') || name.includes('amethyst') || name.includes('violet') || name.includes('tanzanite') || name.includes('tourmaline')) {
    if (name.includes('deep') || name.includes('dark')) return '#4B0082'
    if (name.includes('light') || name.includes('lavender') || name.includes('lilac') || name.includes('mauve')) return '#E6E6FA'
    if (name.includes('plum')) return '#8B008B'
    return '#9370DB'
  }
  if (name.includes('orange') || name.includes('coral') || name.includes('rust') || name.includes('amber') || name.includes('sunstone')) {
    if (name.includes('burnt') || name.includes('deep')) return '#CC5500'
    if (name.includes('peach') || name.includes('apricot') || name.includes('light')) return '#FFDAB9'
    return '#FF8C00'
  }
  if (name.includes('brown') || name.includes('tan') || name.includes('cognac') || name.includes('chocolate') || name.includes('coffee') || name.includes('mocha') || name.includes('chestnut') || name.includes('mahogany') || name.includes('walnut')) {
    if (name.includes('dark') || name.includes('deep')) return '#654321'
    if (name.includes('light') || name.includes('caramel') || name.includes('honey')) return '#DEB887'
    if (name.includes('cognac')) return '#8B4513'
    if (name.includes('tan')) return '#D2B48C'
    if (name.includes('mocha')) return '#6F4E37'
    if (name.includes('chocolate')) return '#7B3F00'
    return '#8B4513'
  }
  if (name.includes('grey') || name.includes('gray') || name.includes('silver') || name.includes('smoky') || name.includes('slate') || name.includes('stone')) {
    if (name.includes('charcoal') || name.includes('dark') || name.includes('gunmetal')) return '#2F2F2F'
    if (name.includes('light') || name.includes('ash')) return '#D3D3D3'
    if (name.includes('slate')) return '#708090'
    if (name.includes('stone')) return '#8B8680'
    return '#808080'
  }
  if (name.includes('beige') || name.includes('cream') || name.includes('ivory') || name.includes('champagne') || name.includes('taupe')) {
    if (name.includes('beige')) return '#F5F5DC'
    if (name.includes('cream')) return '#FFFDD0'
    if (name.includes('ivory')) return '#FFFFF0'
    if (name.includes('taupe')) return '#8B8589'
    return '#F5F5DC'
  }
  if (name.includes('platinum') || name.includes('white gold')) return '#E5E4E2'
  if (name.includes('rose gold')) return '#E8B4A0'
  
  // Additional leather-specific colors
  if (name.includes('nappa') || name.includes('calfskin') || name.includes('suede') || name.includes('nubuck')) {
    // These are leather types, extract the color from the name
    if (name.includes('black')) return '#0A0A0A'
    if (name.includes('brown')) return '#8B4513'
    if (name.includes('tan')) return '#D2B48C'
    if (name.includes('cognac')) return '#8B4513'
    if (name.includes('navy')) return '#1A1F3A'
    if (name.includes('burgundy')) return '#4A0E0E'
    if (name.includes('grey') || name.includes('gray')) return '#808080'
    if (name.includes('charcoal')) return '#2F2F2F'
    return '#2F2F2F' // Default to dark for leather
  }
  
  // Special gem colors
  if (name.includes('opal') || name.includes('opalescent')) return '#E0E0E0'
  if (name.includes('rainbow') || name.includes('iridescent') || name.includes('holographic')) return '#FF1493'
  if (name.includes('bi-color') || name.includes('parti-color') || name.includes('multi-color')) return '#9370DB'
  if (name.includes('color change') || name.includes('alexandrite')) return '#00FF7F'
  
  return '#808080' // Default grey
}

// Color mapping utility (matches ConfigurationPanel)
const getColorHex = (colorName) => {
  if (!colorName) return '#6B6B6B'
  
  // Use the exact same color map as ConfigurationPanel.jsx to ensure consistency
  const colorMap = {
    // Neutrals - sophisticated and natural
    'Black': '#0A0A0A', 'White': '#FAFAF8', 'Ivory': '#F5F3ED', 'Cream': '#F0EDE1',
    'Beige': '#E8E3D5', 'Taupe': '#8B7D6B', 'Brown': '#5C4033', 'Cognac': '#8B4513', 'Tan': '#C19A6B',
    'Grey': '#6B6B6B', 'Charcoal': '#2F2F2F', 'Slate': '#5A5A5A', 'Stone': '#8B8680',
    
    // Blues - deep and refined
    'Navy': '#1A1F3A', 'Royal': '#2C3E7A', 'Midnight': '#1A1A2E', 'Sky': '#B8D4E3', 'Powder': '#D0E4E8',
    'Blue': '#1E3A8A', 'Deep Blue': '#1E40AF', 'Royal Blue': '#2563EB', 'Cornflower Blue': '#3B82F6', 'Light Blue': '#60A5FA', 'Green-Blue': '#0891B2', 'Teal': '#14B8A6', 'Turquoise': '#06B6D4', 'Neon Blue': '#00BFFF', 'Violet-Blue': '#6366F1',
    
    // Reds - rich and elegant
    'Red': '#8B0000', 'Burgundy': '#4A0E0E', 'Wine': '#5C1A1A', 'Crimson': '#8B1A1A', 'Scarlet': '#8B1C1C',
    'Deep Red': '#6B0000', 'Pink-Red': '#C2185B', 'Purple-Red': '#7B1FA2', 'Orange-Red': '#D84315',
    
    // Pinks - soft and refined
    'Pink': '#D4A5A5', 'Rose': '#C97D7D', 'Blush': '#D4A5A5', 'Fuchsia': '#B85C8B', 'Magenta': '#8B4789',
    'Salmon': '#FA8072', 'Peach': '#E8C9A5',
    
    // Purples - sophisticated
    'Purple': '#5D4E75', 'Lavender': '#B8A9C9', 'Violet': '#6B4C7A', 'Plum': '#6B4C6B', 'Amethyst': '#8B7D9B',
    'Deep Purple': '#4A148C', 'Pink-Purple': '#9C27B0',
    
    // Greens - natural and earthy
    'Green': '#4A5D23', 'Forest': '#2F4F2F', 'Emerald': '#3D6B3D', 'Olive': '#6B6B3D', 'Sage': '#9CAF88', 'Mint': '#B8D4B8',
    'Deep Green': '#1B5E20', 'Forest Green': '#2E7D32', 'Emerald Green': '#2E7D32', 'Mint Green': '#81C784', 'Light Green': '#A5D6A7', 'Yellow-Green': '#8BC34A', 'Olive Green': '#689F38', 'Neon Green': '#39FF14',
    
    // Yellows/Golds - warm and luxurious
    'Yellow': '#D4AF37', 'Gold': '#C9A961', 'Amber': '#D4A85C', 'Mustard': '#C9A85C', 'Champagne': '#E8DCC0',
    'Golden': '#FFD700', 'Honey': '#F0A500', 'Caramel': '#D2691E',
    
    // Oranges - warm and natural
    'Orange': '#C97D3D', 'Coral': '#D4A5A5', 'Rust': '#8B4513', 'Terracotta': '#A85C3D',
    
    // Diamond colors
    'Colorless': '#F5F5F5', 'Near Colorless': '#F0F0F0', 'Faint Yellow': '#FFFACD', 'Light Yellow': '#FFE4B5', 'Very Light Yellow': '#FFEFD5',
    'Fancy Yellow': '#FFD700', 'Fancy Intense Yellow': '#FFC125', 'Fancy Vivid Yellow': '#FFD700',
    'Fancy Pink': '#FFB6C1', 'Fancy Intense Pink': '#FF69B4', 'Fancy Vivid Pink': '#FF1493',
    'Fancy Blue': '#87CEEB', 'Fancy Intense Blue': '#4169E1', 'Fancy Vivid Blue': '#0000FF',
    'Fancy Green': '#90EE90', 'Fancy Intense Green': '#32CD32', 'Fancy Vivid Green': '#00FF00',
    'Fancy Brown': '#A0522D', 'Fancy Intense Brown': '#8B4513', 'Fancy Orange': '#FFA500', 'Fancy Red': '#DC143C', 'Fancy Purple': '#9370DB',
    'Fancy Deep': '#4B0082', 'Fancy Dark': '#2F2F2F', 'Fancy Light': '#F0F0F0',
    
    // Special gem colors
    'Color Change': '#4A90E2', 'Padparadscha': '#FF6B6B', 'Watermelon': '#FF6B9D',
    
    // Metallics - realistic metal tones
    'Metallic': '#8B8B8B', 'Bronze': '#8B6B3D', 'Copper': '#B87333', 'Gunmetal': '#2C2C2C', 'Silver': '#A8A8A8',
    
    // Special colors
    'Pearl': '#F5F0E8', 'Natural': '#D4C5A9', 'Rainbow': '#8B7D6B', 'Indigo': '#4B0082',
    'Light Blue': '#ADD8E6', 'Light Pink': '#FFB6C1', 'Dusty Rose': '#B76E79', 'Mauve': '#E0B0FF',
    'Apple Green': '#8DB600', 'Dark Green': '#006400', 'Dark Blue': '#00008B', 'Dark Brown': '#654321',
    'Ruby Red': '#DC143C', 'Amethyst Purple': '#9966CC', 'Sapphire Blue': '#0F52BA', 'Emerald Green': '#50C878',
    'Holographic': '#FF6B9D', 'Opalescent': '#F5F5DC',
    
    // Additional Red shades
    'Cherry': '#DE3163', 'Brick': '#B22222', 'Maroon': '#800000', 'Rosewood': '#65000B',
    
    // Additional Blue shades
    'Cyan': '#00FFFF', 'Aqua': '#00CED1', 'Steel Blue': '#4682B4', 'Slate Blue': '#6A5ACD', 'Periwinkle': '#CCCCFF',
    
    // Additional Green shades
    'Jade': '#00A86B', 'Lime': '#32CD32', 'Sea Green': '#2E8B57', 'Hunter Green': '#355E3B',
    
    // Additional Yellow/Gold shades
    'Butter': '#FFFACD', 'Lemon': '#FFF700', 'Canary': '#FFEF00',
    
    // Additional Orange shades
    'Apricot': '#FBCEB1', 'Tangerine': '#FF9500', 'Burnt Orange': '#CC5500', 'Pumpkin': '#FF7518',
    
    // Additional Pink shades
    'Hot Pink': '#FF69B4', 'Bubblegum': '#FFC1CC', 'Rose Gold': '#E8B4A0',
    
    // Additional Purple shades
    'Lilac': '#C8A2C8', 'Orchid': '#DA70D6', 'Grape': '#6F2DA8',
    
    // Additional Brown/Tan shades
    'Chocolate': '#7B3F00', 'Coffee': '#6F4E37', 'Mocha': '#967969', 'Chestnut': '#954535', 'Mahogany': '#C04000', 'Walnut': '#5C4033',
    
    // Additional Neutral shades
    'Ash': '#B2BEB5', 'Smoke': '#738276',
    
    // Gem-specific colors
    'Pigeon Blood Red': '#DC143C', 'Burmese Red': '#B22222', 'Thai Red': '#C41E3A', 'Mozambique Red': '#8B0000',
    'Blood Red': '#8B0000', 'Vivid Red': '#DC143C', 'Intense Red': '#B22222',
    'Medium Green': '#4CAF50', 'Pale Green': '#98FB98', 'Vivid Green': '#00FF00', 'Intense Green': '#32CD32',
    'Bluish Green': '#00CED1', 'Yellowish Green': '#9ACD32', 'Grass Green': '#7CFC00', 'Leaf Green': '#6B8E23',
    'Blue-Green': '#0891B2', 'Greenish Blue': '#008B8B',
    'Sky Blue': '#87CEEB', 'Sea Blue': '#006994', 'Pale Blue': '#B0E0E6', 'Medium Blue': '#0000CD',
    'Azure': '#007FFF', 'Ultramarine': '#4166F5', 'Veined Blue': '#1E3A8A',
    'Caribbean Blue': '#1B9CFC', 'White-Blue': '#E0F6FF', 'Electric Blue': '#0891B2',
    'Imperial Green': '#008000', 'Moss Green': '#8A9A5B', 'Spinach Green': '#778F3F',
    'Rose de France': '#E6B8B8', 'Siberian': '#9370DB', 'Uruguayan': '#8B4789',
    'Madeira': '#FFA500', 'Pale Yellow': '#FFFFE0', 'Dark Yellow': '#B8860B',
    'Orange-Yellow': '#FFA500', 'Golden Yellow': '#FFD700', 'Lime Yellow': '#32CD32',
    'Canary Yellow': '#FFEF00', 'Crystal Clear': '#F5F5F5',
    'Metallic Grey': '#808080', 'Steel Grey': '#708090', 'Brown-Black': '#2F2F2F',
    'Off-White': '#FAF0E6', 'Light Grey': '#D3D3D3',
    'Grey-Blue': '#5F9EA0', 'Blue-Violet': '#8A2BE2',
    'Cobalt Blue': '#0047AB', 'Lavender': '#B8A9C9',
    'Trichroic': '#9370DB', 'Bi-color': '#8B7D6B', 'Parti-color': '#8B7D6B', 'Multi-color': '#8B7D6B',
    'Spectrolite': '#4B0082', 'Rainbow': '#FF6B9D', 'Play of Color': '#FF6B9D',
    'Chatoyant': '#D4AF37', 'Aventurescent': '#FFA500',
    'Angel Skin': '#FFB6C1', 'Oxblood': '#4A0E0E',
    'Tahitian': '#2F2F2F', 'Akoya': '#F5F5F5', 'South Sea': '#FFD700', 'Freshwater': '#F5F5F5',
    'Tiger Striped': '#8B4513', 'Mottled Brown': '#8B4513', 'Mottled': '#8B7D6B',
    'Epidote Green': '#6B8E23', 'Mottled Green-Pink': '#8B7D6B',
    'Banded': '#8B7D6B', 'Banded Green': '#6B8E23', 'Banded Pink': '#FFB6C1',
    'Veined': '#8B7D6B', 'Spotted Green': '#6B8E23', 'Spiderweb': '#8B7D6B', 'Matrix': '#8B7D6B',
    'Robin\'s Egg': '#00CED1', 'Persian': '#1E90FF', 'Sleeping Beauty': '#00CED1',
    'London Blue': '#0047AB', 'Swiss Blue': '#4169E1', 'Mystic': '#9370DB',
    'Sherry': '#D2691E', 'Imperial': '#FF4500', 'Starlight': '#F5F5F5',
    'Rhodolite': '#C2185B', 'Spessartine': '#FF4500', 'Hessonite': '#FF8C00',
    'Demantoid': '#32CD32', 'Uvarovite': '#228B22',
    'Rubellite': '#DC143C', 'Indicolite': '#4169E1', 'Verdelite': '#32CD32', 'Achroite': '#F5F5F5',
    'Daylight Green': '#32CD32', 'Incandescent Red': '#DC143C',
    'Butterscotch': '#D2691E', 'Reddish': '#DC143C', 'Greenish': '#32CD32',
    'Cairngorm': '#8B7355', 'Adularia': '#F5F5F5',
    // Diamond color grades (with parentheses)
    'Colorless (D-F)': '#F5F5F5', 'Near Colorless (G-J)': '#F0F0F0', 'Faint Yellow (K-M)': '#FFFACD', 'Very Light Yellow (N-R)': '#FFEFD5', 'Light Yellow (S-Z)': '#FFE4B5',
    // Additional gem names
    'Diamond': '#FAFAF8', 'Ruby': '#8B0000', 'Sapphire': '#1E3A8A', 'Emerald': '#3D6B3D',
    'Amethyst': '#8B7D9B', 'Topaz': '#D4AF37', 'Pearl': '#F5F3ED', 'Opal': '#E8E8E8',
    'Garnet': '#8B1A1A', 'Aquamarine': '#B8D4E3', 'Peridot': '#9CAF88', 'Citrine': '#D4A85C',
    'Tanzanite': '#6B4C7A', 'Tourmaline': '#8B7D9B',
    'Alexandrite': '#00FF7F', 'Benitoite': '#1E90FF', 'Jadeite': '#00A86B', 'Paraiba Tourmaline': '#00CED1',
    'Red Spinel': '#DC143C', 'Agate': '#CD853F', 'Amazonite': '#00CED1', 'Ametrine': '#9370DB',
    'Apatite': '#1E90FF', 'Aventurine': '#228B22', 'Bloodstone': '#8B0000', 'Carnelian': '#DC143C',
    'Chalcedony': '#E0E0E0', 'Chrysoprase': '#90EE90', 'Fluorite': '#9370DB', 'Goshenite': '#FAFAF8',
    'Heliodor': '#FFD700', 'Hematite': '#2F2F2F', 'Howlite': '#F5F5F5', 'Iolite': '#4B0082',
    'Jasper': '#CD853F', 'Kyanite': '#4169E1', 'Labradorite': '#4682B4', 'Lapis Lazuli': '#191970',
    'Larimar': '#00CED1', 'Lepidolite': '#DA70D6', 'Malachite': '#228B22', 'Moonstone': '#E0E0E0',
    'Morganite': '#FFB6C1', 'Obsidian': '#000000', 'Onyx': '#000000', 'Prehnite': '#90EE90',
    'Pyrite': '#FFD700', 'Rainbow Moonstone': '#E0E0E0', 'Rhodochrosite': '#FF69B4', 'Rhodonite': '#FF69B4',
    'Rose Quartz': '#FFB6C1', 'Serpentine': '#228B22', 'Smoky Quartz': '#696969', 'Sodalite': '#191970',
    'Spinel': '#DC143C', 'Sunstone': '#FFD700', 'Tiger\'s Eye': '#CD853F', 'Turquoise': '#40E0D0',
    'Unakite': '#90EE90', 'Zircon': '#FAFAF8', 'Tsavorite': '#228B22', 'Dumortierite': '#4169E1',
    // Organic gems
    'Amber': '#FF8C00', 'Ammolite': '#FF1493', 'Coral': '#FF7F50', 'Copal': '#FFD700',
    'Fossilized Wood': '#8B4513', 'Jet': '#000000', 'Mother-of-Pearl': '#F0E68C',
    'Nacre': '#F0E68C', 'Odontolite': '#00CED1', 'Shell': '#FFF8DC', 'Tortoiseshell': '#8B4513',
    'Tagua Nut': '#F5DEB3',
    // Special effects
    'Iridescent': '#FF1493',
    // Metallics
    'Chrome': '#E8E8E8', 'Nickel': '#C0C0C0', 'Titanium': '#878681', 'Brass': '#B5A642', 'Palladium': '#E5E4E2', 'Rhodium': '#E5E4E2', 'Steel': '#71797E',
    'Platinum': '#E5E4E2', 'Champagne Gold': '#F7E7CE',
  }
  
  // First try exact match
  if (colorMap[colorName]) {
    return colorMap[colorName]
  }
  
  // If not found, use enhanced extraction
  return extractColorFromName(colorName)
}

const getMetalColorHex = (colorName) => {
  const metalColorMap = {
    'Gold': '#C9A961', 'Rose Gold': '#E8B4A0', 'White Gold': '#F5F5DC', 'Platinum': '#E5E4E2', 'Champagne Gold': '#F7E7CE',
    '18K Gold': '#D4AF37', '14K Gold': '#C9A961', '22K Gold': '#E6C200', '24K Gold': '#FFD700',
    'Silver': '#C0C0C0', 'Sterling Silver': '#C0C0C0', 'White Silver': '#F5F5F5', 'Gunmetal Silver': '#2C2C2C',
    'Platinum': '#E5E4E2', 'White Platinum': '#E5E4E2', 'Grey Platinum': '#A8A8A8',
    'Brass': '#B5A642', 'Bronze': '#8B6B3D', 'Copper': '#B87333', 'Chrome': '#E8E8E8', 'Nickel': '#C0C0C0',
    'Titanium': '#878681', 'Steel': '#71797E', 'Gunmetal': '#2C2C2C',
  }
  return metalColorMap[colorName] || getColorHex(colorName)
}

// Load metal textures for heel (with fallback if textures don't exist)
function useMetalTextures() {
  const textureLoader = React.useMemo(() => new TextureLoader(), [])
  const [textures, setTextures] = React.useState({ 
    baseColor: null, 
    normal: null, 
    roughness: null, 
    metallic: null 
  })
  
  React.useEffect(() => {
    const basePath = '/assets/textures/metal/'
    
    // Helper function to load texture with error handling
    const loadTexture = (filename, onLoad) => {
      return textureLoader.load(
        basePath + filename,
        (texture) => {
          texture.wrapS = RepeatWrapping
          texture.wrapT = RepeatWrapping
          texture.repeat.set(2, 2)
          if (onLoad) onLoad(texture)
        },
        undefined,
        (error) => {
          console.log(`Metal texture ${filename} not found, using procedural material`)
        }
      )
    }
    
    // Load all textures
    const baseColor = loadTexture('metal_basecolor.jpg')
    const normal = loadTexture('metal_normal.jpg')
    const roughness = loadTexture('metal_roughness.jpg')
    const metallic = loadTexture('metal_metallic.jpg')
    
    setTextures({ baseColor, normal, roughness, metallic })
    
    // Cleanup function
    return () => {
      [baseColor, normal, roughness, metallic].forEach(texture => {
        if (texture) texture.dispose()
      })
    }
  }, [textureLoader])
  
  return textures
}

// Load brown leather textures for insole (optimized for performance - using JPG only)
function useBrownLeatherTextures() {
  const textureLoader = React.useMemo(() => new TextureLoader(), [])
  const [textures, setTextures] = React.useState({ 
    albedo: null, 
    normal: null
  })
  
  React.useEffect(() => {
    const basePath = '/assets/textures/brown_leather_4k/textures/'
    
    // Helper function to load JPG texture (much lighter than EXR)
    const loadJPGTexture = (filename, onLoad) => {
      textureLoader.load(
        basePath + filename,
        (texture) => {
          // Optimize texture settings for performance
          texture.wrapS = RepeatWrapping
          texture.wrapT = RepeatWrapping
          texture.generateMipmaps = true
          texture.minFilter = texture.constructor.LinearMipmapLinearFilter
          texture.magFilter = texture.constructor.LinearFilter
          texture.anisotropy = 2 // Reduced from default 16 for better performance
          if (onLoad) onLoad(texture)
        },
        undefined,
        (error) => {
          console.log(`Leather texture ${filename} not found`)
        }
      )
    }
    
    // Load only essential textures: albedo (color) and normal (surface detail)
    // Skip roughness, AO, and ARM maps for better performance
    loadJPGTexture('brown_leather_albedo_4k.jpg', (tex) => {
      setTextures(prev => ({ ...prev, albedo: tex }))
    })
    
    // Load normal map (JPG format for better performance)
    loadJPGTexture('brown_leather_nor_gl_4k.jpg', (tex) => {
      setTextures(prev => ({ ...prev, normal: tex }))
    })
    
    // Cleanup function
    return () => {
      setTextures(prev => {
        Object.values(prev).forEach(texture => {
          if (texture && texture.dispose) texture.dispose()
        })
        return { albedo: null, normal: null }
      })
    }
  }, [textureLoader])
  
  return textures
}

// Component to load and display the shoe model
function ShoeModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], configState = {}, onLoad }) {
  // Use environment variable for model URL, fallback to shoe2.5.glb
  const modelPath = import.meta.env.VITE_MODEL_URL || '/assets/shoe2.5.glb'
  const { scene } = useGLTF(modelPath)
  
  // Load brown leather textures directly for insole
  const brownLeatherTextures = useBrownLeatherTextures()
  
  // Load wood texture GLTF for wood meshes
  const woodTexturePath = '/assets/textures/rosewood_veneer1_4k/rosewood_veneer1_4k.gltf'
  const { scene: woodTextureScene } = useGLTF(woodTexturePath)
  
  // Load leather texture GLTF for outsole
  const outsoleLeatherTexturePath = '/assets/textures/leather_red_02_4k.gltf/leather_red_02_4k.gltf'
  const { scene: outsoleLeatherTextureScene } = useGLTF(outsoleLeatherTexturePath)
  
  // Metal textures disabled for now - was causing issues
  // const metalTextures = useMetalTextures()
  const metalTextures = { baseColor: null, normal: null, roughness: null, metallic: null }
  
  // Extract materials from wood texture GLTF
  const woodMaterials = React.useMemo(() => {
    if (!woodTextureScene) return null
    const materials = []
    woodTextureScene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          materials.push(...child.material)
        } else {
          materials.push(child.material)
        }
      }
    })
    return materials.length > 0 ? materials[0] : null // Use first material found
  }, [woodTextureScene])
  
  // Extract materials from outsole leather texture GLTF
  const outsoleLeatherMaterials = React.useMemo(() => {
    if (!outsoleLeatherTextureScene) return null
    const materials = []
    outsoleLeatherTextureScene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          materials.push(...child.material)
        } else {
          materials.push(child.material)
        }
      }
    })
    return materials.length > 0 ? materials[0] : null // Use first material found
  }, [outsoleLeatherTextureScene])
  
  // Notify parent when model is loaded
  React.useEffect(() => {
    if (scene && onLoad) {
      onLoad()
    }
  }, [scene, onLoad])
  
  // Clone the scene to avoid mutating the original
  const clonedScene = useMemo(() => {
    if (!scene) return null
    return scene.clone()
  }, [scene])
  
  // Update position, scale, and rotation when they change
  React.useEffect(() => {
    if (!clonedScene) return
    clonedScene.position.set(position[0], position[1], position[2])
    clonedScene.scale.set(scale, scale, scale)
    clonedScene.rotation.set(rotation[0], rotation[1], rotation[2])
  }, [clonedScene, position, scale, rotation])
  
  // Store mesh references by name for easy access
  const meshMap = React.useRef({})
  const meshFeatureMap = React.useRef({}) // Maps mesh to feature/category
  // Track which feature each color was selected for to prevent cross-feature color bleeding
  const colorFeatureMap = React.useRef({}) // Maps colorName to feature it was selected for
  // Store the last applied color for each feature/category to prevent unwanted updates
  const lastAppliedColors = React.useRef({}) // Format: { 'feature:category': colorName }
  // Track previous selectedColorName and activeFeature to detect genuine user selections vs tab switch defaults
  const previousSelectedColorNameRef = React.useRef(null)
  const previousActiveFeatureRef = React.useRef(null)
  
  // Initialize default colors on mount for beautiful initial display
  // This runs immediately (not in useEffect) to ensure colors are set before first render
  if (Object.keys(lastAppliedColors.current).length === 0) {
    lastAppliedColors.current['Gems:default'] = 'Red' // Agate Red from Semi-Precious
    lastAppliedColors.current['Crown:default'] = 'Fancy Green'
    lastAppliedColors.current['Cascade:default'] = 'Purple-Red'
    lastAppliedColors.current['Sole/Strap:Insole/Instrap/Micro Hardware'] = 'Black' // Black for insole
    lastAppliedColors.current['Sole/Strap:Outsole/Outstrap'] = 'Red' // Red for outsole
  }
  
  // Comprehensive mesh to feature/category mapping
  // This maps model mesh names to panel features and categories
  const createMeshMapping = (meshName) => {
    const name = meshName.toLowerCase()
    
    // Map to features and categories based on actual mesh names
    const mapping = {
      feature: null,
      category: null,
    }
    
    // Exact mesh name mappings (case-insensitive)
    // Handle various naming conventions including underscores, spaces, and different prefixes
    // IMPORTANT: Check outsole BEFORE heel to avoid conflicts with names like 'Outsole_Outstrap_Heel'
    if (name === 'g_insoleinstrapmicro_hardware' || name.includes('insoleinstrapmicro') || 
        name.includes('insole') || name.includes('instrap') || name.includes('micro_hardware')) {
      mapping.feature = 'Sole/Strap'
      mapping.category = 'Insole/Instrap/Micro Hardware'
    } else if (name === 'g_outsoleoutstrap' || name.includes('outsoleoutstrap') || 
               name.includes('outsole') || name.includes('outstrap')) {
      mapping.feature = 'Sole/Strap'
      mapping.category = 'Outsole/Outstrap'
    } else if (name === 'g_heel' || name === 'heel' || name === 'gheel' || name.includes('_heel') || 
        name.startsWith('heel') || name.endsWith('heel')) {
      mapping.feature = 'Heel'
      mapping.category = null // Heel has no categories
    } else if (name === 'g_cascade' || name === 'cascade' || name === 'gcascade' || 
               name.includes('_cascade') || name.startsWith('cascade') || name.endsWith('cascade')) {
      mapping.feature = 'Cascade'
      mapping.category = null // Cascade has categories but we'll handle them in the configurator
    } else if (name === 'g_gems' || name === 'gems' || name === 'ggems' || name === 'gem' ||
               name.includes('_gems') || name.includes('_gem') || name.startsWith('gem') || 
               name.endsWith('gem') || name.includes('stone') || name.includes('jewel') ||
               name.includes('diamond') || name.includes('ruby') || name.includes('sapphire') ||
               name.includes('emerald') || name.includes('amethyst')) {
      mapping.feature = 'Gems'
      mapping.category = null // Gems has categories but we'll handle them in the configurator
    } else if (name === 'g_crown' || name === 'crown' || name === 'gcrown' || 
               name.includes('_crown') || name.startsWith('crown') || name.endsWith('crown')) {
      mapping.feature = 'Crown'
      mapping.category = null // Crown has categories but we'll handle them in the configurator
    } else if (name === 'g_default' || name.includes('default') || name === 'body' || 
               name === 'main' || name === 'base' || name === 'shoe' || name === 'upper') {
      mapping.feature = 'Material & Structure'
      mapping.category = 'Base' // Default category for main body
    }
    
    // Fallback mappings for partial matches (in case of variations)
    // IMPORTANT: Check outsole BEFORE heel to avoid conflicts with names like 'Outsole_Outstrap_Heel'
    if (!mapping.feature) {
      if (name.includes('insole') || name.includes('instrap') || name.includes('micro')) {
        mapping.feature = 'Sole/Strap'
        mapping.category = 'Insole/Instrap/Micro Hardware'
      } else if (name.includes('outsole') || name.includes('outstrap')) {
        mapping.feature = 'Sole/Strap'
        mapping.category = 'Outsole/Outstrap'
      } else if (name.includes('heel')) {
        mapping.feature = 'Heel'
        mapping.category = null
      } else if (name.includes('cascade')) {
        mapping.feature = 'Cascade'
        mapping.category = null
      } else if (name.includes('gem')) {
        mapping.feature = 'Gems'
        mapping.category = null
      } else if (name.includes('crown')) {
        mapping.feature = 'Crown'
        mapping.category = null
      } else if (name.includes('sole') || name.includes('strap') || name.includes('hardware')) {
        // Generic sole/strap mapping
        mapping.feature = 'Sole/Strap'
        mapping.category = 'Outsole/Outstrap' // Default to outsole
      } else {
        // Default: map unmapped meshes to Material & Structure so they can still receive materials
        mapping.feature = 'Material & Structure'
        mapping.category = 'Base'
      }
    }
    
    return mapping
  }
  
  // Remove default materials and replace with controllable materials
  React.useEffect(() => {
    if (!clonedScene) return
    
    const meshNames = []
    const meshMappings = {}
    
    clonedScene.traverse((child) => {
      // Ensure all objects (including meshes and their parents) are visible
      child.visible = true
      
      if (child.isMesh) {
        const originalName = child.name || 'unnamed'
        const name = originalName.toLowerCase()
        meshNames.push(originalName)
        
        // Explicitly ensure mesh is visible
        child.visible = true
        
        // Create mapping for this mesh
        const mapping = createMeshMapping(originalName)
        meshMappings[originalName] = mapping
        
        // Store mesh reference
        if (!meshMap.current[name]) {
          meshMap.current[name] = []
        }
        meshMap.current[name].push(child)
        
        // Also check parent names and ensure parent is visible
        if (child.parent) {
          // Ensure parent is visible
          child.parent.visible = true
          
          const parentName = child.parent.name.toLowerCase()
          if (!meshMap.current[parentName]) {
            meshMap.current[parentName] = []
          }
          meshMap.current[parentName].push(child)
          
          // Also map based on parent name - prioritize parent mapping if it's more specific
          const parentMapping = createMeshMapping(child.parent.name)
          if (parentMapping.feature) {
            // If mesh doesn't have a mapping or parent has a more specific mapping, use parent's mapping
            if (!mapping.feature || (parentMapping.feature !== 'Material & Structure' && mapping.feature === 'Material & Structure')) {
            meshMappings[originalName] = parentMapping
              // Update the mapping for this mesh
              mapping.feature = parentMapping.feature
              mapping.category = parentMapping.category
            }
          }
        }
        
        // Get the mapping for this mesh to determine material type (use updated mapping)
        const meshMapping = meshMappings[originalName] || mapping
        
        // Determine default material properties based on feature
        // Always provide a default material, even if there's no mapping
        let defaultMaterialProps = {
          metalness: 0.7,
          roughness: 0.4,
          color: new Color(getColorHex('Silver')).getHex(), // Default to silver/aluminum
        }
        
        if (meshMapping) {
          if (meshMapping.feature === 'Heel') {
            // Precious metals - bright metallic appearance
            const goldColor = new Color(getMetalColorHex('Gold'))
            // Brighten the color for metals
            goldColor.multiplyScalar(1.3) // Make it brighter
            defaultMaterialProps = {
              metalness: 0.95, // High metalness but slightly reduced to allow more color
              roughness: 0.08, // Low roughness for polished, mirror-like metal surface
              color: goldColor.getHex(), // Brightened gold color
              usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
              clearcoat: 0.6, // Reduced clearcoat for lower contrast
              clearcoatRoughness: 0.3, // Rougher clearcoat for softer look
              sheen: 0.15, // Reduced sheen for metallic luster
              sheenRoughness: 0.3,
              specularIntensity: 0.0, // No specular highlights
              specularColor: new Color(1.0, 1.0, 1.0), // Neutral specular
              envMapIntensity: 0.3, // Reduced environment map intensity for lower contrast
              ior: 0.15, // Index of refraction for metals (very low)
            }
          } else if (meshMapping.feature === 'Gems') {
            // Check if user has already selected a color for Gems - if so, skip default
            // For Gems, use a single key for all categories
            const hasUserColor = !!lastAppliedColors.current['Gems:default']
            
            if (!hasUserColor) {
              // Gems - diamond/colorless default with rainbow internal reflections
            const diamondColor = new Color(getColorHex('Diamond'))
            defaultMaterialProps = {
              metalness: 0.0,
              roughness: 0.0,
              color: diamondColor.getHex(), // Diamond/colorless
              usePhysicalMaterial: true,
                transmission: 0.95, // Very high transmission for maximum internal reflections and sparkles
                thickness: 5.0, // Increased thickness for more internal light bouncing and rainbow sparkles
                ior: 2.42, // Diamond IOR - high IOR creates strong internal reflections and dispersion
                clearcoat: 0.4,
                clearcoatRoughness: 0.0, // Smooth clearcoat for diamond
                sheen: 0.2,
                sheenRoughness: 0.3,
                specularIntensity: 1.0, // Very high specular for maximum rainbow internal geometry reflections in diamonds
                specularColor: new Color(1.5, 0.7, 0.6), // Maximum chromatic specular for brightest rainbow internal geometry reflections
                envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
                opacity: 0.85, // A little transparent when viewing from center
                transparent: true, // Enable transparency
              }
            } else {
              // User has selected a color - skip default material setup
              return // Skip this mesh in default setup
            }
          } else if (meshMapping.feature === 'Crown') {
            // Check if user has already selected a color for Crown - if so, skip default
            const crownKey = 'Crown:default'
            const hasUserColor = !!lastAppliedColors.current[crownKey]
            
            if (!hasUserColor) {
              // Crown - solid gems, no transparency
            const diamondColor = new Color(getColorHex('Diamond'))
            defaultMaterialProps = {
              metalness: 0.0,
              roughness: 0.0, // Highly polished gems have near-zero roughness
              color: diamondColor.getHex(), // Diamond/colorless
              usePhysicalMaterial: true,
                transmission: 0.0, // No transmission - solid material
                thickness: 0.0, // No thickness needed for solid material
                ior: 1.58, // Emerald IOR - creates realistic internal reflections
                clearcoat: 0.1, // Subtle clearcoat for natural polished surface
                clearcoatRoughness: 0.0, // Smooth clearcoat like real polished gems
                sheen: 0.0,
                sheenRoughness: 1.0,
                specularIntensity: 1.0, // Very high specular for strong rainbow chromatic dispersion in internal geometry reflections
                specularColor: new Color(1.38, 0.78, 0.68), // Very strong chromatic specular for rainbow internal geometry reflections
                envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
                opacity: 1.0, // Solid - fully opaque
                transparent: false, // Solid crown gems - no transparency
              }
            } else {
              // User has selected a color - skip default material setup
              return // Skip this mesh in default setup
            }
          } else if (meshMapping.feature === 'Cascade') {
            // Check if user has already selected a color for Cascade - if so, skip default
            const cascadeKey = 'Cascade:default'
            const hasUserColor = !!lastAppliedColors.current[cascadeKey]
            
            if (!hasUserColor) {
              // Cascade - solid gems, no transparency
            const emeraldColor = new Color(getColorHex('Emerald'))
            defaultMaterialProps = {
              metalness: 0.0,
                roughness: 0.0, // Highly polished gems have near-zero roughness
              color: emeraldColor.getHex(), // Emerald green
              usePhysicalMaterial: true,
                transmission: 0.0, // No transmission - solid material
                thickness: 0.0, // No thickness needed for solid material
                ior: 1.58, // Emerald IOR - creates realistic internal reflections
                clearcoat: 0.1, // Subtle clearcoat for natural polished surface
                clearcoatRoughness: 0.0, // Smooth clearcoat like real polished gems
                sheen: 0.0,
                sheenRoughness: 1.0,
                specularIntensity: 1.0, // Very high specular for strong rainbow chromatic dispersion in internal geometry reflections
                specularColor: new Color(1.38, 0.78, 0.68), // Very strong chromatic specular for rainbow internal geometry reflections
                envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
                opacity: 1.0, // Solid - fully opaque
                transparent: false, // Solid cascade gems - no transparency
              }
            } else {
              // User has selected a color - skip default material setup
              return // Skip this mesh in default setup
            }
          } else if (meshMapping.feature === 'Sole/Strap') {
            // Determine if this is outsole (reflective/patent leather) or insole (matte leather)
            const isOutsole = meshMapping.category === 'Outsole/Outstrap'
            
            if (isOutsole) {
              // Outsole - patent/reflective leather with midnight blue default
              const midnightColor = new Color(getColorHex('Midnight'))
              defaultMaterialProps = {
                metalness: 0.2, // Increased metalness for more patent leather shine
                roughness: 0.05, // Very low roughness for highly reflective, mirror-like surface
                color: midnightColor.getHex(), // Midnight blue patent leather
                usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
              clearcoat: 0.0, // No clearcoat
              clearcoatRoughness: 1.0, // Rough clearcoat
              sheen: 0.0, // No sheen
              sheenRoughness: 1.0,
              envMapIntensity: 0.4, // Reduced environment map intensity for lower contrast
              }
            } else {
              // Insole - use leather texture from GLTF if available
              if (brownLeatherTextures && brownLeatherTextures.albedo) {
                // Use the material from the leather texture GLTF
                defaultMaterialProps = {
                  useLeatherTexture: true, // Flag to use texture material
                }
              } else {
                // Fallback to matte leather with black default
              const blackColor = new Color(getColorHex('Black'))
              defaultMaterialProps = {
                metalness: 0.0, // No metalness for matte leather
                roughness: 0.85, // High roughness for matte, textured leather
                color: blackColor.getHex(), // Black matte leather
                sheen: 0.2, // Subtle sheen for natural leather
                sheenRoughness: 0.5, // Rough sheen
                }
              }
            }
          } else if (meshMapping.feature === 'Material & Structure' || originalName === 'g_Default') {
            // Check if this is a wood mesh
            const isWood = meshMapping.category === 'Wood' || 
                          originalName.toLowerCase().includes('wood') ||
                          originalName.toLowerCase().includes('timber') ||
                          originalName.toLowerCase().includes('lumber')
            
            // Also check parent name for wood
            let parentIsWood = false
            if (child.parent) {
              const parentName = child.parent.name.toLowerCase()
              parentIsWood = parentName.includes('wood') || 
                            parentName.includes('timber') || 
                            parentName.includes('lumber')
            }
            
            if (isWood || parentIsWood) {
              // Use solid black material for all wood meshes
              defaultMaterialProps = {
                useWoodTexture: true, // Flag to use wood material (will be solid black)
              }
            } else {
            // Aluminum - brushed aluminum default
            const aluminumColor = new Color(getColorHex('Silver'))
            defaultMaterialProps = {
              metalness: 0.7,
              roughness: 0.4,
              color: aluminumColor.getHex(), // Aluminum/silver color
            }
          }
        }
        }
        
        // Remove all materials - dispose of existing materials
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              if (mat.map) mat.map.dispose()
              if (mat.normalMap) mat.normalMap.dispose()
              if (mat.roughnessMap) mat.roughnessMap.dispose()
              if (mat.metalnessMap) mat.metalnessMap.dispose()
              mat.dispose()
            })
          } else {
            if (child.material.map) child.material.map.dispose()
            if (child.material.normalMap) child.material.normalMap.dispose()
            if (child.material.roughnessMap) child.material.roughnessMap.dispose()
            if (child.material.metalnessMap) child.material.metalnessMap.dispose()
            child.material.dispose()
          }
        }
        
        // Create material based on defaultMaterialProps or use texture material
        // Check for insole and outsole meshes FIRST to apply textures
        const isInsoleMesh = meshMapping && meshMapping.feature === 'Sole/Strap' && meshMapping.category === 'Insole/Instrap/Micro Hardware'
        const isOutsoleMesh = meshMapping && meshMapping.feature === 'Sole/Strap' && meshMapping.category === 'Outsole/Outstrap'
        
        if (isOutsoleMesh && outsoleLeatherMaterials) {
          // Clone the leather material from GLTF for outsole with all texture maps
          const outsoleLeatherMat = outsoleLeatherMaterials.clone()
          
          // Ensure all texture maps are properly set
          if (outsoleLeatherMat.map) outsoleLeatherMat.map.needsUpdate = true
          if (outsoleLeatherMat.normalMap) {
            outsoleLeatherMat.normalMap.needsUpdate = true
            outsoleLeatherMat.normalScale = outsoleLeatherMat.normalScale || { x: 1, y: 1 }
          }
          if (outsoleLeatherMat.roughnessMap) {
            outsoleLeatherMat.roughnessMap.needsUpdate = true
          }
          if (outsoleLeatherMat.metalnessMap) {
            outsoleLeatherMat.metalnessMap.needsUpdate = true
          }
          if (outsoleLeatherMat.aoMap) {
            outsoleLeatherMat.aoMap.needsUpdate = true
          }
          
          // Enhance material properties for realistic leather
          outsoleLeatherMat.side = DoubleSide
          outsoleLeatherMat.needsUpdate = true
          
          // Convert to MeshPhysicalMaterial for better leather properties (sheen, clearcoat)
          let finalOutsoleLeatherMat = outsoleLeatherMat
          
          if (outsoleLeatherMat.isMeshStandardMaterial) {
            // Create a new MeshPhysicalMaterial with all texture maps from the original
            const physicalOutsoleMat = new MeshPhysicalMaterial({
              color: outsoleLeatherMat.color,
              map: outsoleLeatherMat.map,
              normalMap: outsoleLeatherMat.normalMap,
              normalScale: outsoleLeatherMat.normalScale || { x: 1, y: 1 },
              roughnessMap: outsoleLeatherMat.roughnessMap,
              metalnessMap: outsoleLeatherMat.metalnessMap,
              aoMap: outsoleLeatherMat.aoMap,
              emissiveMap: outsoleLeatherMat.emissiveMap,
              side: DoubleSide,
              // Outsole leather-specific properties for highly shiny, reflective appearance
              metalness: 0.3, // Increased metalness for more patent leather shine
              roughness: 0.02, // Very low roughness for highly reflective, mirror-like shiny surface
              sheen: 0.2, // Sheen for glossy appearance
              sheenRoughness: 0.2, // Smooth sheen for maximum shine
              sheenColor: new Color(0.8, 0.7, 0.6), // Warm leather sheen color
              clearcoat: 0.3, // Clearcoat for extra shine
              clearcoatRoughness: 0.1, // Smooth clearcoat for maximum shine
              envMapIntensity: 1.8, // Increased environment reflections for more shine
            })
            
            // Dispose old material
            outsoleLeatherMat.dispose()
            finalOutsoleLeatherMat = physicalOutsoleMat
          } else if (outsoleLeatherMat.isMeshPhysicalMaterial) {
            // For physical materials, enhance leather properties for maximum shine
            outsoleLeatherMat.metalness = 0.3
            outsoleLeatherMat.roughness = 0.02
            outsoleLeatherMat.sheen = 0.2
            outsoleLeatherMat.sheenRoughness = 0.2
            if (!outsoleLeatherMat.sheenColor) {
              outsoleLeatherMat.sheenColor = new Color(0.8, 0.7, 0.6) // Warm leather sheen
            }
            outsoleLeatherMat.clearcoat = 0.3
            outsoleLeatherMat.clearcoatRoughness = 0.1
            outsoleLeatherMat.envMapIntensity = 1.8
          }
          
          child.material = finalOutsoleLeatherMat
          child.userData.isOutsoleMesh = true
          child.userData.hasOutsoleLeatherTexture = true // Mark that this has leather texture
        } else if (isInsoleMesh) {
          // Create simple matte solid material for insole (no textures, no reflections)
          const insoleMat = new MeshStandardMaterial({
            color: new Color(defaultMaterialProps?.color || getColorHex('Brown')),
            side: DoubleSide,
            // Completely matte appearance - no shine, no reflections
            metalness: 0.0, // Not metallic
            roughness: 1.0, // Maximum roughness for completely matte finish
            envMap: null, // No environment map
            envMapIntensity: 0.0, // No environment reflections
          })
          
          // Ensure no textures are applied
          insoleMat.map = null
          insoleMat.normalMap = null
          insoleMat.roughnessMap = null
          insoleMat.metalnessMap = null
          insoleMat.aoMap = null
          insoleMat.emissiveMap = null
          
          insoleMat.needsUpdate = true
          
          child.material = insoleMat
          child.userData.isInsoleMesh = true
        } else if (defaultMaterialProps && defaultMaterialProps.useWoodTexture && woodMaterials) {
          // Clone the wood material from GLTF for wood meshes with all texture maps
          const woodMat = woodMaterials.clone()
          
          // Ensure all texture maps are properly set
          if (woodMat.map) woodMat.map.needsUpdate = true
          if (woodMat.normalMap) {
            woodMat.normalMap.needsUpdate = true
            woodMat.normalScale = woodMat.normalScale || { x: 1, y: 1 }
          }
          if (woodMat.roughnessMap) {
            woodMat.roughnessMap.needsUpdate = true
          }
          if (woodMat.metalnessMap) {
            woodMat.metalnessMap.needsUpdate = true
          }
          if (woodMat.aoMap) {
            woodMat.aoMap.needsUpdate = true
          }
          
          // Enhance material properties for realistic wood
          woodMat.side = DoubleSide
          woodMat.needsUpdate = true
          
          // Convert to MeshPhysicalMaterial for better wood properties (sheen, clearcoat)
          let finalWoodMat = woodMat
          
          if (woodMat.isMeshStandardMaterial) {
            // Create a new MeshPhysicalMaterial with solid black color
            const physicalWoodMat = new MeshPhysicalMaterial({
              color: 0x000000, // Solid black
              side: DoubleSide,
              // Wood-specific properties for realistic appearance
              metalness: 0.0, // Wood is not metallic
              roughness: 0.8, // Rough for natural wood texture
              sheen: 0.0, // No sheen for solid black
              sheenRoughness: 1.0,
              clearcoat: 0.0, // No clearcoat for solid black
              clearcoatRoughness: 1.0,
              envMapIntensity: 0.3, // Reduced environment map intensity
            })
            
            // Dispose old material
            woodMat.dispose()
            finalWoodMat = physicalWoodMat
          } else if (woodMat.isMeshPhysicalMaterial) {
            // For physical materials, set to solid black
            woodMat.color.setHex(0x000000) // Solid black
            woodMat.metalness = 0.0
            woodMat.roughness = 0.8
            woodMat.sheen = 0.0 // No sheen for solid black
            woodMat.sheenRoughness = 1.0
            woodMat.clearcoat = 0.0 // No clearcoat for solid black
            woodMat.clearcoatRoughness = 1.0
            woodMat.envMapIntensity = 0.3
            // Remove texture maps for solid color
            woodMat.map = null
            woodMat.normalMap = null
            woodMat.roughnessMap = null
            woodMat.metalnessMap = null
            woodMat.aoMap = null
            woodMat.emissiveMap = null
          }
          
          child.material = finalWoodMat
          child.userData.isWoodMesh = true
          child.userData.hasWoodTexture = true // Mark that this has wood texture
          child.material.needsUpdate = true
        } else if (defaultMaterialProps && defaultMaterialProps.usePhysicalMaterial) {
          // Create MeshPhysicalMaterial for outsole, heel, etc.
          const physicalProps = {
            color: new Color(defaultMaterialProps.color),
            metalness: defaultMaterialProps.metalness || 0.0,
            roughness: defaultMaterialProps.roughness || 0.0,
            side: DoubleSide
          }
          
          // Add physical material properties if they exist
          if (defaultMaterialProps.transmission !== undefined) physicalProps.transmission = defaultMaterialProps.transmission
          if (defaultMaterialProps.thickness !== undefined) physicalProps.thickness = defaultMaterialProps.thickness
          if (defaultMaterialProps.ior !== undefined) physicalProps.ior = defaultMaterialProps.ior
          if (defaultMaterialProps.clearcoat !== undefined) physicalProps.clearcoat = defaultMaterialProps.clearcoat
          if (defaultMaterialProps.clearcoatRoughness !== undefined) physicalProps.clearcoatRoughness = defaultMaterialProps.clearcoatRoughness
          if (defaultMaterialProps.sheen !== undefined) physicalProps.sheen = defaultMaterialProps.sheen
          if (defaultMaterialProps.sheenRoughness !== undefined) physicalProps.sheenRoughness = defaultMaterialProps.sheenRoughness
          if (defaultMaterialProps.specularIntensity !== undefined) physicalProps.specularIntensity = defaultMaterialProps.specularIntensity
          if (defaultMaterialProps.specularColor) physicalProps.specularColor = defaultMaterialProps.specularColor
          if (defaultMaterialProps.envMapIntensity !== undefined) physicalProps.envMapIntensity = defaultMaterialProps.envMapIntensity
          if (defaultMaterialProps.opacity !== undefined) physicalProps.opacity = defaultMaterialProps.opacity
          if (defaultMaterialProps.transparent !== undefined) physicalProps.transparent = defaultMaterialProps.transparent
          
          // Don't apply default materials to insole meshes - they should use leather textures
          if (!isInsoleMesh) {
            child.material = new MeshPhysicalMaterial(physicalProps)
            
            if (meshMapping && meshMapping.feature === 'Gems') {
              child.userData.isGemMesh = true
            } else if (meshMapping && meshMapping.feature === 'Cascade') {
              child.userData.isCascadeMesh = true
            } else if (meshMapping && meshMapping.feature === 'Crown') {
              child.userData.isCrownMesh = true
            }
          }
        } else if (defaultMaterialProps) {
          // Create MeshStandardMaterial for other materials
          // Don't apply default materials to insole meshes - they should use leather textures
          if (!isInsoleMesh) {
            // Ensure we have a valid color
            const materialColor = defaultMaterialProps.color || getColorHex('Silver')
          child.material = new MeshStandardMaterial({
              color: typeof materialColor === 'number' ? materialColor : new Color(materialColor).getHex(),
              metalness: defaultMaterialProps.metalness || 0.3,
              roughness: defaultMaterialProps.roughness || 0.7,
              side: DoubleSide
            })
          }
        } else {
          // Check if this might be a wood mesh before applying default
          const name = originalName.toLowerCase()
          const mightBeWood = name.includes('wood') ||
                            name.includes('timber') ||
                            name.includes('lumber') ||
                            (child.parent && (
                              child.parent.name.toLowerCase().includes('wood') ||
                              child.parent.name.toLowerCase().includes('timber') ||
                              child.parent.name.toLowerCase().includes('lumber')
                            ))
          
          if (mightBeWood && woodMaterials) {
            // Apply solid black wood material
            const woodMat = woodMaterials.clone()
            woodMat.color.setHex(0x000000) // Solid black
            woodMat.metalness = 0.0
            woodMat.roughness = 0.8
            woodMat.sheen = 0.0
            woodMat.sheenRoughness = 1.0
            woodMat.clearcoat = 0.0
            woodMat.clearcoatRoughness = 1.0
            woodMat.envMapIntensity = 0.3
            // Remove texture maps for solid color
            woodMat.map = null
            woodMat.normalMap = null
            woodMat.roughnessMap = null
            woodMat.metalnessMap = null
            woodMat.aoMap = null
            woodMat.emissiveMap = null
            
            if (woodMat.isMeshStandardMaterial) {
              const physicalWoodMat = new MeshPhysicalMaterial({
                color: 0x000000,
                side: DoubleSide,
                metalness: 0.0,
                roughness: 0.8,
                sheen: 0.0,
                sheenRoughness: 1.0,
                clearcoat: 0.0,
                clearcoatRoughness: 1.0,
                envMapIntensity: 0.3,
              })
              woodMat.dispose()
              child.material = physicalWoodMat
            } else {
              child.material = woodMat
            }
            child.userData.isWoodMesh = true
            child.userData.hasWoodTexture = true
        child.material.needsUpdate = true
          } else {
            // Create a default material for unmapped meshes - use aluminum/silver as default
            const defaultColor = new Color(getColorHex('Silver'))
            child.material = new MeshStandardMaterial({
              color: defaultColor.getHex(),
              metalness: 0.7,
              roughness: 0.4,
              side: DoubleSide
            })
          }
        }
        
        // Ensure mesh is visible
        child.visible = true
      }
    })
    
    // Ensure all parent objects are also visible
    clonedScene.traverse((child) => {
      child.visible = true
    })
    
    // Store the mapping
    meshFeatureMap.current = meshMappings
    
    // Log all mesh names and their mappings for debugging
    console.log('=== SHOE MODEL STRUCTURE ===')
    console.log('Total meshes found:', meshNames.length)
    console.log('All mesh names:', meshNames)
    console.log('Mesh to Feature/Category mapping:', meshMappings)
    
    // Log visibility status of all meshes
    const visibilityReport = []
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        visibilityReport.push({
          name: child.name || 'unnamed',
          visible: child.visible,
          parent: child.parent?.name || 'root',
          parentVisible: child.parent ? child.parent.visible : true
        })
      }
    })
    console.log('=== MESH VISIBILITY REPORT ===')
    console.table(visibilityReport)
    
    // Log detailed mesh and material information
    const meshDetails = []
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const detail = {
          name: child.name || 'unnamed',
          type: child.type,
          position: child.position ? [child.position.x, child.position.y, child.position.z] : null,
          parent: child.parent?.name || 'root',
          material: {
            type: child.material?.type || 'none',
            name: child.material?.name || 'none',
            color: child.material?.color ? `#${child.material.color.getHexString()}` : 'none',
            metalness: child.material?.metalness,
            roughness: child.material?.roughness,
          },
          geometry: {
            type: child.geometry?.type || 'none',
            vertices: child.geometry?.attributes?.position?.count || 0,
          }
        }
        meshDetails.push(detail)
      }
    })
    
    console.log('=== DETAILED MESH INFORMATION ===')
    console.table(meshDetails)
    console.log('=== MATERIAL INFORMATION ===')
    const materials = new Set()
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const mat = child.material
        materials.add({
          type: mat.type,
          name: mat.name || 'unnamed',
          color: mat.color ? `#${mat.color.getHexString()}` : 'none',
          metalness: mat.metalness,
          roughness: mat.roughness,
        })
      }
    })
    console.log('Unique materials:', Array.from(materials))
    console.log('=== END MODEL STRUCTURE ===')
    
    // No default materials - meshes will have no materials
    // Just ensure meshes are visible
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.visible = true
      }
    })
  }, [clonedScene, metalTextures])
  
  // Apply configuration changes to the model
  // Only update when color/material selections change, not when tabs/features change
  React.useEffect(() => {
    if (!clonedScene) return
    
    const { activeFeature, selectedGridItem, selectedColorName, activeCategory } = configState
    
    // Create a feature key for tracking last applied colors
    // For Gems, use a single key for all categories (user wants one color for all gem categories)
    // For Sole/Strap, use category-specific keys (Insole vs Outsole have different colors)
    // For other features, use category-specific keys
    const featureKey = (activeFeature === 'Gems') 
      ? 'Gems:default' 
      : (activeFeature === 'Sole/Strap' && activeCategory)
        ? `Sole/Strap:${activeCategory}`
        : `${activeFeature}:${activeCategory || 'default'}`
    
    // Determine what color/material to apply
    // For Heel: use selectedMaterial if no color is selected yet (material selection should also update the model)
    // For Material & Structure: use selectedMaterial if available, otherwise use selectedColorName
    let colorToApply = selectedColorName
    if (activeFeature === 'Heel' && !colorToApply && configState.selectedMaterial) {
      colorToApply = configState.selectedMaterial
    } else if (activeFeature === 'Material & Structure' && configState.selectedMaterial) {
      // For Material & Structure, prioritize selectedMaterial over selectedColorName
      // But if a color is selected after material, use the color
      colorToApply = selectedColorName || configState.selectedMaterial
    }
    
    // Simple approach: Each feature (Gems, Crown, Cascade) maintains its own color independently
    // When user selects a color, it's always for the current activeFeature
    // Simple approach: Apply color when user selects it, and it stays on the model
    // No complex restore/store logic - once applied, it persists
    
    // Determine what color to apply
    // For Gems, Crown, and Cascade: ALWAYS use stored color if available
    // For Sole/Strap: Store colors per category (Insole vs Outsole)
    // Only update stored color when user explicitly selects a NEW color while on that feature's tab
    if (activeFeature === 'Gems' || activeFeature === 'Crown' || activeFeature === 'Cascade' || activeFeature === 'Sole/Strap') {
      // CRITICAL: Always prioritize stored color - it represents the user's actual selection
      // Check if we have a stored color first - this takes absolute precedence
      if (lastAppliedColors.current[featureKey]) {
        // We have a stored color - ALWAYS use it (this is the user's actual selection)
        // Only update if selectedColorName is different AND we're on this feature's tab
        // AND it's a genuine user selection (not from tab switch)
        const featureJustChanged = previousActiveFeatureRef.current !== null && 
                                   previousActiveFeatureRef.current !== activeFeature
        const isNewUserSelection = selectedColorName && 
                                   selectedColorName !== lastAppliedColors.current[featureKey] &&
                                   !featureJustChanged &&
                                   selectedColorName !== previousSelectedColorNameRef.current
        
        if (isNewUserSelection) {
          // User selected a NEW different color - update stored color
          lastAppliedColors.current[featureKey] = selectedColorName
          colorFeatureMap.current[selectedColorName] = activeFeature
          colorToApply = selectedColorName
          previousSelectedColorNameRef.current = selectedColorName
        } else {
          // Use stored color (ignore selectedColorName changes from tab switches)
          // This is CRITICAL: stored color always takes precedence when switching tabs
          colorToApply = lastAppliedColors.current[featureKey]
        }
      } else if (activeFeature === 'Sole/Strap' && selectedColorName) {
        // For Sole/Strap, store color per category when user selects
        // This is a new selection for this category
        lastAppliedColors.current[featureKey] = selectedColorName
        colorFeatureMap.current[selectedColorName] = activeFeature
        colorToApply = selectedColorName
        previousSelectedColorNameRef.current = selectedColorName
      } else if (activeFeature === 'Sole/Strap' && selectedColorName) {
        // For Sole/Strap, store color per category when user selects
        // This is a new selection for this category
        lastAppliedColors.current[featureKey] = selectedColorName
        colorFeatureMap.current[selectedColorName] = activeFeature
        colorToApply = selectedColorName
        previousSelectedColorNameRef.current = selectedColorName
      } else {
        // No stored color yet - check if this is a genuine user selection
        // If there's a selectedColorName, it might be a new user selection
        if (selectedColorName) {
          // A genuine selection means:
          // 1. selectedColorName is different from previous, AND
          // 2. activeFeature hasn't changed (we're still on the same feature tab)
          // This prevents tab switches from storing default colors
          const featureJustChanged = previousActiveFeatureRef.current !== null && 
                                     previousActiveFeatureRef.current !== activeFeature
          const isGenuineSelection = selectedColorName !== previousSelectedColorNameRef.current &&
                                     previousSelectedColorNameRef.current !== null &&
                                     !featureJustChanged
          
          if (isGenuineSelection) {
            // This is a genuine user selection - store it
            colorToApply = selectedColorName
            lastAppliedColors.current[featureKey] = selectedColorName
            colorFeatureMap.current[selectedColorName] = activeFeature
            previousSelectedColorNameRef.current = selectedColorName
          } else if (!previousActiveFeatureRef.current && !previousSelectedColorNameRef.current) {
            // First render - store the initial selectedColorName (this is the default from Configurator)
            // This allows the initial default to be set
            colorToApply = selectedColorName
            lastAppliedColors.current[featureKey] = selectedColorName
            colorFeatureMap.current[selectedColorName] = activeFeature
            previousSelectedColorNameRef.current = selectedColorName
          }
          // If feature just changed, don't store - it's likely a default from tab switch
        }
        // If no selectedColorName and no stored color, colorToApply remains null/undefined
        // This is fine - the stored colors (gemsColor, crownColor, cascadeColor) will be used below
      }
      // Update refs for next comparison
      if (selectedColorName) {
        previousSelectedColorNameRef.current = selectedColorName
      }
      previousActiveFeatureRef.current = activeFeature
    } else if (selectedColorName) {
      // For other features, use selectedColorName
      colorToApply = selectedColorName
    } else if (lastAppliedColors.current[featureKey]) {
      // Use stored color for other features
      colorToApply = lastAppliedColors.current[featureKey]
    } else {
      // No color to apply
      colorToApply = null
      if (activeFeature !== 'Heel' && 
          activeFeature !== 'Sole/Strap' && 
          activeFeature !== 'Material & Structure') {
        return
      }
    }
    
    // Only update if we have a color to apply
    const needsColorApplication = !!colorToApply
    
    console.log('Material update effect triggered:', {
      activeFeature,
      selectedColorName,
      colorToApply,
      lastAppliedColor: lastAppliedColors.current[featureKey],
      crownColor: lastAppliedColors.current['Crown:default'],
      cascadeColor: lastAppliedColors.current['Cascade:default'],
      selectedMaterial: configState.selectedMaterial,
      selectedGridItem,
      activeCategory
    })
    
    // Only proceed if we have a color to apply OR if this feature doesn't require color selection
    if (!colorToApply) {
      // No color selected - only proceed if this feature doesn't require explicit color selection
      // For features like Heel, Sole/Strap, etc., we should still apply default materials
      if (activeFeature !== 'Heel' && 
          activeFeature !== 'Sole/Strap' && 
          activeFeature !== 'Material & Structure') {
        return
      }
    }
    
    // Only apply changes if we have a selection
    // For Gems, Crown, Cascade - allow color updates even without selectedGridItem
    // (because color selection happens after item selection)
    // For Material & Structure - allow updates when material or color is selected
    if (selectedGridItem === null && 
        activeFeature !== 'Gems' && 
        activeFeature !== 'Crown' && 
        activeFeature !== 'Cascade' &&
        activeFeature !== 'Heel' &&
        activeFeature !== 'Sole/Strap' &&
        activeFeature !== 'Material & Structure') {
      return
    }
    
    // For Material & Structure, ensure we have either a material or color selected
    if (activeFeature === 'Material & Structure' && !colorToApply && !configState.selectedMaterial) {
      return
    }
    
    // Get all stored colors for all features - we need to apply them all to keep colors persistent
    // ALWAYS use stored colors for Gems, Crown, and Cascade - they persist regardless of active tab
    // When on a feature's tab with a new selection, use that new color (it's already stored above)
    // Otherwise, use ONLY the stored color for that feature (never use colorToApply from other features)
    // For Gems, use a single key for all categories - one color applies to all gem categories
    const gemsStoredColor = lastAppliedColors.current['Gems:default']
    // Only use colorToApply if we're on Gems tab AND it's different from stored (new selection)
    // Otherwise, ALWAYS use stored color - this prevents other tab's colors from affecting Gems
    const gemsColor = (activeFeature === 'Gems' && colorToApply && colorToApply !== gemsStoredColor)
                      ? colorToApply  // New selection on Gems tab - already stored above
                      : gemsStoredColor  // ALWAYS use stored color when not on Gems tab or no new selection
    
    const crownStoredColor = lastAppliedColors.current['Crown:default']
    // Only use colorToApply if we're on Crown tab AND it's different from stored (new selection)
    // Otherwise, ALWAYS use stored color - this prevents other tab's colors from affecting Crown
    const crownColor = (activeFeature === 'Crown' && colorToApply && colorToApply !== crownStoredColor)
                       ? colorToApply  // New selection on Crown tab - already stored above
                       : crownStoredColor  // ALWAYS use stored color when not on Crown tab or no new selection
    
    const cascadeStoredColor = lastAppliedColors.current['Cascade:default']
    // Only use colorToApply if we're on Cascade tab AND it's different from stored (new selection)
    // Otherwise, ALWAYS use stored color - this prevents other tab's colors from affecting Cascade
    const cascadeColor = (activeFeature === 'Cascade' && colorToApply && colorToApply !== cascadeStoredColor)
                         ? colorToApply  // New selection on Cascade tab - already stored above
                         : cascadeStoredColor  // ALWAYS use stored color when not on Cascade tab or no new selection
    
    // Check if we have any stored colors to apply (Gems, Crown, Cascade) or a color for the active feature
    // This ensures we always apply stored colors even when switching tabs
    const hasStoredColors = !!(gemsColor || crownColor || cascadeColor)
    const hasActiveFeatureColor = !!colorToApply
    
    // Only proceed if we have stored colors to apply OR a color for the active feature
    // OR if this is a feature that doesn't require explicit color selection
    if (!hasStoredColors && !hasActiveFeatureColor) {
      if (activeFeature !== 'Heel' && 
          activeFeature !== 'Sole/Strap' && 
          activeFeature !== 'Material & Structure') {
        return
      }
    }
    
    console.log('Applying color to model:', {
      activeFeature,
      colorToApply,
      gemsColor,
      crownColor,
      cascadeColor,
      hasStoredColors,
      hasActiveFeatureColor
    })
    
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const meshName = child.name || 'unnamed'
        const mapping = meshFeatureMap.current[meshName]
        
        if (!mapping) return
        
        // Determine which color to apply based on the mesh feature
        let colorToApplyForMesh = null
        let shouldUpdate = false
        
        // Apply stored colors for all features, not just the active one
        // This ensures colors persist across tab switches and all three colors are visible simultaneously
        if (mapping.feature === 'Gems') {
          // Always use gemsColor if it exists (either new selection or stored)
          if (gemsColor) {
            colorToApplyForMesh = gemsColor
            shouldUpdate = true
          }
        } else if (mapping.feature === 'Crown') {
          // Always use crownColor if it exists (either new selection or stored)
          if (crownColor) {
            colorToApplyForMesh = crownColor
                shouldUpdate = true
              }
        } else if (mapping.feature === 'Cascade') {
          // Always use cascadeColor if it exists (either new selection or stored)
          if (cascadeColor) {
            colorToApplyForMesh = cascadeColor
              shouldUpdate = true
            }
        } else if (mapping.feature === 'Sole/Strap') {
          // Sole/Strap - use stored color for the specific category (Insole or Outsole)
          const soleStrapKey = `Sole/Strap:${mapping.category || 'default'}`
          const storedSoleStrapColor = lastAppliedColors.current[soleStrapKey]
          
          // Use stored color if available, otherwise use colorToApply if we're on Sole/Strap tab
          if (storedSoleStrapColor) {
            colorToApplyForMesh = storedSoleStrapColor
            shouldUpdate = true
          } else if (activeFeature === 'Sole/Strap' && mapping.category === activeCategory && colorToApply) {
            // New selection on Sole/Strap tab for this category
            colorToApplyForMesh = colorToApply
              shouldUpdate = true
            }
        } else if (mapping.feature === activeFeature && colorToApply) {
          // For other active features, use the selected color
          colorToApplyForMesh = colorToApply
            shouldUpdate = true
        }
        
        // Special handling for other features
        if (mapping.feature === 'Heel' && activeFeature === 'Heel') {
          colorToApplyForMesh = colorToApply
              shouldUpdate = true
        } else if (mapping.feature === 'Material & Structure' && activeFeature === 'Material & Structure') {
          colorToApplyForMesh = colorToApply
            shouldUpdate = true
        }
        
        // Apply color if we have a match
        if (shouldUpdate && colorToApplyForMesh && mapping) {
          // colorToApply has already been filtered to only include colors for the current feature
          // Double-check that this mesh belongs to the active feature
          
          console.log('Updating mesh:', meshName, 'with color:', colorToApplyForMesh, 'for feature:', mapping.feature, 'activeFeature:', activeFeature)
          // Determine color and material properties based on feature type
          let colorHex = null
          let materialProps = {}
          
          if (mapping.feature === 'Heel') {
            // Heel uses precious metals with bright metallic appearance
            // Brighten the color for metals
            const baseColor = new Color(getMetalColorHex(colorToApplyForMesh))
            baseColor.multiplyScalar(1.3) // Make it brighter
            colorHex = `#${baseColor.getHexString()}`
            
            materialProps = {
              metalness: 0.95, // High metalness but slightly reduced to allow more color
              roughness: 0.08, // Low roughness for polished, mirror-like metal surface
              usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
              clearcoat: 0.9, // High clearcoat for glossy metal finish
              clearcoatRoughness: 0.1, // Smooth clearcoat for polished look
              sheen: 0.2, // Enhanced sheen for metallic luster
              sheenRoughness: 0.2,
              specularIntensity: 0.0, // No specular highlights
              specularColor: new Color(1.0, 1.0, 1.0), // Neutral specular
              envMapIntensity: 0.4, // Reduced environment map intensity for lower contrast
              ior: 0.15, // Index of refraction for metals (very low)
            }
            
            // Adjust specular color based on metal type for realism
            const metalName = colorToApply.toLowerCase()
            if (metalName.includes('gold')) {
              materialProps.specularColor = new Color(1.0, 0.95, 0.8) // Brighter warm gold
            } else if (metalName.includes('silver') || metalName.includes('platinum') || metalName.includes('white gold')) {
              materialProps.specularColor = new Color(1.0, 1.0, 1.0) // Bright cool silver/platinum
            } else if (metalName.includes('rose gold')) {
              materialProps.specularColor = new Color(1.0, 0.9, 0.85) // Brighter warm rose gold
            } else if (metalName.includes('copper') || metalName.includes('bronze')) {
              materialProps.specularColor = new Color(1.0, 0.85, 0.7) // Brighter warm copper/bronze
            }
          } else if (mapping.feature === 'Gems') {
            // Gems - diamond/colorless with rainbow internal reflections
            colorHex = getColorHex(colorToApplyForMesh)
            materialProps = {
              metalness: 0.0,
              roughness: 0.0,
              usePhysicalMaterial: true,
              transmission: 0.95, // Very high transmission for maximum internal reflections and sparkles
              thickness: 5.0, // Increased thickness for more internal light bouncing and rainbow sparkles
              ior: 2.42, // Diamond IOR - high IOR creates strong internal reflections and dispersion
              clearcoat: 1.0,
              clearcoatRoughness: 0.0, // Smooth clearcoat for diamond
              sheen: 0.5,
              sheenRoughness: 0.1,
              specularIntensity: 1.0, // Very high specular for maximum rainbow internal geometry reflections in diamonds
              specularColor: new Color(1.5, 0.7, 0.6), // Maximum chromatic specular for brightest rainbow internal geometry reflections
              envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
              opacity: 0.85, // A little transparent when viewing from center
              transparent: true, // Enable transparency
            }
          } else if (mapping.feature === 'Cascade') {
            // Cascade - solid gems with internal geometry reflections and rainbow chromatic dispersion
            colorHex = getColorHex(colorToApplyForMesh)
            console.log('Cascade color hex:', colorHex, 'for color name:', colorToApplyForMesh)
            
            // If color not found in map, try to extract base color
            if (colorHex === '#808080' && colorToApplyForMesh) {
              const colorLower = colorToApplyForMesh.toLowerCase()
              if (colorLower.includes('green') || colorLower.includes('emerald')) {
                colorHex = '#3D6B3D'
              } else if (colorLower.includes('red') || colorLower.includes('ruby')) {
                colorHex = '#8B0000'
              } else if (colorLower.includes('blue') || colorLower.includes('sapphire')) {
                colorHex = '#1E3A8A'
              } else if (colorLower.includes('yellow') || colorLower.includes('gold')) {
                colorHex = '#D4AF37'
              }
            }
            
            // Determine IOR for cascade (emerald default)
            let gemIOR = 1.58 // Emerald IOR
            const gemName = colorToApplyForMesh.toLowerCase()
            if (gemName.includes('emerald')) gemIOR = 1.58
            else if (gemName.includes('ruby') || gemName.includes('sapphire')) gemIOR = 1.77
            else if (gemName.includes('diamond')) gemIOR = 2.42
            
            materialProps = {
              metalness: 0.0,
              roughness: 0.0,
              usePhysicalMaterial: true,
              transmission: 0.95, // Very high transmission for maximum internal geometry reflections and sparkles
              thickness: 5.0, // Increased thickness for more internal light bouncing and rainbow sparkles
              ior: gemIOR,
              clearcoat: 0.1,
              clearcoatRoughness: 0.0,
              sheen: 0.0,
              sheenRoughness: 1.0,
              specularIntensity: 1.0, // Very high specular for strong rainbow chromatic dispersion in internal geometry reflections
              specularColor: new Color(1.38, 0.78, 0.68), // Very strong chromatic specular for rainbow internal geometry reflections
              envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
              opacity: 1.0, // Solid - not transparent
              transparent: false, // Solid cascade gems
            }
          } else if (mapping.feature === 'Crown') {
            // Crown - same properties as Cascade gems
            colorHex = getColorHex(colorToApplyForMesh)
            
            // Determine IOR for crown (emerald default, same as cascade)
            let gemIOR = 1.58 // Emerald IOR
            const gemName = colorToApplyForMesh.toLowerCase()
            if (gemName.includes('emerald')) gemIOR = 1.58
            else if (gemName.includes('ruby') || gemName.includes('sapphire')) gemIOR = 1.77
            else if (gemName.includes('diamond')) gemIOR = 2.42
            
            materialProps = {
              metalness: 0.0,
              roughness: 0.0, // Highly polished gems have near-zero roughness
              usePhysicalMaterial: true,
              transmission: 0.95, // Very high transmission for maximum internal geometry reflections and sparkles
              thickness: 5.0, // Increased thickness for more internal light bouncing and rainbow sparkles
              ior: gemIOR,
              clearcoat: 0.1, // Subtle clearcoat for natural polished surface
              clearcoatRoughness: 0.0, // Smooth clearcoat like real polished gems
              sheen: 0.0,
              sheenRoughness: 1.0,
              specularIntensity: 1.0, // Very high specular for strong rainbow chromatic dispersion in internal geometry reflections
              specularColor: new Color(1.38, 0.78, 0.68), // Very strong chromatic specular for rainbow internal geometry reflections
              envMapIntensity: 0.6, // Reduced surface reflections - focus on internal reflections
              opacity: 1.0, // Solid - not transparent
              transparent: false, // Solid crown gems
            }
          } else if (mapping.feature === 'Sole/Strap') {
            // Determine if this is outsole (reflective/patent leather) or insole (matte leather)
            const isOutsole = mapping.category === 'Outsole/Outstrap'
            // Use getColorHex to get the exact same color as shown on the color card background
            // This ensures the model color matches exactly what the user sees on the card
            colorHex = getColorHex(colorToApplyForMesh)
            
            if (isOutsole) {
              // Outsole - patent/reflective leather with highly reflective, shiny properties
              materialProps = {
                metalness: 0.3, // Increased metalness for more patent leather shine
                roughness: 0.02, // Very low roughness for highly reflective, mirror-like shiny surface
                usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
                clearcoat: 0.3, // Clearcoat for extra shine
                clearcoatRoughness: 0.1, // Smooth clearcoat for maximum shine
                sheen: 0.2, // Sheen for additional glossy appearance
                sheenRoughness: 0.2,
                envMapIntensity: 1.2, // Increased environment map intensity for more reflections and shine
              }
            } else {
              // Insole - simple matte solid material (no textures)
              if (child.userData.isInsoleMesh) {
              materialProps = {
                  metalness: 0.0, // Not metallic
                  roughness: 1.0, // Maximum roughness for completely matte
                  usePhysicalMaterial: false, // Use MeshStandardMaterial
                }
              }
            }
          } else if (mapping.feature === 'Material & Structure' || mapping.feature === null || !mapping.feature) {
            // Material & Structure - determine properties based on material type
            colorHex = getColorHex(colorToApplyForMesh)
            const materialName = (configState.selectedMaterial || colorToApply || '').toLowerCase()
            
            // Check if this is a wood mesh and preserve wood texture
            const isWood = mapping.category === 'Wood' || 
                          originalName.toLowerCase().includes('wood') ||
                          originalName.toLowerCase().includes('timber') ||
                          originalName.toLowerCase().includes('lumber')
            
            if (isWood && child.userData.isWoodMesh && woodMaterials && child.material && 
                (child.material.map || child.material.normalMap || child.material.roughnessMap)) {
              // Material already has wood textures from GLTF, just update color if needed
              materialProps = {
                preserveTexture: true, // Flag to preserve texture material
              }
            } else if (materialName.includes('wood') || materialName.includes('timber') || materialName.includes('lumber') ||
                       materialName.includes('rosewood') || materialName.includes('oak') || materialName.includes('mahogany') ||
                       materialName.includes('walnut') || materialName.includes('cherry') || materialName.includes('maple')) {
              // Wood materials - use wood texture if available
              if (woodMaterials && isWood) {
                materialProps = {
                  useWoodTexture: true, // Flag to use wood texture material
                }
              } else {
                // Fallback wood material properties
                materialProps = {
                  metalness: 0.0,
                  roughness: 0.8,
                  sheen: 0.1,
                  sheenRoughness: 0.8,
                  sheenColor: new Color(0.9, 0.85, 0.75),
                  clearcoat: 0.2,
                  clearcoatRoughness: 0.6,
                }
              }
            } else if (materialName.includes('leather') || materialName.includes('nappa') || materialName.includes('calfskin') || 
                materialName.includes('suede') || materialName.includes('nubuck') || materialName.includes('saffiano') ||
                materialName.includes('aniline') || materialName.includes('croc') || materialName.includes('snakeskin')) {
              // Leather materials - matte to semi-gloss depending on type
              if (materialName.includes('patent') || materialName.includes('lacquered') || materialName.includes('gloss')) {
                // Patent/glossy leather
                materialProps = {
                  metalness: 0.1,
                  roughness: 0.1,
                  usePhysicalMaterial: true,
                  clearcoat: 0.9,
                  clearcoatRoughness: 0.1,
                  sheen: 0.3,
                  sheenRoughness: 0.2,
                  envMapIntensity: 0.7,
                }
              } else {
                // Matte leather
                materialProps = {
                  metalness: 0.0,
                  roughness: 0.7,
                  sheen: 0.2,
                  sheenRoughness: 0.5,
                }
              }
            } else if (materialName.includes('metallic') || materialName.includes('mirror') || materialName.includes('foil') ||
                       materialName.includes('brushed') || materialName.includes('chrome') || materialName.includes('steel') ||
                       materialName.includes('titanium') || materialName.includes('brass') || materialName.includes('bronze') ||
                       materialName.includes('copper') || materialName.includes('nickel') || materialName.includes('gunmetal')) {
              // Metallic materials
              materialProps = {
                metalness: 0.8,
                roughness: materialName.includes('brushed') || materialName.includes('matte') ? 0.4 : 0.1,
                usePhysicalMaterial: true,
                clearcoat: 0.8,
                clearcoatRoughness: materialName.includes('brushed') || materialName.includes('matte') ? 0.3 : 0.1,
                envMapIntensity: 0.8,
              }
            } else if (materialName.includes('satin') || materialName.includes('silk') || materialName.includes('organza') ||
                       materialName.includes('tulle') || materialName.includes('chiffon') || materialName.includes('lace')) {
              // Fabric materials
              materialProps = {
                metalness: 0.0,
                roughness: 0.6,
                sheen: 0.4,
                sheenRoughness: 0.3,
              }
            } else if (materialName.includes('pearl') || materialName.includes('iridescent') || materialName.includes('holographic') ||
                       materialName.includes('crystalline') || materialName.includes('frosted')) {
              // Special effect materials
              materialProps = {
                metalness: 0.3,
                roughness: 0.2,
                usePhysicalMaterial: true,
                clearcoat: 0.9,
                clearcoatRoughness: 0.1,
                envMapIntensity: 0.7,
              }
            } else if (materialName.includes('matte') || materialName.includes('soft')) {
              // Matte materials
              materialProps = {
                metalness: 0.0,
                roughness: 0.9,
              }
            } else if (materialName.includes('gloss') || materialName.includes('lacquered')) {
              // Glossy materials
              materialProps = {
                metalness: 0.1,
                roughness: 0.05,
                usePhysicalMaterial: true,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                envMapIntensity: 0.7,
              }
            } else {
              // Check if this might be a wood mesh that wasn't detected earlier
              const mightBeWood = originalName.toLowerCase().includes('wood') ||
                                originalName.toLowerCase().includes('timber') ||
                                originalName.toLowerCase().includes('lumber') ||
                                (child.parent && (
                                  child.parent.name.toLowerCase().includes('wood') ||
                                  child.parent.name.toLowerCase().includes('timber') ||
                                  child.parent.name.toLowerCase().includes('lumber')
                                ))
              
              if (mightBeWood && woodMaterials) {
                // Apply solid black wood material
                materialProps = {
                  useWoodTexture: true, // Flag to use wood texture material (will be solid black)
                }
              } else {
                // Default - brushed aluminum look
            materialProps = {
              metalness: 0.7,
                  roughness: 0.4,
                }
              }
            }
          } else {
            // Default fallback
            colorHex = getColorHex(colorToApplyForMesh)
            materialProps = {
              metalness: 0.3,
              roughness: 0.7,
            }
          }
          
          // Handle insole - simple matte solid material (no textures)
          if (child.userData.isInsoleMesh) {
            // Recreate material as simple matte solid (remove all textures)
            const insoleMat = new MeshStandardMaterial({
              color: new Color(colorHex),
              side: DoubleSide,
              // Completely matte appearance - no shine, no reflections
              metalness: 0.0, // Not metallic
              roughness: 1.0, // Maximum roughness for completely matte finish
              envMap: null, // No environment map
              envMapIntensity: 0.0, // No environment reflections
            })
            
            // Ensure no textures are applied
            insoleMat.map = null
            insoleMat.normalMap = null
            insoleMat.roughnessMap = null
            insoleMat.metalnessMap = null
            insoleMat.aoMap = null
            insoleMat.emissiveMap = null
            
            // Dispose old material if it exists
            if (child.material) {
              child.material.dispose()
            }
            
            child.material = insoleMat
            child.material.needsUpdate = true
            return // Skip further material processing
          } else if (materialProps.preserveTexture && child.userData.isWoodMesh && (woodMaterials || child.userData.hasWoodTexture)) {
            // Material already has wood textures, set to solid black
            const currentMat = child.material
            
            // Set to solid black
            currentMat.color.setHex(0x000000) // Solid black
            currentMat.metalness = 0.0
            currentMat.roughness = 0.8
            currentMat.sheen = 0.0
            currentMat.sheenRoughness = 1.0
            currentMat.clearcoat = 0.0
            currentMat.clearcoatRoughness = 1.0
            currentMat.envMapIntensity = 0.3
            
            // Remove texture maps for solid color
            currentMat.map = null
            currentMat.normalMap = null
            currentMat.roughnessMap = null
            currentMat.metalnessMap = null
            currentMat.aoMap = null
            currentMat.emissiveMap = null
            
            currentMat.needsUpdate = true
            return // Skip material recreation
          } else if (materialProps.useWoodTexture && woodMaterials) {
            // Apply wood texture material
            const woodMat = woodMaterials.clone()
            
            // Ensure all texture maps are properly set
            if (woodMat.map) woodMat.map.needsUpdate = true
            if (woodMat.normalMap) {
              woodMat.normalMap.needsUpdate = true
              woodMat.normalScale = woodMat.normalScale || { x: 1, y: 1 }
            }
            if (woodMat.roughnessMap) {
              woodMat.roughnessMap.needsUpdate = true
            }
            if (woodMat.metalnessMap) {
              woodMat.metalnessMap.needsUpdate = true
            }
            if (woodMat.aoMap) {
              woodMat.aoMap.needsUpdate = true
            }
            
            // Enhance material properties for realistic wood
            woodMat.side = DoubleSide
            woodMat.needsUpdate = true
            
            // Convert to MeshPhysicalMaterial for better wood properties
            let finalWoodMat = woodMat
            
            if (woodMat.isMeshStandardMaterial) {
              // Create a new MeshPhysicalMaterial with solid black color
              const physicalWoodMat = new MeshPhysicalMaterial({
                color: 0x000000, // Solid black
                side: DoubleSide,
                // Wood-specific properties for realistic appearance
                metalness: 0.0,
                roughness: 0.8,
                sheen: 0.0, // No sheen for solid black
                sheenRoughness: 1.0,
                clearcoat: 0.0, // No clearcoat for solid black
                clearcoatRoughness: 1.0,
                envMapIntensity: 0.3, // Reduced environment map intensity
              })
              
              // Dispose old material
              woodMat.dispose()
              finalWoodMat = physicalWoodMat
            } else if (woodMat.isMeshPhysicalMaterial) {
              // For physical materials, set to solid black
              woodMat.color.setHex(0x000000) // Solid black
              woodMat.metalness = 0.0
              woodMat.roughness = 0.8
              woodMat.sheen = 0.0 // No sheen for solid black
              woodMat.sheenRoughness = 1.0
              woodMat.clearcoat = 0.0 // No clearcoat for solid black
              woodMat.clearcoatRoughness = 1.0
              woodMat.envMapIntensity = 0.3
              // Remove texture maps for solid color
              woodMat.map = null
              woodMat.normalMap = null
              woodMat.roughnessMap = null
              woodMat.metalnessMap = null
              woodMat.aoMap = null
              woodMat.emissiveMap = null
            }
            
            child.material.dispose()
            child.material = finalWoodMat
            child.userData.isWoodMesh = true
            child.userData.hasWoodTexture = true
            child.material.needsUpdate = true
            return // Skip further material processing
          }
          
          // Ensure we have the correct material type
          const needsPhysicalMaterial = materialProps.usePhysicalMaterial
          const isPhysicalMaterial = child.material.isMeshPhysicalMaterial
          
          if (needsPhysicalMaterial && !isPhysicalMaterial) {
            // Switch to MeshPhysicalMaterial for gems, outsole, or heel
            const physicalProps = {
              color: new Color(colorHex),
              metalness: materialProps.metalness || 0.0,
              roughness: materialProps.roughness || 0.0,
              transmission: materialProps.transmission || 0,
              thickness: materialProps.thickness || 0,
              ior: materialProps.ior !== undefined ? materialProps.ior : (mapping.feature === 'Heel' ? 0.15 : 1.5),
              clearcoat: materialProps.clearcoat || 0,
              clearcoatRoughness: materialProps.clearcoatRoughness || 0.1,
              sheen: materialProps.sheen || 0,
              sheenRoughness: materialProps.sheenRoughness || 0.3,
              specularIntensity: materialProps.specularIntensity || 0.0,
              specularColor: materialProps.specularColor || new Color(1, 1, 1),
              envMapIntensity: materialProps.envMapIntensity || 1.0,
              opacity: materialProps.opacity !== undefined ? materialProps.opacity : 1.0,
              transparent: materialProps.transparent !== undefined ? materialProps.transparent : false,
            }
            
            // Apply metal textures if this is the heel and textures are available
            if (mapping.feature === 'Heel' && metalTextures && metalTextures.baseColor) {
              physicalProps.map = metalTextures.baseColor
              if (metalTextures.normal) physicalProps.normalMap = metalTextures.normal
              if (metalTextures.roughness) physicalProps.roughnessMap = metalTextures.roughness
              if (metalTextures.metallic) physicalProps.metalnessMap = metalTextures.metallic
            }
            
            child.material.dispose()
            child.material = new MeshPhysicalMaterial(physicalProps)
            child.material.needsUpdate = true
            
            // Mark gem meshes for opacity adjustment based on viewing angle
            if (mapping.feature === 'Cascade') {
              child.userData.isCascadeMesh = true
            } else if (mapping.feature === 'Crown') {
              child.userData.isCrownMesh = true
            }
          } else if (child.userData.isOutsoleMesh && colorToApplyForMesh) {
            // Outsole - update material with selected color while preserving texture properties
            // IMPORTANT: Use the exact same getColorHex function as ConfigurationPanel to ensure
            // the color on the model matches exactly the background color shown on the color card
            const currentMat = child.material
            if (currentMat) {
              // Get the exact hex color that matches the color card background
              const colorHexValue = getColorHex(colorToApplyForMesh)
              // Convert hex string to integer for Three.js
              const colorValue = typeof colorHexValue === 'string' && colorHexValue.startsWith('#') 
                ? parseInt(colorHexValue.replace('#', ''), 16)
                : new Color(colorHexValue).getHex()
              // Apply the exact color from the card - this ensures what user sees on card matches model
              currentMat.color.setHex(colorValue)
              
              // Update material properties if specified
              if (materialProps.metalness !== undefined) currentMat.metalness = materialProps.metalness
              if (materialProps.roughness !== undefined) currentMat.roughness = materialProps.roughness
              if (materialProps.clearcoat !== undefined) currentMat.clearcoat = materialProps.clearcoat
              if (materialProps.clearcoatRoughness !== undefined) currentMat.clearcoatRoughness = materialProps.clearcoatRoughness
              if (materialProps.sheen !== undefined) currentMat.sheen = materialProps.sheen
              if (materialProps.sheenRoughness !== undefined) currentMat.sheenRoughness = materialProps.sheenRoughness
              if (materialProps.envMapIntensity !== undefined) currentMat.envMapIntensity = materialProps.envMapIntensity
              
              currentMat.needsUpdate = true
            }
            return // Skip further material processing for outsole
          } else if (!needsPhysicalMaterial && isPhysicalMaterial && mapping.feature !== 'Sole/Strap') {
            // Switch back to MeshStandardMaterial for non-gems
            child.material.dispose()
            child.material = new MeshStandardMaterial({
              color: new Color(colorHex),
              metalness: materialProps.metalness || 0.3,
              roughness: materialProps.roughness || 0.7,
            })
          } else {
            // Same material type, just update properties
            console.log('Updating existing material for:', meshName, 'colorHex:', colorHex, 'material type:', child.material.type, 'materialProps:', materialProps)
            // Use setHex to properly update the color
            if (typeof colorHex === 'string' && colorHex.startsWith('#')) {
              const colorValue = parseInt(colorHex.replace('#', ''), 16)
              const colorObj = new Color(colorValue)
              child.material.color.copy(colorObj)
              console.log('Set material color to:', colorHex, 'hex value:', colorValue.toString(16), 'actual material color:', `#${child.material.color.getHexString()}`, 'transmission:', child.material.transmission)
            } else {
              child.material.color = new Color(colorHex)
            }
            if (materialProps.metalness !== undefined) child.material.metalness = materialProps.metalness
            if (materialProps.roughness !== undefined) child.material.roughness = materialProps.roughness
            
            // Update physical material properties if applicable
            if (isPhysicalMaterial) {
              if (materialProps.transmission !== undefined) child.material.transmission = materialProps.transmission
              if (materialProps.thickness !== undefined) child.material.thickness = materialProps.thickness
              if (materialProps.ior !== undefined) child.material.ior = materialProps.ior
              if (materialProps.clearcoat !== undefined) child.material.clearcoat = materialProps.clearcoat
              if (materialProps.clearcoatRoughness !== undefined) child.material.clearcoatRoughness = materialProps.clearcoatRoughness
              if (materialProps.sheen !== undefined) child.material.sheen = materialProps.sheen
              if (materialProps.sheenRoughness !== undefined) child.material.sheenRoughness = materialProps.sheenRoughness
              if (materialProps.specularIntensity !== undefined) child.material.specularIntensity = materialProps.specularIntensity
              if (materialProps.specularColor) {
                child.material.specularColor.copy(materialProps.specularColor)
              }
              if (materialProps.envMapIntensity !== undefined) {
                child.material.envMapIntensity = materialProps.envMapIntensity
              }
              if (materialProps.opacity !== undefined) {
                child.material.opacity = materialProps.opacity
              }
              if (materialProps.transparent !== undefined) {
                child.material.transparent = materialProps.transparent
              }
              
              // Mark gem meshes for opacity adjustment based on viewing angle
              if (mapping.feature === 'Gems') {
                child.userData.isGemMesh = true
              } else if (mapping.feature === 'Cascade') {
                child.userData.isCascadeMesh = true
              } else if (mapping.feature === 'Crown') {
                child.userData.isCrownMesh = true
              }
            }
          }
          
          child.material.needsUpdate = true
        }
      }
    })
  }, [
    clonedScene,
    brownLeatherTextures, // Include leather textures so insole textures are available
    // Only depend on values that should trigger material updates
    // Include activeFeature so we know when to apply colors for the current feature
    configState.activeFeature,
    configState.selectedColorName,
    configState.selectedMaterial, // Include selectedMaterial for Heel and Material & Structure features
    configState.selectedGridItem,
    configState.activeCategory,
    metalTextures, // Include metalTextures so updates work when textures load
  ])
  
  // Adjust gem opacity based on viewing angle - opaque when viewing from side
  const { camera } = useThree()
  useFrame(() => {
    if (!clonedScene || !camera) return
    
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Check if this is a gem mesh (Gems, Cascade, or Crown)
        const meshName = child.name.toLowerCase()
        const isGemMesh = meshName.includes('gem') || 
                         meshName.includes('cascade') || 
                         meshName.includes('crown') ||
                         (child.userData && (child.userData.isGemMesh || child.userData.isCascadeMesh || child.userData.isCrownMesh))
        
        // Check if this is Cascade - it should always be solid
        const isCascadeMesh = meshName.includes('cascade') || (child.userData && child.userData.isCascadeMesh)
        
        // Ensure Cascade is always solid
        if (isCascadeMesh && child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          materials.forEach((mat) => {
            if (mat.isMeshPhysicalMaterial) {
              mat.opacity = 1.0
              mat.transparent = false
            }
          })
        }
        
        // Adjust opacity for Gems and Crown based on viewing angle
        if (isGemMesh && !isCascadeMesh && child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          
          materials.forEach((mat) => {
            if (mat.isMeshPhysicalMaterial) {
              // Get mesh world position
              const meshWorldPos = new Vector3()
              child.getWorldPosition(meshWorldPos)
              
              // Calculate vector from mesh to camera
              const cameraToMesh = new Vector3()
              cameraToMesh.subVectors(meshWorldPos, camera.position).normalize()
              
              // Calculate camera forward direction
              const cameraForward = new Vector3()
              camera.getWorldDirection(cameraForward)
              
              // Calculate viewing angle: how directly we're facing the gem
              // Dot product between camera forward and direction to mesh
              // High value (close to 1) = viewing from center/front
              // Low value (close to 0) = viewing from side
              const viewingAngle = Math.abs(cameraForward.dot(cameraToMesh))
              
              // If viewing from center/front (high angle > 0.5), make a little transparent
              // If viewing from sides (low angle <= 0.5), make opaque
              if (viewingAngle > 0.5) {
                // Viewing from center/front - a little transparent
                mat.opacity = 0.85
                mat.transparent = true
              } else {
                // Viewing from sides - not transparent (opaque)
                mat.opacity = 1.0
                mat.transparent = false
              }
            }
          })
        }
      }
    })
  })
  
  if (!clonedScene) return null
  
  return (
    <primitive 
      object={clonedScene} 
      position={position}
      scale={scale}
      rotation={rotation}
    />
  )
}

// Preload the model
const modelPath = import.meta.env.VITE_MODEL_URL || '/assets/shoe2.5.glb'
useGLTF.preload(modelPath)

// Brown leather textures are loaded directly via useBrownLeatherTextures hook

// Loading component for model loading
function LoadingIndicator() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading 3D Model...</div>
    </div>
  )
}

// Custom studio environment component - provides environment map for model reflections only
// Studio environment component - loads HDR environment from assets
function StudioEnvironment() {
  return (
    <Environment
      files="/assets/enviroments/Jewelry-HDRI-black-contrast.hdr"
      background={false}
      rotation={[0, Math.PI / 4, 0]}
      intensity={0.05}
    />
  )
}

// Reflective ground plane component - ground with reflection
function ReflectiveGround() {
  return (
    <mesh
      rotation={[-Math.PI / 5, 0, 0]}
      position={[0, -300, 0]}
      receiveShadow
    >
      <planeGeometry args={[500, 400]} />
      <meshStandardMaterial
        color={new Color(0, 0, 0)}
        metalness={0.0}
        roughness={1.0}
        side={DoubleSide}
        emissive={new Color(0, 0, 0)}
        emissiveIntensity={0}
      />
    </mesh>
  )
}

// Glass table reflection component (not used currently)
function GlassTable() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -11.5, 0]}
      receiveShadow
    >
      <planeGeometry args={[50, 50]} />
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0.0}
        roughness={0.0}
        transmission={0.95}
        thickness={1.0}
        ior={1.5}
        clearcoat={1.0}
        clearcoatRoughness={0.0}
        envMapIntensity={0.8}
        opacity={0.2}
        transparent={true}
        side={DoubleSide}
      />
    </mesh>
  )
}

// Reflected shoe component - creates a shadow reflection below the model
function ReflectedShoe({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], configState = {}, mainModelScene = null }) {
  // Use environment variable for model URL, fallback to shoe2.5.glb
  const modelPath = import.meta.env.VITE_MODEL_URL || '/assets/shoe2.5.glb'
  const { scene } = useGLTF(modelPath)
  
  // Use main model scene if provided, otherwise use loaded scene
  const sourceScene = mainModelScene || scene
  
  // Store original colors to prevent cumulative darkening
  const originalColorsRef = React.useRef(new Map())
  
  // Clone the scene for reflection
  const clonedScene = useMemo(() => {
    if (!sourceScene) return null
    const cloned = sourceScene.clone(true) // Deep clone to preserve materials
    
    // Apply realistic reflection properties
    cloned.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material]
        
        materials.forEach((mat, index) => {
          if (mat.isMeshPhysicalMaterial || mat.isMeshStandardMaterial) {
            const materialKey = Array.isArray(child.material) 
              ? `${child.uuid}-${index}` 
              : child.uuid
            
            // Store original color
            if (mat.color && !originalColorsRef.current.has(materialKey)) {
              originalColorsRef.current.set(materialKey, mat.color.clone())
            }
            
            // Store original material properties
            if (mat.envMapIntensity !== undefined && mat.userData.originalEnvMapIntensity === undefined) {
              mat.userData.originalEnvMapIntensity = mat.envMapIntensity
            }
            if (mat.roughness !== undefined && mat.userData.originalRoughness === undefined) {
              mat.userData.originalRoughness = mat.roughness
            }
            
            // Apply barely visible glass-like shadow properties
            mat.opacity = 0.06 // Extremely subtle, barely visible shadow
            mat.transparent = false // Solid shadow (not transparent)
            mat.depthWrite = true
            
            // Apply extreme darkening (4% brightness for very subtle shadow effect)
            if (mat.color) {
              const originalColor = originalColorsRef.current.get(materialKey) || mat.color.clone()
              if (!originalColorsRef.current.has(materialKey)) {
                originalColorsRef.current.set(materialKey, originalColor)
              }
              mat.color.setRGB(
                originalColor.r * 0.04,
                originalColor.g * 0.04,
                originalColor.b * 0.04
              )
            }
            
            // Store original material properties for glass effect
            if (mat.clearcoat !== undefined && mat.userData.originalClearcoat === undefined) {
              mat.userData.originalClearcoat = mat.clearcoat
            }
            if (mat.clearcoatRoughness !== undefined && mat.userData.originalClearcoatRoughness === undefined) {
              mat.userData.originalClearcoatRoughness = mat.clearcoatRoughness
            }
            
            // Glass-like reflections - increase reflectivity
            if (mat.userData.originalEnvMapIntensity !== undefined) {
              mat.envMapIntensity = mat.userData.originalEnvMapIntensity * 0.8
            } else if (mat.envMapIntensity !== undefined) {
              mat.envMapIntensity = mat.envMapIntensity * 0.8
            }
            
            // Glass-like clarity - lower roughness for reflective surface
            if (mat.userData.originalRoughness !== undefined) {
              mat.roughness = Math.min(mat.userData.originalRoughness * 1.5, 0.3)
            } else if (mat.roughness !== undefined) {
              mat.roughness = Math.min(mat.roughness * 1.5, 0.3)
            }
            
            // Add glass-like clearcoat for shine
            if (mat.isMeshPhysicalMaterial) {
              if (mat.clearcoat !== undefined) {
                mat.clearcoat = 0.6 // Glass-like clearcoat
              }
              if (mat.clearcoatRoughness !== undefined) {
                mat.clearcoatRoughness = 0.1 // Smooth clearcoat for glass effect
              }
            }
            
            // Remove emissive properties
            if (mat.emissive) {
              mat.emissive.setRGB(0, 0, 0)
              mat.emissiveIntensity = 0
            }
            
            mat.needsUpdate = true
          }
        })
      }
    })
    
    return cloned
  }, [sourceScene])
  
  // Update position, scale, and rotation for reflection based on light direction
  React.useEffect(() => {
    if (!clonedScene) return
    
    // Define primary light positions (matching the lights in the scene)
    const lights = [
      { position: [0, 20, 0], intensity: 1.5 }, // Key light
      { position: [0, 25, 0], intensity: 1.4 }, // Top light
      { position: [0, 10, 15], intensity: 1.2 }, // Front light
      { position: [-5, 15, 5], intensity: 1.2 }, // Fill light
    ]
    
    // Calculate weighted average light direction (weighted by intensity)
    let totalIntensity = 0
    let weightedDirection = new Vector3(0, 0, 0)
    
    lights.forEach(light => {
      const lightPos = new Vector3(...light.position)
      const modelPos = new Vector3(position[0], position[1], position[2])
      const direction = lightPos.clone().sub(modelPos).normalize()
      weightedDirection.add(direction.multiplyScalar(light.intensity))
      totalIntensity += light.intensity
    })
    
    // Normalize the weighted direction
    const primaryLightDirection = weightedDirection.divideScalar(totalIntensity).normalize()
    
    // Calculate reflection position: place it based on light direction
    const mainModelY = position[1] // Main model Y position (center)
    
    // Get the bounding box to find the bottom of the model
    const box = new Box3().setFromObject(clonedScene)
    const modelBottom = box.min.y // Bottom of model in local space (negative)
    
    // Calculate where the bottom of the model is in world space
    const worldModelBottom = mainModelY + (modelBottom * scale)
    
    // Position reflection so it starts immediately below the model
    // Since reflection is Y-flipped, we need to account for the flip
    const reflectedY = worldModelBottom - (modelBottom * scale) - 0.1 // Small gap to prevent z-fighting
    
    // Calculate offset based on light direction (shadow cast away from light)
    // The reflection should be offset in the opposite direction of the light
    const shadowOffset = 15 // Distance to offset the shadow
    const offsetX = -primaryLightDirection.x * shadowOffset
    const offsetZ = -primaryLightDirection.z * shadowOffset
    
    // Position: mirrored Y (on ground surface), offset X and Z based on light direction
    clonedScene.position.set(
      position[0] + offsetX, 
      reflectedY, 
      position[2] + offsetZ
    )
    
    // Scale: flip Y to create proper ground reflection (upside down)
    clonedScene.scale.set(scale, -scale, scale)
    
    // Rotation: same rotation as original (the Y flip creates the reflection effect)
    clonedScene.rotation.set(rotation[0], rotation[1], rotation[2])
  }, [clonedScene, position, scale, rotation])
  
  // Sync materials with main model when configState changes
  React.useEffect(() => {
    if (!clonedScene) return
    
    // Apply reflection effects to all materials
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material]
        
        materials.forEach((mat, index) => {
            if (mat.isMeshPhysicalMaterial || mat.isMeshStandardMaterial) {
            const materialKey = Array.isArray(child.material) 
              ? `${child.uuid}-${index}` 
              : child.uuid
            
            // Store original color if not stored
            if (mat.color && !originalColorsRef.current.has(materialKey)) {
              originalColorsRef.current.set(materialKey, mat.color.clone())
            }
            
            // Store original material properties if not stored
            if (mat.envMapIntensity !== undefined && mat.userData.originalEnvMapIntensity === undefined) {
              mat.userData.originalEnvMapIntensity = mat.envMapIntensity
            }
            if (mat.roughness !== undefined && mat.userData.originalRoughness === undefined) {
              mat.userData.originalRoughness = mat.roughness
            }
            if (mat.clearcoat !== undefined && mat.userData.originalClearcoat === undefined) {
              mat.userData.originalClearcoat = mat.clearcoat
            }
            if (mat.clearcoatRoughness !== undefined && mat.userData.originalClearcoatRoughness === undefined) {
              mat.userData.originalClearcoatRoughness = mat.clearcoatRoughness
            }
            
            // Apply barely visible glass-like shadow properties
            mat.opacity = 0.06 // Extremely subtle, barely visible shadow
            mat.transparent = false // Solid shadow (not transparent)
            mat.depthWrite = true
            
            // Apply extreme darkening (4% brightness for very subtle shadow effect)
            if (mat.color) {
              const originalColor = originalColorsRef.current.get(materialKey)
              if (originalColor) {
                mat.color.setRGB(
                  originalColor.r * 0.04,
                  originalColor.g * 0.04,
                  originalColor.b * 0.04
                )
              }
            }
            
            // Glass-like reflections - increase reflectivity
            if (mat.userData.originalEnvMapIntensity !== undefined) {
              mat.envMapIntensity = mat.userData.originalEnvMapIntensity * 0.8
            } else if (mat.envMapIntensity !== undefined) {
              mat.envMapIntensity = mat.envMapIntensity * 0.8
            }
            
            // Glass-like clarity - lower roughness for reflective surface
            if (mat.userData.originalRoughness !== undefined) {
              mat.roughness = Math.min(mat.userData.originalRoughness * 1.5, 0.3)
            } else if (mat.roughness !== undefined) {
              mat.roughness = Math.min(mat.roughness * 1.5, 0.3)
            }
            
            // Add glass-like clearcoat for shine
            if (mat.isMeshPhysicalMaterial) {
              if (mat.clearcoat !== undefined) {
                mat.clearcoat = 0.6 // Glass-like clearcoat
              }
              if (mat.clearcoatRoughness !== undefined) {
                mat.clearcoatRoughness = 0.1 // Smooth clearcoat for glass effect
              }
            }
            
            // Remove emissive properties
            if (mat.emissive) {
              mat.emissive.setRGB(0, 0, 0)
              mat.emissiveIntensity = 0
            }
            
            mat.needsUpdate = true
          }
        })
      }
    })
  }, [clonedScene, configState])
  
  if (!clonedScene) return null
  
  return (
    <primitive 
      object={clonedScene}
    />
  )
}

function Canvas({ configState = {} }) {
  const [hasError, setHasError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showReflection, setShowReflection] = React.useState(true)

  if (hasError) {
    return (
      <div className="canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div>3D Canvas Error - Check console for details</div>
      </div>
    )
  }

  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
    <div className="canvas">
      <div className="canvas-logo-wrapper">
        <img 
          src="/assets/logo.svg" 
          alt="Logo" 
          className="canvas-logo"
        />
      </div>
      <div className="canvas-controls-area">
        <div className="canvas-controls">
        <div className="control-card" title="Screenshot">
          <i className="fa-solid fa-camera"></i>
        </div>
        <div className="control-card" title="AR">
          <i className="fa-solid fa-cube"></i>
        </div>
        <div className="control-card" title="Virtual Try-On">
          <i className="fa-solid fa-vr-cardboard"></i>
        </div>
        <div className="control-card" title="Undo">
          <i className="fa-solid fa-rotate-left"></i>
        </div>
        <div 
          className="control-card" 
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </div>
      </div>
      </div>
      {isLoading && <LoadingIndicator />}
      <R3FCanvas
        camera={{ position: [500, 150, 500], fov: 50, near: 0.1, far: 10000 }}
        gl={{ antialias: true }}
        onError={(error) => {
          console.error('R3F Canvas error:', error)
          setHasError(true)
        }}
        style={{ background: '#000000' }}
      >
            <Suspense fallback={null}>
              {/* Studio environment from HDR file */}
              <StudioEnvironment />
              
              {/* Professional studio lighting setup - optimized for reflections */}
              
              {/* Key light - main light source (from above, focused on gems) - high priority */}
              <directionalLight 
                position={[0, 20, 0]} 
                intensity={1.5} 
                castShadow
              />
              
              {/* Fill light - from opposite side and above - high priority */}
              <directionalLight 
                position={[-5, 15, 5]} 
                intensity={1.2}
              />
              
              {/* Top light - directly overhead for better reflections on gems - high priority */}
              <directionalLight 
                position={[0, 25, 0]} 
                intensity={1.4}
              />
              
              {/* Front light - illuminates front of model and gems - high priority */}
              <directionalLight 
                position={[0, 10, 15]} 
                intensity={1.2}
              />
              
              {/* Side lights for even illumination, positioned to light gems - high priority */}
              <pointLight 
                position={[15, 10, 0]} 
                intensity={1.2}
                distance={50}
              />
              <pointLight 
                position={[-15, 10, 0]} 
                intensity={1.2}
                distance={50}
              />
              
              {/* Additional light focused on gem area - high priority */}
              <pointLight 
                position={[0, 5, 0]} 
                intensity={1.0}
                distance={40}
              />
              
              {/* Soft ambient fill for overall illumination - increased for even lighting */}
              <ambientLight intensity={0.5} />
              
              {/* Hemisphere light - reduced contrast */}
              <hemisphereLight 
                skyColor={0xffffff}
                groundColor={0x666666}
                intensity={0.15}
              />
              
              <ShoeModel 
                position={[0, -200, 0]} 
                scale={30.0}
                rotation={[0, 2, 0]}
                configState={configState}
                onLoad={() => setIsLoading(false)}
              />
              {showReflection && (
                <ReflectedShoe 
                  position={[0, -200, 0]} 
                  scale={30.0}
                  rotation={[0, 2, 0]}
                  configState={configState}
                />
              )}
              <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={50}
                maxDistance={10000}
                zoomSpeed={1.5}
                panSpeed={1.0}
                rotateSpeed={0.8}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                target={[0, 0, 0]}
                onChange={(e) => {
                  // Hide reflection when viewing from below the ground plane
                  const camera = e?.target?.object
                  if (camera) {
                    const groundPlaneY = -300 // Ground plane Y position
                    // If camera is below the ground plane, hide reflection
                    const viewingFromBelow = camera.position.y < groundPlaneY
                    setShowReflection(!viewingFromBelow)
                  }
                }}
              />
            </Suspense>
      </R3FCanvas>
    </div>
  )
}

export default Canvas

