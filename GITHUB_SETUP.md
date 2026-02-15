# Quick Start: Push to GitHub

## 5-Minute Setup

### Step 1: Create GitHub Repo
Go to [github.com/new](https://github.com/new) and create a new repository called `ahnya-first-website`

### Step 2: Connect Local to GitHub
```bash
cd /Users/ahmadrichardson/Desktop/ahnya-first-website

git remote add origin https://github.com/YOUR_USERNAME/ahnya-first-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 3: Share the Link
Your repo is now at:
```
https://github.com/YOUR_USERNAME/ahnya-first-website
```

---

## Daily Workflow

After making changes:

```bash
git add .
git commit -m "Describe your changes here"
git push
```

That's it! Changes are live on GitHub.

---

## Optional: Live Preview (GitHub Pages)

1. Go to your repo on GitHub
2. Settings → Pages
3. Select "Deploy from a branch" → main
4. Save
5. Your site is live at: `https://YOUR_USERNAME.github.io/ahnya-first-website`

---

## Need Help?

- **Forgot to commit?** Run `git status` to see changes
- **Want to undo?** Run `git log --oneline` to see history
- **Push failed?** Make sure you replaced `YOUR_USERNAME` correctly

**Share your GitHub link with anyone to let them view or fork your project!**
