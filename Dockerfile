# Stage 1: Build Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source files
COPY . .

# Build the application
# nextConfig already has output: 'export'
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

# Clean default nginx files
RUN rm -rf ./*

# Copy built static files from builder stage
COPY --from=builder /app/out ./

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
