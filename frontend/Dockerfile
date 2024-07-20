FROM node:22-alpine AS builder

WORKDIR /frontend

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm --frozen-lockfile i

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY . .
RUN pnpm build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html

EXPOSE 80
