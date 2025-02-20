#!/bin/bash

# 스크립트 실행 중 오류 발생 시 즉시 종료
set -e

echo "🔍 Checking Yarn version..."
YARN_VERSION=$(yarn --version 2>/dev/null || echo "not_installed")

if [ "$YARN_VERSION" == "not_installed" ]; then
  echo "🚀 Yarn is not installed. Enabling Corepack..."
  corepack enable
  echo "🔄 Installing latest Yarn..."
  corepack prepare yarn@stable --activate
  YARN_VERSION=$(yarn --version)
fi

echo "✅ Yarn version detected: $YARN_VERSION"

# Yarn Berry (2+) 사용 여부 확인
if [[ "$YARN_VERSION" =~ ^1 ]]; then
  echo "⚠️ Yarn 1.x detected. Upgrading to Yarn Berry..."
  yarn set version berry
  YARN_VERSION=$(yarn --version)
  echo "✅ Upgraded to Yarn version: $YARN_VERSION"
fi

# PnP 모드 설정 확인
YARN_CONFIG=$(yarn config get nodeLinker)
if [[ "$YARN_CONFIG" != "pnp" ]]; then
  echo "🔧 Setting Yarn to Plug'n'Play (PnP) mode..."
  yarn config set nodeLinker pnp
fi

# 패키지 의존성 설치 (Yarn Berry 방식)
echo "📦 Installing dependencies with Yarn Berry..."
yarn install --immutable

echo "🎉 Setup complete! Yarn is now configured properly."
