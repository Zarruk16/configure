# Model File Deployment Guide

The `render.glb` file (266MB) is too large for GitHub and Vercel's standard deployment. Here are solutions:

## Option 1: Host on CDN (Recommended)

1. Upload `render.glb` to a CDN service:
   - **Cloudinary**: https://cloudinary.com (free tier available)
   - **AWS S3 + CloudFront**: https://aws.amazon.com/s3/
   - **Google Cloud Storage**: https://cloud.google.com/storage
   - **Vercel Blob Storage**: https://vercel.com/docs/storage/vercel-blob

2. Set the environment variable in Vercel:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add: `VITE_MODEL_URL` = `https://your-cdn-url.com/render.glb`

3. Redeploy your application

## Option 2: Use Git LFS (Git Large File Storage)

1. Install Git LFS:
   ```bash
   git lfs install
   ```

2. Track the model file:
   ```bash
   git lfs track "public/assets/render.glb"
   ```

3. Remove from .gitignore:
   - Remove `public/assets/*.glb` from `.gitignore`

4. Commit and push:
   ```bash
   git add .gitattributes public/assets/render.glb
   git commit -m "Add model file with Git LFS"
   git push
   ```

## Option 3: Compress the Model

Try compressing the GLB file using:
- **gltf-pipeline**: `npx gltf-pipeline -i render.glb -o render-compressed.glb -d`
- **gltf-transform**: `npx @gltf-transform/cli optimize render.glb render-compressed.glb`

If compressed file is under 100MB, you can commit it directly.

## Current Setup

The code now supports both local and CDN-hosted models via the `VITE_MODEL_URL` environment variable.

