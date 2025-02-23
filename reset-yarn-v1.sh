#!/bin/bash

# 스크립트 실행 중 오류 발생 시 즉시 종료
set -e

echo "🔍 Checking current Yarn version..."
YARN_VERSION=$(yarn --version 2>/dev/null || echo "not_installed")

if [ "$YARN_VERSION" == "not_installed" ]; then
  echo "🚨 Yarn is not installed. Please install Yarn v1 manually: npm install -g yarn@1"
  exit 1
fi

echo "✅ Current Yarn version: $YARN_VERSION"

# Yarn v2 이상이면 v1로 다운그레이드
if [[ ! "$YARN_VERSION" =~ ^1 ]]; then
  echo "⚠️ Yarn Berry (v2+) detected. Resetting to Yarn v1..."
  
  # .yarn 및 .yarnrc.yml 제거
  echo "🧹 Removing Yarn Berry configuration..."
  rm -rf .yarn .yarnrc.yml

  # Yarn v1 설치 (Corepack 비활성화)
  echo "⬇️ Installing Yarn v1..."
  npm install -g yarn@1

  # yarn.lock이 PnP 기반이라면 제거
  if grep -q "__metadata" yarn.lock; then
    echo "🧹 Removing PnP-based yarn.lock..."
    rm yarn.lock
  fi

  # node_modules 모드 설정
  echo "🔧 Setting Yarn to use node_modules..."
  yarn config set nodeLinker node-modules
fi

# Yarn 버전 확인
NEW_YARN_VERSION=$(yarn --version)
echo "✅ Yarn has been reset to version: $NEW_YARN_VERSION"

# 패키지 재설치
echo "📦 Installing dependencies with Yarn v1..."
yarn install

echo "🎉 Reset complete! Yarn is now back to v1 with node_modules."
