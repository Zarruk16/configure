import React, { useState, useEffect, useRef } from 'react'
import './ConfigurationPanel.css'

// SVG Icons Components
const GemsIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L15 8L20 9L15 10L12 16L9 10L4 9L9 8L12 2Z"
      stroke="url(#iconGradient)"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill={isActive ? "url(#iconGradient)" : "none"}
      fillOpacity={isActive ? "0.2" : "0"}
    />
    <path
      d="M12 8L13 11L16 12L13 13L12 16L11 13L8 12L11 11L12 8Z"
      stroke="url(#iconGradient)"
      strokeWidth="1"
      strokeLinejoin="round"
      fill={isActive ? "url(#iconGradient)" : "none"}
      fillOpacity={isActive ? "0.4" : "0"}
    />
  </svg>
)

const CutsIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="6"
      y="6"
      width="6"
      height="12"
      rx="1"
      stroke="url(#iconGradient2)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="12"
      y="4"
      width="6"
      height="12"
      rx="1"
      stroke="url(#iconGradient2)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const ColorIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="9"
      width="7"
      height="7"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="9"
      y="5"
      width="7"
      height="7"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="13"
      y="11"
      width="5"
      height="5"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const CrownIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <path
      d="M5 16L7 8L12 10L17 8L19 16H5Z"
      stroke="url(#iconGradient4)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7 8L9.5 6L12 10L14.5 6L17 8"
      stroke="url(#iconGradient4)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="7" cy="20" r="1.5" fill="url(#iconGradient4)" />
    <circle cx="12" cy="20" r="1.5" fill="url(#iconGradient4)" />
    <circle cx="17" cy="20" r="1.5" fill="url(#iconGradient4)" />
  </svg>
)

const CascadeIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="6.5"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M6 8 Q12 10 18 8"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// Form & Fit Icons
const SoleStrapIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradientSole" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    {/* Shoe sole outline */}
    <path
      d="M5 18C5 18 6 20 8 20C10 20 14 20 16 20C18 20 19 18 19 18"
      stroke="url(#iconGradientSole)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M5 18C5 16 6 14 8 14C10 14 14 14 16 14C18 14 19 16 19 18"
      stroke="url(#iconGradientSole)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Straps */}
    <path
      d="M8 14V10M10 14V8M14 14V8M16 14V10"
      stroke="url(#iconGradientSole)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Strap buckles/details */}
    <circle cx="8" cy="12" r="0.8" fill="url(#iconGradientSole)" />
    <circle cx="16" cy="12" r="0.8" fill="url(#iconGradientSole)" />
  </svg>
)

const HeelIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradientHeel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    {/* Heel structure */}
    <path
      d="M8 20L8 12L10 8L14 8L16 12L16 20"
      stroke="url(#iconGradientHeel)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Heel base/platform */}
    <path
      d="M6 20L18 20"
      stroke="url(#iconGradientHeel)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Heel accent lines */}
    <path
      d="M10 10L14 10"
      stroke="url(#iconGradientHeel)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 14L15 14"
      stroke="url(#iconGradientHeel)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Decorative element */}
    <circle cx="12" cy="16" r="1" fill="url(#iconGradientHeel)" />
  </svg>
)

const FunctionDetailingIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="6"
      y="8"
      width="12"
      height="8"
      rx="1"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M9 8V6C9 4.895 9.895 4 11 4H13C14.105 4 15 4.895 15 6V8"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="12" r="1" fill="url(#iconGradient8)" />
    <circle cx="14" cy="12" r="1" fill="url(#iconGradient8)" />
    <path
      d="M8 16H16"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

function ConfigurationPanel() {
  const [activeTab, setActiveTab] = useState('Adornment')
  const [activeFeature, setActiveFeature] = useState('Gems')
  const [activeCategory, setActiveCategory] = useState('Precious')
  const [selectedGridItem, setSelectedGridItem] = useState(null)
  const [categoryStartIndex, setCategoryStartIndex] = useState(0) // Start index for carousel
  const categoriesPerView = 4 // Number of categories to show at once
  const [hasMoreContent, setHasMoreContent] = useState(false)
  const contentGridRef = useRef(null)
  const [sliderValue, setSliderValue] = useState(50) // Slider value for Size/Cuts
  const [selectedGem, setSelectedGem] = useState({ category: 'Precious', itemIndex: null, gemName: null }) // Track selected gem for Color feature
  const [selectedMaterial, setSelectedMaterial] = useState(null) // Track selected material/texture for color selection
  const [showColorPicker, setShowColorPicker] = useState(false) // Show color picker when material is selected

  const tabs = ['Adornment', 'Form', 'Experience']
  
  // Get features based on active tab
  const getFeatures = () => {
    if (activeTab === 'Form') {
      return [
        { id: 'Sole/Strap', icon: SoleStrapIcon },
        { id: 'Heel', icon: HeelIcon }
      ]
    } else {
      return [
        { id: 'Gems', icon: GemsIcon },
        { id: 'Cuts', icon: CutsIcon },
        { id: 'Crown', icon: CrownIcon },
        { id: 'Cascade', icon: CascadeIcon }
      ]
    }
  }
  
  const features = getFeatures()

  // Get color options for specific materials and textures
  const getMaterialColors = (materialName) => {
    const materialColorMap = {
      // Leather & Leather-Equivalent Types
      'Nappa': ['Black', 'White', 'Ivory', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Calfskin': ['Black', 'White', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Taupe'],
      'Patent': ['Black', 'White', 'Red', 'Navy', 'Burgundy', 'Pink', 'Silver', 'Gold', 'Metallic'],
      'Suede': ['Black', 'Brown', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Olive', 'Rust', 'Taupe'],
      'Nubuck': ['Black', 'Brown', 'Tan', 'Navy', 'Grey', 'Charcoal', 'Olive', 'Taupe'],
      'Saffiano': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Red'],
      'Aniline': ['Black', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Metallic': ['Gold', 'Silver', 'Bronze', 'Copper', 'Gunmetal', 'Rose', 'Champagne'],
      'Mirror': ['Black', 'Silver', 'Gold', 'Rose', 'Champagne', 'Gunmetal'],
      'Pearlized': ['White', 'Ivory', 'Cream', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl'],
      'Lacquered': ['Black', 'Red', 'Navy', 'Burgundy', 'Pink', 'Gold', 'Silver', 'Metallic'],
      'Croc': ['Black', 'Brown', 'Tan', 'Cognac', 'Navy', 'Burgundy', 'Grey'],
      'Snakeskin': ['Black', 'Brown', 'Tan', 'Olive', 'Charcoal', 'Grey', 'Taupe'],
      
      // Non-leather structural textiles
      'Satin': ['Black', 'White', 'Ivory', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      'Brocade': ['Black', 'Navy', 'Burgundy', 'Gold', 'Silver', 'Bronze', 'Rose', 'Champagne'],
      'Technical': ['Black', 'Grey', 'Charcoal', 'Navy', 'White', 'Silver'],
      'Mesh': ['Black', 'White', 'Grey', 'Navy', 'Charcoal', 'Silver'],
      'Microfiber': ['Black', 'Grey', 'Charcoal', 'Navy', 'White', 'Taupe'],
      
      // Vegan & eco-materials
      'Recycled': ['Black', 'Grey', 'Charcoal', 'Brown', 'Taupe', 'Navy'],
      'Bio': ['Black', 'Brown', 'Tan', 'Olive', 'Grey', 'Taupe'],
      'Premium': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Eco': ['Black', 'Brown', 'Tan', 'Olive', 'Grey', 'Taupe', 'Natural'],
      
      // Sheer & Decorative Layers
      'Organza': ['White', 'Ivory', 'Cream', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne', 'Blush'],
      'Tulle': ['White', 'Ivory', 'Black', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne'],
      'Chiffon': ['White', 'Ivory', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne', 'Blush', 'Peach'],
      'Lace': ['White', 'Ivory', 'Black', 'Cream', 'Pink', 'Rose', 'Champagne', 'Blush'],
      'Veils': ['White', 'Ivory', 'Black', 'Cream', 'Champagne', 'Pearl'],
      
      // Underlays & Structural Fabrics
      'Moiré': ['Black', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Silver'],
      'Velvet': ['Black', 'Navy', 'Burgundy', 'Wine', 'Emerald', 'Royal', 'Charcoal', 'Plum'],
      'Woven': ['Black', 'Brown', 'Tan', 'Navy', 'Grey', 'Charcoal', 'Taupe'],
      
      // Decorative Textiles & Threads
      'Jacquard': ['Black', 'Navy', 'Burgundy', 'Gold', 'Silver', 'Rose', 'Champagne'],
      'Lurex': ['Gold', 'Silver', 'Bronze', 'Rose', 'Champagne', 'Metallic'],
      'Embroidery': ['Black', 'White', 'Gold', 'Silver', 'Rose', 'Champagne', 'Navy', 'Burgundy'],
      'Sequined': ['Black', 'Gold', 'Silver', 'Rose', 'Champagne', 'Metallic', 'Navy'],
      'Threaded': ['Black', 'Gold', 'Silver', 'Rose', 'Champagne', 'Navy', 'Burgundy'],
      
      // Finish Treatments
      'Matte': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Taupe'],
      'Soft': ['Black', 'White', 'Ivory', 'Cream', 'Brown', 'Grey', 'Taupe', 'Beige'],
      'Satin': ['Black', 'White', 'Ivory', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      'Semi': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Gloss': ['Black', 'White', 'Red', 'Navy', 'Burgundy', 'Pink', 'Silver', 'Gold', 'Metallic'],
      'Mirror': ['Black', 'Silver', 'Gold', 'Rose', 'Champagne', 'Gunmetal'],
      'Foil': ['Gold', 'Silver', 'Bronze', 'Copper', 'Rose', 'Champagne', 'Metallic'],
      'Brushed': ['Silver', 'Gold', 'Bronze', 'Copper', 'Gunmetal', 'Rose', 'Champagne'],
      'Iridescent': ['White', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl', 'Metallic'],
      'Holographic': ['Silver', 'Gold', 'Metallic', 'Rainbow'],
      'Pearlescent': ['White', 'Ivory', 'Cream', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl'],
      'Crystalline': ['White', 'Cream', 'Champagne', 'Pearl', 'Silver', 'Gold'],
      'Frosted': ['White', 'Ivory', 'Cream', 'Champagne', 'Pearl', 'Silver'],
      'Ombré': ['Black', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      
      // Heel Metals
      'Gold': ['Yellow Gold', 'Rose Gold', 'White Gold', 'Platinum Gold', 'Champagne Gold'],
      'Rose Gold': ['Rose Gold', 'Pink Gold', 'Copper Rose', 'Champagne Rose'],
      'Platinum': ['Platinum', 'White Platinum', 'Grey Platinum'],
      'Silver': ['Silver', 'Sterling Silver', 'White Silver', 'Gunmetal Silver'],
      'Titanium': ['Titanium', 'Grey Titanium', 'Black Titanium'],
      'Brass': ['Brass', 'Antique Brass', 'Polished Brass'],
      'Bronze': ['Bronze', 'Antique Bronze', 'Polished Bronze'],
      'Copper': ['Copper', 'Antique Copper', 'Polished Copper'],
      'Chrome': ['Chrome', 'Polished Chrome', 'Brushed Chrome'],
      'Nickel': ['Nickel', 'Polished Nickel', 'Brushed Nickel'],
      'Palladium': ['Palladium', 'White Palladium'],
      'Rhodium': ['Rhodium', 'White Rhodium'],
      'Gunmetal': ['Gunmetal', 'Dark Gunmetal', 'Black Gunmetal'],
      'Steel': ['Steel', 'Stainless Steel', 'Brushed Steel', 'Black Steel']
    }
    
    // Return colors for the specific material, or default palette if not found
    return materialColorMap[materialName] || [
      'Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'
    ]
  }
  
  // Get hex color for metal color names
  const getMetalColorHex = (colorName) => {
    const metalColorMap = {
      'Yellow Gold': '#C9A961', 'Rose Gold': '#E8B4A0', 'White Gold': '#F5F5DC', 'Platinum Gold': '#E5E4E2', 'Champagne Gold': '#F7E7CE',
      'Pink Gold': '#E8B4A0', 'Copper Rose': '#B87333', 'Champagne Rose': '#F7E7CE',
      'White Platinum': '#E5E4E2', 'Grey Platinum': '#A8A8A8',
      'Sterling Silver': '#C0C0C0', 'White Silver': '#F5F5F5', 'Gunmetal Silver': '#2C2C2C',
      'Grey Titanium': '#878681', 'Black Titanium': '#2C2C2C',
      'Antique Brass': '#CD7F32', 'Polished Brass': '#B5A642',
      'Antique Bronze': '#8B4513', 'Polished Bronze': '#CD7F32',
      'Antique Copper': '#B87333', 'Polished Copper': '#DA8A67',
      'Polished Chrome': '#A8A8A8', 'Brushed Chrome': '#8B8B8B',
      'Polished Nickel': '#A8A8A8', 'Brushed Nickel': '#8B8B8B',
      'White Palladium': '#E5E4E2',
      'White Rhodium': '#E5E4E2',
      'Dark Gunmetal': '#1C1C1C', 'Black Gunmetal': '#0A0A0A',
      'Stainless Steel': '#A8A8A8', 'Brushed Steel': '#8B8B8B', 'Black Steel': '#2C2C2C'
    }
    return metalColorMap[colorName] || getColorHex(colorName)
  }

  // Get gem image URL - uses real images from free sources
  const getGemImagePath = (gemName) => {
    // Use Unsplash Source API with gem-specific search terms
    // This provides real, high-quality gemstone photos
    const searchTerms = {
      'Diamond': 'diamond-gemstone-jewelry',
      'Emerald': 'emerald-gemstone-green',
      'Ruby': 'ruby-gemstone-red',
      'Sapphire': 'sapphire-gemstone-blue',
      'Alexandrite': 'alexandrite-gemstone',
      'Benitoite': 'benitoite-gemstone',
      'Jadeite': 'jade-gemstone',
      'Paraiba Tourmaline': 'tourmaline-gemstone',
      'Red Spinel': 'spinel-gemstone',
      'Agate': 'agate-stone',
      'Amazonite': 'amazonite-gemstone',
      'Amethyst': 'amethyst-gemstone-purple',
      'Ametrine': 'ametrine-gemstone',
      'Apatite': 'apatite-gemstone',
      'Aquamarine': 'aquamarine-gemstone-blue',
      'Aventurine': 'aventurine-stone',
      'Bloodstone': 'bloodstone-gemstone',
      'Carnelian': 'carnelian-gemstone',
      'Chalcedony': 'chalcedony-gemstone',
      'Chrysoprase': 'chrysoprase-gemstone',
      'Citrine': 'citrine-gemstone-yellow',
      'Fluorite': 'fluorite-gemstone',
      'Garnet': 'garnet-gemstone-red',
      'Goshenite': 'goshenite-gemstone',
      'Heliodor': 'heliodor-gemstone',
      'Hematite': 'hematite-mineral',
      'Howlite': 'howlite-gemstone',
      'Iolite': 'iolite-gemstone',
      'Jasper': 'jasper-stone',
      'Kyanite': 'kyanite-gemstone',
      'Labradorite': 'labradorite-gemstone',
      'Lapis Lazuli': 'lapis-lazuli-gemstone',
      'Larimar': 'larimar-gemstone',
      'Lepidolite': 'lepidolite-gemstone',
      'Malachite': 'malachite-gemstone-green',
      'Moonstone': 'moonstone-gemstone',
      'Morganite': 'morganite-gemstone-pink',
      'Obsidian': 'obsidian-stone',
      'Onyx': 'onyx-stone-black',
      'Opal': 'opal-gemstone',
      'Peridot': 'peridot-gemstone-green',
      'Prehnite': 'prehnite-gemstone',
      'Pyrite': 'pyrite-mineral',
      'Rainbow Moonstone': 'moonstone-gemstone',
      'Rhodochrosite': 'rhodochrosite-gemstone',
      'Rhodonite': 'rhodonite-gemstone',
      'Rose Quartz': 'rose-quartz-gemstone',
      'Serpentine': 'serpentine-stone',
      'Smoky Quartz': 'smoky-quartz-gemstone',
      'Sodalite': 'sodalite-gemstone',
      'Spinel': 'spinel-gemstone',
      'Sunstone': 'sunstone-gemstone',
      'Tanzanite': 'tanzanite-gemstone',
      'Tiger\'s Eye': 'tigers-eye-gemstone',
      'Topaz': 'topaz-gemstone',
      'Tourmaline': 'tourmaline-gemstone',
      'Turquoise': 'turquoise-gemstone',
      'Unakite': 'unakite-stone',
      'Zircon': 'zircon-gemstone',
      'Tsavorite': 'tsavorite-garnet',
      'Dumortierite': 'dumortierite-gemstone',
      'Amber': 'amber-gemstone',
      'Ammolite': 'ammolite-gemstone',
      'Coral': 'coral-gemstone',
      'Pearl': 'pearl-gemstone',
      'Mother-of-Pearl': 'mother-of-pearl',
      'Jet': 'jet-gemstone',
      'Ivory': 'ivory-gemstone'
    }
    
    const searchTerm = searchTerms[gemName] || gemName.toLowerCase().replace(/\s+/g, '-') + '-gemstone'
    
    // Use Unsplash Source API - provides real gemstone photos
    // Format: https://source.unsplash.com/featured/400x400/?{search-term}
    return `https://source.unsplash.com/featured/400x400/?${searchTerm}`
  }
  
  // Get alternative image URLs for fallback
  const getGemImageFallbacks = (gemName) => {
    const searchTerm = gemName.toLowerCase().replace(/\s+/g, '-') + '-gemstone'
    
    return [
      `https://source.unsplash.com/featured/400x400/?gemstone`, // Generic gemstone
      `https://source.unsplash.com/featured/400x400/?jewelry-gemstone`, // Jewelry gemstone
      `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80`, // Real gemstone photo
      `https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80`, // Gemstone collection
      `https://via.placeholder.com/400/533e17/fffe88?text=${encodeURIComponent(gemName.substring(0, 10))}` // Final placeholder fallback
    ]
  }

  // Get hex color for color name - realistic luxury material colors
  const getColorHex = (colorName) => {
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
      'Orange': '#C97D3D', 'Coral': '#D4A5A5', 'Rust': '#8B4513', 'Terracotta': '#A85C3D', 'Peach': '#E8C9A5',
      
      // Diamond colors
      'Colorless': '#F5F5F5', 'Near Colorless': '#F0F0F0', 'Faint Yellow': '#FFFACD', 'Light Yellow': '#FFE4B5',
      'Fancy Yellow': '#FFD700', 'Fancy Pink': '#FFB6C1', 'Fancy Blue': '#87CEEB', 'Fancy Green': '#90EE90', 'Fancy Brown': '#A0522D', 'Fancy Orange': '#FFA500', 'Fancy Red': '#DC143C', 'Fancy Purple': '#9370DB',
      
      // Special gem colors
      'Color Change': '#4A90E2', 'Padparadscha': '#FF6B6B', 'Watermelon': '#FF6B9D',
      
      // Metallics - realistic metal tones
      'Metallic': '#8B8B8B', 'Bronze': '#8B6B3D', 'Copper': '#B87333', 'Gunmetal': '#2C2C2C', 'Silver': '#A8A8A8',
      
      // Special colors
      'Pearl': '#F5F0E8', 'Natural': '#D4C5A9', 'Rainbow': '#8B7D6B', 'Indigo': '#4B0082',
      'Light Blue': '#ADD8E6', 'Light Pink': '#FFB6C1', 'Dusty Rose': '#B76E79', 'Mauve': '#E0B0FF',
      'Apple Green': '#8DB600', 'Dark Green': '#006400', 'Dark Blue': '#00008B', 'Dark Brown': '#654321',
      'Ruby Red': '#DC143C', 'Amethyst Purple': '#9966CC', 'Sapphire Blue': '#0F52BA', 'Emerald Green': '#50C878',
      'Holographic': '#FF6B9D', 'Opalescent': '#F5F5DC'
    }
    return colorMap[colorName] || '#6B6B6B'
  }

  // Get colors for specific gem
  const getGemColors = (gemName) => {
    const gemColorMap = {
      // Precious Gems
      'Diamond': ['Colorless', 'Near Colorless', 'Faint Yellow', 'Light Yellow', 'Fancy Yellow', 'Fancy Pink', 'Fancy Blue', 'Fancy Green', 'Fancy Brown', 'Fancy Orange', 'Fancy Red', 'Fancy Purple'],
      'Emerald': ['Green', 'Deep Green', 'Forest Green', 'Emerald Green', 'Mint Green', 'Light Green', 'Yellow-Green'],
      'Ruby': ['Red', 'Deep Red', 'Crimson', 'Pink-Red', 'Purple-Red', 'Orange-Red'],
      'Sapphire': ['Blue', 'Deep Blue', 'Royal Blue', 'Cornflower Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Orange', 'Padparadscha'],
      'Alexandrite': ['Green', 'Red', 'Purple', 'Blue-Green', 'Color Change'],
      'Benitoite': ['Blue', 'Deep Blue', 'Violet-Blue'],
      'Jadeite': ['Green', 'Lavender', 'White', 'Yellow', 'Orange', 'Red', 'Black'],
      'Paraiba Tourmaline': ['Blue', 'Green', 'Turquoise', 'Neon Blue', 'Neon Green'],
      'Red Spinel': ['Red', 'Pink', 'Purple', 'Orange-Red'],
      
      // Semi-Precious Gems
      'Agate': ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Black', 'White', 'Pink'],
      'Amazonite': ['Green', 'Blue-Green', 'Turquoise', 'Mint Green'],
      'Amethyst': ['Purple', 'Deep Purple', 'Violet', 'Lavender', 'Pink-Purple'],
      'Ametrine': ['Purple', 'Yellow', 'Orange', 'Amber'],
      'Apatite': ['Blue', 'Green', 'Yellow', 'Purple', 'Colorless'],
      'Aquamarine': ['Blue', 'Light Blue', 'Green-Blue', 'Teal'],
      'Aventurine': ['Green', 'Blue', 'Orange', 'Brown', 'Grey'],
      'Bloodstone': ['Green', 'Dark Green', 'Red', 'Brown'],
      'Carnelian': ['Red', 'Orange', 'Brown', 'Pink'],
      'Chalcedony': ['Blue', 'White', 'Grey', 'Brown', 'Pink', 'Purple'],
      'Chrysoprase': ['Green', 'Apple Green', 'Yellow-Green'],
      'Citrine': ['Yellow', 'Orange', 'Golden', 'Amber'],
      'Fluorite': ['Purple', 'Blue', 'Green', 'Yellow', 'Pink', 'Colorless'],
      'Garnet': ['Red', 'Pink', 'Orange', 'Green', 'Purple', 'Yellow'],
      'Goshenite': ['Colorless', 'White', 'Light Blue'],
      'Heliodor': ['Yellow', 'Golden', 'Green-Yellow'],
      'Hematite': ['Black', 'Grey', 'Silver', 'Red-Brown'],
      'Howlite': ['White', 'Grey', 'Blue', 'Green'],
      'Iolite': ['Blue', 'Violet', 'Purple', 'Grey'],
      'Jasper': ['Red', 'Brown', 'Yellow', 'Green', 'Blue', 'Orange'],
      'Kyanite': ['Blue', 'Green', 'White', 'Grey'],
      'Labradorite': ['Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Iridescent'],
      'Lapis Lazuli': ['Blue', 'Deep Blue', 'Royal Blue', 'Purple-Blue'],
      'Larimar': ['Blue', 'Turquoise', 'Green-Blue', 'White'],
      'Lepidolite': ['Pink', 'Purple', 'Lavender', 'White'],
      'Malachite': ['Green', 'Deep Green', 'Light Green', 'Turquoise'],
      'Moonstone': ['White', 'Cream', 'Peach', 'Blue', 'Grey'],
      'Morganite': ['Pink', 'Peach', 'Salmon', 'Rose'],
      'Obsidian': ['Black', 'Brown', 'Grey', 'Green'],
      'Onyx': ['Black', 'White', 'Brown', 'Grey'],
      'Opal': ['White', 'Blue', 'Green', 'Pink', 'Orange', 'Yellow', 'Red', 'Iridescent'],
      'Peridot': ['Green', 'Yellow-Green', 'Olive Green'],
      'Prehnite': ['Green', 'Yellow-Green', 'White'],
      'Pyrite': ['Gold', 'Yellow', 'Brass', 'Silver'],
      'Rainbow Moonstone': ['White', 'Blue', 'Peach', 'Iridescent'],
      'Rhodochrosite': ['Pink', 'Red', 'Orange', 'White'],
      'Rhodonite': ['Pink', 'Red', 'Brown', 'Black'],
      'Rose Quartz': ['Pink', 'Rose', 'Peach', 'Lavender'],
      'Serpentine': ['Green', 'Yellow-Green', 'Brown', 'Black'],
      'Smoky Quartz': ['Brown', 'Grey', 'Black', 'Yellow'],
      'Sodalite': ['Blue', 'Deep Blue', 'Purple', 'White'],
      'Spinel': ['Red', 'Pink', 'Blue', 'Purple', 'Orange', 'Black'],
      'Sunstone': ['Orange', 'Red', 'Yellow', 'Pink'],
      'Tanzanite': ['Blue', 'Purple', 'Violet', 'Indigo'],
      'Tiger\'s Eye': ['Brown', 'Gold', 'Yellow', 'Red'],
      'Topaz': ['Blue', 'Pink', 'Yellow', 'Orange', 'Colorless'],
      'Tourmaline': ['Pink', 'Green', 'Blue', 'Yellow', 'Red', 'Black', 'Watermelon'],
      'Turquoise': ['Blue', 'Green', 'Turquoise', 'Blue-Green'],
      'Unakite': ['Green', 'Pink', 'White', 'Brown'],
      'Zircon': ['Blue', 'Yellow', 'Orange', 'Red', 'Green', 'Colorless'],
      'Tsavorite': ['Green', 'Deep Green', 'Yellow-Green'],
      'Dumortierite': ['Blue', 'Purple', 'Violet', 'Grey'],
      
      // Organic Gems
      'Amber': ['Yellow', 'Orange', 'Brown', 'Honey', 'Golden'],
      'Ammolite': ['Red', 'Green', 'Blue', 'Purple', 'Iridescent'],
      'Bone': ['White', 'Cream', 'Beige', 'Brown'],
      'Bog Oak': ['Black', 'Brown', 'Dark Brown'],
      'Coral': ['Red', 'Pink', 'Orange', 'White'],
      'Copal': ['Yellow', 'Orange', 'Brown', 'Amber'],
      'Fossilized Wood': ['Brown', 'Black', 'Grey', 'Tan'],
      'Ivory': ['White', 'Cream', 'Beige', 'Ivory'],
      'Jet': ['Black', 'Dark Brown'],
      'Mother-of-Pearl': ['White', 'Cream', 'Pink', 'Blue', 'Green', 'Iridescent'],
      'Nacre': ['White', 'Cream', 'Pink', 'Blue', 'Green', 'Iridescent'],
      'Odontolite': ['Blue', 'Turquoise', 'Green-Blue'],
      'Pearl': ['White', 'Cream', 'Pink', 'Black', 'Gold', 'Silver', 'Lavender'],
      'Shell': ['White', 'Cream', 'Pink', 'Orange', 'Brown'],
      'Tortoiseshell': ['Brown', 'Amber', 'Yellow', 'Black'],
      'Tagua Nut': ['White', 'Cream', 'Beige', 'Brown'],
      
      // Man-Made
      'Synthetic Diamond': ['Colorless', 'Near Colorless', 'Faint Yellow', 'Fancy Yellow', 'Fancy Pink', 'Fancy Blue'],
      'Synthetic Ruby': ['Red', 'Deep Red', 'Pink-Red'],
      'Synthetic Sapphire': ['Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Orange'],
      'Synthetic Spinel': ['Red', 'Blue', 'Pink', 'Colorless'],
      'Synthetic Quartz': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green'],
      'Synthetic Quartz Crystal Clusters': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green'],
      'Synthetic Emerald': ['Green', 'Deep Green', 'Light Green'],
      'Synthetic Alexandrite': ['Green', 'Red', 'Purple', 'Color Change'],
      'Synthetic Moissanite': ['Colorless', 'Yellow', 'Green', 'Blue'],
      'Synthetic Aquamarine': ['Blue', 'Light Blue', 'Green-Blue'],
      'Synthetic Topaz': ['Blue', 'Pink', 'Yellow', 'Orange', 'Colorless'],
      'Synthetic Opal': ['White', 'Blue', 'Green', 'Pink', 'Iridescent'],
      'Synthetic Jadeite': ['Green', 'Lavender', 'White', 'Yellow'],
      'Synthetic Lapis Lazuli': ['Blue', 'Deep Blue', 'Royal Blue'],
      'Synthetic Turquoise': ['Blue', 'Green', 'Turquoise'],
      'Synthetic Malachite': ['Green', 'Deep Green', 'Light Green'],
      'Cubic Zirconia': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green'],
      'Opalite': ['Blue', 'Pink', 'Purple', 'Iridescent'],
      'Swarovski Crystal': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Red'],
      'Bismuth Crystal': ['Blue', 'Purple', 'Yellow', 'Iridescent'],
      'Glass Gemstones': ['Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Red', 'Colorless'],
      'Goldstone': ['Blue', 'Brown', 'Green', 'Purple'],
      'Paste': ['Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Red', 'Colorless'],
      'YAG': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green'],
      'GGG': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green'],
      'Lab-Created Garnet': ['Red', 'Pink', 'Orange', 'Green', 'Purple'],
      'Neoceram': ['Blue', 'Green', 'Purple', 'Iridescent'],
      'Glass-filled Gems': ['Red', 'Blue', 'Green', 'Purple', 'Yellow'],
      'Iridescent Glass': ['Blue', 'Green', 'Purple', 'Iridescent'],
      'Triplets & Doublets': ['Blue', 'Green', 'Purple', 'Yellow', 'Red'],
      'Synthetic Opal Doublet': ['White', 'Blue', 'Green', 'Pink', 'Iridescent'],
      'Lab-Created Emerald Overgrowth': ['Green', 'Deep Green', 'Light Green'],
      'Reconstituted Stones': ['Red', 'Blue', 'Green', 'Purple', 'Yellow'],
      'Foil-Backed or Coated Stones': ['Blue', 'Green', 'Purple', 'Yellow', 'Red'],
      'Girdled Stones': ['Blue', 'Green', 'Purple', 'Yellow', 'Red'],
      'Resin-Impregnated Stones': ['Blue', 'Green', 'Purple', 'Yellow', 'Red'],
      'Acrylic / Polymer Gems': ['Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Red', 'Colorless'],
      
      // Extended Natural
      'Amblygonite': ['Yellow', 'Green', 'Blue', 'Pink', 'Colorless'],
      'Andalusite': ['Green', 'Brown', 'Red', 'Pink'],
      'Axinite': ['Brown', 'Purple', 'Yellow', 'Grey'],
      'Azurite': ['Blue', 'Deep Blue', 'Dark Blue'],
      'Austrophyllite': ['Green', 'Yellow-Green', 'Brown'],
      'Beryl (RARE types)': ['Green', 'Blue', 'Yellow', 'Pink', 'Colorless'],
      'Brookite': ['Brown', 'Yellow', 'Red', 'Black'],
      'Cassiterite': ['Brown', 'Black', 'Yellow', 'Grey'],
      'Charoite': ['Purple', 'Lavender', 'Violet'],
      'Chrysocolla': ['Blue', 'Green', 'Turquoise', 'Blue-Green'],
      'Clinohumite': ['Yellow', 'Orange', 'Brown', 'Red'],
      'Diaspore (Zultanite)': ['Green', 'Yellow', 'Pink', 'Color Change'],
      'Dioptase': ['Green', 'Blue-Green', 'Turquoise'],
      'Dravite': ['Brown', 'Yellow', 'Green', 'Black'],
      'Dumortierite': ['Blue', 'Purple', 'Violet', 'Grey'],
      'Ekanite': ['Green', 'Yellow', 'Brown'],
      'Enstatite': ['Brown', 'Green', 'Yellow', 'Grey'],
      'Euclase': ['Blue', 'Green', 'Colorless', 'Yellow'],
      'Fluorite (Collector-grade)': ['Purple', 'Blue', 'Green', 'Yellow', 'Pink', 'Colorless'],
      'Gaspeite': ['Green', 'Yellow-Green', 'Mint Green'],
      'Grandidierite': ['Blue', 'Green', 'Blue-Green', 'Turquoise'],
      'Hackmanite': ['Pink', 'Purple', 'Violet', 'Color Change'],
      'Hemimorphite': ['Blue', 'Green', 'White', 'Grey'],
      'Hessonite': ['Orange', 'Red', 'Brown', 'Yellow'],
      'Howlite': ['White', 'Grey', 'Blue', 'Green'],
      'Idocrase (Vesuvianite)': ['Green', 'Brown', 'Yellow', 'Blue'],
      'Iolite (Uncommon grades)': ['Blue', 'Violet', 'Purple', 'Grey'],
      'Jeremejevite': ['Blue', 'Colorless', 'Yellow'],
      'Kornerupine': ['Green', 'Brown', 'Yellow', 'Colorless'],
      'Kämmererite': ['Purple', 'Pink', 'Lavender'],
      'Kudite': ['Green', 'Blue', 'Grey'],
      'Larimar': ['Blue', 'Turquoise', 'Green-Blue', 'White'],
      'Lazulite': ['Blue', 'Deep Blue', 'Turquoise'],
      'Liddicoatite': ['Pink', 'Green', 'Blue', 'Brown'],
      'Magnesite': ['White', 'Yellow', 'Brown', 'Grey'],
      'Musgravite': ['Green', 'Grey', 'Purple'],
      'Muscovite': ['White', 'Yellow', 'Green', 'Brown'],
      'Painite': ['Red', 'Orange', 'Brown'],
      'Pectolite': ['White', 'Grey', 'Blue', 'Green'],
      'Petalite': ['Colorless', 'Pink', 'White', 'Grey'],
      'Pietersite': ['Blue', 'Brown', 'Gold', 'Iridescent'],
      'Poudretteite': ['Pink', 'Purple', 'Lavender'],
      'Prehnite (Collector grades)': ['Green', 'Yellow-Green', 'White'],
      'Scapolite': ['Yellow', 'Pink', 'Purple', 'Colorless'],
      'Seraphinite': ['Green', 'Silver', 'Grey'],
      'Serendibite': ['Blue', 'Green', 'Black'],
      'Shattuckite': ['Blue', 'Turquoise', 'Green-Blue'],
      'Smithsonite': ['Blue', 'Green', 'Pink', 'Yellow'],
      'Sphalerite': ['Yellow', 'Brown', 'Red', 'Black'],
      'Sphene (Titanite)': ['Yellow', 'Green', 'Brown'],
      'Stichtite': ['Pink', 'Purple', 'Lavender'],
      'Sugilite': ['Purple', 'Pink', 'Lavender'],
      'Taaffeite': ['Pink', 'Purple', 'Lavender', 'Red'],
      'Thulite': ['Pink', 'Red', 'Rose'],
      'Tremolite': ['White', 'Green', 'Grey'],
      'Variscite': ['Green', 'Blue-Green', 'Turquoise'],
      'Vesuvianite': ['Green', 'Brown', 'Yellow', 'Blue'],
      'Zoisite': ['Green', 'Pink', 'Blue', 'Brown'],
      
      // Colour Families
      'Warm': ['Red', 'Orange', 'Yellow', 'Pink', 'Peach', 'Coral', 'Amber', 'Gold'],
      'Cool': ['Blue', 'Green', 'Purple', 'Teal', 'Turquoise', 'Mint'],
      'Neutral': ['Black', 'White', 'Grey', 'Beige', 'Taupe', 'Brown', 'Cream'],
      'Pastel': ['Light Blue', 'Light Pink', 'Lavender', 'Mint', 'Peach', 'Cream'],
      'Vibrant': ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink'],
      'Muted': ['Dusty Rose', 'Sage', 'Slate', 'Taupe', 'Mauve', 'Olive'],
      'Earth Tones': ['Brown', 'Tan', 'Beige', 'Olive', 'Rust', 'Terracotta'],
      'Jewel Tones': ['Royal Blue', 'Emerald Green', 'Ruby Red', 'Amethyst Purple', 'Sapphire Blue'],
      'Metallic': ['Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Gunmetal'],
      'Iridescent': ['Iridescent', 'Opalescent', 'Rainbow', 'Holographic'],
      
      // Textures
      'Smooth': ['White', 'Black', 'Grey', 'Beige', 'Brown'],
      'Textured': ['Brown', 'Grey', 'Beige', 'Taupe'],
      'Faceted': ['Colorless', 'Blue', 'Pink', 'Yellow', 'Green', 'Purple', 'Red'],
      'Matte': ['Black', 'Grey', 'Brown', 'Beige', 'White'],
      'Semi-Gloss': ['White', 'Cream', 'Beige', 'Grey'],
      'Glossy': ['Black', 'White', 'Blue', 'Red', 'Green', 'Purple'],
      'Polished': ['Gold', 'Silver', 'Bronze', 'Copper', 'Black'],
      'Rough': ['Brown', 'Grey', 'Black', 'Beige'],
      
      // Special Effects
      'Iridescent': ['Iridescent', 'Opalescent', 'Rainbow', 'Holographic'],
      'Opalescent': ['White', 'Blue', 'Pink', 'Green', 'Iridescent'],
      'Chatoyant': ['Brown', 'Gold', 'Yellow', 'Green', 'Grey'],
      'Asterism': ['Red', 'Blue', 'Pink', 'Purple', 'Grey'],
      'Color Change': ['Blue', 'Green', 'Purple', 'Red', 'Color Change'],
      'Aventurescence': ['Gold', 'Brown', 'Green', 'Blue'],
      'Labradorescence': ['Blue', 'Green', 'Yellow', 'Orange', 'Iridescent'],
      'Play of Color': ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Iridescent']
    }
    
    return gemColorMap[gemName] || []
  }

  // Get color content based on selected gem
  const getColorContent = (gemCategory, gemName) => {
    // If specific gem is selected, return its colors
    if (gemName) {
      return getGemColors(gemName)
    }
    
    // Fallback to category-based colors if no specific gem selected
    const colorMap = {
      'Precious': [
        'Colorless (D-F)',
        'Near Colorless (G-J)',
        'Faint Yellow (K-M)',
        'Very Light Yellow (N-R)',
        'Light Yellow (S-Z)',
        'Fancy Yellow',
        'Fancy Pink',
        'Fancy Blue',
        'Fancy Green',
        'Fancy Brown',
        'Fancy Orange',
        'Fancy Red',
        'Fancy Purple',
        'Fancy Vivid',
        'Fancy Deep',
        'Fancy Intense'
      ],
      'Semi-Precious': [
        'Red',
        'Pink',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Violet',
        'Indigo',
        'Teal',
        'Turquoise',
        'Magenta',
        'Lavender',
        'Peach',
        'Coral',
        'Mint',
        'Lime',
        'Navy',
        'Maroon',
        'Burgundy'
      ],
      'Organic Gems': [
        'White',
        'Cream',
        'Beige',
        'Brown',
        'Black',
        'Red',
        'Orange',
        'Yellow',
        'Golden',
        'Amber',
        'Honey',
        'Caramel',
        'Champagne',
        'Ivory',
        'Pearl White',
        'Pink'
      ],
      'Man-Made': [
        'Colorless',
        'Blue',
        'Pink',
        'Yellow',
        'Green',
        'Red',
        'Purple',
        'Orange',
        'Teal',
        'Lavender',
        'Mint',
        'Rose',
        'Aqua',
        'Cyan',
        'Magenta',
        'Indigo'
      ],
      'Extended Natural': [
        'Natural',
        'Treated',
        'Enhanced',
        'Heat Treated',
        'Irradiated',
        'Coated',
        'Dyed',
        'Stabilized'
      ],
      'Colour Families': [
        'Warm',
        'Cool',
        'Neutral',
        'Pastel',
        'Vibrant',
        'Muted',
        'Earth Tones',
        'Jewel Tones',
        'Metallic',
        'Iridescent'
      ],
      'Textures': [
        'Smooth',
        'Textured',
        'Faceted',
        'Matte',
        'Semi-Gloss',
        'Glossy',
        'Polished',
        'Rough'
      ],
      'Special Effects': [
        'Iridescent',
        'Opalescent',
        'Chatoyant',
        'Asterism',
        'Color Change',
        'Aventurescence',
        'Labradorescence',
        'Play of Color'
      ]
    }
    
    return colorMap[gemCategory] || []
  }

  // Check if current category should show colors after material selection
  const shouldShowColors = () => {
    if (activeFeature === 'Material & Structure') {
      const colorableCategories = ['Base', 'Finish', 'Textiles']
      return colorableCategories.includes(activeCategory) && selectedMaterial !== null
    }
    if (activeFeature === 'Heel') {
      // Heel shows colors when a material is selected
      return selectedMaterial !== null
    }
    if (activeFeature === 'Gems') {
      // Gems shows colors when a gem is selected, but not for Special Effects category
      return selectedGem.gemName !== null && activeCategory !== 'Special Effects'
    }
    return false
  }

  // Content items for each category
  const getCategoryContent = (category) => {
    // If Gems feature and gem is selected, show colors for that gem
    if (activeFeature === 'Gems' && shouldShowColors() && selectedGem.gemName) {
      return getGemColors(selectedGem.gemName)
    }
    
    // If Color feature is active, show colors based on selected gem
    if (activeFeature === 'Color') {
      if (shouldShowColors() && selectedGem.gemName) {
        // Show colors for selected gem
        return getColorContent(selectedGem.category, selectedGem.gemName)
      }
      // If no gem selected, show empty or prompt
      return []
    }
    
    // If material/texture is selected, show color options for that specific material
    if (shouldShowColors() && selectedMaterial) {
      return getMaterialColors(selectedMaterial)
    }
    
    // For Heel feature, show materials directly (no category)
    if (activeFeature === 'Heel' && !category) {
      return [
        'Gold', 'Rose Gold', 'Platinum', 'Silver', 'Titanium',
        'Brass', 'Bronze', 'Copper', 'Chrome', 'Nickel',
        'Palladium', 'Rhodium', 'Gunmetal', 'Steel'
      ]
    }
    
    switch (category) {
      // Gems categories
      case 'Precious':
        return [
          'Diamond',
          'Emerald',
          'Ruby',
          'Sapphire',
          'Alexandrite',
          'Benitoite',
          'Jadeite',
          'Paraiba Tourmaline',
          'Red Spinel'
        ]
      case 'Semi-Precious':
        return [
          'Agate',
          'Amazonite',
          'Amethyst',
          'Ametrine',
          'Apatite',
          'Aquamarine',
          'Aventurine',
          'Bloodstone',
          'Carnelian',
          'Chalcedony',
          'Chrysoprase',
          'Citrine',
          'Fluorite',
          'Garnet',
          'Goshenite',
          'Heliodor',
          'Hematite',
          'Howlite',
          'Iolite',
          'Jasper',
          'Kyanite',
          'Labradorite',
          'Lapis Lazuli',
          'Larimar',
          'Lepidolite',
          'Malachite',
          'Moonstone',
          'Morganite',
          'Obsidian',
          'Onyx',
          'Opal',
          'Peridot',
          'Prehnite',
          'Pyrite',
          'Rainbow Moonstone',
          'Rhodochrosite',
          'Rhodonite',
          'Rose Quartz',
          'Serpentine',
          'Smoky Quartz',
          'Sodalite',
          'Spinel',
          'Sunstone',
          'Tanzanite',
          'Tiger\'s Eye',
          'Topaz',
          'Tourmaline',
          'Turquoise',
          'Unakite',
          'Zircon',
          'Tsavorite',
          'Dumortierite'
        ]
      case 'Organic Gems':
        return [
          'Amber',
          'Ammolite',
          'Bone',
          'Bog Oak',
          'Coral',
          'Copal',
          'Fossilized Wood',
          'Ivory',
          'Jet',
          'Mother-of-Pearl',
          'Nacre',
          'Odontolite',
          'Pearl',
          'Shell',
          'Tortoiseshell',
          'Tagua Nut'
        ]
      case 'Man-Made':
        return [
          'Synthetic Diamond',
          'Synthetic Ruby',
          'Synthetic Sapphire',
          'Synthetic Spinel',
          'Synthetic Quartz',
          'Synthetic Quartz Crystal Clusters',
          'Synthetic Emerald',
          'Synthetic Alexandrite',
          'Synthetic Moissanite',
          'Synthetic Aquamarine',
          'Synthetic Topaz',
          'Synthetic Opal',
          'Synthetic Jadeite',
          'Synthetic Lapis Lazuli',
          'Synthetic Turquoise',
          'Synthetic Malachite',
          'Cubic Zirconia',
          'Opalite',
          'Swarovski Crystal',
          'Bismuth Crystal',
          'Glass Gemstones',
          'Goldstone',
          'Paste',
          'YAG',
          'GGG',
          'Lab-Created Garnet',
          'Neoceram',
          'Glass-filled Gems',
          'Iridescent Glass',
          'Triplets & Doublets',
          'Synthetic Opal Doublet',
          'Lab-Created Emerald Overgrowth',
          'Reconstituted Stones',
          'Foil-Backed or Coated Stones',
          'Girdled Stones',
          'Resin-Impregnated Stones',
          'Acrylic / Polymer Gems'
        ]
      case 'Extended Natural':
        return [
          'Amblygonite',
          'Andalusite',
          'Axinite',
          'Azurite',
          'Austrophyllite',
          'Beryl (RARE types)',
          'Brookite',
          'Cassiterite',
          'Charoite',
          'Chrysocolla',
          'Clinohumite',
          'Diaspore (Zultanite)',
          'Dioptase',
          'Dravite',
          'Dumortierite',
          'Ekanite',
          'Enstatite',
          'Euclase',
          'Fluorite (Collector-grade)',
          'Gaspeite',
          'Grandidierite',
          'Hackmanite',
          'Hemimorphite',
          'Hessonite',
          'Howlite',
          'Idocrase (Vesuvianite)',
          'Iolite (Uncommon grades)',
          'Jeremejevite',
          'Kornerupine',
          'Kämmererite',
          'Kudite',
          'Larimar',
          'Lazulite',
          'Liddicoatite',
          'Magnesite',
          'Musgravite',
          'Muscovite',
          'Painite',
          'Pectolite',
          'Petalite',
          'Pietersite',
          'Poudretteite',
          'Prehnite (Collector grades)',
          'Scapolite',
          'Seraphinite',
          'Serendibite',
          'Shattuckite',
          'Smithsonite',
          'Sphalerite',
          'Sphene (Titanite)',
          'Stichtite',
          'Sugilite',
          'Taaffeite',
          'Thulite',
          'Tremolite',
          'Variscite',
          'Vesuvianite',
          'Zoisite'
        ]
      case 'Colour Families':
        return [
          'Warm',
          'Cool',
          'Neutral',
          'Pastel',
          'Vibrant',
          'Muted',
          'Earth Tones',
          'Jewel Tones',
          'Metallic',
          'Iridescent'
        ]
      case 'Textures':
        return [
          'Smooth',
          'Textured',
          'Faceted',
          'Matte',
          'Semi-Gloss',
          'Glossy',
          'Polished',
          'Rough'
        ]
      case 'Special Effects':
        return [
          'Iridescent',
          'Opalescent',
          'Chatoyant',
          'Asterism',
          'Color Change',
          'Aventurescence',
          'Labradorescence',
          'Play of Color'
        ]
      // Cuts categories
      case 'Cuts':
        return Array.from({ length: 12 }, (_, i) => `Cut ${i + 1}`)
      case 'Size':
        return Array.from({ length: 8 }, (_, i) => `Size ${i + 1}`)
      // Form & Fit - Material & Structure categories
      case 'Base':
        return [
          // Material Families - Leather & Leather-Equivalent Types
          'Nappa', 'Calfskin', 'Patent', 'Suede', 'Nubuck', 'Saffiano', 'Aniline', 'Metallic',
          'Mirror', 'Pearlized', 'Lacquered', 'Croc', 'Snakeskin',
          // Non-leather structural textiles
          'Satin', 'Brocade', 'Technical', 'Mesh', 'Microfiber',
          // Vegan & eco-materials
          'Recycled', 'Bio', 'Premium', 'Eco',
          // Base Architecture - Width Profiles
          'Narrow', 'Regular', 'Wide',
          // Foundational Weight & Density
          'Standard', 'Lightweight', 'Ultralight',
          // Structural Reinforcements - Shank Types
          'Carbon', 'Steel', 'Bamboo', 'Composite',
          // Heel Core Types
          'Solid', 'Hollow', 'Lock'
        ]
      case 'Finish':
        return [
          // Finish Treatments (Sheen + Light Behavior)
          'Matte', 'Soft', 'Satin', 'Semi', 'Gloss', 'Mirror',
          'Foil', 'Brushed', 'Iridescent', 'Holographic', 'Pearlescent', 'Crystalline', 'Frosted', 'Ombré',
          // Texture Detailing
          'Croc', 'Snake', 'Pebble', 'Debossed', 'Laser',
          'Etched', 'Crinkled', 'Marbled', 'Micro', 'Macro'
        ]
      case 'Textiles':
        return [
          // Sheer & Decorative Layers
          'Organza', 'Tulle', 'Chiffon', 'Lace', 'Mesh', 'Veils',
          // Underlays & Structural Fabrics
          'Satin', 'Moiré', 'Velvet', 'Woven', 'Technical',
          // Decorative Textiles & Threads
          'Jacquard', 'Lurex', 'Embroidery', 'Sequined', 'Threaded'
        ]
      case 'Hardware':
        return [
          // Metal Families - Metal Options
          'Gold', 'Rose', 'Platinum', 'Titanium', 'Palladium', 'Rhodium', 'Brass', 'Chrome', 'Nickel',
          // Metal Finishes
          'Polished', 'Brushed', 'Hammered', 'Engraved', 'Textured', 'Enamel', 'Filigree', 'Lace',
          // Hardware Components
          'Studs', 'Rivets', 'Screws', 'Buckles', 'Clasps'
        ]
      case 'Innovation':
        return [
          // Innovation Materials
          'Memory', 'Liquid', 'Nano', 'Reflective', 'Bio', 'Thermoregulators',
          // Durability Enhancements
          'Resistant', 'Protected', 'Stable', 'Durable', 'Reinforced',
          // Sustainability Features
          'Recycled', 'Sustainable', 'Repairable', 'Certified',
          // Water Resistance Levels
          'Standard', 'Resistant', 'Shield', 'Waterproof'
        ]
      // Form & Fit - Design & Sculpt categories
      case 'Structure & Silhouette':
        return [
          'Stiletto', 'Block', 'Platform', 'Wedge', 'Flat', 'Fluted heel', 'Split heel', 'Sculpted heel', 'Hybrid art form',
          'Proportion', 'Stance', 'Spatial flow', 'Weight distribution', 'Heel-to-toe ratio guidelines', 'Toe exposure percentage ranges',
          'Upper coverage index', 'Visual center-of-gravity mapping', 'Heel–toe ratio', 'Exposure ratios', 'Ergonomic equilibrium',
          'Platform toggle - On', 'Platform toggle - Off', 'Platform depth vs visual elongation metrics', 'Upper structure - Open',
          'Upper structure - Closed', 'Asymmetry options', 'Cut-out pattern/geometry library', 'Arch Profile - Classic (standard)',
          'Arch Profile - Elevated (high)', 'Arch Profile - Ultra-elevated', 'Arch Profile - Ergonomic', 'Arch Profile - Kinetic-Flex (adaptive)',
          'Balance Calibration', 'Contour & Silhouette - Streamlined', 'Contour & Silhouette - Architectural', 'Contour & Silhouette - Flowing',
          'Contour & Silhouette - Corseted', 'Dynamic Motion Geometry', 'Curvature lines', 'Movement sculpted into stillness'
        ]
      case 'Sculptural Design':
        return [
          'Pointed (commanding)', 'Almond (elegant)', 'Round (soft)', 'Square (assertive)', 'Peep (playful)',
          'Sculpted Asymmetry (avant-garde)', 'Toe length parameters', 'Toe taper parameters', 'Geometric blocks (angular/cut precision)',
          'Spools', 'Curved (grace flow)', 'Crystal blocks', 'Faceted/Jewel-like (light-reactive planes)', 'Organic (fluid)', 'Split',
          'Twisted/kinetic tension', 'Artistic motif heels (statement)', 'Heel height presets (cm)', 'Clean edges (precision)',
          'Folded/plissé edges (architectural/tactile depth)', 'Waved contours (motion continuity/rhythmic)', 'Draped (textural fluidity)',
          'Contoured ergonomic lines (body-synced refinement)', 'Transition morphologies with radius settings', 'Draping folds',
          'Embossed ribs', 'Layered wraps', 'Kinetic flutes', 'Sculpted ribs', 'Volume depth controls', 'Relief Carving',
          'Subtle recesses', 'Raised motifs', 'Ankle Strap - Single', 'Ankle Strap - Multi-wrap', 'Ankle Strap - Cuff',
          'Instep / Mid Strap', 'Toe Strap', 'T-Strap', 'Slingback', 'Crossover/Criss-Cross', 'Wraparound', 'Lace-Up',
          'Harness/Cage', 'Mary-Jane', 'Decorative Cascade', 'Articulation Zones', 'Strap width - Micro (1–6mm)',
          'Strap width - Narrow (7–12mm)', 'Strap width - Medium (13–20mm)', 'Strap width - Wide (21–40mm+)',
          'Padded straps', 'Reinforced straps', 'Elasticated straps', 'Adjustable (buckles/sliders)', 'Magnetic quick-release',
          'Interchangeable strap modules', 'Piped edge', 'Rolled edge', 'Raw edge', 'Topstitch', 'Invisible stitch', 'Studded',
          'Perforated', 'Laser pattern', 'Load-bearing strap', 'Adjustive strap', 'Decorative strap', 'Hybrid strap',
          'Heel-to-Toe Dialogue'
        ]
      case 'Design Harmony':
        return [
          'Visual Weight - Lightness', 'Visual Weight - Solidity', 'Flow continuity', 'Flow lock toggle', 'Edge transitions',
          'Seam transitions', 'Silhouette transitions', 'Continuous line from toe → arch → heel', 'Seamless transitions from toe to heel',
          'Uninterrupted visual rhythm', 'Material–Geometry blending rule sets', 'Satin + folded edge combo', 'Patent + clean edge combo',
          'Material–Geometry contrast', 'Material–Geometry fusion', 'Gradient continuity', 'Soft leather + metallic precision',
          'Matte suede against mirror gloss', 'Silk overlays over structured bases', 'Symmetry - Perfect balance',
          'Symmetry - Intentional tension', 'Perfect symmetry', 'Intentional asymmetry presets', 'Iconic Silhouette Identifier',
          'Signature Divatude outline', 'Recognizable sculptural gesture', 'Saved silhouettes (brand signatures)',
          'Transition Morphology', 'Sharp angular seams', 'Rolled transitions', 'Melted curves', 'Line Emotion',
          'Linear tension for confidence', 'Soft arcs for romance', 'Interwoven curves for modern sensuality',
          'Harmony Check feedback overlay'
        ]
      // Form & Fit - Function & Detailing categories
      case 'Function':
        return [
          // Cushioning & Support
          'Memory', 'Gel', 'Hybrid', 'Air', 'Padded', 'Firm',
          // Flexibility
          'Rigid', 'Semi', 'Dynamic', 'Flex',
          // Weight Options
          'Standard', 'Lightweight', 'Ultralight',
          // Comfort Features
          'Breathable', 'Wicking', 'Thermoregulated', 'Heated',
          // Closure Systems
          'Elastic', 'Buckle', 'Stretch', 'Modular', 'Adaptive'
        ]
      case 'Ergonomic':
        return [
          // Fit Options
          'Tight', 'Classic', 'Relaxed',
          // Support Features
          'Contour', 'Arch', 'Balance', 'Alignment',
          // Stabilization
          'Lock', 'Weighted', 'Stabilization'
        ]
      case 'Craft':
        return [
          // Stitching Styles
          'Invisible', 'Contrast', 'Sculpted', 'Signature',
          // Edge Treatments
          'Piped', 'Rolled', 'Bound', 'Raw', 'Jewelled', 'Polished',
          // Decorative Elements
          'Metallic', 'Gem', 'Applique', 'Layered', 'Embroidery',
          'Monogram', 'Engraved', 'Crystal', 'Embedded', 'Stamp',
          // Hardware Details
          'Studs', 'Rivets', 'Filigree'
        ]
      case 'Sole':
        return [
          // Sole Materials & Finishes
          'Matte', 'Gloss', 'Textured', 'Rubberized', 'Leather', 'Marbled',
          // Sole Details
          'Engraved', 'Sculpted', 'Patterned', 'Rubber',
          // Functional Features
          'Shock', 'Modular', 'Replaceable'
        ]
      case 'Care':
        return [
          // Durability Features
          'Resistant', 'Protected', 'Reinforced', 'Waterproof',
          // Modularity
          'Modular', 'Replaceable', 'Repairable',
          // Sustainability
          'Sustainable', 'Recyclable', 'Recycled'
        ]
      // Form - Sole/Strap categories (show color palettes)
      case 'Insole/Instrap/Micro Hardware':
        return [
          'Black', 'White', 'Ivory', 'Cream', 'Beige',
          'Brown', 'Tan', 'Taupe', 'Grey', 'Charcoal',
          'Navy', 'Burgundy', 'Gold', 'Silver', 'Metallic',
          'Rose', 'Champagne', 'Natural'
        ]
      case 'Outsole/Outstrap':
        return [
          // Glass/Silk Leather Colors - comprehensive palette
          'Black', 'White', 'Ivory', 'Cream', 'Beige',
          'Brown', 'Cognac', 'Tan', 'Taupe', 'Grey',
          'Charcoal', 'Slate', 'Stone', 'Navy', 'Midnight',
          'Royal', 'Burgundy', 'Wine', 'Crimson', 'Red',
          'Pink', 'Rose', 'Blush', 'Fuchsia', 'Magenta',
          'Purple', 'Lavender', 'Violet', 'Plum', 'Amethyst',
          'Green', 'Forest', 'Emerald', 'Olive', 'Sage',
          'Mint', 'Yellow', 'Gold', 'Amber', 'Mustard',
          'Champagne', 'Orange', 'Coral', 'Rust', 'Terracotta',
          'Peach', 'Silver', 'Metallic', 'Bronze', 'Copper',
          'Gunmetal', 'Platinum', 'Pearl', 'Natural'
        ]
      // Form - Heel (materials/metals - no category, direct content)
      case 'Heel':
        return [
          // Metal materials for heel
          'Gold', 'Rose Gold', 'Platinum', 'Silver', 'Titanium',
          'Brass', 'Bronze', 'Copper', 'Chrome', 'Nickel',
          'Palladium', 'Rhodium', 'Gunmetal', 'Steel'
        ]
      default:
        return []
    }
  }


  // Dynamic categories based on active feature
  const getCategories = () => {
    switch (activeFeature) {
      case 'Gems':
        return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
      case 'Cuts':
        return ['Cuts', 'Size']
      case 'Color':
        return [] // No categories for Color, show colors directly
      case 'Crown':
        return ['Style', 'Height', 'Width']
      case 'Cascade':
        return ['Pattern', 'Flow', 'Direction']
      // Form categories
      case 'Sole/Strap':
        return ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap']
      case 'Heel':
        return [] // No categories for Heel, show materials directly
      // Legacy Form & Fit categories (kept for backward compatibility if needed)
      case 'Material & Structure':
        return ['Base', 'Finish', 'Textiles', 'Hardware', 'Innovation']
      case 'Design & Sculpt':
        return ['Structure & Silhouette', 'Sculptural Design', 'Design Harmony']
      case 'Function & Detailing':
        return ['Function', 'Ergonomic', 'Craft', 'Sole', 'Care']
      default:
        return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
    }
  }

  const allCategories = getCategories()
  // For Gems, Cuts, Sole/Strap, and legacy Form & Fit features, ensure we show the last 4 buttons when at the end
  const getVisibleCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing', 'Sole/Strap']
    const needsCarousel = activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)
    if (!needsCarousel) return allCategories
    const maxStart = Math.max(0, allCategories.length - categoriesPerView)
    const adjustedStart = Math.min(categoryStartIndex, maxStart)
    return allCategories.slice(adjustedStart, adjustedStart + categoriesPerView)
  }
  const categories = getVisibleCategories()
  const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing', 'Sole/Strap']
  const needsCarousel = activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)
  const hasMoreCategories = needsCarousel && categoryStartIndex < (allCategories.length - categoriesPerView)
  const hasPreviousCategories = needsCarousel && categoryStartIndex > 0

  // Reset category start index when feature changes
  const handleFeatureChange = (featureId) => {
    setActiveFeature(featureId)
    setCategoryStartIndex(0)
    setSelectedGridItem(null)
    setSelectedMaterial(null)
    setShowColorPicker(false)
    setSelectedGem({ category: 'Precious', itemIndex: null, gemName: null })
    // Get categories for the new feature
    const getNewCategories = () => {
      switch (featureId) {
        case 'Gems':
          return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
        case 'Cuts':
          return ['Cuts', 'Size']
        case 'Color':
          return ['Hue', 'Saturation', 'Brightness']
        case 'Crown':
          return ['Style', 'Height', 'Width']
        case 'Cascade':
          return ['Pattern', 'Flow', 'Direction']
        case 'Sole/Strap':
          return ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap']
        case 'Heel':
          return [] // No categories for Heel
        case 'Material & Structure':
          return ['Base', 'Finish', 'Textiles', 'Hardware', 'Innovation']
        case 'Design & Sculpt':
          return ['Structure & Silhouette', 'Sculptural Design', 'Design Harmony']
        case 'Function & Detailing':
          return ['Function', 'Ergonomic', 'Craft', 'Sole', 'Care']
        default:
          return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
      }
    }
    const newCategories = getNewCategories()
    setActiveCategory(newCategories[0] || '')
    // If switching to Color feature and no gem is selected, default to Precious
    if (featureId === 'Color' && !selectedGem.category) {
      setSelectedGem({ category: 'Precious', itemIndex: null })
    }
  }

  // Handle tab changes - reset feature and category
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCategoryStartIndex(0)
    setSelectedGridItem(null)
    setSelectedMaterial(null)
    setShowColorPicker(false)
    if (tab === 'Form') {
      setActiveFeature('Sole/Strap')
      setActiveCategory('Insole/Instrap/Micro Hardware')
    } else {
      setActiveFeature('Gems')
      setActiveCategory('Precious')
    }
  }

  // Reset when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setSelectedGridItem(null)
    setSelectedMaterial(null)
    setShowColorPicker(false)
  }

  // Check if there's more content to scroll
  useEffect(() => {
    const checkScroll = () => {
      if (contentGridRef.current) {
        const wrapper = contentGridRef.current
        const hasScroll = wrapper.scrollHeight > wrapper.clientHeight
        const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop <= wrapper.clientHeight + 10
        setHasMoreContent(hasScroll && !isAtBottom)
      }
    }

    // Check after render
    setTimeout(checkScroll, 0)
    
    // Also check when category changes
    if (contentGridRef.current) {
      contentGridRef.current.addEventListener('scroll', checkScroll)
      return () => {
        if (contentGridRef.current) {
          contentGridRef.current.removeEventListener('scroll', checkScroll)
        }
      }
    }
  }, [activeCategory])

  const handleShowMoreCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
    if (activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)) {
      const maxStart = Math.max(0, allCategories.length - categoriesPerView)
      setCategoryStartIndex(prev => Math.min(prev + 1, maxStart))
    }
  }

  const handleShowPreviousCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
    if ((activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)) && categoryStartIndex > 0) {
      setCategoryStartIndex(prev => Math.max(prev - 1, 0))
    }
  }


  return (
    <div className="configuration-panel">
      {/* Top Navigation Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Feature Selection */}
      <div className="feature-selection">
        {activeTab === 'Form' ? (
          // Form: Features as tabs (like main tabs) with icons
          <div className="form-feature-tabs">
            {features.map((feature) => {
              const IconComponent = feature.icon
              const isActive = activeFeature === feature.id
              return (
                <button
                  key={feature.id}
                  className={`form-feature-tab ${isActive ? 'active' : ''}`}
                  onClick={() => handleFeatureChange(feature.id)}
                >
                  <div className="form-feature-icon">
                    <IconComponent isActive={isActive} />
                  </div>
                  {feature.id}
                </button>
              )
            })}
          </div>
        ) : (
          // Adornment: First 2 in cards, last 2 in crown-cascade card
          <>
            {features.slice(0, 2).map((feature) => {
              const IconComponent = feature.icon
              const isActive = activeFeature === feature.id
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${isActive ? 'active' : ''}`}
                >
                  <button
                    className="feature-button"
                    onClick={() => handleFeatureChange(feature.id)}
                  >
                    <div className="feature-icon">
                      <IconComponent isActive={isActive} />
                    </div>
                    <div className="feature-label">
                      {feature.id}
                    </div>
                  </button>
                </div>
              )
            })}
            <div className={`crown-cascade-card ${activeFeature === 'Crown' || activeFeature === 'Cascade' ? 'active' : ''}`}>
              <div className="crown-cascade-tabs">
                {features.slice(2).map((feature) => {
                  const IconComponent = feature.icon
                  const isActive = activeFeature === feature.id
                  return (
                    <button
                      key={feature.id}
                      className={`crown-cascade-tab ${isActive ? 'active' : ''}`}
                      onClick={() => handleFeatureChange(feature.id)}
                    >
                      <div className="feature-icon">
                        <IconComponent isActive={isActive} />
                      </div>
                      <div className="feature-label">
                        {feature.id}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Sub-Category Categories */}
      {activeFeature !== 'Color' && activeFeature !== 'Heel' && !(activeFeature === 'Gems' && shouldShowColors()) && (
        <div className="filters-section">
          {hasPreviousCategories && (
            <button 
              className="filter-arrow-button filter-arrow-button-left"
              onClick={handleShowPreviousCategories}
            >
              <i className="fa-solid fa-chevron-left filter-arrow-icon"></i>
            </button>
          )}
          <div className={`filters-container ${hasMoreCategories ? 'has-more' : ''} ${hasPreviousCategories ? 'has-prev' : ''}`}>
            <div className="filters">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {hasMoreCategories && (
            <button 
              className="filter-arrow-button filter-arrow-button-right"
              onClick={handleShowMoreCategories}
            >
              <i className="fa-solid fa-chevron-right filter-arrow-icon"></i>
            </button>
          )}
        </div>
      )}

      {/* Back button when showing colors for material or gem */}
      {shouldShowColors() && (activeFeature === 'Material & Structure' || activeFeature === 'Heel' || activeFeature === 'Gems') && (
        <div className="material-color-header">
          <button
            className="back-to-material-button"
            onClick={() => {
              if (activeFeature === 'Gems') {
                setSelectedGem({ category: selectedGem.category, itemIndex: null, gemName: null })
              } else {
                setSelectedMaterial(null)
                setShowColorPicker(false)
              }
              setSelectedGridItem(null)
            }}
          >
            ← Back to {activeFeature === 'Gems' ? selectedGem.gemName : selectedMaterial}
          </button>
          <span className="material-color-label">
            Select color for {activeFeature === 'Gems' ? selectedGem.gemName : selectedMaterial}
          </span>
        </div>
      )}

      {/* Content Grid or Slider */}
      {activeFeature === 'Cuts' && activeCategory === 'Size' ? (
        <div className="content-grid-section">
          <div className="content-grid-wrapper">
            <div className="slider-section">
              <div className="slider-container">
                <div className="slider-track-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`content-grid-section ${hasMoreContent ? 'has-more' : ''}`}>
          <div 
            ref={contentGridRef}
            className="content-grid-wrapper"
            onScroll={(e) => {
              const wrapper = e.currentTarget
              const hasScroll = wrapper.scrollHeight > wrapper.clientHeight
              const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop <= wrapper.clientHeight + 10
              setHasMoreContent(hasScroll && !isAtBottom)
            }}
          >
            <div className={`content-grid ${((shouldShowColors() && activeFeature !== 'Color' && activeFeature !== 'Gems') || (activeFeature === 'Sole/Strap' && ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap'].includes(activeCategory))) ? 'color-grid' : ''}`}>
              {getCategoryContent(activeFeature === 'Color' ? 'Color' : (activeFeature === 'Heel' ? 'Heel' : (activeFeature === 'Gems' && shouldShowColors() ? 'Gems' : activeCategory))).map((item, index) => {
                const isGem = activeFeature === 'Gems' && ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural'].includes(activeCategory)
                const gemImagePath = isGem ? getGemImagePath(item) : null
                const isSoleStrap = activeFeature === 'Sole/Strap' && ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap'].includes(activeCategory)
                // Special Effects and Colour Families should display as regular cards, not color swatches
                const isSpecialCategory = activeCategory === 'Special Effects' || activeCategory === 'Colour Families' || activeCategory === 'Textures'
                const isColorDisplay = (shouldShowColors() || isSoleStrap) && !isSpecialCategory
                // For Color feature, show colors as cards (not small swatches)
                const isColorFeature = activeFeature === 'Color' && shouldShowColors()
                
                return (
                  <div
                    key={index}
                    className={`grid-item ${selectedGridItem === index ? 'active' : ''} ${isGem ? 'gem-item' : ''}`}
                    onClick={() => {
                      if (activeFeature === 'Gems' && !shouldShowColors() && !isSpecialCategory) {
                        // Gem selection - store gem name and show colors (but not for Special Effects, Colour Families, or Textures)
                        const gemName = item
                        setSelectedGem({ category: activeCategory, itemIndex: index, gemName: gemName })
                        setSelectedGridItem(index)
                      } else if (activeFeature === 'Gems' && shouldShowColors()) {
                        // Color selection for gem
                        setSelectedGridItem(index)
                        // Here you would apply the color to the selected gem
                      } else if (activeFeature === 'Color' && shouldShowColors()) {
                        // Color selection for gem
                        setSelectedGridItem(index)
                        // Here you would apply the color to the selected gem
                      } else if (activeFeature === 'Material & Structure' && shouldShowColors()) {
                        // Color selection for material
                        setSelectedGridItem(index)
                        // Here you would apply the color to the selected material
                      } else if (activeFeature === 'Material & Structure' && ['Base', 'Finish', 'Textiles'].includes(activeCategory)) {
                        // Material/texture selection - show color picker
                        setSelectedMaterial(item)
                        setSelectedGridItem(index)
                        setShowColorPicker(true)
                      } else if (activeFeature === 'Heel' && !shouldShowColors()) {
                        // Heel material selection - show color picker
                        setSelectedMaterial(item)
                        setSelectedGridItem(index)
                        setShowColorPicker(true)
                      } else if (activeFeature === 'Heel' && shouldShowColors()) {
                        // Color selection for Heel material
                        setSelectedGridItem(index)
                        // Here you would apply the color to the selected material
                      } else if (isSoleStrap) {
                        // Sole/Strap color selection
                        setSelectedGridItem(index)
                        // Here you would apply the color
                      } else {
                        setSelectedGridItem(index)
                      }
                    }}
                    style={
                      isColorDisplay ? {
                        // Show color swatch for color items
                        background: `linear-gradient(135deg, ${activeFeature === 'Heel' ? getMetalColorHex(item) : getColorHex(item)} 0%, ${activeFeature === 'Heel' ? getMetalColorHex(item) : getColorHex(item)} 100%)`,
                        backgroundSize: 'cover'
                      } : {}
                    }
                  >
                    {isColorDisplay ? (
                      <div 
                        className="color-swatch-3d"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          borderRadius: activeFeature === 'Color' ? '10px' : '8px',
                          backgroundColor: activeFeature === 'Heel' ? getMetalColorHex(item) : getColorHex(item),
                          border: selectedGridItem === index ? '2px solid #fffe88' : 'none',
                          boxShadow: selectedGridItem === index 
                            ? '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 254, 136, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                      ></div>
                    ) : isGem && gemImagePath ? (
                      <div className="gem-image-container">
                        <img 
                          src={gemImagePath} 
                          alt={item}
                          className="gem-image"
                          loading="lazy"
                          onError={(e) => {
                            // Try alternative image sources if first fails
                            const altUrls = getGemImageFallbacks(item)
                            
                            let attemptCount = parseInt(e.target.dataset.attempt || '0')
                            if (attemptCount < altUrls.length) {
                              e.target.src = altUrls[attemptCount]
                              e.target.dataset.attempt = (attemptCount + 1).toString()
                            } else {
                              // Final fallback - show text if all images fail
                              e.target.style.display = 'none'
                              const container = e.target.closest('.gem-image-container')
                              if (container) {
                                const fallback = container.querySelector('.gem-name-fallback')
                                if (fallback) {
                                  fallback.style.display = 'block'
                                }
                              }
                            }
                          }}
                          onLoad={(e) => {
                            // Ensure image is visible when loaded
                            e.target.style.display = 'block'
                            e.target.style.opacity = '1'
                          }}
                        />
                        <span className="gem-name-overlay">{item}</span>
                        <span className="gem-name-fallback" style={{ display: 'none' }}>{item}</span>
                      </div>
                    ) : (
                      item
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          {/* Scroll indicator - positioned outside the scrollable area */}
          {hasMoreContent && (
            <div className="content-scroll-indicator">
              <button 
                className="content-scroll-arrow"
                onClick={() => {
                  if (contentGridRef.current) {
                    contentGridRef.current.scrollBy({ top: 200, behavior: 'smooth' })
                  }
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ConfigurationPanel
