import React, { Suspense, useMemo } from 'react'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { MeshStandardMaterial, MeshPhysicalMaterial, PlaneGeometry, Color } from 'three'
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
  if (!colorName) return '#808080'
  
  const colorMap = {
    'Black': '#0A0A0A', 'White': '#FAFAF8', 'Ivory': '#F5F3ED', 'Cream': '#F0EDE1',
    'Beige': '#E8E3D5', 'Taupe': '#8B7D6B', 'Brown': '#5C4033', 'Cognac': '#8B4513', 'Tan': '#C19A6B',
    'Grey': '#6B6B6B', 'Charcoal': '#2F2F2F', 'Slate': '#5A5A5A', 'Stone': '#8B8680',
    'Navy': '#1A1F3A', 'Royal': '#2C3E7A', 'Midnight': '#1A1A2E', 'Sky': '#B8D4E3', 'Powder': '#D0E4E8',
    'Blue': '#1E3A8A', 'Deep Blue': '#1E40AF', 'Royal Blue': '#2563EB', 'Cornflower Blue': '#3B82F6',
    'Red': '#8B0000', 'Burgundy': '#4A0E0E', 'Wine': '#5C1A1A', 'Crimson': '#8B1A1A', 'Scarlet': '#8B1C1C',
    'Pink': '#D4A5A5', 'Rose': '#C97D7D', 'Blush': '#D4A5A5', 'Fuchsia': '#B85C8B', 'Magenta': '#8B4789',
    'Purple': '#5D4E75', 'Lavender': '#B8A9C9', 'Violet': '#6B4C7A', 'Plum': '#6B4C6B', 'Amethyst': '#8B7D9B',
    'Green': '#4A5D23', 'Forest': '#2F4F2F', 'Emerald': '#3D6B3D', 'Olive': '#6B6B3D', 'Sage': '#9CAF88', 'Mint': '#B8D4B8',
    'Yellow': '#D4AF37', 'Gold': '#C9A961', 'Amber': '#D4A85C', 'Mustard': '#C9A85C', 'Champagne': '#E8DCC0',
    'Orange': '#C97D3D', 'Coral': '#D4A5A5', 'Rust': '#8B4513', 'Terracotta': '#A85C3D',
    'Silver': '#A8A8A8', 'Bronze': '#8B6B3D', 'Copper': '#B87333', 'Gunmetal': '#2C2C2C', 'Metallic': '#8B8B8B',
    'Rose Gold': '#E8B4A0', 'Platinum': '#E5E4E2', 'Champagne Gold': '#F7E7CE',
    // Gemstone colors - comprehensive mapping
    'Diamond': '#FAFAF8', 'Ruby': '#8B0000', 'Sapphire': '#1E3A8A', 'Emerald': '#3D6B3D',
    'Amethyst': '#8B7D9B', 'Topaz': '#D4AF37', 'Pearl': '#F5F3ED', 'Opal': '#E8E8E8',
    'Garnet': '#8B1A1A', 'Aquamarine': '#B8D4E3', 'Peridot': '#9CAF88', 'Citrine': '#D4A85C',
    'Tanzanite': '#6B4C7A', 'Tourmaline': '#8B7D9B',
    // Diamond color grades
    'Colorless': '#FAFAF8', 'Colorless (D-F)': '#FAFAF8', 'Near Colorless': '#F5F5F5', 'Near Colorless (G-J)': '#F5F5F5',
    'Faint Yellow': '#F5F0E8', 'Faint Yellow (K-M)': '#F5F0E8', 'Very Light Yellow': '#F0E8D8', 'Very Light Yellow (N-R)': '#F0E8D8',
    'Light Yellow': '#E8D4B8', 'Light Yellow (S-Z)': '#E8D4B8',
    // Fancy diamond colors
    'Fancy Yellow': '#D4AF37', 'Fancy Intense Yellow': '#C9A961', 'Fancy Vivid Yellow': '#FFD700',
    'Fancy Pink': '#FFB6C1', 'Fancy Intense Pink': '#FF69B4', 'Fancy Vivid Pink': '#FF1493',
    'Fancy Blue': '#1E90FF', 'Fancy Intense Blue': '#0066FF', 'Fancy Vivid Blue': '#0000FF',
    'Fancy Green': '#32CD32', 'Fancy Intense Green': '#228B22', 'Fancy Vivid Green': '#00FF00',
    'Fancy Brown': '#8B4513', 'Fancy Intense Brown': '#654321', 'Fancy Orange': '#FF8C00', 'Fancy Red': '#DC143C',
    'Fancy Purple': '#9370DB', 'Fancy Deep': '#191970', 'Fancy Dark': '#2F2F2F', 'Fancy Light': '#E0E0E0',
    // Extended color variations
    'Deep Red': '#8B0000', 'Deep Blue': '#00008B', 'Deep Green': '#006400', 'Deep Purple': '#4B0082',
    'Light Blue': '#ADD8E6', 'Light Green': '#90EE90', 'Light Pink': '#FFB6C1', 'Light Yellow': '#FFFFE0',
    'Medium Blue': '#0000CD', 'Medium Green': '#32CD32', 'Pale Blue': '#E0F6FF', 'Pale Green': '#98FB98',
    'Vivid Red': '#FF0000', 'Vivid Blue': '#0000FF', 'Vivid Green': '#00FF00', 'Intense Red': '#DC143C',
    'Intense Blue': '#0000CD', 'Intense Green': '#228B22',
    // Special gem colors
    'Pink-Red': '#FF69B4', 'Purple-Red': '#8B008B', 'Orange-Red': '#FF4500', 'Blue-Green': '#008B8B',
    'Yellow-Green': '#9ACD32', 'Bluish Green': '#00CED1', 'Yellowish Green': '#ADFF2F',
    'Pink-Purple': '#DA70D6', 'Rose de France': '#E6E6FA', 'Pigeon Blood Red': '#8B0000',
    // Additional gem names
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
    'Fossilized Wood': '#8B4513', 'Ivory': '#FFFFF0', 'Jet': '#000000', 'Mother-of-Pearl': '#F0E68C',
    'Nacre': '#F0E68C', 'Odontolite': '#00CED1', 'Shell': '#FFF8DC', 'Tortoiseshell': '#8B4513',
    'Tagua Nut': '#F5DEB3',
    // Special effects
    'Bi-color': '#9370DB', 'Parti-color': '#9370DB', 'Color Change': '#00FF7F', 'Rainbow': '#FF1493',
    'Multi-color': '#9370DB', 'Iridescent': '#FF1493', 'Opalescent': '#E0E0E0', 'Holographic': '#FF1493',
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

// Component to load and display the shoe model
function ShoeModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], configState = {} }) {
  // Use environment variable for model URL, fallback to render.glb
  const modelPath = import.meta.env.VITE_MODEL_URL || '/assets/render.glb'
  const { scene } = useGLTF(modelPath)
  
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
  
  // Comprehensive mesh to feature/category mapping
  // This maps model mesh names to panel features and categories
  const createMeshMapping = (meshName) => {
    const name = meshName.toLowerCase()
    
    // Map to features and categories based on actual mesh names
    const mapping = {
      feature: null,
      category: null,
    }
    
    // Exact mesh name mappings
    if (name === 'g_heel') {
      mapping.feature = 'Heel'
      mapping.category = null // Heel has no categories
    } else if (name === 'g_cascade') {
      mapping.feature = 'Cascade'
      mapping.category = null // Cascade has categories but we'll handle them in the configurator
    } else if (name === 'g_gems') {
      mapping.feature = 'Gems'
      mapping.category = null // Gems has categories but we'll handle them in the configurator
    } else if (name === 'g_crown') {
      mapping.feature = 'Crown'
      mapping.category = null // Crown has categories but we'll handle them in the configurator
    } else if (name === 'g_insoleinstrapmicro_hardware' || name.includes('insoleinstrapmicro')) {
      mapping.feature = 'Sole/Strap'
      mapping.category = 'Insole/Instrap/Micro Hardware'
    } else if (name === 'g_outsoleoutstrap' || name.includes('outsoleoutstrap')) {
      mapping.feature = 'Sole/Strap'
      mapping.category = 'Outsole/Outstrap'
    } else if (name === 'g_default' || name.includes('default')) {
      mapping.feature = 'Material & Structure'
      mapping.category = 'Base' // Default category for main body
    }
    
    // Fallback mappings for partial matches (in case of variations)
    if (!mapping.feature) {
      if (name.includes('heel')) {
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
      } else if (name.includes('insole') || name.includes('instrap') || name.includes('micro')) {
        mapping.feature = 'Sole/Strap'
        mapping.category = 'Insole/Instrap/Micro Hardware'
      } else if (name.includes('outsole') || name.includes('outstrap')) {
        mapping.feature = 'Sole/Strap'
        mapping.category = 'Outsole/Outstrap'
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
      if (child.isMesh) {
        const originalName = child.name || 'unnamed'
        const name = originalName.toLowerCase()
        meshNames.push(originalName)
        
        // Create mapping for this mesh
        const mapping = createMeshMapping(originalName)
        meshMappings[originalName] = mapping
        
        // Store mesh reference
        if (!meshMap.current[name]) {
          meshMap.current[name] = []
        }
        meshMap.current[name].push(child)
        
        // Also check parent names
        if (child.parent) {
          const parentName = child.parent.name.toLowerCase()
          if (!meshMap.current[parentName]) {
            meshMap.current[parentName] = []
          }
          meshMap.current[parentName].push(child)
          
          // Also map based on parent name
          const parentMapping = createMeshMapping(child.parent.name)
          if (parentMapping.feature && !mapping.feature) {
            meshMappings[originalName] = parentMapping
          }
        }
        
        // Get the mapping for this mesh to determine material type
        const meshMapping = meshMappings[originalName]
        
        // Determine default material properties based on feature
        let defaultMaterialProps = {
          metalness: 0.3,
          roughness: 0.7,
          color: 0x808080, // Default grey
        }
        
        if (meshMapping) {
          if (meshMapping.feature === 'Heel') {
            // Precious metals - realistic gold with physical material properties
            const goldColor = new Color(getMetalColorHex('Gold'))
            defaultMaterialProps = {
              metalness: 0.9, // High metalness but slightly less for realism
              roughness: 0.15, // Slightly higher roughness for realistic metal surface (not perfect mirror)
              color: goldColor.getHex(), // Gold color
              usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
              clearcoat: 0.5, // Moderate clearcoat for realistic metal finish
              clearcoatRoughness: 0.2, // Slight roughness in clearcoat for realistic imperfections
              sheen: 0.1, // Subtle sheen for realistic metal
              sheenRoughness: 0.3,
              envMapIntensity: 5.0, // Increased environment map intensity for stronger reflections
            }
          } else if (meshMapping.feature === 'Gems') {
            // Gems - sapphire blue default
            const sapphireColor = new Color(getColorHex('Sapphire'))
            defaultMaterialProps = {
              metalness: 0.0, // Gems are dielectric (non-metallic)
              roughness: 0.0, // Perfectly polished surface (mirror-like)
              color: sapphireColor.getHex(), // Sapphire blue
              usePhysicalMaterial: true, // Use MeshPhysicalMaterial for gems
              transmission: 0.95, // High transmission for transparency (like real gems)
              thickness: 1.0, // Full thickness for proper refraction
              ior: 1.77, // Sapphire IOR
              clearcoat: 1.0, // Full clearcoat for extra shine
              clearcoatRoughness: 0.0, // Perfectly smooth clearcoat
              sheen: 0.5, // Add sheen for extra realism
              sheenRoughness: 0.1,
              specularIntensity: 1.0, // Full specular reflection
              specularColor: new Color(1, 1, 1), // White specular highlights
              envMapIntensity: 5.0, // Increased environment map intensity for stronger reflections
            }
          } else if (meshMapping.feature === 'Crown') {
            // Crown - diamond/colorless default
            const diamondColor = new Color(getColorHex('Diamond'))
            defaultMaterialProps = {
              metalness: 0.0,
              roughness: 0.0,
              color: diamondColor.getHex(), // Diamond/colorless
              usePhysicalMaterial: true,
              transmission: 0.95,
              thickness: 1.0,
              ior: 2.42, // Diamond IOR
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              sheen: 0.5,
              sheenRoughness: 0.1,
              specularIntensity: 1.0,
              specularColor: new Color(1, 1, 1),
              envMapIntensity: 5.0, // Increased environment map intensity for stronger reflections
            }
          } else if (meshMapping.feature === 'Cascade') {
            // Cascade - emerald green default
            const emeraldColor = new Color(getColorHex('Emerald'))
            defaultMaterialProps = {
              metalness: 0.0,
              roughness: 0.0,
              color: emeraldColor.getHex(), // Emerald green
              usePhysicalMaterial: true,
              transmission: 0.95,
              thickness: 1.0,
              ior: 1.58, // Emerald IOR
              clearcoat: 1.0,
              clearcoatRoughness: 0.0,
              sheen: 0.5,
              sheenRoughness: 0.1,
              specularIntensity: 1.0,
              specularColor: new Color(1, 1, 1),
              envMapIntensity: 5.0, // Increased environment map intensity for stronger reflections
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
                clearcoat: 1.0, // Full clearcoat for maximum patent leather gloss
                clearcoatRoughness: 0.0, // Perfectly smooth clearcoat for mirror reflection
                sheen: 0.4, // Increased sheen for realistic leather
                sheenRoughness: 0.1,
                envMapIntensity: 3.0, // Much higher environment map intensity for strong reflections
              }
            } else {
              // Insole - matte leather with black default
              const blackColor = new Color(getColorHex('Black'))
              defaultMaterialProps = {
                metalness: 0.0, // No metalness for matte leather
                roughness: 0.85, // High roughness for matte, textured leather
                color: blackColor.getHex(), // Black matte leather
                sheen: 0.2, // Subtle sheen for natural leather
                sheenRoughness: 0.5, // Rough sheen
              }
            }
          } else if (meshMapping.feature === 'Material & Structure' || originalName === 'g_Default') {
            // Aluminum - brushed aluminum default
            const aluminumColor = new Color(getColorHex('Silver'))
            defaultMaterialProps = {
              metalness: 0.7,
              roughness: 0.4,
              color: aluminumColor.getHex(), // Aluminum/silver color
            }
          }
        }
        
        // Remove default materials and create new controllable materials
        // Use the default color from material props (which now has proper defaults)
        const currentColor = new Color(defaultMaterialProps.color)
        
        // Dispose of old material if it exists
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
        
        // Create material with feature-appropriate properties
        // Use MeshPhysicalMaterial for gems and outsole (more realistic), MeshStandardMaterial for others
        if (defaultMaterialProps.usePhysicalMaterial) {
          child.material = new MeshPhysicalMaterial({
            color: currentColor,
            metalness: defaultMaterialProps.metalness,
            roughness: defaultMaterialProps.roughness,
            transmission: defaultMaterialProps.transmission || 0,
            thickness: defaultMaterialProps.thickness || 0,
            ior: defaultMaterialProps.ior || 1.5,
            clearcoat: defaultMaterialProps.clearcoat || 0,
            clearcoatRoughness: defaultMaterialProps.clearcoatRoughness || 0.1,
            sheen: defaultMaterialProps.sheen || 0,
            sheenRoughness: defaultMaterialProps.sheenRoughness || 0.3,
            specularIntensity: defaultMaterialProps.specularIntensity || 1.0,
            specularColor: defaultMaterialProps.specularColor || new Color(1, 1, 1),
            envMapIntensity: defaultMaterialProps.envMapIntensity || 1.0,
          })
        } else {
          child.material = new MeshStandardMaterial({
            color: currentColor,
            metalness: defaultMaterialProps.metalness,
            roughness: defaultMaterialProps.roughness,
          })
        }
        
        // Mark for updates
        child.material.needsUpdate = true
      }
    })
    
    // Store the mapping
    meshFeatureMap.current = meshMappings
    
    // Log all mesh names and their mappings for debugging
    console.log('=== SHOE MODEL STRUCTURE ===')
    console.log('Total meshes found:', meshNames.length)
    console.log('All mesh names:', meshNames)
    console.log('Mesh to Feature/Category mapping:', meshMappings)
    
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
    
    // Apply default colors to all meshes based on their feature mapping
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const meshName = child.name || 'unnamed'
        const mapping = meshMappings[meshName]
        
        if (mapping) {
          let defaultColorName = null
          
          // Set default color names based on feature
          if (mapping.feature === 'Heel') {
            defaultColorName = 'Gold'
          } else if (mapping.feature === 'Gems') {
            defaultColorName = 'Sapphire'
          } else if (mapping.feature === 'Crown') {
            defaultColorName = 'Diamond'
          } else if (mapping.feature === 'Cascade') {
            defaultColorName = 'Emerald'
          } else if (mapping.feature === 'Sole/Strap') {
            // Outsole gets Midnight, Insole gets Black
            const isOutsole = mapping.category === 'Outsole/Outstrap'
            defaultColorName = isOutsole ? 'Midnight' : 'Black'
          } else if (mapping.feature === 'Material & Structure' || meshName === 'g_Default') {
            defaultColorName = 'Silver'
          }
          
          // Apply default color if we have one
          if (defaultColorName && child.material) {
            const defaultColorHex = getColorHex(defaultColorName)
            child.material.color = new Color(defaultColorHex)
            child.material.needsUpdate = true
            
            // Track default colors per feature so they persist when switching tabs
            const featureKey = mapping.category 
              ? `${mapping.feature}:${mapping.category}` 
              : mapping.feature
            if (!colorFeatureMap.current[defaultColorName]) {
              colorFeatureMap.current[defaultColorName] = mapping.feature
            }
          } else if (mapping && mapping.feature === 'Sole/Strap') {
            // Apply default colors for Sole/Strap based on category
            const isOutsole = mapping.category === 'Outsole/Outstrap'
            const defaultColor = isOutsole ? 'Midnight' : 'Black'
            const defaultColorHex = getColorHex(defaultColor)
            child.material.color = new Color(defaultColorHex)
            child.material.needsUpdate = true
            
            // Track default colors per feature
            if (!colorFeatureMap.current[defaultColor]) {
              colorFeatureMap.current[defaultColor] = mapping.feature
            }
          }
        }
      }
    })
  }, [clonedScene])
  
  // Apply configuration changes to the model
  // Only update when color/material selections change, not when tabs/features change
  React.useEffect(() => {
    if (!clonedScene) return
    
    const { activeFeature, selectedGridItem, selectedColorName, activeCategory, selectedGem } = configState
    
    // Determine what color/material to apply
    let colorToApply = selectedColorName
    
    // For Gems feature: if a gem is selected and a color is selected, apply the color
    // For Crown/Cascade: if a color is selected, apply it
    // For other features: apply if color is selected
    
    // Only apply changes if we have a color selected
    // This ensures materials persist when just switching tabs
    if (!colorToApply) return
    
    // CRITICAL: Only apply colors that were selected for the CURRENT activeFeature
    // This prevents colors from one feature affecting another when switching tabs
    const colorSelectedForFeature = colorFeatureMap.current[colorToApply]
    if (colorSelectedForFeature && colorSelectedForFeature !== activeFeature) {
      // This color was selected for a different feature, don't apply it
      // This prevents colors from changing when switching tabs
      return
    }
    
    // Record which feature this color is for (if not already recorded)
    // This allows us to track which feature each color belongs to
    if (!colorSelectedForFeature) {
      colorFeatureMap.current[colorToApply] = activeFeature
    }
    
    // For Gems feature, we need either a gem selected OR a color selected
    // If color is selected, apply it to the gem mesh
    if (activeFeature === 'Gems' && selectedGem?.gemName && colorToApply) {
      // Gem is selected and color is selected - apply the color
      // This is the desired behavior
    } else if (activeFeature === 'Gems' && !selectedGem?.gemName) {
      // No gem selected yet, don't apply color
      return
    }
    
    // Only apply changes if we have a selection
    // For Gems, Crown, Cascade - allow color updates even without selectedGridItem
    // (because color selection happens after gem/item selection)
    if (selectedGridItem === null && 
        activeFeature !== 'Gems' && 
        activeFeature !== 'Crown' && 
        activeFeature !== 'Cascade' &&
        activeFeature !== 'Heel' &&
        activeFeature !== 'Sole/Strap') {
      return
    }
    
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const meshName = child.name || 'unnamed'
        const mapping = meshFeatureMap.current[meshName]
        
        // Check if this mesh matches the current feature and category
        let shouldUpdate = false
        let colorHex = null
        let materialProps = {}
        
        if (mapping) {
          // Check if feature matches
          if (mapping.feature === activeFeature) {
            // For features with categories, check category match
            if (activeCategory && mapping.category) {
              if (mapping.category === activeCategory) {
                shouldUpdate = true
              }
            } else if (!activeCategory || !mapping.category) {
              // No category filtering needed (e.g., Heel, Gems, Crown, Cascade features)
              shouldUpdate = true
            }
          }
          
          // Special handling for Adornment tab features (Gems, Crown, Cascade)
          // These don't have category filtering in the same way
          if (activeFeature === 'Gems' && mapping.feature === 'Gems') {
            // For Gems: apply color if a gem is selected and a color is selected
            // This allows changing the color of a selected gem
            if (selectedGem?.gemName && colorToApply) {
              shouldUpdate = true
            }
          } else if (activeFeature === 'Crown' && mapping.feature === 'Crown') {
            shouldUpdate = true
          } else if (activeFeature === 'Cascade' && mapping.feature === 'Cascade') {
            shouldUpdate = true
          }
        }
        
        // Apply color if we have a match
        if (shouldUpdate) {
          // Check if this color was selected for a different feature
          // If so, don't apply it (prevents colors from one feature affecting another)
          const colorSelectedForFeature = colorFeatureMap.current[colorToApply]
          if (colorSelectedForFeature && colorSelectedForFeature !== activeFeature) {
            // This color was selected for a different feature, skip it
            return
          }
          
          // If this is a new color selection, record which feature it's for
          if (!colorSelectedForFeature) {
            colorFeatureMap.current[colorToApply] = activeFeature
          }
          
          console.log('Updating mesh:', meshName, 'with color:', colorToApply, 'for feature:', activeFeature)
          // Determine color and material properties based on feature type
          if (mapping.feature === 'Heel') {
            // Heel uses precious metals with realistic physical material properties
            colorHex = getMetalColorHex(colorToApply)
            materialProps = {
              metalness: 0.9, // High metalness but slightly less for realism
              roughness: 0.15, // Slightly higher roughness for realistic metal surface (not perfect mirror)
              usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
              clearcoat: 0.5, // Moderate clearcoat for realistic metal finish
              clearcoatRoughness: 0.2, // Slight roughness in clearcoat for realistic imperfections
              sheen: 0.1, // Subtle sheen for realistic metal
              sheenRoughness: 0.3,
              envMapIntensity: 2.0, // Good environment map intensity for reflections
            }
          } else if (mapping.feature === 'Gems' || mapping.feature === 'Crown' || mapping.feature === 'Cascade') {
            // Gemstones - highly realistic with physical material properties
            // Based on real-world gemstone properties
            colorHex = getColorHex(colorToApply)
            console.log('Gem color hex:', colorHex, 'for color name:', colorToApply)
            
            // If color not found in map, try to extract base color
            if (colorHex === '#808080' && colorToApply) {
              // Try to find a base color in the name
              const colorLower = colorToApply.toLowerCase()
              if (colorLower.includes('red') || colorLower.includes('ruby') || colorLower.includes('crimson') || colorLower.includes('scarlet')) {
                colorHex = '#8B0000'
              } else if (colorLower.includes('blue') || colorLower.includes('sapphire') || colorLower.includes('aqua')) {
                colorHex = '#1E3A8A'
              } else if (colorLower.includes('green') || colorLower.includes('emerald')) {
                colorHex = '#3D6B3D'
              } else if (colorLower.includes('yellow') || colorLower.includes('gold') || colorLower.includes('citrine') || colorLower.includes('topaz')) {
                colorHex = '#D4AF37'
              } else if (colorLower.includes('pink') || colorLower.includes('rose') || colorLower.includes('morganite')) {
                colorHex = '#FFB6C1'
              } else if (colorLower.includes('purple') || colorLower.includes('amethyst') || colorLower.includes('violet')) {
                colorHex = '#8B7D9B'
              } else if (colorLower.includes('orange') || colorLower.includes('amber') || colorLower.includes('coral')) {
                colorHex = '#FF8C00'
              } else if (colorLower.includes('white') || colorLower.includes('colorless') || colorLower.includes('diamond') || colorLower.includes('pearl')) {
                colorHex = '#FAFAF8'
              } else if (colorLower.includes('black') || colorLower.includes('onyx') || colorLower.includes('obsidian')) {
                colorHex = '#0A0A0A'
              }
              console.log('Using fallback color:', colorHex, 'for:', colorToApply)
            }
            
            // Determine IOR based on gem type (realistic values)
            let gemIOR = 2.42 // Default to diamond
            const gemName = colorToApply.toLowerCase()
            if (gemName.includes('diamond')) gemIOR = 2.42
            else if (gemName.includes('ruby') || gemName.includes('sapphire')) gemIOR = 1.77
            else if (gemName.includes('emerald')) gemIOR = 1.58
            else if (gemName.includes('amethyst')) gemIOR = 1.54
            else if (gemName.includes('topaz')) gemIOR = 1.63
            else if (gemName.includes('garnet')) gemIOR = 1.73
            else if (gemName.includes('aquamarine')) gemIOR = 1.57
            else if (gemName.includes('peridot')) gemIOR = 1.65
            else if (gemName.includes('citrine')) gemIOR = 1.54
            else if (gemName.includes('tanzanite')) gemIOR = 1.69
            else if (gemName.includes('tourmaline')) gemIOR = 1.62
            else if (gemName.includes('opal')) gemIOR = 1.45
            else if (gemName.includes('pearl')) gemIOR = 1.53
            
            materialProps = {
              metalness: 0.0, // Gems are dielectric (non-metallic)
              roughness: 0.0, // Perfectly polished surface (mirror-like)
              usePhysicalMaterial: true,
              transmission: 0.95, // High transmission for transparency (like real gems)
              thickness: 1.0, // Full thickness for proper refraction
              ior: gemIOR, // Realistic index of refraction based on gem type
              clearcoat: 1.0, // Full clearcoat for extra shine
              clearcoatRoughness: 0.0, // Perfectly smooth clearcoat
              sheen: 0.5, // Add sheen for extra realism
              sheenRoughness: 0.1,
              specularIntensity: 1.0, // Full specular reflection
              specularColor: new Color(1, 1, 1), // White specular highlights
              envMapIntensity: 5.0, // Increased environment map intensity for stronger reflections
            }
          } else if (mapping.feature === 'Sole/Strap') {
            // Determine if this is outsole (reflective/patent leather) or insole (matte leather)
            const isOutsole = mapping.category === 'Outsole/Outstrap'
            colorHex = getColorHex(colorToApply)
            
            if (isOutsole) {
              // Outsole - patent/reflective leather with highly reflective properties
              materialProps = {
                metalness: 0.2, // Increased metalness for more patent leather shine
                roughness: 0.05, // Very low roughness for highly reflective, mirror-like surface
                usePhysicalMaterial: true, // Use MeshPhysicalMaterial for better reflections
                clearcoat: 1.0, // Full clearcoat for maximum patent leather gloss
                clearcoatRoughness: 0.0, // Perfectly smooth clearcoat for mirror reflection
                sheen: 0.4, // Increased sheen for realistic leather
                sheenRoughness: 0.1, // Smooth sheen
                envMapIntensity: 3.0, // Much higher environment map intensity for strong reflections
              }
            } else {
              // Insole - matte leather with realistic texture
              materialProps = {
                metalness: 0.0, // No metalness for matte leather
                roughness: 0.85, // High roughness for matte, textured leather
                sheen: 0.2, // Subtle sheen for natural leather
                sheenRoughness: 0.5, // Rough sheen
              }
            }
          } else if (mapping.feature === 'Material & Structure' || mapping.feature === null || !mapping.feature) {
            // Default/Aluminum - metallic but not as shiny as precious metals
            colorHex = getColorHex(colorToApply)
            materialProps = {
              metalness: 0.7,
              roughness: 0.4, // Brushed aluminum look
            }
          } else {
            // Default fallback
            colorHex = getColorHex(colorToApply)
            materialProps = {
              metalness: 0.3,
              roughness: 0.7,
            }
          }
          
          // Ensure we have the correct material type
          const needsPhysicalMaterial = materialProps.usePhysicalMaterial
          const isPhysicalMaterial = child.material.isMeshPhysicalMaterial
          
          if (needsPhysicalMaterial && !isPhysicalMaterial) {
            // Switch to MeshPhysicalMaterial for gems or outsole
            child.material.dispose()
            child.material = new MeshPhysicalMaterial({
              color: new Color(colorHex),
              metalness: materialProps.metalness || 0.0,
              roughness: materialProps.roughness || 0.0,
              transmission: materialProps.transmission || 0,
              thickness: materialProps.thickness || 0,
              ior: materialProps.ior || 1.5,
              clearcoat: materialProps.clearcoat || 0,
              clearcoatRoughness: materialProps.clearcoatRoughness || 0.1,
              sheen: materialProps.sheen || 0,
              sheenRoughness: materialProps.sheenRoughness || 0.3,
              specularIntensity: materialProps.specularIntensity || 1.0,
              specularColor: materialProps.specularColor || new Color(1, 1, 1),
              envMapIntensity: materialProps.envMapIntensity || 5.0, // Increased default envMapIntensity for stronger reflections
            })
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
            child.material.color = new Color(colorHex)
            child.material.metalness = materialProps.metalness
            child.material.roughness = materialProps.roughness
            
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
                child.material.specularColor = materialProps.specularColor
              }
              if (materialProps.envMapIntensity !== undefined) {
                child.material.envMapIntensity = materialProps.envMapIntensity
              }
            }
          }
          
          child.material.needsUpdate = true
        }
      }
    })
  }, [
    clonedScene,
    // Only depend on values that should trigger material updates
    // NOT activeTab or activeFeature - materials should persist when switching tabs/features
    // The logic inside already checks activeFeature to determine which meshes to update
    configState.selectedColorName,
    configState.selectedGem,
    configState.selectedGridItem,
    configState.activeCategory,
  ])
  
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
const modelPath = import.meta.env.VITE_MODEL_URL || '/assets/render.glb'
useGLTF.preload(modelPath)

// Reflective ground plane component
function ReflectiveGround() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.5, 0]}
      receiveShadow
    >
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial
        color={0x0a0a0a}
        metalness={0.95}
        roughness={0.05}
      />
    </mesh>
  )
}

function Canvas({ configState = {} }) {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <div className="canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div>3D Canvas Error - Check console for details</div>
      </div>
    )
  }

  return (
    <div className="canvas">
      <R3FCanvas
        camera={{ position: [8, 6, 15], fov: 45, near: 0.1, far: 1000 }}
        gl={{ antialias: true }}
        onError={(error) => {
          console.error('R3F Canvas error:', error)
          setHasError(true)
        }}
      >
            <Suspense fallback={null}>
              {/* Professional studio lighting setup without HDR */}
              
              {/* Key light - main light source (bright, from front-right) */}
              <directionalLight 
                position={[5, 8, 5]} 
                intensity={2.5} 
                castShadow
              />
              
              {/* Fill light - softer light from opposite side */}
              <directionalLight 
                position={[-5, 6, 3]} 
                intensity={1.2}
              />
              
              {/* Rim/Back light - creates edge definition */}
              <directionalLight 
                position={[-3, 4, -8]} 
                intensity={1.5}
              />
              
              {/* Top light - overhead illumination */}
              <directionalLight 
                position={[0, 12, 0]} 
                intensity={1.8}
              />
              
              {/* Additional side lights for even illumination */}
              <pointLight 
                position={[8, 6, 4]} 
                intensity={1.5}
                distance={20}
              />
              <pointLight 
                position={[-8, 6, 4]} 
                intensity={1.2}
                distance={20}
              />
              
              {/* Soft ambient fill for overall illumination */}
              <ambientLight intensity={0.5} />
              
              {/* Hemisphere light for natural sky/ground lighting */}
              <hemisphereLight 
                skyColor={0xffffff}
                groundColor={0x444444}
                intensity={0.6}
              />
              
              <ShoeModel 
                position={[0, -10, 0]} 
                scale={0.4}
                rotation={[0, -0.2, 0]}
                configState={configState}
              />
              <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={8}
                maxDistance={40}
                target={[0, -9, 0]}
              />
            </Suspense>
      </R3FCanvas>
    </div>
  )
}

export default Canvas
