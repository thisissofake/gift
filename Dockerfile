FROM node:alpine AS builder
# Copy package and lock files for better caching 
COPY package.json package.json
COPY yarn.lock yarn.lock
# Install dependencies
RUN yarn
# Copy rest of the files
COPY . .
# Build styleguidist
RUN yarn build

FROM gatsbyjs/gatsby:latest

COPY --from=builder public/ /pub
