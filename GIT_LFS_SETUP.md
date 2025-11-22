# Git LFS Setup for render.glb

The `render.glb` file (266MB) exceeds GitHub's 100MB limit. To commit it, you need to use Git LFS (Large File Storage).

## Installation

### macOS
```bash
brew install git-lfs
```

### Windows
Download from: https://git-lfs.github.com/

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install git-lfs

# Fedora
sudo dnf install git-lfs
```

## Setup Steps

1. **Install Git LFS** (see above)

2. **Initialize Git LFS in your repository:**
   ```bash
   git lfs install
   ```

3. **Track the render.glb file:**
   ```bash
   git lfs track "public/assets/render.glb"
   ```

4. **Add the files:**
   ```bash
   git add .gitattributes
   git add public/assets/render.glb
   git commit -m "Add render.glb with Git LFS"
   git push
   ```

5. **Verify it's working:**
   ```bash
   git lfs ls-files
   ```
   You should see `render.glb` listed.

## Alternative: Host Externally

If you prefer not to use Git LFS, you can:

1. Upload `render.glb` to a CDN (Cloudinary, AWS S3, etc.)
2. Set environment variable in Vercel: `VITE_MODEL_URL=https://your-cdn-url.com/render.glb`
3. The code will automatically use the external URL

## Current Status

- Code is configured to use `/assets/render.glb`
- `.gitattributes` is set up for Git LFS tracking
- You need to install Git LFS and run the setup commands above

