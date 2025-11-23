# Metal Texture Setup for Heel Material

The heel material now supports real metal texture maps for enhanced realism. This guide explains how to download and set up the textures.

## Required Texture Maps

You need the following texture maps (PBR - Physically Based Rendering):

1. **Base Color / Albedo** (`metal_basecolor.jpg` or `.png`)
   - The base color of the metal
   - Should be in sRGB color space

2. **Normal Map** (`metal_normal.jpg` or `.png`)
   - Adds surface detail and depth
   - Should be in linear color space

3. **Roughness Map** (`metal_roughness.jpg` or `.png`)
   - Controls surface roughness (white = rough, black = smooth)
   - Should be in linear color space

4. **Metallic Map** (`metal_metallic.jpg` or `.png`)
   - Controls metalness (white = metallic, black = non-metallic)
   - Should be in linear color space

## Where to Download Free Metal Textures

### Recommended Sources:

1. **FreePBR.com** - https://freepbr.com/c/base-metals/
   - High-quality PBR metal textures
   - Includes all necessary maps
   - 2048×2048 resolution

2. **TextureCan** - https://www.texturecan.com/category/Metal/3/
   - Diverse collection of metal textures
   - Includes SBSAR files for customization

3. **3D-Model.org** - https://3d-model.org/textures-materials/metal/
   - Seamless metal textures
   - 4K to 8K resolutions available

4. **ArtStation Marketplace** - https://www.artstation.com/marketplace
   - Search for "free PBR metal textures"
   - Professional quality textures

5. **CC0 Textures** - https://cc0textures.com/
   - Free, high-quality PBR textures
   - All textures are CC0 (public domain)

## Installation Steps

1. **Create the texture directory:**
   ```bash
   mkdir -p public/assets/textures/metal
   ```

2. **Download texture maps** from one of the sources above. Look for:
   - Polished gold/metal textures
   - Precious metal textures
   - High-quality metal surfaces

3. **Rename the files** to match the expected names:
   - Base color → `metal_basecolor.jpg`
   - Normal map → `metal_normal.jpg`
   - Roughness map → `metal_roughness.jpg`
   - Metallic map → `metal_metallic.jpg`

4. **Place the files** in `public/assets/textures/metal/`

5. **File format:** JPG or PNG (JPG recommended for smaller file size)

## File Structure

```
public/
  assets/
    textures/
      metal/
        metal_basecolor.jpg
        metal_normal.jpg
        metal_roughness.jpg
        metal_metallic.jpg
```

## How It Works

- The code automatically loads these textures when available
- If textures are not found, it falls back to procedural materials (the current realistic material setup)
- Textures are applied with 2x2 tiling for better coverage
- The textures enhance the existing material properties (metalness, roughness, etc.)

## Texture Requirements

- **Resolution:** 1024×1024 minimum, 2048×2048 recommended
- **Format:** JPG or PNG
- **Color Space:** 
  - Base color: sRGB
  - Normal, Roughness, Metallic: Linear/Grayscale
- **Naming:** Must match exactly (case-sensitive)

## Testing

After adding the textures:
1. Restart your development server
2. Check the browser console for any loading errors
3. The heel should now show enhanced surface detail and realism
4. If textures don't load, check the console for error messages

## Notes

- The procedural material (without textures) is already very realistic
- Textures add extra surface detail and variation
- You can mix and match textures from different sources
- Make sure all texture maps are from the same source set for consistency

