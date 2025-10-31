# 배포 가이드

## GitHub 레포지토리 생성 및 배포

### 1. GitHub 레포지토리 생성

1. GitHub에 로그인
2. 우측 상단의 **+** 버튼 클릭 → **New repository**
3. 레포지토리 정보 입력:
   - **Repository name**: `meme-test-2025` (또는 원하는 이름)
   - **Description**: `2025 밈잘알 테스트 - 한국 인터넷 밈 퀴즈`
   - **Public** 선택 (GitHub Pages 무료 사용)
   - **Add README** 체크 해제 (이미 있음)
   - **Create repository** 클릭

### 2. 로컬에서 Git 초기화 및 푸시

터미널에서 다음 명령어 실행:

```bash
# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 2025 밈잘알 테스트"

# GitHub 레포지토리 추가 (YOUR_USERNAME을 실제 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/meme-test-2025.git

# 브랜치를 main으로 변경
git branch -M main

# 푸시
git push -u origin main
```

### 3. GitHub Pages 설정

1. GitHub 레포지토리 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source**에서 **GitHub Actions** 선택
4. 저장하면 자동으로 배포 시작!

### 4. 사이트 주소

배포가 완료되면 다음 주소로 접속 가능:
```
https://YOUR_USERNAME.github.io/meme-test-2025/
```

예: `https://ga-eun.github.io/meme-test-2025/`

### 5. 자동 배포

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다!

```bash
git add .
git commit -m "Update questions"
git push
```

## 레포지토리 이름 추천

- `meme-test-2025` ✅ (추천)
- `meme-quiz-2025`
- `2025-meme-test`
- `korean-meme-test`

## 주의사항

1. 레포지토리 이름을 바꾸면 `vite.config.js`의 `base` 값도 변경해야 합니다
2. 첫 배포는 1-2분 정도 걸릴 수 있습니다
3. GitHub Actions 탭에서 배포 상태를 확인할 수 있습니다

