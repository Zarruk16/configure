import React, { useState, useEffect, useRef } from 'react'
import './ConfigurationPanel.css'

// SVG Icons Components
const GemsIcon = ({ isActive }) => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  const [selectedGem, setSelectedGem] = useState({ category: 'Precious', itemIndex: null }) // Track selected gem for Color feature

  const tabs = ['Adornment', 'Form & Fit', 'Experience']
  
  const features = [
    { id: 'Gems', icon: GemsIcon },
    { id: 'Cuts', icon: CutsIcon },
    { id: 'Color', icon: ColorIcon },
    { id: 'Crown', icon: CrownIcon },
    { id: 'Cascade', icon: CascadeIcon }
  ]

  // Get color content based on selected gem
  const getColorContent = (gemCategory) => {
    // Map gem categories to their color options
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

  // Content items for each category
  const getCategoryContent = (category) => {
    // If Color feature is active, show colors based on selected gem
    if (activeFeature === 'Color') {
      return getColorContent(selectedGem.category)
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
        return Array.from({ length: 8 }, (_, i) => `Extended ${i + 1}`)
      case 'Colour Families':
        return Array.from({ length: 10 }, (_, i) => `Colour ${i + 1}`)
      case 'Textures':
        return Array.from({ length: 7 }, (_, i) => `Texture ${i + 1}`)
      case 'Special Effects':
        return Array.from({ length: 5 }, (_, i) => `Special ${i + 1}`)
      // Cuts categories
      case 'Cuts':
        return Array.from({ length: 12 }, (_, i) => `Cut ${i + 1}`)
      case 'Size':
        return Array.from({ length: 8 }, (_, i) => `Size ${i + 1}`)
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
      default:
        return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
    }
  }

  const allCategories = getCategories()
  // For Gems and Cuts, ensure we show the last 4 buttons when at the end
  const getVisibleCategories = () => {
    if (activeFeature !== 'Gems' && activeFeature !== 'Cuts') return allCategories
    const maxStart = Math.max(0, allCategories.length - categoriesPerView)
    const adjustedStart = Math.min(categoryStartIndex, maxStart)
    return allCategories.slice(adjustedStart, adjustedStart + categoriesPerView)
  }
  const categories = getVisibleCategories()
  const hasMoreCategories = (activeFeature === 'Gems' || activeFeature === 'Cuts') && categoryStartIndex < (allCategories.length - categoriesPerView)
  const hasPreviousCategories = (activeFeature === 'Gems' || activeFeature === 'Cuts') && categoryStartIndex > 0

  // Reset category start index when feature changes
  const handleFeatureChange = (featureId) => {
    setActiveFeature(featureId)
    setCategoryStartIndex(0)
    setSelectedGridItem(null)
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
        default:
          return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
      }
    }
    const newCategories = getNewCategories()
    setActiveCategory(newCategories[0])
    // If switching to Color feature and no gem is selected, default to Precious
    if (featureId === 'Color' && !selectedGem.category) {
      setSelectedGem({ category: 'Precious', itemIndex: null })
    }
  }

  // Reset when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setSelectedGridItem(null)
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
    if (activeFeature === 'Gems' || activeFeature === 'Cuts') {
      const maxStart = Math.max(0, allCategories.length - categoriesPerView)
      setCategoryStartIndex(prev => Math.min(prev + 1, maxStart))
    }
  }

  const handleShowPreviousCategories = () => {
    if ((activeFeature === 'Gems' || activeFeature === 'Cuts') && categoryStartIndex > 0) {
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
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Feature Selection */}
      <div className="feature-selection">
        {features.slice(0, 3).map((feature) => {
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
            {features.slice(3).map((feature) => {
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
      </div>

      {/* Sub-Category Categories */}
      {activeFeature !== 'Color' && (
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
            <div className="content-grid">
              {getCategoryContent(activeFeature === 'Color' ? 'Color' : activeCategory).map((item, index) => (
                <div
                  key={index}
                  className={`grid-item ${selectedGridItem === index ? 'active' : ''}`}
                  onClick={() => {
                    if (activeFeature === 'Gems') {
                      // Track gem selection for Color feature
                      setSelectedGem({ category: activeCategory, itemIndex: index })
                      setSelectedGridItem(index)
                    } else {
                      setSelectedGridItem(index)
                    }
                  }}
                >
                  {item}
                </div>
              ))}
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
