# Studio210

A modern, responsive website for Studio210 hair salon built with SvelteKit.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## EmailJS Configuration

The contact form uses EmailJS to send emails directly from the browser. To set it up:

### 1. Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Set Up Email Service

1. Go to the **Email Services** page in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to the **Email Templates** page
2. Click **Create New Template**
3. Use the following template variables in your email template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{message}}` - The message content
4. Example template:

```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

5. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `AbCdEfGh123456789`)

### 5. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```sh
   cp .env.example .env
   ```

2. Edit `.env` and add your EmailJS credentials:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

3. Restart your development server to load the new environment variables

### Testing

Once configured, test the contact form by:
1. Navigate to the `/contact` page
2. Fill out and submit the form
3. Check your configured email inbox for the message
4. You should also see the submission in your EmailJS dashboard under **Logs**

### Notes

- The free EmailJS plan includes 200 emails/month
- Environment variables are loaded at build time in production
- For production deployments, set these environment variables in your hosting platform (Vercel, Netlify, Cloudflare Pages, etc.)

## Deploying to Cloudflare Pages

This project is configured to deploy to Cloudflare Pages. You have two deployment options:

### Option 1: Automatic Deployments via GitHub (Recommended)

1. **Push your code to GitHub**
   ```sh
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** > **Pages**
   - Click **Create a project** > **Connect to Git**
   - Select your GitHub repository
   - Configure the build settings:
     - **Production branch**: `main`
     - **Build command**: `npm run build` (or `bun run build` if Bun is available)
     - **Build output directory**: `.svelte-kit/cloudflare`
     - **Deployment command**: Leave empty (or set to `echo "Deployed"` if required)
     - **Framework preset**: Select "SvelteKit" (it will auto-detect)
     - **Important**: Cloudflare Pages automatically deploys the build output - no wrangler commands needed

3. **Add Environment Variables**
   - Go to your Pages project settings
   - Navigate to **Settings** > **Environment variables**
   - Add your EmailJS variables:
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
   - Click **Save**

4. **Deploy**
   - Cloudflare will automatically build and deploy on every push to your main branch
   - Preview deployments are created for pull requests

### Option 2: Manual Deployment via CLI

1. **Install Wrangler** (if not already installed)
   ```sh
   npm install -g wrangler
   # or
   bun add -g wrangler
   ```

2. **Login to Cloudflare**
   ```sh
   wrangler login
   ```

3. **Build and Deploy**
   ```sh
   # Deploy to preview
   bun run deploy

   # Deploy to production
   bun run deploy:production
   ```

4. **First-time deployment**
   - Wrangler will prompt you to create a new Pages project
   - Enter a project name (e.g., `studio210`)
   - Subsequent deployments will update the existing project

### Custom Domain Setup

1. **Add your domain in Cloudflare Pages**
   - Go to your Pages project
   - Navigate to **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain: `studio210hair.co.uk`
   - Follow the DNS configuration instructions

2. **Configure DNS**
   - If your domain is already on Cloudflare, it will automatically configure DNS
   - If not, add the CNAME record provided

### Local Preview with Pages Runtime

To test your app with the Cloudflare Pages runtime locally:

```sh
# Build the app first
bun run build

# Run with Pages dev server
bun run pages:dev
```

This uses the actual Cloudflare Workers runtime, which is more accurate than the standard Vite preview.

### Environment Variables

Remember to set all environment variables in the Cloudflare Pages dashboard under **Settings** > **Environment variables**. You can set different values for:
- **Production**: Used for production deployments
- **Preview**: Used for preview deployments (PRs, non-production branches)

### Deployment Features

Cloudflare Pages provides:
- **Automatic deployments** from Git branches
- **Preview deployments** for every pull request
- **Instant rollbacks** to previous deployments
- **Built-in analytics** and monitoring
- **Global CDN** with edge caching
- **Unlimited bandwidth** on the free plan
- **500 builds per month** on the free plan

### Troubleshooting Deployment Issues

#### Error: "It looks like you've run a Workers-specific command in a Pages project"

If you see this error during deployment:
```
✘ [ERROR] It looks like you've run a Workers-specific command in a Pages project.
  For Pages, please run `wrangler pages deploy` instead.
```

**Solution**: Your build configuration in the Cloudflare Pages dashboard is incorrect.

1. Go to **Settings** > **Builds & deployments**
2. Click **Edit** on your build configuration
3. Ensure the **Build command** is ONLY `npm run build` (or `bun run build`)
4. Remove any references to `wrangler deploy` or `wrangler pages deploy` from the build command
5. Cloudflare Pages automatically deploys after building - you don't need to add deployment commands
6. Save and retry the deployment

**Correct configuration**:
- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Deployment command: (leave empty or set to `echo "Deployed"`)

**Incorrect configuration** (will cause error):
- Build command: `npm run build && wrangler deploy` ❌
- Deployment command: `npx wrangler deploy` ❌
- Deployment command: `wrangler pages deploy` ❌
