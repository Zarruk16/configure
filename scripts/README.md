# Gem Image Download Script

This script downloads gemstone images from GemSelect.com for use in the configurator.

## Usage

1. Make sure you have Node.js installed
2. Run the script:
   ```bash
   node scripts/download-gem-images.js
   ```

## How it works

The script:
- Downloads gem images from GemSelect.com
- Saves them to `public/assets/gems/` directory
- Uses normalized gem names to match file naming conventions
- Includes error handling and fallbacks

## Manual Image Addition

If automatic download fails for some gems, you can manually:

1. Visit [GemSelect Gemstone List](https://www.gemselect.com/other-info/gemstone-list.php)
2. Click on a gemstone to view its details
3. Right-click on the gem image and "Save image as..."
4. Save it to `public/assets/gems/` with the normalized name (e.g., `diamond.jpg`, `ruby.jpg`)

## Image Naming Convention

Images should be named using lowercase with hyphens:
- `Diamond` → `diamond.jpg`
- `Paraiba Tourmaline` → `paraiba-tourmaline.jpg`
- `Tiger's Eye` → `tigers-eye.jpg`
- `Mother-of-Pearl` → `mother-of-pearl.jpg`

## Notes

- The script includes delays between downloads to avoid rate limiting
- Some gems may not have images available on GemSelect
- Failed downloads will be logged but won't stop the script
- Images that fail to load will fallback to showing the gem name as text

