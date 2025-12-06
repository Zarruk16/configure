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

function ConfigurationPanel({ configState = {}, updateConfigState = () => {} }) {
  // Use shared state from props, with local state for UI-only concerns
  const activeTab = configState.activeTab || 'Adornment'
  const activeFeature = configState.activeFeature || 'Gems'
  const activeCategory = configState.activeCategory || 'Precious'
  const selectedGridItem = configState.selectedGridItem ?? null
  const sliderValue = configState.sliderValue || 50
  const selectedGem = configState.selectedGem || { category: 'Precious', itemIndex: null, gemName: null }
  const selectedMaterial = configState.selectedMaterial || null
  const showColorPicker = configState.showColorPicker || false
  
  // Local state for UI-only concerns
  const [categoryStartIndex, setCategoryStartIndex] = useState(0) // Start index for carousel
  const categoriesPerView = 4 // Number of categories to show at once
  const [hasMoreContent, setHasMoreContent] = useState(false)
  const contentGridRef = useRef(null)
  
  // Track selected colors per feature to persist across tab/feature switches
  const featureColorsRef = useRef({}) // Format: { 'feature:category': { colorName, gridItem } }
  const previousFeatureRef = useRef(activeFeature)
  const previousCategoryRef = useRef(activeCategory)
  
  // Helper functions to update shared state
  const setActiveTab = (tab) => updateConfigState({ activeTab: tab })
  const setActiveFeature = (feature) => updateConfigState({ activeFeature: feature })
  const setActiveCategory = (category) => updateConfigState({ activeCategory: category })
  const setSelectedGridItem = (item) => updateConfigState({ selectedGridItem: item })
  const setSliderValue = (value) => updateConfigState({ sliderValue: value })
  const setSelectedGem = (gem) => updateConfigState({ selectedGem: gem })
  const setSelectedMaterial = (material) => updateConfigState({ selectedMaterial: material })
  const setShowColorPicker = (show) => updateConfigState({ showColorPicker: show })

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
      'Semi': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Gloss': ['Black', 'White', 'Red', 'Navy', 'Burgundy', 'Pink', 'Silver', 'Gold', 'Metallic'],
      'Foil': ['Gold', 'Silver', 'Bronze', 'Copper', 'Rose', 'Champagne', 'Metallic'],
      'Brushed': ['Silver', 'Gold', 'Bronze', 'Copper', 'Gunmetal', 'Rose', 'Champagne'],
      'Iridescent': ['White', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl', 'Metallic'],
      'Holographic': ['Silver', 'Gold', 'Metallic', 'Rainbow'],
      'Pearlescent': ['White', 'Ivory', 'Cream', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl'],
      'Crystalline': ['White', 'Cream', 'Champagne', 'Pearl', 'Silver', 'Gold'],
      'Frosted': ['White', 'Ivory', 'Cream', 'Champagne', 'Pearl', 'Silver'],
      'Ombré': ['Black', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      
      // Heel Metals - comprehensive realistic metal colors
      'Gold': ['Yellow Gold', 'Rose Gold', 'White Gold', 'Platinum Gold', 'Champagne Gold', '18K Gold', '14K Gold', '22K Gold', '24K Gold', 'Green Gold', 'Red Gold', 'Pink Gold', 'Antique Gold', 'Vintage Gold', 'Matte Gold', 'Satin Gold', 'Brushed Gold', 'Polished Gold', 'High Polish Gold'],
      'Rose Gold': ['Rose Gold', 'Pink Gold', 'Copper Rose', 'Champagne Rose', '18K Rose Gold', '14K Rose Gold', 'Light Rose Gold', 'Deep Rose Gold', 'Antique Rose Gold', 'Matte Rose Gold', 'Polished Rose Gold'],
      'Platinum': ['Platinum', 'White Platinum', 'Grey Platinum', '950 Platinum', '900 Platinum', 'Polished Platinum', 'Brushed Platinum', 'Matte Platinum', 'Satin Platinum'],
      'Silver': ['Silver', 'Sterling Silver', 'White Silver', 'Gunmetal Silver', '925 Silver', 'Fine Silver', 'Antique Silver', 'Oxidized Silver', 'Polished Silver', 'Brushed Silver', 'Matte Silver', 'Satin Silver', 'Blackened Silver'],
      'Titanium': ['Titanium', 'Grey Titanium', 'Black Titanium', 'Polished Titanium', 'Brushed Titanium', 'Anodized Titanium', 'Blue Titanium', 'Purple Titanium', 'Gold Titanium'],
      'Brass': ['Brass', 'Antique Brass', 'Polished Brass', 'Brushed Brass', 'Matte Brass', 'Vintage Brass', 'Oxidized Brass', 'Lacquered Brass'],
      'Bronze': ['Bronze', 'Antique Bronze', 'Polished Bronze', 'Brushed Bronze', 'Matte Bronze', 'Patina Bronze', 'Oxidized Bronze', 'Vintage Bronze'],
      'Copper': ['Copper', 'Antique Copper', 'Polished Copper', 'Brushed Copper', 'Matte Copper', 'Oxidized Copper', 'Patina Copper', 'Verdigris'],
      'Chrome': ['Chrome', 'Polished Chrome', 'Brushed Chrome', 'Satin Chrome', 'Matte Chrome', 'Black Chrome', 'Mirror Chrome'],
      'Nickel': ['Nickel', 'Polished Nickel', 'Brushed Nickel', 'Satin Nickel', 'Matte Nickel', 'Antique Nickel'],
      'Palladium': ['Palladium', 'White Palladium', 'Polished Palladium', 'Brushed Palladium', 'Matte Palladium'],
      'Rhodium': ['Rhodium', 'White Rhodium', 'Polished Rhodium', 'Brushed Rhodium'],
      'Gunmetal': ['Gunmetal', 'Dark Gunmetal', 'Black Gunmetal', 'Polished Gunmetal', 'Brushed Gunmetal', 'Matte Gunmetal', 'Satin Gunmetal'],
      'Steel': ['Steel', 'Stainless Steel', 'Brushed Steel', 'Black Steel', 'Polished Steel', 'Satin Steel', 'Matte Steel', 'Carbon Steel', 'Damascus Steel', 'Brushed Stainless', 'Mirror Steel']
    }
    
    // Full comprehensive color palette as default
    const fullColorPalette = [
      // Reds
      'Red', 'Deep Red', 'Crimson', 'Scarlet', 'Burgundy', 'Wine', 'Ruby Red', 'Pink-Red', 'Purple-Red', 'Orange-Red', 'Cherry', 'Brick', 'Maroon', 'Rosewood',
      // Blues  
      'Blue', 'Deep Blue', 'Royal Blue', 'Navy', 'Midnight', 'Sky', 'Powder', 'Cornflower Blue', 'Light Blue', 'Teal', 'Turquoise', 'Sapphire Blue', 'Indigo', 'Cyan', 'Aqua', 'Steel Blue', 'Slate Blue', 'Periwinkle',
      // Greens
      'Green', 'Deep Green', 'Forest Green', 'Emerald Green', 'Olive Green', 'Mint Green', 'Light Green', 'Yellow-Green', 'Neon Green', 'Sage', 'Mint', 'Jade', 'Lime', 'Apple Green', 'Sea Green', 'Hunter Green',
      // Yellows/Golds
      'Yellow', 'Gold', 'Amber', 'Mustard', 'Champagne', 'Golden', 'Honey', 'Caramel', 'Fancy Yellow', 'Light Yellow', 'Faint Yellow', 'Butter', 'Lemon', 'Canary',
      // Oranges
      'Orange', 'Coral', 'Rust', 'Terracotta', 'Peach', 'Apricot', 'Tangerine', 'Burnt Orange', 'Pumpkin', 'Copper', 'Bronze',
      // Pinks
      'Pink', 'Rose', 'Blush', 'Fuchsia', 'Magenta', 'Salmon', 'Peach', 'Watermelon', 'Light Pink', 'Dusty Rose', 'Rose Gold', 'Hot Pink', 'Bubblegum',
      // Purples
      'Purple', 'Lavender', 'Violet', 'Plum', 'Amethyst Purple', 'Deep Purple', 'Pink-Purple', 'Mauve', 'Lilac', 'Orchid', 'Grape',
      // Browns/Tans
      'Brown', 'Tan', 'Cognac', 'Beige', 'Taupe', 'Caramel', 'Chocolate', 'Coffee', 'Mocha', 'Chestnut', 'Mahogany', 'Walnut', 'Dark Brown',
      // Neutrals
      'Black', 'White', 'Grey', 'Charcoal', 'Slate', 'Stone', 'Ivory', 'Cream', 'Silver', 'Platinum', 'Pearl', 'Colorless', 'Near Colorless', 'Ash', 'Smoke',
      // Metallics
      'Metallic', 'Gunmetal', 'Chrome', 'Nickel', 'Titanium', 'Brass', 'Palladium', 'Rhodium', 'Steel', 'Holographic', 'Iridescent', 'Opalescent'
    ]
    
    // Return colors for the specific material, or full palette if not found
    return materialColorMap[materialName] || fullColorPalette
  }
  
  // Get hex color for metal color names
  const getMetalColorHex = (colorName) => {
    const metalColorMap = {
      // Gold variations
      'Yellow Gold': '#C9A961', 'Rose Gold': '#E8B4A0', 'White Gold': '#F5F5DC', 'Platinum Gold': '#E5E4E2', 'Champagne Gold': '#F7E7CE',
      '18K Gold': '#D4AF37', '14K Gold': '#C9A961', '22K Gold': '#E6C200', '24K Gold': '#FFD700',
      'Green Gold': '#B8860B', 'Red Gold': '#D2691E', 'Pink Gold': '#E8B4A0',
      'Antique Gold': '#B8860B', 'Vintage Gold': '#CD853F', 'Matte Gold': '#B8860B', 'Satin Gold': '#D4AF37',
      'Brushed Gold': '#C9A961', 'Polished Gold': '#FFD700', 'High Polish Gold': '#FFD700',
      
      // Rose Gold variations
      '18K Rose Gold': '#E8B4A0', '14K Rose Gold': '#E8B4A0', 'Light Rose Gold': '#F0C8A0', 'Deep Rose Gold': '#D4A082',
      'Antique Rose Gold': '#C97D7D', 'Matte Rose Gold': '#D4A082', 'Polished Rose Gold': '#E8B4A0',
      'Copper Rose': '#B87333', 'Champagne Rose': '#F7E7CE',
      
      // Platinum variations
      'Platinum': '#E5E4E2', 'White Platinum': '#E5E4E2', 'Grey Platinum': '#A8A8A8',
      '950 Platinum': '#E5E4E2', '900 Platinum': '#D3D3D3',
      'Polished Platinum': '#F5F5F5', 'Brushed Platinum': '#D3D3D3', 'Matte Platinum': '#C0C0C0', 'Satin Platinum': '#DCDCDC',
      
      // Silver variations
      'Silver': '#C0C0C0', 'Sterling Silver': '#C0C0C0', 'White Silver': '#F5F5F5', 'Gunmetal Silver': '#2C2C2C',
      '925 Silver': '#C0C0C0', 'Fine Silver': '#E8E8E8',
      'Antique Silver': '#8B8B8B', 'Oxidized Silver': '#6B6B6B', 'Blackened Silver': '#2C2C2C',
      'Polished Silver': '#E8E8E8', 'Brushed Silver': '#A8A8A8', 'Matte Silver': '#8B8B8B', 'Satin Silver': '#C0C0C0',
      
      // Titanium variations
      'Titanium': '#878681', 'Grey Titanium': '#878681', 'Black Titanium': '#2C2C2C',
      'Polished Titanium': '#A8A8A8', 'Brushed Titanium': '#6B6B6B', 'Anodized Titanium': '#4A90E2',
      'Blue Titanium': '#4169E1', 'Purple Titanium': '#9370DB', 'Gold Titanium': '#D4AF37',
      
      // Brass variations
      'Brass': '#B5A642', 'Antique Brass': '#CD7F32', 'Polished Brass': '#B5A642',
      'Brushed Brass': '#8B7355', 'Matte Brass': '#8B6B3D', 'Vintage Brass': '#8B7355',
      'Oxidized Brass': '#6B5B3D', 'Lacquered Brass': '#B5A642',
      
      // Bronze variations
      'Bronze': '#CD7F32', 'Antique Bronze': '#8B4513', 'Polished Bronze': '#CD7F32',
      'Brushed Bronze': '#8B6B3D', 'Matte Bronze': '#6B4C2D', 'Patina Bronze': '#4A5D23',
      'Oxidized Bronze': '#5C4033', 'Vintage Bronze': '#8B4513',
      
      // Copper variations
      'Copper': '#B87333', 'Antique Copper': '#B87333', 'Polished Copper': '#DA8A67',
      'Brushed Copper': '#8B6B3D', 'Matte Copper': '#8B4513', 'Oxidized Copper': '#5C4033',
      'Patina Copper': '#4A5D23', 'Verdigris': '#43B3AE',
      
      // Chrome variations
      'Chrome': '#A8A8A8', 'Polished Chrome': '#A8A8A8', 'Brushed Chrome': '#8B8B8B',
      'Satin Chrome': '#8B8B8B', 'Matte Chrome': '#6B6B6B', 'Black Chrome': '#2C2C2C', 'Mirror Chrome': '#E8E8E8',
      
      // Nickel variations
      'Nickel': '#A8A8A8', 'Polished Nickel': '#A8A8A8', 'Brushed Nickel': '#8B8B8B',
      'Satin Nickel': '#8B8B8B', 'Matte Nickel': '#6B6B6B', 'Antique Nickel': '#6B6B6B',
      
      // Palladium variations
      'Palladium': '#E5E4E2', 'White Palladium': '#E5E4E2',
      'Polished Palladium': '#F5F5F5', 'Brushed Palladium': '#D3D3D3', 'Matte Palladium': '#C0C0C0',
      
      // Rhodium variations
      'Rhodium': '#E5E4E2', 'White Rhodium': '#E5E4E2',
      'Polished Rhodium': '#F5F5F5', 'Brushed Rhodium': '#D3D3D3',
      
      // Gunmetal variations
      'Gunmetal': '#2C2C2C', 'Dark Gunmetal': '#1C1C1C', 'Black Gunmetal': '#0A0A0A',
      'Polished Gunmetal': '#3C3C3C', 'Brushed Gunmetal': '#2C2C2C', 'Matte Gunmetal': '#1C1C1C', 'Satin Gunmetal': '#2C2C2C',
      
      // Steel variations
      'Steel': '#8B8B8B', 'Stainless Steel': '#A8A8A8', 'Brushed Steel': '#8B8B8B', 'Black Steel': '#2C2C2C',
      'Polished Steel': '#C0C0C0', 'Satin Steel': '#A8A8A8', 'Matte Steel': '#6B6B6B',
      'Carbon Steel': '#2C2C2C', 'Damascus Steel': '#4A4A4A', 'Brushed Stainless': '#8B8B8B', 'Mirror Steel': '#E8E8E8'
    }
    return metalColorMap[colorName] || getColorHex(colorName)
  }

  // Get gem image URL - uses real images from local assets folder
  const getGemImagePath = (gemName) => {
    // Map gem names to folder names in the train directory
    // Handle special cases where folder names differ from gem names
    const gemFolderMap = {
      // Precious gems
      'Diamond': 'Diamond',
      'Emerald': 'Emerald',
      'Ruby': 'Ruby',
      'Sapphire': 'Sapphire Blue', // Default to Blue Sapphire
      'Sapphire Blue': 'Sapphire Blue',
      'Sapphire Pink': 'Sapphire Pink',
      'Sapphire Purple': 'Sapphire Purple',
      'Sapphire Yellow': 'Sapphire Yellow',
      'Blue Sapphire': 'Sapphire Blue',
      'Pink Sapphire': 'Sapphire Pink',
      'Purple Sapphire': 'Sapphire Purple',
      'Yellow Sapphire': 'Sapphire Yellow',
      'Alexandrite': 'Alexandrite',
      'Benitoite': 'Benitoite',
      'Jadeite': 'Jade',
      'Jade': 'Jade',
      'Paraiba Tourmaline': 'Tourmaline',
      'Red Spinel': 'Spinel',
      'Spinel': 'Spinel',
      'Agate': 'Blue Lace Agate', // Default to Blue Lace Agate
      'Amazonite': 'Amazonite',
      'Amethyst': 'Amethyst',
      'Ametrine': 'Ametrine',
      'Apatite': 'Aquamarine', // Use Aquamarine folder for apatite
      'Aquamarine': 'Aquamarine',
      'Aventurine': 'Aventurine Green', // Default to Green
      'Aventurine Green': 'Aventurine Green',
      'Aventurine Yellow': 'Aventurine Yellow',
      'Bloodstone': 'Bloodstone',
      'Carnelian': 'Carnelian',
      'Chalcedony': 'Chalcedony',
      'Chalcedony Blue': 'Chalcedony Blue',
      'Chrysoprase': 'Chrysoprase',
      'Citrine': 'Citrine',
      'Fluorite': 'Fluorite',
      'Garnet': 'Garnet Red', // Default to Red Garnet
      'Garnet Red': 'Garnet Red',
      'Goshenite': 'Goshenite',
      'Heliodor': 'Beryl Golden', // Heliodor is golden beryl
      'Hematite': 'hematite', // Use lowercase folder name
      'Howlite': 'howlite', // Use lowercase folder name
      'Iolite': 'Iolite',
      'Jasper': 'Jasper',
      'Kyanite': 'Kyanite',
      'Labradorite': 'Labradorite',
      'Lapis Lazuli': 'Lapis Lazuli',
      'Larimar': 'Larimar',
      'Lepidolite': 'lepidolite', // Use lowercase folder name
      'Malachite': 'Malachite',
      'Moonstone': 'Moonstone',
      'Rainbow Moonstone': 'Moonstone',
      'Morganite': 'Morganite',
      'Obsidian': 'obsidian', // Use lowercase folder name
      'Onyx': 'Onyx Black', // Default to Black Onyx
      'Onyx Black': 'Onyx Black',
      'Onyx Green': 'Onyx Green',
      'Onyx Red': 'Onyx Red',
      'Opal': 'Opal',
      'Peridot': 'Peridot',
      'Prehnite': 'Prehnite',
      'Pyrite': 'Pyrite',
      'Rhodochrosite': 'Rhodochrosite',
      'Rhodolite': 'Rhodolite',
      'Rhodonite': 'Rhodonite',
      'Rose Quartz': 'Quartz Rose',
      'Serpentine': 'Serpentine',
      'Smoky Quartz': 'Quartz Smoky',
      'Quartz': 'Quartz Beer', // Default
      'Quartz Beer': 'Quartz Beer',
      'Quartz Lemon': 'Quartz Lemon',
      'Quartz Rose': 'Quartz Rose',
      'Quartz Rutilated': 'Quartz Rutilated',
      'Quartz Smoky': 'Quartz Smoky',
      'Sodalite': 'Sodalite',
      'Spessartite': 'Spessartite',
      'Sunstone': 'Sunstone',
      'Tanzanite': 'Tanzanite',
      'Tiger\'s Eye': 'Tigers Eye',
      'Topaz': 'Topaz',
      'Tourmaline': 'Tourmaline',
      'Turquoise': 'Turquoise',
      'Unakite': 'Unakite',
      'Zircon': 'Zircon',
      'Tsavorite': 'Tsavorite',
      'Dumortierite': 'Dumortierite',
      'Amber': 'Amber',
      'Ammolite': 'ammolite', // Use lowercase folder name
      'Bone': 'bone', // Use lowercase folder name
      'Bog Oak': 'bog oak', // Use lowercase folder name with space
      'Coral': 'Coral',
      'Copal': 'copal', // Use lowercase folder name
      'Fossilized Wood': 'fossilized_wood', // Use lowercase folder name with underscore
      'Ivory': 'ivory', // Use lowercase folder name
      'Jet': 'jet', // Use lowercase folder name
      'Nacre': 'nacre', // Use lowercase folder name
      'Odontolite': 'odontolite', // Use lowercase folder name
      'Pearl': 'Pearl',
      'Mother-of-Pearl': 'Pearl', // Use Pearl folder images
      'Mother of Pearl': 'Pearl', // Alternative naming
      'Shell': 'shell', // Use lowercase folder name
      // Additional mappings
      'Almandine': 'Almandine',
      'Andalusite': 'Andalusite',
      'Andradite': 'Andradite',
      'Beryl Golden': 'Beryl Golden',
      'Bixbite': 'Bixbite',
      'Blue Lace Agate': 'Blue Lace Agate',
      'Cats Eye': 'Cats Eye',
      'Chrome Diopside': 'Chrome Diopside',
      'Chrysoberyl': 'Chrysoberyl',
      'Chrysocolla': 'Chrysocolla',
      'Danburite': 'Danburite',
      'Diaspore': 'Diaspore',
      'Grossular': 'Grossular',
      'Hessonite': 'Hessonite',
      'Hiddenite': 'Hiddenite',
      'Kunzite': 'Kunzite',
      'Pyrope': 'Pyrope',
      'Scapolite': 'Scapolite',
      'Sphene': 'Sphene',
      'Spodumene': 'Spodumene',
      'Variscite': 'Variscite',
      'Zoisite': 'Zoisite',
      'Tortoiseshell': 'Zoisite', // Use Zoisite folder for tortoiseshell
      'Tagua Nut': 'Zoisite', // Use Zoisite folder for tagua nut
      // Special Effects - map to appropriate gem folders for visual representation
      'Opalescent': 'Moonstone', // Opalescent effect similar to moonstone
      'Chatoyant': 'Cats Eye', // Chatoyant (cat's eye) effect
      'Asterism': 'Sapphire Blue', // Asterism (star effect) often seen in sapphires
      'Color Change': 'Alexandrite', // Color change effect like alexandrite
      'Aventurescence': 'Aventurine Green', // Aventurescence effect from aventurine
      'Labradorescence': 'Labradorite', // Labradorescence effect from labradorite
      'Play of Color': 'Opal', // Play of color effect from opal
      // Man-Made / Synthetic gems - map to similar natural gem folders
      'Synthetic Diamond': 'Diamond',
      'Synthetic Ruby': 'Ruby',
      'Synthetic Sapphire': 'Sapphire Blue',
      'Synthetic Spinel': 'Spinel',
      'Synthetic Quartz': 'Quartz Beer',
      'Synthetic Quartz Crystal Clusters': 'Quartz Beer',
      'Synthetic Emerald': 'Emerald',
      'Synthetic Alexandrite': 'Alexandrite',
      'Synthetic Moissanite': 'Diamond', // Moissanite looks similar to diamond
      'Synthetic Aquamarine': 'Aquamarine',
      'Synthetic Topaz': 'Topaz',
      'Synthetic Opal': 'Opal',
      'Synthetic Opal Doublet': 'Opal',
      'Synthetic Jadeite': 'Jade',
      'Synthetic Lapis Lazuli': 'Lapis Lazuli',
      'Synthetic Turquoise': 'Turquoise',
      'Synthetic Malachite': 'Malachite',
      'Cubic Zirconia': 'Zircon', // CZ is similar to zircon
      'Opalite': 'Opal', // Opalite is similar to opal
      'Swarovski Crystal': 'Diamond', // Swarovski crystals are clear/faceted like diamonds
      'Bismuth Crystal': 'Opal', // Bismuth has iridescent colors like opal
      'Glass Gemstones': 'Hiddenite', // Use Hiddenite folder for glass gemstones
      'Goldstone': 'Pyrite', // Goldstone has sparkly appearance like pyrite
      'Lab-Created Garnet': 'Garnet Red',
      'Lab-Created Emerald Overgrowth': 'Emerald',
      'Reconstituted Stones': 'Opal', // Often opal-like
      'Foil-Backed or Coated Stones': 'Opal', // Often have iridescent appearance
      'Girdled Stones': 'Diamond', // Typically faceted like diamonds
      'Resin-Impregnated Stones': 'Opal', // Often opal-like
      'Acrylic / Polymer Gems': 'Opal', // Often have colorful/iridescent appearance
      'Neoceram': 'Opal', // Glass ceramic, often opal-like
      'Glass-filled Gems': 'Opal', // Often opal-like
      'Iridescent Glass': 'Opal', // Iridescent like opal
      'Triplets & Doublets': 'Opal', // Often opal-based
    }
    
    // Get folder name, fallback to gem name if not mapped
    let folderName = gemFolderMap[gemName]
    
    // Special case: Mother-of-Pearl uses pearl_9.jpg specifically
    if (gemName === 'Mother-of-Pearl' || gemName === 'Mother of Pearl') {
      return `/assets/images/archive/train/Pearl/pearl_9.jpg`
    }
    
    // Special case: Apatite uses aquamarine_35.jpg specifically
    if (gemName === 'Apatite') {
      return `/assets/images/archive/train/Aquamarine/aquamarine_35.jpg`
    }
    
    // Special case: Tortoiseshell uses zoisite_16.jpg specifically
    if (gemName === 'Tortoiseshell') {
      return `/assets/images/archive/train/Zoisite/zoisite_16.jpg`
    }
    
    // Special case: Tagua Nut uses zoisite_1.jpg specifically
    if (gemName === 'Tagua Nut') {
      return `/assets/images/archive/train/Zoisite/zoisite_1.jpg`
    }
    
    // If not found in map, try to match folder name directly (case-insensitive)
    if (!folderName) {
      // Try exact match first
      folderName = gemName
    }
    
    // For Man-Made gems that map to the same folder, use different image indices
    // IMPORTANT: Start from index 10+ to avoid conflicts with natural gems (which use 0-9)
    // This ensures Man-Made gems don't use images already used by Precious, Semi-Precious, or Organic gems
    const manMadeImageIndices = {
      // Diamond folder (multiple Man-Made gems use this)
      // Natural Diamond uses index 0, so Man-Made start from 10+
      'Synthetic Diamond': 7, // Use diamond_7.jpg specifically (as requested)
      'Synthetic Moissanite': 10,
      'Swarovski Crystal': 11,
      'Girdled Stones': 12,
      // Opal folder (multiple Man-Made gems use this)
      // Natural Opal uses index 0, so Man-Made start from 10+
      'Synthetic Opal': 32, // Use opal_32.jpg specifically
      'Synthetic Opal Doublet': 11,
      'Opalite': 12,
      'Bismuth Crystal': 13,
      'Glass Gemstones': 6, // Use hiddenite_6.jpg specifically
      'Reconstituted Stones': 15,
      'Foil-Backed or Coated Stones': 16,
      'Resin-Impregnated Stones': 17,
      'Acrylic / Polymer Gems': 18,
      'Neoceram': 19,
      'Glass-filled Gems': 20,
      'Iridescent Glass': 21,
      'Triplets & Doublets': 22,
      // Ruby folder
      'Synthetic Ruby': 10, // Natural Ruby uses 0
      // Sapphire folder
      'Synthetic Sapphire': 10, // Natural Sapphire uses 0
      // Spinel folder
      'Synthetic Spinel': 10, // Natural Spinel uses 0
      // Quartz folder (multiple Man-Made gems use this)
      'Synthetic Quartz': 10, // Natural Quartz uses 0
      'Synthetic Quartz Crystal Clusters': 11,
      // Emerald folder
      'Synthetic Emerald': 10, // Natural Emerald uses 0
      'Lab-Created Emerald Overgrowth': 11,
      // Alexandrite folder
      'Synthetic Alexandrite': 10, // Natural Alexandrite uses 0
      // Aquamarine folder
      'Synthetic Aquamarine': 10, // Natural Aquamarine uses 0
      // Topaz folder
      'Synthetic Topaz': 10, // Natural Topaz uses 0
      // Jade folder
      'Synthetic Jadeite': 10, // Natural Jade uses 0
      // Lapis Lazuli folder
      'Synthetic Lapis Lazuli': 10, // Natural Lapis Lazuli uses 0
      // Turquoise folder
      'Synthetic Turquoise': 10, // Natural Turquoise uses 0
      // Malachite folder
      'Synthetic Malachite': 10, // Natural Malachite uses 0
      // Zircon folder
      'Cubic Zirconia': 10, // Natural Zircon uses 0
      // Pyrite folder
      'Goldstone': 10, // Natural Pyrite uses 0
      // Garnet Red folder
      'Lab-Created Garnet': 10, // Natural Garnet Red uses 0
    }
    
    // Special cases for gems with .jpeg files in lowercase folders or root
    const jpegGems = {
      'Ammolite': 'ammolite',
      'Bone': 'bone',
      'Bog Oak': 'bog oak',
      'Copal': 'copal',
      'Fossilized Wood': 'fossilized_wood',
      'Hematite': 'hematite', // Note: filename is hemetite.jpeg (typo in filename)
      'Howlite': 'howlite',
      'Ivory': 'ivory',
      'Jet': 'jet',
      'Lepidolite': 'lepidolite',
      'Nacre': 'nacre',
      'Obsidian': 'obsidian',
      'Odontolite': 'odontolite',
      'Shell': 'shell',
      'Unakite': 'unakite'
    }
    
    // Man-Made gems with .jpeg files in the root of train folder
    const rootJpegGems = {
      'Bismuth Crystal': 'bismuth.jpeg',
      'Foil-Backed or Coated Stones': 'foil_backed.jpeg',
      'Glass-filled Gems': 'glass_filled_gem.jpeg',
      'Iridescent Glass': 'iredescent.jpeg', // Note: typo in filename
      'Neoceram': 'neoceram.jpeg',
      'Reconstituted Stones': 'reconstituted_stones.jpeg',
      'Resin-Impregnated Stones': 'basin_impregnated .jpeg', // Note: space in filename
      'Triplets & Doublets': 'triplet_&_double.jpeg',
      // Extended Natural gems with .jpeg files in root
      'Amblygonite': 'amblygonite.jpeg',
      'Austrophyllite': 'austrophyllite.jpeg',
      'Axinite': 'axinite.jpeg',
      'Azurite': 'azurite.jpeg',
      'Beryl (RARE types)': 'beryl.jpeg',
      'Brookite': 'brookite.jpeg',
      'Cassiterite': 'cassiterite.jpeg',
      'Charoite': 'charoite.jpeg',
      'Clinohumite': 'clinohumite.jpeg',
      'Diaspore': 'diaspore.jpeg',
      'Diaspore (Zultanite)': 'diaspore.jpeg',
      'Dioptase': 'dioptase.jpeg',
      'Dravite': 'dravite.jpeg',
      'Ekanite': 'ekanite.jpeg',
      'Enstatite': 'enstatite.jpeg',
      'Euclase': 'euclase.jpeg',
      'Fluorite': 'fluorite.jpeg',
      'Fluorite (Collector-grade)': 'fluorite.jpeg',
      'Gaspeite': 'gaspeite.jpeg',
      'Grandidierite': 'grandidierite.jpeg',
      'Hackmanite': 'hackmanite.jpeg',
      'Hemimorphite': 'hemimorphite.jpeg',
      'Idocrase (Vesuvianite)': 'vesuvianite.jpeg', // Use vesuvianite.jpeg (newer file)
      'Iolite': 'lolite.jpeg', // Note: typo in filename (lolite instead of iolite)
      'Iolite (Uncommon grades)': 'lolite.jpeg',
      'Jeremejevite': 'jeremejevite.jpeg',
      'Kämmererite': 'kammererite.jpeg',
      'Kornerupine': 'kornerupine.jpeg',
      'Kudite': 'kudite.jpeg',
      'Lazulite': 'lazulite.jpeg',
      'Liddicoatite': 'liddicoatite.jpeg',
      'Magnesite': 'magnesite.jpeg',
      'Musgravite': 'musgravite.jpeg',
      'Muscovite': 'muscovite.jpeg',
      'Painite': 'painite.jpeg',
      'Pectolite': 'pectolite.jpeg',
      'Petalite': 'petalite.jpeg',
      'Pietersite': 'pietersite.jpeg',
      'Poudretteite': 'poudretteite.jpeg',
      'Prehnite': 'prehnite.jpeg', // Root .jpeg file (Prehnite also has a folder)
      'Prehnite (Collector grades)': 'prehnite.jpeg',
      'Seraphinite': 'seraphinite.jpeg',
      'Serendibite': 'serendibite.jpeg',
      'Shattuckite': 'shattuckite.jpeg',
      'Smithsonite': 'smithsonite.jpeg',
      'Sphalerite': 'sphalerite.jpeg',
      'Sphene': 'sphene_titanite .jpeg', // Note: space in filename
      'Sphene (Titanite)': 'sphene_titanite .jpeg', // Note: space in filename
      'Stichtite': 'stichtite.jpeg',
      'Sugilite': 'sugilite.jpeg',
      'Taaffeite': 'taaffeite.jpeg',
      'Thulite': 'thulite.jpeg',
      'Tremolite': 'tremolite.jpeg',
      'Vesuvianite': 'vesuvianite.jpeg',
      'Idocrase (Vesuvianite)': 'vesuvianite.jpeg', // Also map Idocrase to vesuvianite
      // Special Effects - map to appropriate images
      'Iridescent': 'iredescent.jpeg' // Note: typo in filename - this is a root .jpeg file
    }
    
    // Check for root-level .jpeg files first
    if (rootJpegGems[gemName]) {
      return `/assets/images/archive/train/${rootJpegGems[gemName]}`
    }
    
    if (jpegGems[gemName]) {
      const folder = jpegGems[gemName]
      // Handle special case for Hematite (typo in filename: hemetite.jpeg)
      if (gemName === 'Hematite') {
        return `/assets/images/archive/train/${folder}/hemetite.jpeg`
      }
      // Handle special case for Bog Oak (filename: bog_oak.jpeg)
      if (gemName === 'Bog Oak') {
        return `/assets/images/archive/train/${folder}/bog_oak.jpeg`
      }
      // Handle special case for Fossilized Wood (filename: fossilized_wood.jpeg)
      if (gemName === 'Fossilized Wood') {
        return `/assets/images/archive/train/${folder}/fossilized_wood.jpeg`
      }
      // Default: use gem name in lowercase with .jpeg
      const gemNameLower = gemName.toLowerCase().replace(/\s+/g, '_')
      return `/assets/images/archive/train/${folder}/${gemNameLower}.jpeg`
    }
    
    // Get image index for Man-Made gems, default to 0 for natural gems
    const imageIndex = manMadeImageIndices[gemName] !== undefined ? manMadeImageIndices[gemName] : 0
    
    // Use the specified image index from the folder
    // Format: /assets/images/archive/train/{folderName}/{gemName}_{index}.jpg
    const gemNameLower = folderName.toLowerCase()
    return `/assets/images/archive/train/${folderName}/${gemNameLower}_${imageIndex}.jpg`
  }
  
  // Get alternative image URLs for fallback - try different image indices from the same folder
  const getGemImageFallbacks = (gemName) => {
    // Use the same mapping as getGemImagePath
    const gemFolderMap = {
      'Diamond': 'Diamond', 'Emerald': 'Emerald', 'Ruby': 'Ruby', 'Sapphire': 'Sapphire Blue',
      'Sapphire Blue': 'Sapphire Blue', 'Sapphire Pink': 'Sapphire Pink', 'Sapphire Purple': 'Sapphire Purple', 'Sapphire Yellow': 'Sapphire Yellow',
      'Alexandrite': 'Alexandrite', 'Benitoite': 'Benitoite', 'Jadeite': 'Jade', 'Jade': 'Jade',
      'Paraiba Tourmaline': 'Tourmaline', 'Red Spinel': 'Spinel', 'Spinel': 'Spinel',
      'Agate': 'Blue Lace Agate', 'Amazonite': 'Amazonite', 'Amethyst': 'Amethyst', 'Ametrine': 'Ametrine',
      'Apatite': 'Aquamarine', 'Aquamarine': 'Aquamarine', 'Aventurine': 'Aventurine Green',
      'Aventurine Green': 'Aventurine Green', 'Aventurine Yellow': 'Aventurine Yellow',
      'Bloodstone': 'Bloodstone', 'Carnelian': 'Carnelian', 'Chalcedony': 'Chalcedony', 'Chalcedony Blue': 'Chalcedony Blue',
      'Chrysoprase': 'Chrysoprase', 'Citrine': 'Citrine', 'Fluorite': 'Fluorite',
      'Garnet': 'Garnet Red', 'Garnet Red': 'Garnet Red', 'Goshenite': 'Goshenite',
      'Heliodor': 'Beryl Golden', 'Hematite': 'hematite', 'Howlite': 'howlite', 'Iolite': 'Iolite',
      'Jasper': 'Jasper', 'Kyanite': 'Kyanite', 'Labradorite': 'Labradorite', 'Lapis Lazuli': 'Lapis Lazuli',
      'Larimar': 'Larimar', 'Lepidolite': 'lepidolite', 'Malachite': 'Malachite', 'Moonstone': 'Moonstone',
      'Rainbow Moonstone': 'Moonstone', 'Morganite': 'Morganite', 'Obsidian': 'obsidian',
      'Onyx': 'Onyx Black', 'Onyx Black': 'Onyx Black', 'Onyx Green': 'Onyx Green', 'Onyx Red': 'Onyx Red',
      'Opal': 'Opal', 'Peridot': 'Peridot', 'Prehnite': 'Prehnite', 'Pyrite': 'Pyrite',
      'Rhodochrosite': 'Rhodochrosite', 'Rhodolite': 'Rhodolite', 'Rhodonite': 'Rhodonite',
      'Rose Quartz': 'Quartz Rose', 'Serpentine': 'Serpentine', 'Smoky Quartz': 'Quartz Smoky',
      'Quartz': 'Quartz Beer', 'Quartz Beer': 'Quartz Beer', 'Quartz Lemon': 'Quartz Lemon',
      'Quartz Rose': 'Quartz Rose', 'Quartz Rutilated': 'Quartz Rutilated', 'Quartz Smoky': 'Quartz Smoky',
      'Sodalite': 'Sodalite', 'Spessartite': 'Spessartite', 'Sunstone': 'Sunstone', 'Tanzanite': 'Tanzanite',
      'Tiger\'s Eye': 'Tigers Eye', 'Topaz': 'Topaz', 'Tourmaline': 'Tourmaline', 'Turquoise': 'Turquoise',
      'Unakite': 'unakite', 'Zircon': 'Zircon', 'Tsavorite': 'Tsavorite', 'Dumortierite': 'Dumortierite',
      'Amber': 'Amber', 'Ammolite': 'ammolite', 'Bone': 'bone', 'Bog Oak': 'bog oak',
      'Coral': 'Coral', 'Copal': 'copal', 'Fossilized Wood': 'fossilized_wood',
      'Ivory': 'ivory', 'Jet': 'jet', 'Nacre': 'nacre', 'Odontolite': 'odontolite',
      'Pearl': 'Pearl', 'Mother-of-Pearl': 'Pearl', 'Mother of Pearl': 'Pearl', 'Shell': 'shell',
      'Almandine': 'Almandine', 'Andalusite': 'Andalusite', 'Andradite': 'Andradite', 'Beryl Golden': 'Beryl Golden',
      'Bixbite': 'Bixbite', 'Blue Lace Agate': 'Blue Lace Agate', 'Cats Eye': 'Cats Eye',
      'Chrome Diopside': 'Chrome Diopside', 'Chrysoberyl': 'Chrysoberyl', 'Chrysocolla': 'Chrysocolla',
      'Danburite': 'Danburite', 'Diaspore': 'Diaspore', 'Grossular': 'Grossular', 'Hessonite': 'Hessonite',
      'Hiddenite': 'Hiddenite', 'Kunzite': 'Kunzite', 'Pyrope': 'Pyrope',       'Scapolite': 'Scapolite',
      'Sphene': 'Sphene', 'Spodumene': 'Spodumene', 'Variscite': 'Variscite', 'Zoisite': 'Zoisite', 'Tortoiseshell': 'Zoisite', 'Tagua Nut': 'Zoisite',
      // Man-Made / Synthetic gems - map to similar natural gem folders (same as main mapping)
      'Synthetic Diamond': 'Diamond', 'Synthetic Ruby': 'Ruby', 'Synthetic Sapphire': 'Sapphire Blue',
      'Synthetic Spinel': 'Spinel', 'Synthetic Quartz': 'Quartz Beer', 'Synthetic Quartz Crystal Clusters': 'Quartz Beer',
      'Synthetic Emerald': 'Emerald', 'Synthetic Alexandrite': 'Alexandrite', 'Synthetic Moissanite': 'Diamond',
      'Synthetic Aquamarine': 'Aquamarine', 'Synthetic Topaz': 'Topaz', 'Synthetic Opal': 'Opal',
      'Synthetic Opal Doublet': 'Opal', 'Synthetic Jadeite': 'Jade', 'Synthetic Lapis Lazuli': 'Lapis Lazuli',
      'Synthetic Turquoise': 'Turquoise', 'Synthetic Malachite': 'Malachite', 'Cubic Zirconia': 'Zircon',
      'Opalite': 'Opal', 'Swarovski Crystal': 'Diamond', 'Bismuth Crystal': 'Opal', 'Glass Gemstones': 'Hiddenite',
      'Goldstone': 'Pyrite',
      'Lab-Created Garnet': 'Garnet Red', 'Lab-Created Emerald Overgrowth': 'Emerald',
      'Reconstituted Stones': 'Opal', 'Foil-Backed or Coated Stones': 'Opal', 'Girdled Stones': 'Diamond',
      'Resin-Impregnated Stones': 'Opal', 'Acrylic / Polymer Gems': 'Opal', 'Neoceram': 'Opal',
      'Glass-filled Gems': 'Opal', 'Iridescent Glass': 'Opal', 'Triplets & Doublets': 'Opal',
    }
    
    const folderName = gemFolderMap[gemName] || gemName
    // Keep spaces in filename to match actual file naming (e.g., "sapphire blue_0.jpg" not "sapphire_blue_0.jpg")
    const gemNameLower = folderName.toLowerCase()
    
    // Try different image indices (1, 2, 3, etc.) as fallbacks
    return [
      `/assets/images/archive/train/${folderName}/${gemNameLower}_1.jpg`,
      `/assets/images/archive/train/${folderName}/${gemNameLower}_2.jpg`,
      `/assets/images/archive/train/${folderName}/${gemNameLower}_3.jpg`,
      `/assets/images/archive/train/${folderName}/${gemNameLower}_4.jpg`,
      `https://via.placeholder.com/400/533e17/fffe88?text=${encodeURIComponent(gemName.substring(0, 10))}` // Final placeholder fallback
    ]
  }

  // Get color family for organizing colors into rows
  const getColorFamily = (colorName) => {
    const lowerName = colorName.toLowerCase()
    
    // Red family
    if (lowerName.includes('red') || lowerName.includes('burgundy') || lowerName.includes('wine') || 
        lowerName.includes('crimson') || lowerName.includes('scarlet') || lowerName.includes('ruby') ||
        lowerName.includes('cherry') || lowerName.includes('brick') || lowerName.includes('maroon') ||
        lowerName.includes('rosewood') || lowerName === 'padparadscha') {
      return 'Red'
    }
    
    // Blue family
    if (lowerName.includes('blue') || lowerName.includes('navy') || lowerName.includes('royal') || 
        lowerName.includes('midnight') || lowerName.includes('sky') || lowerName.includes('powder') ||
        lowerName.includes('teal') || lowerName.includes('turquoise') || lowerName.includes('sapphire') ||
        lowerName.includes('indigo') || lowerName.includes('cyan') || lowerName.includes('aqua') ||
        lowerName.includes('steel blue') || lowerName.includes('slate blue') || lowerName.includes('periwinkle')) {
      return 'Blue'
    }
    
    // Green family
    if (lowerName.includes('green') || lowerName.includes('emerald') || lowerName.includes('forest') ||
        lowerName.includes('olive') || lowerName.includes('sage') || lowerName.includes('mint') ||
        lowerName.includes('jade') || lowerName.includes('lime') || lowerName.includes('sea green') ||
        lowerName.includes('hunter green') || lowerName.includes('apple green')) {
      return 'Green'
    }
    
    // Yellow/Gold family
    if (lowerName.includes('yellow') || lowerName.includes('gold') || lowerName.includes('amber') ||
        lowerName.includes('mustard') || lowerName.includes('champagne') || lowerName.includes('honey') ||
        lowerName.includes('golden') || lowerName.includes('caramel') || lowerName.includes('butter') ||
        lowerName.includes('lemon') || lowerName.includes('canary')) {
      return 'Yellow'
    }
    
    // Orange family
    if (lowerName.includes('orange') || lowerName.includes('rust') || lowerName.includes('terracotta') ||
        lowerName.includes('copper') || lowerName.includes('bronze') || lowerName.includes('apricot') ||
        lowerName.includes('tangerine') || lowerName.includes('burnt orange') || lowerName.includes('pumpkin')) {
      return 'Orange'
    }
    
    // Pink family
    if (lowerName.includes('pink') || lowerName.includes('rose') || lowerName.includes('blush') ||
        lowerName.includes('fuchsia') || lowerName.includes('magenta') || lowerName.includes('salmon') ||
        lowerName.includes('peach') || lowerName.includes('watermelon') || lowerName.includes('hot pink') ||
        lowerName.includes('bubblegum') || lowerName.includes('rose gold')) {
      return 'Pink'
    }
    
    // Purple family
    if (lowerName.includes('purple') || lowerName.includes('lavender') || lowerName.includes('violet') ||
        lowerName.includes('plum') || lowerName.includes('amethyst') || lowerName.includes('mauve') ||
        lowerName.includes('lilac') || lowerName.includes('orchid') || lowerName.includes('grape')) {
      return 'Purple'
    }
    
    // Brown/Tan family
    if (lowerName.includes('brown') || lowerName.includes('tan') || lowerName.includes('cognac') ||
        lowerName.includes('beige') || lowerName.includes('taupe') || lowerName.includes('caramel') ||
        lowerName.includes('chocolate') || lowerName.includes('coffee') || lowerName.includes('mocha') ||
        lowerName.includes('chestnut') || lowerName.includes('mahogany') || lowerName.includes('walnut')) {
      return 'Brown'
    }
    
    // Grey/Black/White family
    if (lowerName.includes('grey') || lowerName.includes('gray') || lowerName.includes('charcoal') ||
        lowerName.includes('slate') || lowerName.includes('stone') || lowerName === 'black' ||
        lowerName === 'white' || lowerName.includes('ivory') || lowerName.includes('cream') ||
        lowerName.includes('silver') || lowerName.includes('platinum') || lowerName.includes('pearl') ||
        lowerName.includes('colorless') || lowerName.includes('near colorless') || lowerName.includes('faint yellow') ||
        lowerName.includes('ash') || lowerName.includes('smoke')) {
      return 'Neutral'
    }
    
    // Metallic family
    if (lowerName.includes('metallic') || lowerName.includes('gunmetal') || lowerName.includes('chrome') ||
        lowerName.includes('nickel') || lowerName.includes('titanium') || lowerName.includes('brass') ||
        lowerName.includes('palladium') || lowerName.includes('rhodium') || lowerName.includes('steel')) {
      return 'Metallic'
    }
    
    // Special/Other
    return 'Other'
  }

  // Organize colors by family into rows
  const organizeColorsByFamily = (colors) => {
    if (!colors || colors.length === 0) return colors
    
    // Group colors by family
    const familyGroups = {}
    colors.forEach(color => {
      const family = getColorFamily(color)
      if (!familyGroups[family]) {
        familyGroups[family] = []
      }
      familyGroups[family].push(color)
    })
    
    // Define order of families
    const familyOrder = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple', 'Brown', 'Neutral', 'Metallic', 'Other']
    
    // Flatten into rows with family markers
    const organized = []
    familyOrder.forEach(family => {
      if (familyGroups[family] && familyGroups[family].length > 0) {
        // Mark first item of each family
        organized.push({ color: familyGroups[family][0], isFamilyStart: true, family: family })
        // Add rest of family
        for (let i = 1; i < familyGroups[family].length; i++) {
          organized.push({ color: familyGroups[family][i], isFamilyStart: false, family: family })
        }
      }
    })
    
    // Add any remaining colors from 'Other' or unmapped families
    Object.keys(familyGroups).forEach(family => {
      if (!familyOrder.includes(family) && familyGroups[family].length > 0) {
        organized.push({ color: familyGroups[family][0], isFamilyStart: true, family: family })
        for (let i = 1; i < familyGroups[family].length; i++) {
          organized.push({ color: familyGroups[family][i], isFamilyStart: false, family: family })
        }
      }
    })
    
    return organized
  }

  // Get diamond color hex code for SVG fill - uses the actual color codes
  const getDiamondColorSVGFill = (colorName) => {
    // Use the actual color hex code from getColorHex
    return getColorHex(colorName)
  }

  // Load and modify SVG for diamond colors
  const [diamondSVG, setDiamondSVG] = React.useState(null)
  
  React.useEffect(() => {
    fetch('/assets/colors/stone.svg')
      .then(response => response.text())
      .then(svgText => {
        setDiamondSVG(svgText)
        console.log('SVG loaded successfully, length:', svgText.length)
      })
      .catch(error => {
        console.error('Error loading SVG:', error)
      })
  }, [])

  // Function to modify SVG fill colors for gem colors
  const getModifiedSVG = (colorName) => {
    if (!diamondSVG) return null
    
    // Use the actual color hex code from getColorHex for all gem colors
    const fillColor = getColorHex(colorName)
    if (!fillColor) return null
    
    // Replace all fill attributes in the SVG with the gem color
    // Handle both fill="..." and fill='...' formats
    // Also replace fill="none" to ensure all paths get the color
    let modifiedSVG = diamondSVG
    // Replace fill with double quotes (including fill="none")
    modifiedSVG = modifiedSVG.replace(/fill="[^"]*"/g, `fill="${fillColor}"`)
    // Replace fill with single quotes (including fill='none')
    modifiedSVG = modifiedSVG.replace(/fill='[^']*'/g, `fill="${fillColor}"`)
    
    // For paths without fill attributes, add fill attribute
    // Match <path ... > and add fill if it doesn't exist
    modifiedSVG = modifiedSVG.replace(/<path([^>]*?)(?:\s+fill="[^"]*")?([^>]*?)>/g, (match, before, after) => {
      // Check if fill already exists in this path
      if (match.includes('fill=')) {
        return match // Already has fill, will be replaced by previous regex
      }
      // Add fill attribute before the closing >
      return `<path${before}${after} fill="${fillColor}">`
    })
    
    // Ensure SVG has proper width/height and background
    // Add style to SVG element if it doesn't have one
    if (!modifiedSVG.includes('style=')) {
      modifiedSVG = modifiedSVG.replace(/<svg([^>]*)>/, `<svg$1 style="width: 100%; height: 100%; background: transparent; display: block;">`)
    } else {
      modifiedSVG = modifiedSVG.replace(/style="([^"]*)"/, (match, styles) => {
        let newStyles = styles
        if (!styles.includes('background')) {
          newStyles += '; background: transparent;'
        }
        if (!styles.includes('display')) {
          newStyles += '; display: block;'
        }
        if (!styles.includes('width')) {
          newStyles += '; width: 100%;'
        }
        if (!styles.includes('height')) {
          newStyles += '; height: 100%;'
        }
        return `style="${newStyles}"`
      })
    }
    
    // Also ensure SVG has width and height attributes and preserveAspectRatio
    // First, ensure preserveAspectRatio is set
    if (!modifiedSVG.includes('preserveAspectRatio=')) {
      modifiedSVG = modifiedSVG.replace(/<svg([^>]*)>/, (match) => {
        return match.replace('>', ' preserveAspectRatio="xMidYMid meet">')
      })
    }
    
    // Then ensure width and height are set
    if (!modifiedSVG.includes('width=')) {
      modifiedSVG = modifiedSVG.replace(/<svg([^>]*)>/, `<svg$1 width="100%" height="100%">`)
    }
    if (!modifiedSVG.includes('height=')) {
      modifiedSVG = modifiedSVG.replace(/<svg([^>]*)>/, (match) => {
        if (!match.includes('height=')) {
          return match.replace('>', ' height="100%">')
        }
        return match
      })
    }
    
    return modifiedSVG
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
      'Cairngorm': '#8B7355', 'Adularia': '#F5F5F5'
    }
    return colorMap[colorName] || '#6B6B6B'
  }

  // Gem color map - defined for logging access
    const gemColorMap = {
      // Precious Gems
      'Diamond': ['Colorless', 'Near Colorless', 'Faint Yellow', 'Light Yellow', 'Very Light Yellow', 'Fancy Yellow', 'Fancy Intense Yellow', 'Fancy Vivid Yellow', 'Fancy Pink', 'Fancy Intense Pink', 'Fancy Vivid Pink', 'Fancy Blue', 'Fancy Intense Blue', 'Fancy Vivid Blue', 'Fancy Green', 'Fancy Intense Green', 'Fancy Vivid Green', 'Fancy Brown', 'Fancy Intense Brown', 'Fancy Orange', 'Fancy Red', 'Fancy Purple', 'Fancy Deep', 'Fancy Dark', 'Fancy Light'],
      'Emerald': ['Green', 'Deep Green', 'Forest Green', 'Emerald Green', 'Mint Green', 'Light Green', 'Yellow-Green', 'Blue-Green', 'Dark Green', 'Medium Green', 'Pale Green', 'Vivid Green', 'Intense Green', 'Bluish Green', 'Yellowish Green', 'Grass Green', 'Leaf Green'],
      'Ruby': ['Red', 'Deep Red', 'Crimson', 'Scarlet', 'Pink-Red', 'Purple-Red', 'Orange-Red', 'Burgundy', 'Wine', 'Cherry', 'Blood Red', 'Vivid Red', 'Intense Red', 'Pigeon Blood Red', 'Burmese Red', 'Thai Red', 'Mozambique Red'],
      'Sapphire': ['Blue', 'Deep Blue', 'Royal Blue', 'Cornflower Blue', 'Sky Blue', 'Navy Blue', 'Midnight Blue', 'Steel Blue', 'Pink', 'Pink-Purple', 'Padparadscha', 'Yellow', 'Golden', 'Green', 'Teal', 'Purple', 'Violet', 'Orange', 'Peach', 'Colorless', 'White', 'Black', 'Grey', 'Bi-color', 'Parti-color'],
      'Alexandrite': ['Green', 'Red', 'Purple', 'Blue-Green', 'Color Change', 'Emerald Green', 'Raspberry Red', 'Amethyst Purple', 'Teal', 'Daylight Green', 'Incandescent Red', 'Trichroic'],
      'Benitoite': ['Blue', 'Deep Blue', 'Violet-Blue', 'Royal Blue', 'Indigo', 'Sapphire Blue', 'Light Blue'],
      'Jadeite': ['Green', 'Lavender', 'White', 'Yellow', 'Orange', 'Red', 'Black', 'Imperial Green', 'Apple Green', 'Moss Green', 'Spinach Green', 'Pale Green', 'Mauve', 'Pink', 'Blue', 'Grey'],
      'Paraiba Tourmaline': ['Blue', 'Green', 'Turquoise', 'Neon Blue', 'Neon Green', 'Electric Blue', 'Caribbean Blue', 'Teal', 'Blue-Green', 'Vivid Blue', 'Vivid Green'],
      'Red Spinel': ['Red', 'Pink', 'Purple', 'Orange-Red', 'Deep Red', 'Crimson', 'Scarlet', 'Ruby Red', 'Pink-Red', 'Pigeon Blood Red'],
      
      // Semi-Precious Gems
      'Agate': ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Black', 'White', 'Pink', 'Grey', 'Moss', 'Fire', 'Botswana', 'Blue Lace', 'Crazy Lace', 'Dendritic', 'Plume'],
      'Amazonite': ['Green', 'Blue-Green', 'Turquoise', 'Mint Green', 'Pale Green', 'Medium Green', 'Dark Green', 'Teal Green'],
      'Amethyst': ['Purple', 'Deep Purple', 'Violet', 'Lavender', 'Pink-Purple', 'Light Purple', 'Dark Purple', 'Plum', 'Mauve', 'Lilac', 'Rose de France', 'Siberian', 'Uruguayan'],
      'Ametrine': ['Purple', 'Yellow', 'Orange', 'Amber', 'Golden', 'Bicolor Purple-Yellow', 'Bicolor Orange-Purple'],
      'Apatite': ['Blue', 'Green', 'Yellow', 'Purple', 'Colorless', 'Pink', 'Brown', 'Violet', 'Teal', 'Neon Blue', 'Neon Green'],
      'Aquamarine': ['Blue', 'Light Blue', 'Green-Blue', 'Teal', 'Sky Blue', 'Sea Blue', 'Pale Blue', 'Medium Blue', 'Deep Blue', 'Greenish Blue', 'Bluish Green'],
      'Aventurine': ['Green', 'Blue', 'Orange', 'Brown', 'Grey', 'Red', 'Peach', 'Yellow', 'White'],
      'Bloodstone': ['Green', 'Dark Green', 'Forest Green', 'Red', 'Brown', 'Black', 'Spotted Green', 'Deep Green'],
      'Carnelian': ['Red', 'Orange', 'Brown', 'Pink', 'Deep Red', 'Light Red', 'Orange-Red', 'Brown-Red', 'Pink-Orange'],
      'Chalcedony': ['Blue', 'White', 'Grey', 'Brown', 'Pink', 'Purple', 'Green', 'Yellow', 'Orange', 'Red', 'Black', 'Colorless'],
      'Chrysoprase': ['Green', 'Apple Green', 'Yellow-Green', 'Light Green', 'Medium Green', 'Dark Green', 'Mint Green', 'Lime Green'],
      'Citrine': ['Yellow', 'Orange', 'Golden', 'Amber', 'Light Yellow', 'Dark Yellow', 'Orange-Yellow', 'Golden Yellow', 'Madeira', 'Pale Yellow'],
      'Fluorite': ['Purple', 'Blue', 'Green', 'Yellow', 'Pink', 'Colorless', 'Violet', 'Teal', 'Rainbow', 'Multi-color', 'Bi-color'],
      'Garnet': ['Red', 'Pink', 'Orange', 'Green', 'Purple', 'Yellow', 'Deep Red', 'Burgundy', 'Rhodolite', 'Tsavorite', 'Spessartine', 'Hessonite', 'Demantoid', 'Uvarovite', 'Color Change'],
      'Goshenite': ['Colorless', 'White', 'Light Blue', 'Near Colorless', 'Pale Blue', 'Crystal Clear'],
      'Heliodor': ['Yellow', 'Golden', 'Green-Yellow', 'Light Yellow', 'Golden Yellow', 'Lime Yellow', 'Canary Yellow'],
      'Hematite': ['Black', 'Grey', 'Silver', 'Red-Brown', 'Dark Grey', 'Metallic Grey', 'Steel Grey', 'Brown-Black'],
      'Howlite': ['White', 'Grey', 'Blue', 'Green', 'Pale Blue', 'Light Grey', 'Off-White'],
      'Iolite': ['Blue', 'Violet', 'Purple', 'Grey', 'Deep Blue', 'Indigo', 'Light Blue', 'Blue-Violet', 'Grey-Blue'],
      'Jasper': ['Red', 'Brown', 'Yellow', 'Green', 'Blue', 'Orange', 'Picture', 'Ocean', 'Polychrome', 'Leopard Skin', 'Mookaite', 'Bumblebee'],
      'Kyanite': ['Blue', 'Green', 'White', 'Grey', 'Deep Blue', 'Light Blue', 'Blue-Green', 'Colorless', 'Pink', 'Orange', 'Yellow'],
      'Labradorite': ['Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Iridescent', 'Spectrolite', 'Rainbow', 'Multi-color', 'Grey', 'Black'],
      'Lapis Lazuli': ['Blue', 'Deep Blue', 'Royal Blue', 'Purple-Blue', 'Azure', 'Ultramarine', 'Medium Blue', 'Light Blue', 'Veined Blue'],
      'Larimar': ['Blue', 'Turquoise', 'Green-Blue', 'White', 'Sky Blue', 'Caribbean Blue', 'Light Blue', 'White-Blue'],
      'Lepidolite': ['Pink', 'Purple', 'Lavender', 'White', 'Light Pink', 'Rose', 'Mauve', 'Pale Purple'],
      'Malachite': ['Green', 'Deep Green', 'Light Green', 'Turquoise', 'Forest Green', 'Emerald Green', 'Dark Green', 'Bright Green', 'Banded Green'],
      'Moonstone': ['White', 'Cream', 'Peach', 'Blue', 'Grey', 'Pink', 'Yellow', 'Green', 'Colorless', 'Adularia', 'Rainbow'],
      'Morganite': ['Pink', 'Peach', 'Salmon', 'Rose', 'Light Pink', 'Deep Pink', 'Blush', 'Apricot', 'Orange-Pink'],
      'Obsidian': ['Black', 'Brown', 'Grey', 'Green', 'Mahogany', 'Snowflake', 'Rainbow', 'Gold Sheen', 'Silver Sheen'],
      'Onyx': ['Black', 'White', 'Brown', 'Grey', 'Green', 'Red', 'Banded', 'Sardonyx'],
      'Opal': ['White', 'Blue', 'Green', 'Pink', 'Orange', 'Yellow', 'Red', 'Iridescent', 'Fire', 'Black', 'Boulder', 'Crystal', 'Water', 'Honey', 'Rainbow', 'Play of Color'],
      'Peridot': ['Green', 'Yellow-Green', 'Olive Green', 'Lime Green', 'Light Green', 'Medium Green', 'Deep Green', 'Brownish Green'],
      'Prehnite': ['Green', 'Yellow-Green', 'White', 'Light Green', 'Pale Green', 'Apple Green', 'Colorless'],
      'Pyrite': ['Gold', 'Yellow', 'Brass', 'Silver', 'Pale Yellow', 'Brass Yellow', 'Metallic Gold'],
      'Rainbow Moonstone': ['White', 'Blue', 'Peach', 'Iridescent', 'Pink', 'Yellow', 'Green', 'Rainbow', 'Multi-color'],
      'Rhodochrosite': ['Pink', 'Red', 'Orange', 'White', 'Rose', 'Salmon', 'Peach', 'Light Pink', 'Deep Pink', 'Banded Pink'],
      'Rhodonite': ['Pink', 'Red', 'Brown', 'Black', 'Rose', 'Deep Pink', 'Manganese Pink', 'Banded'],
      'Rose Quartz': ['Pink', 'Rose', 'Peach', 'Lavender', 'Light Pink', 'Deep Pink', 'Blush', 'Dusty Rose', 'Pale Pink'],
      'Serpentine': ['Green', 'Yellow-Green', 'Brown', 'Black', 'Dark Green', 'Light Green', 'Olive', 'Mottled Green'],
      'Smoky Quartz': ['Brown', 'Grey', 'Black', 'Yellow', 'Light Brown', 'Dark Brown', 'Champagne', 'Cairngorm'],
      'Sodalite': ['Blue', 'Deep Blue', 'Purple', 'White', 'Royal Blue', 'Navy Blue', 'Light Blue', 'Grey-Blue', 'Veined'],
      'Spinel': ['Red', 'Pink', 'Blue', 'Purple', 'Orange', 'Black', 'Deep Red', 'Cobalt Blue', 'Lavender', 'Grey', 'Colorless', 'Color Change'],
      'Sunstone': ['Orange', 'Red', 'Yellow', 'Pink', 'Peach', 'Gold', 'Copper', 'Tangerine', 'Aventurescent'],
      'Tanzanite': ['Blue', 'Purple', 'Violet', 'Indigo', 'Deep Blue', 'Royal Blue', 'Blue-Violet', 'Purple-Blue', 'Trichroic'],
      'Tiger\'s Eye': ['Brown', 'Gold', 'Yellow', 'Red', 'Golden Brown', 'Honey', 'Blue', 'Red', 'Chatoyant'],
      'Topaz': ['Blue', 'Pink', 'Yellow', 'Orange', 'Colorless', 'White', 'Golden', 'Sherry', 'Imperial', 'Champagne', 'Mystic', 'London Blue', 'Swiss Blue', 'Sky Blue'],
      'Tourmaline': ['Pink', 'Green', 'Blue', 'Yellow', 'Red', 'Black', 'Watermelon', 'Paraiba', 'Rubellite', 'Indicolite', 'Verdelite', 'Achroite', 'Bi-color', 'Multi-color'],
      'Turquoise': ['Blue', 'Green', 'Turquoise', 'Blue-Green', 'Sky Blue', 'Robin\'s Egg', 'Persian', 'Sleeping Beauty', 'Matrix', 'Spiderweb'],
      'Unakite': ['Green', 'Pink', 'White', 'Brown', 'Mottled Green-Pink', 'Epidote Green'],
      'Zircon': ['Blue', 'Yellow', 'Orange', 'Red', 'Green', 'Colorless', 'White', 'Brown', 'Golden', 'Honey', 'Starlight'],
      'Tsavorite': ['Green', 'Deep Green', 'Yellow-Green', 'Vivid Green', 'Intense Green', 'Forest Green', 'Emerald Green'],
      'Dumortierite': ['Blue', 'Purple', 'Violet', 'Grey', 'Deep Blue', 'Indigo', 'Blue-Violet'],
      
      // Organic Gems
      'Amber': ['Yellow', 'Orange', 'Brown', 'Honey', 'Golden', 'Light Yellow', 'Dark Yellow', 'Orange-Yellow', 'Reddish', 'Greenish', 'Cherry', 'Cognac', 'Butterscotch'],
      'Ammolite': ['Red', 'Green', 'Blue', 'Purple', 'Iridescent', 'Rainbow', 'Multi-color', 'Orange', 'Yellow', 'Turquoise', 'Violet'],
      'Bone': ['White', 'Cream', 'Beige', 'Brown', 'Off-White', 'Ivory', 'Tan', 'Light Brown', 'Grey'],
      'Bog Oak': ['Black', 'Brown', 'Dark Brown', 'Charcoal', 'Grey-Black', 'Deep Brown'],
      'Coral': ['Red', 'Pink', 'Orange', 'White', 'Deep Red', 'Rose', 'Salmon', 'Peach', 'Angel Skin', 'Oxblood', 'Black', 'Gold'],
      'Copal': ['Yellow', 'Orange', 'Brown', 'Amber', 'Golden', 'Honey', 'Light Yellow', 'Dark Brown'],
      'Fossilized Wood': ['Brown', 'Black', 'Grey', 'Tan', 'Dark Brown', 'Charcoal', 'Beige', 'Mottled'],
      'Ivory': ['White', 'Cream', 'Beige', 'Ivory', 'Off-White', 'Pale Yellow', 'Light Cream'],
      'Jet': ['Black', 'Dark Brown', 'Charcoal', 'Deep Black', 'Brown-Black'],
      'Mother-of-Pearl': ['White', 'Cream', 'Pink', 'Blue', 'Green', 'Iridescent', 'Rainbow', 'Silver', 'Gold', 'Lavender', 'Peach', 'Multi-color'],
      'Nacre': ['White', 'Cream', 'Pink', 'Blue', 'Green', 'Iridescent', 'Rainbow', 'Silver', 'Gold', 'Lavender', 'Peach', 'Multi-color'],
      'Odontolite': ['Blue', 'Turquoise', 'Green-Blue', 'Sky Blue', 'Light Blue', 'Teal', 'Caribbean Blue'],
      'Pearl': ['White', 'Cream', 'Pink', 'Black', 'Gold', 'Silver', 'Lavender', 'Peach', 'Champagne', 'Rose', 'Blue', 'Green', 'Purple', 'Grey', 'Tahitian', 'Akoya', 'South Sea', 'Freshwater'],
      'Shell': ['White', 'Cream', 'Pink', 'Orange', 'Brown', 'Yellow', 'Beige', 'Tan', 'Peach', 'Coral'],
      'Tortoiseshell': ['Brown', 'Amber', 'Yellow', 'Black', 'Golden Brown', 'Honey', 'Mottled Brown', 'Tiger Striped'],
      'Tagua Nut': ['White', 'Cream', 'Beige', 'Brown', 'Off-White', 'Ivory', 'Light Brown', 'Tan'],
      
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
      'Opalescent': ['White', 'Blue', 'Pink', 'Green', 'Iridescent'],
      'Chatoyant': ['Brown', 'Gold', 'Yellow', 'Green', 'Grey'],
      'Asterism': ['Red', 'Blue', 'Pink', 'Purple', 'Grey'],
      'Color Change': ['Blue', 'Green', 'Purple', 'Red', 'Color Change'],
      'Aventurescence': ['Gold', 'Brown', 'Green', 'Blue'],
      'Labradorescence': ['Blue', 'Green', 'Yellow', 'Orange', 'Iridescent'],
      'Play of Color': ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Iridescent']
    }
    
  // Get colors for specific gem
  const getGemColors = (gemName) => {
    return gemColorMap[gemName] || []
  }

  // Log all unique color names used across all gems
  useEffect(() => {
    const allColorNames = new Set()
    
    // Collect all colors from all gems (excluding Colour Families, Textures, and Special Effects)
    const gemOnlyColors = Object.entries(gemColorMap).filter(([key]) => {
      return !['Warm', 'Cool', 'Neutral', 'Pastel', 'Vibrant', 'Muted', 'Earth Tones', 'Jewel Tones', 'Metallic',
               'Smooth', 'Textured', 'Faceted', 'Matte', 'Semi-Gloss', 'Glossy', 'Polished', 'Rough',
               'Opalescent', 'Chatoyant', 'Asterism', 'Color Change', 'Aventurescence', 'Labradorescence', 'Play of Color'].includes(key)
    })
    
    gemOnlyColors.forEach(([gemName, colors]) => {
      colors.forEach(colorName => allColorNames.add(colorName))
    })
    
    // Convert to sorted array
    const sortedColorNames = Array.from(allColorNames).sort()
    
    console.log('=== ALL GEM COLOR NAMES ===')
    console.log(`Total unique color names: ${sortedColorNames.length}`)
    console.log('Color Names:', sortedColorNames)
    console.log('=====================')
    
    // Also log by gem for reference
    console.log('=== COLORS BY GEM ===')
    gemOnlyColors.forEach(([gemName, colors]) => {
      console.log(`${gemName}:`, colors)
    })
    console.log('=====================')
  }, []) // Run once on mount

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
    if (activeFeature === 'Crown' || activeFeature === 'Cascade') {
      // Crown and Cascade always show colors directly (no categories)
      return true
    }
    return false
  }

  // Save and restore colors when switching features/tabs
  useEffect(() => {
    // For Gems, use 'Gems:default' for all categories
    // For other features, use category-specific keys
    const featureKey = (activeFeature === 'Gems') 
      ? 'Gems:default' 
      : `${activeFeature}:${activeCategory || 'default'}`
    const previousFeature = previousFeatureRef.current
    const previousCategory = previousCategoryRef.current
    
    // Save current selection when feature changes (not when category changes)
    if (previousFeature && previousFeature !== activeFeature) {
      // For Gems, use 'Gems:default' for all categories
      const prevFeatureKey = (previousFeature === 'Gems') 
        ? 'Gems:default' 
        : `${previousFeature}:${previousCategory || 'default'}`
      if (configState.selectedColorName) {
        featureColorsRef.current[prevFeatureKey] = {
          colorName: configState.selectedColorName,
          gridItem: selectedGridItem,
          gem: selectedGem
        }
      }
    }
    
    // Restore selection for new feature (only when feature actually changes, not category)
    // For Crown and Cascade, don't restore from featureColorsRef - use Canvas's stored colors instead
    // This prevents overwriting the initial default colors
    if (previousFeature !== activeFeature && featureColorsRef.current[featureKey]) {
      const saved = featureColorsRef.current[featureKey]
      // Only restore if it's not Crown or Cascade (they use Canvas's lastAppliedColors)
      if (activeFeature !== 'Crown' && activeFeature !== 'Cascade') {
        if (saved.colorName) {
          updateConfigState({ selectedColorName: saved.colorName })
        }
        if (saved.gridItem !== null && saved.gridItem !== undefined) {
          setSelectedGridItem(saved.gridItem)
        }
        if (saved.gem && saved.gem.gemName) {
          setSelectedGem(saved.gem)
        }
      } else {
        // For Crown and Cascade, clear selectedColorName - Canvas will use stored color
        // This ensures the stored color (from initialization) is used, not overwritten
        updateConfigState({ selectedColorName: null })
        setSelectedGridItem(null)
      }
    } else if (previousFeature !== activeFeature && (activeFeature === 'Crown' || activeFeature === 'Cascade')) {
      // Switching to Crown or Cascade but no saved selection in featureColorsRef
      // Clear selectedColorName so Canvas uses its stored color
      updateConfigState({ selectedColorName: null })
      setSelectedGridItem(null)
    }
    
    // When category changes within the same feature, save current selection
    // For Gems, use a single key for all categories - one color applies to all gem categories
    if (previousFeature === activeFeature && previousCategory !== activeCategory) {
      // For Gems, save to 'Gems:default' (applies to all categories)
      // For other features, use category-specific keys
      const saveKey = (activeFeature === 'Gems') 
        ? 'Gems:default' 
        : `${activeFeature}:${previousCategory || 'default'}`
      
      // Save current selection
      if (configState.selectedColorName || selectedGridItem !== null || (selectedGem.gemName && activeFeature === 'Gems')) {
        featureColorsRef.current[saveKey] = {
          colorName: configState.selectedColorName,
          gridItem: selectedGridItem,
          gem: selectedGem
        }
      }
      
      // For Gems, restore the saved selection (same color applies to all categories)
      if (activeFeature === 'Gems') {
        const gemsKey = 'Gems:default'
        const saved = featureColorsRef.current[gemsKey]
        if (saved) {
          if (saved.gem && saved.gem.gemName) {
            setSelectedGem(saved.gem)
            if (saved.gridItem !== null && saved.gridItem !== undefined) {
              setSelectedGridItem(saved.gridItem)
            }
          }
          if (saved.colorName) {
            updateConfigState({ selectedColorName: saved.colorName })
          }
        } else {
          // No saved selection - clear UI
          setSelectedGridItem(null)
          setSelectedGem({ category: activeCategory, itemIndex: null, gemName: null })
          updateConfigState({ selectedColorName: null })
        }
      } else {
        // For other features, restore category-specific selection
        const restoreKey = `${activeFeature}:${activeCategory || 'default'}`
        const saved = featureColorsRef.current[restoreKey]
        if (saved && saved.gridItem !== null && saved.gridItem !== undefined) {
          setSelectedGridItem(saved.gridItem)
          if (saved.colorName) {
            updateConfigState({ selectedColorName: saved.colorName })
          }
        } else {
          // No saved selection - clear UI
          setSelectedGridItem(null)
          updateConfigState({ selectedColorName: null })
        }
      }
    }
    
    previousFeatureRef.current = activeFeature
    previousCategoryRef.current = activeCategory
  }, [activeFeature, activeCategory])
  
  // Sync selectedGridItem with selectedGem and selectedColorName
  // Only sync when there's an explicit selection - don't auto-select anything
  // Use a ref to track if we should sync (to avoid conflicts with user clicks)
  const shouldSyncGridItemRef = useRef(true)
  
  useEffect(() => {
    if (activeFeature === 'Gems' && shouldSyncGridItemRef.current) {
      if (shouldShowColors() && selectedGem.gemName) {
        // When showing colors, sync selectedGridItem with selectedColorName
        const selectedColorName = configState.selectedColorName
        if (selectedColorName) {
          // Get the colors for the selected gem
          const gemColors = getGemColors(selectedGem.gemName)
          // Get the organized content to find the correct index (same logic as in render)
          const isColorContent = shouldShowColors() && activeCategory !== 'Special Effects' && activeCategory !== 'Colour Families' && activeCategory !== 'Textures'
          const organizedContent = isColorContent ? organizeColorsByFamily(gemColors) : gemColors
          
          // Find the index in the organized content array
          const colorIndex = organizedContent.findIndex(item => {
            const itemName = typeof item === 'object' && item.color ? item.color : item
            return itemName === selectedColorName
          })
          
          if (colorIndex !== -1 && selectedGridItem !== colorIndex) {
            setSelectedGridItem(colorIndex)
          }
        }
      } else if (!shouldShowColors()) {
        // When showing gems, sync selectedGridItem with selectedGem.itemIndex
        // Only sync if itemIndex is explicitly set (not null)
        if (selectedGem.itemIndex !== null && selectedGem.itemIndex !== undefined) {
          if (selectedGridItem !== selectedGem.itemIndex) {
            setSelectedGridItem(selectedGem.itemIndex)
          }
        }
      }
    }
    // Re-enable syncing after a short delay to allow user clicks to complete
    const timeout = setTimeout(() => {
      shouldSyncGridItemRef.current = true
    }, 100)
    return () => clearTimeout(timeout)
  }, [configState.selectedColorName, selectedGem.gemName, selectedGem.itemIndex, activeFeature, activeCategory])
  
  // Disable syncing when user clicks on a card
  const handleCardClick = (callback) => {
    shouldSyncGridItemRef.current = false
    callback()
    setTimeout(() => {
      shouldSyncGridItemRef.current = true
    }, 200)
  }

  // Content items for each category
  const getCategoryContent = (category) => {
    // For Crown and Cascade features, show ALL gemstone varieties and colors directly (no category)
    // Check this FIRST before other conditions
    if (activeFeature === 'Crown' || activeFeature === 'Cascade' || category === 'Crown' || category === 'Cascade') {
      // Combine ALL gems from all categories plus comprehensive color palette
      const allGems = [
        // Precious Gems
        'Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Alexandrite', 'Benitoite', 'Jadeite', 'Paraiba Tourmaline', 'Red Spinel',
        // Semi-Precious Gems
        'Agate', 'Amazonite', 'Amethyst', 'Ametrine', 'Apatite', 'Aquamarine', 'Aventurine', 'Bloodstone', 'Carnelian',
        'Chalcedony', 'Chrysoprase', 'Citrine', 'Fluorite', 'Garnet', 'Goshenite', 'Heliodor', 'Hematite', 'Howlite',
        'Iolite', 'Jasper', 'Kyanite', 'Labradorite', 'Lapis Lazuli', 'Larimar', 'Lepidolite', 'Malachite', 'Moonstone',
        'Morganite', 'Obsidian', 'Onyx', 'Opal', 'Peridot', 'Prehnite', 'Pyrite', 'Rainbow Moonstone', 'Rhodochrosite',
        'Rhodonite', 'Rose Quartz', 'Serpentine', 'Smoky Quartz', 'Sodalite', 'Spinel', 'Sunstone', 'Tanzanite',
        'Tiger\'s Eye', 'Topaz', 'Tourmaline', 'Turquoise', 'Unakite', 'Zircon', 'Tsavorite', 'Dumortierite',
        // Organic Gems
        'Amber', 'Ammolite', 'Bone', 'Bog Oak', 'Coral', 'Copal', 'Fossilized Wood', 'Ivory', 'Jet', 'Mother-of-Pearl',
        'Nacre', 'Odontolite', 'Pearl', 'Shell', 'Tortoiseshell', 'Tagua Nut',
        // Man-Made
        'Synthetic Diamond', 'Synthetic Ruby', 'Synthetic Sapphire', 'Synthetic Spinel', 'Synthetic Quartz',
        'Synthetic Emerald', 'Synthetic Alexandrite', 'Synthetic Moissanite', 'Synthetic Aquamarine', 'Synthetic Topaz',
        'Synthetic Opal', 'Synthetic Jadeite', 'Synthetic Lapis Lazuli', 'Synthetic Turquoise', 'Synthetic Malachite',
        'Cubic Zirconia', 'Opalite', 'Swarovski Crystal', 'Bismuth Crystal', 'Glass Gemstones', 'Goldstone',
        // Extended Natural
        'Amblygonite', 'Andalusite', 'Axinite', 'Azurite', 'Austrophyllite', 'Beryl (RARE types)', 'Brookite', 'Cassiterite',
        'Charoite', 'Chrysocolla', 'Clinohumite', 'Diaspore (Zultanite)', 'Dioptase', 'Dravite', 'Ekanite', 'Enstatite',
        'Euclase', 'Fluorite (Collector-grade)', 'Gaspeite', 'Grandidierite', 'Hackmanite', 'Hemimorphite', 'Hessonite',
        'Idocrase (Vesuvianite)', 'Iolite (Uncommon grades)', 'Jeremejevite', 'Kornerupine', 'Kämmererite', 'Kudite',
        'Lazulite', 'Liddicoatite', 'Magnesite', 'Musgravite', 'Muscovite', 'Painite', 'Pectolite', 'Petalite', 'Pietersite',
        'Poudretteite', 'Prehnite (Collector grades)', 'Scapolite', 'Seraphinite', 'Serendibite', 'Shattuckite', 'Smithsonite',
        'Sphalerite', 'Sphene (Titanite)', 'Stichtite', 'Sugilite', 'Taaffeite', 'Thulite', 'Tremolite', 'Variscite',
        'Vesuvianite', 'Zoisite',
        // Comprehensive Color Palette
        'Black', 'White', 'Red', 'Deep Red', 'Crimson', 'Scarlet', 'Burgundy', 'Wine', 'Ruby Red', 'Pink-Red', 'Purple-Red',
        'Orange-Red', 'Cherry', 'Blood Red', 'Vivid Red', 'Intense Red', 'Pigeon Blood Red',
        'Blue', 'Deep Blue', 'Royal Blue', 'Cornflower Blue', 'Sky Blue', 'Navy Blue', 'Midnight Blue', 'Steel Blue',
        'Light Blue', 'Medium Blue', 'Sea Blue', 'Pale Blue', 'Sapphire Blue', 'Indigo', 'Teal', 'Turquoise', 'Cyan', 'Aqua',
        'Green', 'Deep Green', 'Forest Green', 'Emerald Green', 'Mint Green', 'Light Green', 'Yellow-Green', 'Blue-Green',
        'Dark Green', 'Medium Green', 'Pale Green', 'Vivid Green', 'Intense Green', 'Bluish Green', 'Yellowish Green',
        'Grass Green', 'Leaf Green', 'Apple Green', 'Moss Green', 'Spinach Green', 'Lime Green', 'Neon Green', 'Electric Green',
        'Yellow', 'Golden', 'Amber', 'Light Yellow', 'Dark Yellow', 'Orange-Yellow', 'Golden Yellow', 'Madeira', 'Pale Yellow',
        'Fancy Yellow', 'Faint Yellow', 'Very Light Yellow', 'Canary Yellow', 'Lemon Yellow', 'Butter Yellow',
        'Orange', 'Coral', 'Rust', 'Terracotta', 'Peach', 'Apricot', 'Tangerine', 'Burnt Orange', 'Pumpkin', 'Copper',
        'Pink', 'Rose', 'Blush', 'Fuchsia', 'Magenta', 'Salmon', 'Watermelon', 'Light Pink', 'Dusty Rose', 'Hot Pink',
        'Bubblegum', 'Fancy Pink', 'Fancy Intense Pink', 'Fancy Vivid Pink',
        'Purple', 'Lavender', 'Violet', 'Plum', 'Amethyst Purple', 'Deep Purple', 'Pink-Purple', 'Mauve', 'Lilac', 'Orchid',
        'Grape', 'Light Purple', 'Dark Purple', 'Rose de France',
        'Brown', 'Tan', 'Cognac', 'Beige', 'Taupe', 'Caramel', 'Chocolate', 'Coffee', 'Mocha', 'Chestnut', 'Mahogany',
        'Walnut', 'Dark Brown', 'Fancy Brown', 'Fancy Intense Brown',
        'Grey', 'Charcoal', 'Slate', 'Stone', 'Silver', 'Platinum', 'Pearl', 'Colorless', 'Near Colorless', 'Ash', 'Smoke',
        'Metallic', 'Gunmetal', 'Chrome', 'Nickel', 'Titanium', 'Brass', 'Palladium', 'Rhodium', 'Steel',
        'Gold', 'Rose Gold', 'White Gold', 'Platinum', 'Champagne Gold', '18K Gold', '14K Gold', '22K Gold', '24K Gold',
        'Sterling Silver', 'White Silver', 'Gunmetal Silver',
        // Special Colors
        'Colorless (D-F)', 'Near Colorless (G-J)', 'Faint Yellow (K-M)', 'Very Light Yellow (N-R)', 'Light Yellow (S-Z)',
        'Fancy Blue', 'Fancy Intense Blue', 'Fancy Vivid Blue', 'Fancy Green', 'Fancy Intense Green', 'Fancy Vivid Green',
        'Fancy Orange', 'Fancy Red', 'Fancy Purple', 'Fancy Deep', 'Fancy Dark', 'Fancy Light',
        'Bi-color', 'Parti-color', 'Color Change', 'Rainbow', 'Multi-color', 'Iridescent', 'Opalescent', 'Holographic'
      ]
      return allGems
    }
    
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
    if (activeFeature === 'Heel' && (!category || category === 'Heel')) {
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
          // Limited dark colors for insole/instrap
          'Black', 'Charcoal', 'Dark Brown', 'Navy', 'Burgundy', 'Grey', 'Brown'
        ]
      case 'Outsole/Outstrap':
        return [
          // Full comprehensive color palette for outsole
          // Reds
          'Red', 'Deep Red', 'Crimson', 'Scarlet', 'Burgundy', 'Wine', 'Ruby Red', 'Pink-Red', 'Purple-Red', 'Orange-Red', 'Cherry', 'Brick', 'Maroon', 'Rosewood',
          // Blues  
          'Blue', 'Deep Blue', 'Royal Blue', 'Navy', 'Midnight', 'Sky', 'Powder', 'Cornflower Blue', 'Light Blue', 'Teal', 'Turquoise', 'Sapphire Blue', 'Indigo', 'Cyan', 'Aqua', 'Steel Blue', 'Slate Blue', 'Periwinkle',
          // Greens
          'Green', 'Deep Green', 'Forest Green', 'Emerald Green', 'Olive Green', 'Mint Green', 'Light Green', 'Yellow-Green', 'Neon Green', 'Sage', 'Mint', 'Jade', 'Lime', 'Apple Green', 'Sea Green', 'Hunter Green',
          // Yellows/Golds
          'Yellow', 'Gold', 'Amber', 'Mustard', 'Champagne', 'Golden', 'Honey', 'Caramel', 'Fancy Yellow', 'Light Yellow', 'Faint Yellow', 'Butter', 'Lemon', 'Canary',
          // Oranges
          'Orange', 'Coral', 'Rust', 'Terracotta', 'Peach', 'Apricot', 'Tangerine', 'Burnt Orange', 'Pumpkin', 'Copper', 'Bronze',
          // Pinks
          'Pink', 'Rose', 'Blush', 'Fuchsia', 'Magenta', 'Salmon', 'Peach', 'Watermelon', 'Light Pink', 'Dusty Rose', 'Rose Gold', 'Hot Pink', 'Bubblegum',
          // Purples
          'Purple', 'Lavender', 'Violet', 'Plum', 'Amethyst Purple', 'Deep Purple', 'Pink-Purple', 'Mauve', 'Lilac', 'Orchid', 'Grape',
          // Browns/Tans
          'Brown', 'Tan', 'Cognac', 'Beige', 'Taupe', 'Caramel', 'Chocolate', 'Coffee', 'Mocha', 'Chestnut', 'Mahogany', 'Walnut', 'Dark Brown',
          // Neutrals
          'Black', 'White', 'Grey', 'Charcoal', 'Slate', 'Stone', 'Ivory', 'Cream', 'Silver', 'Platinum', 'Pearl', 'Colorless', 'Near Colorless', 'Ash', 'Smoke',
          // Metallics
          'Metallic', 'Gunmetal', 'Chrome', 'Nickel', 'Titanium', 'Brass', 'Palladium', 'Rhodium', 'Steel', 'Holographic', 'Iridescent', 'Opalescent',
          // Special
          'Natural', 'Rainbow'
        ]
      // Form - Heel (materials/metals - no category, direct content)
      case 'Heel':
        return [
          // Metal materials for heel
          'Gold', 'Rose Gold', 'Platinum', 'Silver', 'Titanium',
          'Brass', 'Bronze', 'Copper', 'Chrome', 'Nickel',
          'Palladium', 'Rhodium', 'Gunmetal', 'Steel'
        ]
      // Crown categories - show gemstone colors
      case 'Style':
        return ['Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Amethyst', 'Topaz', 'Pearl', 'Opal', 'Garnet', 'Aquamarine', 'Peridot', 'Citrine', 'Tanzanite', 'Tourmaline']
      case 'Height':
        return ['Low', 'Medium', 'High', 'Extra High']
      case 'Width':
        return ['Narrow', 'Standard', 'Wide', 'Extra Wide']
      // Cascade categories - show gemstone colors and patterns
      case 'Pattern':
        return ['Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Amethyst', 'Topaz', 'Pearl', 'Opal', 'Garnet', 'Aquamarine', 'Peridot', 'Citrine', 'Tanzanite', 'Tourmaline']
      case 'Flow':
        return ['Smooth', 'Graduated', 'Cascading', 'Layered', 'Spiral', 'Wave']
      case 'Direction':
        return ['Vertical', 'Horizontal', 'Diagonal', 'Radial', 'Circular']
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
        return [] // No categories, show colors directly
      case 'Cascade':
        return [] // No categories, show colors directly
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
    // Save current selection before switching
    const currentFeatureKey = `${activeFeature}:${activeCategory || 'default'}`
    if (configState.selectedColorName) {
      featureColorsRef.current[currentFeatureKey] = {
        colorName: configState.selectedColorName,
        gridItem: selectedGridItem,
        gem: selectedGem
      }
    }
    
    setActiveFeature(featureId)
    setCategoryStartIndex(0)
    // Don't clear selectedGridItem or selectedColorName - they will be restored by useEffect
    setSelectedMaterial(null)
    setShowColorPicker(false)
    // Don't clear selectedGem - it will be restored if it exists for this feature
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
          return [] // No categories, show colors directly
        case 'Cascade':
          return [] // No categories, show colors directly
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
    // Save current selection before switching
    // For Gems, use 'Gems:default' for all categories
    const currentFeatureKey = (activeFeature === 'Gems') 
      ? 'Gems:default' 
      : `${activeFeature}:${activeCategory || 'default'}`
    if (configState.selectedColorName) {
      featureColorsRef.current[currentFeatureKey] = {
        colorName: configState.selectedColorName,
        gridItem: selectedGridItem,
        gem: selectedGem
      }
    }
    
    setActiveTab(tab)
    setCategoryStartIndex(0)
    // Don't clear selectedGridItem or selectedColorName - they will be restored by useEffect
    setSelectedMaterial(null)
    setShowColorPicker(false)
    if (tab === 'Form') {
      setActiveFeature('Sole/Strap')
      setActiveCategory('Insole/Instrap/Micro Hardware')
    } else {
      // When switching to Adornment tab, preserve the current category if already on Gems
      // Otherwise, default to 'Precious'
      if (activeFeature === 'Gems' && activeCategory) {
        // Already on Gems - keep current category
        setActiveFeature('Gems')
        setActiveCategory(activeCategory)
      } else {
        // Switching to Gems from another feature - default to 'Precious'
      setActiveFeature('Gems')
      setActiveCategory('Precious')
      }
    }
  }

  // Reset when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    // Don't clear selectedGridItem here - let the useEffect handle restoration
    // The useEffect will restore the saved selection if it exists
    setSelectedMaterial(null)
    setShowColorPicker(false)
    // Don't clear gem selection here - let the useEffect handle restoration
    // The useEffect will restore the saved gem selection if it exists
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
        {/* Both Form and Adornment: Features as tabs (like main tabs) with icons */}
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
            <div className={`content-grid ${((shouldShowColors() && (activeFeature === 'Gems' || activeFeature === 'Material & Structure' || activeFeature === 'Heel' || activeFeature === 'Crown' || activeFeature === 'Cascade')) || (activeFeature === 'Sole/Strap' && ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap'].includes(activeCategory))) ? 'color-grid' : ''}`}>
              {(() => {
                const content = getCategoryContent(activeFeature === 'Color' ? 'Color' : (activeFeature === 'Heel' ? 'Heel' : (activeFeature === 'Crown' ? 'Crown' : (activeFeature === 'Cascade' ? 'Cascade' : (activeFeature === 'Gems' && shouldShowColors() ? 'Gems' : activeCategory)))))
                const isColorContent = (shouldShowColors() || (activeFeature === 'Sole/Strap' && ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap'].includes(activeCategory)) || activeFeature === 'Crown' || activeFeature === 'Cascade') && activeCategory !== 'Special Effects' && activeCategory !== 'Colour Families' && activeCategory !== 'Textures'
                const organizedContent = isColorContent ? organizeColorsByFamily(content) : content
                return organizedContent
              })().map((item, index) => {
                // Handle organized color items (objects) vs regular items (strings)
                const itemName = typeof item === 'object' && item.color ? item.color : item
                const isFamilyStart = typeof item === 'object' && item.isFamilyStart ? item.isFamilyStart : false
                const isGem = activeFeature === 'Gems' && ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural'].includes(activeCategory)
                const isSpecialEffect = activeFeature === 'Gems' && activeCategory === 'Special Effects'
                const gemImagePath = (isGem || isSpecialEffect) ? getGemImagePath(itemName) : null
                const isSoleStrap = activeFeature === 'Sole/Strap' && ['Insole/Instrap/Micro Hardware', 'Outsole/Outstrap'].includes(activeCategory)
                // Special Effects and Colour Families should display as regular cards, not color swatches
                const isSpecialCategory = activeCategory === 'Special Effects' || activeCategory === 'Colour Families' || activeCategory === 'Textures'
                const isColorDisplay = (shouldShowColors() || isSoleStrap) && !isSpecialCategory
                // For Color feature, show colors as cards (not small swatches)
                const isColorFeature = activeFeature === 'Color' && shouldShowColors()
                
                return (
                  <div
                    key={index}
                    className={`grid-item ${(selectedGridItem === index) ? 'active' : ''} ${(isGem || isSpecialEffect) ? 'gem-item' : ''} ${isFamilyStart ? 'family-start' : ''}`}
                    onClick={() => {
                      if (activeFeature === 'Gems' && !shouldShowColors() && !isSpecialCategory) {
                        // Gem selection - store gem name and show colors (but not for Special Effects, Colour Families, or Textures)
                        const gemName = itemName
                        handleCardClick(() => {
                        setSelectedGem({ category: activeCategory, itemIndex: index, gemName: gemName })
                        setSelectedGridItem(index)
                        // Clear previous color selection when selecting a new gem
                        updateConfigState({ selectedColorName: null })
                        })
                      } else if (activeFeature === 'Gems' && shouldShowColors()) {
                        // Color selection for gem
                        // For Gems, use a single key for all categories - one color applies to all gem categories
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature - use 'Gems:default' for all categories
                          const featureKey = 'Gems:default'
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        // Here you would apply the color to the selected gem
                        })
                      } else if (activeFeature === 'Color' && shouldShowColors()) {
                        // Color selection for gem
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        // Here you would apply the color to the selected gem
                        })
                      } else if (activeFeature === 'Material & Structure' && shouldShowColors()) {
                        // Color selection for material
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        // Here you would apply the color to the selected material
                        })
                      } else if (activeFeature === 'Material & Structure' && ['Base', 'Finish', 'Textiles'].includes(activeCategory)) {
                        // Material/texture selection - show color picker
                        handleCardClick(() => {
                        setSelectedMaterial(itemName)
                        setSelectedGridItem(index)
                        setShowColorPicker(true)
                        })
                      } else if (activeFeature === 'Heel' && !shouldShowColors()) {
                        // Heel material selection - show color picker
                        handleCardClick(() => {
                        setSelectedMaterial(itemName)
                        setSelectedGridItem(index)
                        setShowColorPicker(true)
                        })
                      } else if (activeFeature === 'Heel' && shouldShowColors()) {
                        // Color selection for Heel material
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        // Here you would apply the color to the selected material
                        })
                      } else if (isSoleStrap) {
                        // Sole/Strap color selection
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        })
                      } else if (activeFeature === 'Crown' || activeFeature === 'Cascade') {
                        // Crown and Cascade - treat selections as gemstone materials/colors
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        })
                      } else {
                        // Default: apply selection as color/material
                        handleCardClick(() => {
                        setSelectedGridItem(index)
                        updateConfigState({ selectedColorName: itemName })
                          // Save this selection for this feature
                          const featureKey = `${activeFeature}:${activeCategory || 'default'}`
                          featureColorsRef.current[featureKey] = {
                            colorName: itemName,
                            gridItem: index,
                            gem: selectedGem
                          }
                        })
                      }
                    }}
                    style={
                      isColorDisplay && !(activeFeature === 'Gems' && shouldShowColors()) ? {
                        // Show color swatch for color items (but not for gem colors - they use SVG)
                        background: `linear-gradient(135deg, ${activeFeature === 'Heel' ? getMetalColorHex(itemName) : getColorHex(itemName)} 0%, ${activeFeature === 'Heel' ? getMetalColorHex(itemName) : getColorHex(itemName)} 100%)`,
                        backgroundSize: 'cover'
                      } : {}
                    }
                  >
                    {isColorDisplay ? (
                      <>
                        {/* Use SVG with modified fill colors for all gem colors */}
                        {activeFeature === 'Gems' && shouldShowColors() ? (
                          <div className="color-swatch-container" style={{ background: 'transparent', position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div 
                              className="color-swatch-3d"
                              style={{ 
                                width: '100%', 
                                height: '100%', 
                                borderRadius: '8px',
                                background: 'transparent',
                                position: 'relative',
                                overflow: 'visible',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                                minHeight: '100%',
                                minWidth: '100%'
                              }}
                            >
                              {/* Render modified SVG with fill colors */}
                              {getModifiedSVG(itemName) ? (
                                <div
                                  dangerouslySetInnerHTML={{ __html: getModifiedSVG(itemName) }}
                                  className="gem-color-svg"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    zIndex: 3,
                                    pointerEvents: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 1,
                                    backgroundColor: 'transparent',
                                    filter: (selectedGridItem !== null && selectedGridItem !== undefined && selectedGridItem === index)
                                      ? 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 16px rgba(255, 254, 136, 0.4))'
                                      : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                                  }}
                                />
                              ) : (
                                // Fallback: show solid color if SVG not loaded
                                <div style={{
                                  width: '100%',
                                  height: '100%',
                                  backgroundColor: getColorHex(itemName) || '#000000',
                                  borderRadius: '8px',
                                  zIndex: 3,
                                  opacity: 1,
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0
                                }} />
                              )}
                            </div>
                          </div>
                        ) : (
                        <div className="color-swatch-container">
                      <div 
                        className="color-swatch-3d"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          borderRadius: activeFeature === 'Color' ? '10px' : '8px',
                              backgroundColor: activeFeature === 'Heel' ? getMetalColorHex(itemName) : getColorHex(itemName),
                                border: (selectedGridItem !== null && selectedGridItem !== undefined && selectedGridItem === index) ? '2px solid #fffe88' : 'none',
                                boxShadow: (selectedGridItem !== null && selectedGridItem !== undefined && selectedGridItem === index)
                            ? '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 254, 136, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                      ></div>
                        </div>
                        )}
                        <span className="color-name-overlay">{itemName}</span>
                      </>
                    ) : (isGem || isSpecialEffect) && gemImagePath ? (
                      <div className="gem-image-container">
                        <img 
                          src={gemImagePath} 
                          alt={itemName}
                          className="gem-image"
                          loading="lazy"
                          onError={(e) => {
                            // Try alternative image sources if first fails
                            const altUrls = getGemImageFallbacks(itemName)
                            
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
                        <span className="gem-name-overlay">{itemName}</span>
                        <span className="gem-name-fallback" style={{ display: 'none' }}>{itemName}</span>
                      </div>
                    ) : (
                      itemName
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
