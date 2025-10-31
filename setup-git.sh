#!/bin/bash

# GitHub 사용자명을 입력하세요
echo "GitHub 사용자명을 입력하세요:"
read GITHUB_USERNAME

# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 2025 밈잘알 테스트"

# GitHub 레포지토리 추가
git remote add origin https://github.com/$GITHUB_USERNAME/meme-test-2025.git

# 브랜치를 main으로 변경
git branch -M main

echo ""
echo "✅ 준비 완료!"
echo ""
echo "다음 단계:"
echo "1. GitHub에서 레포지토리를 먼저 생성하세요: https://github.com/new"
echo "2. 레포지토리 이름: meme-test-2025"
echo "3. Public으로 설정"
echo "4. 생성 후 아래 명령어 실행:"
echo "   git push -u origin main"

