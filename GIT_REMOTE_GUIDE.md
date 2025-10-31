# Git Remote 명령어 가이드

## 기본 명령어

### 1. 원격 레포지토리 확인
```bash
git remote
```
현재 등록된 원격 레포지토리 이름 목록 출력

```bash
git remote -v
```
원격 레포지토리 이름과 URL 함께 출력 (verbose)

### 2. 원격 레포지토리 추가
```bash
git remote add origin https://github.com/사용자명/레포지토리명.git
```
origin이라는 이름으로 원격 레포지토리 추가

```bash
git remote add upstream https://github.com/원본/레포지토리명.git
```
다른 이름(upstream 등)으로 추가 가능

### 3. 원격 레포지토리 URL 확인
```bash
git remote get-url origin
```
origin의 URL만 출력

### 4. 원격 레포지토리 URL 변경
```bash
git remote set-url origin https://github.com/새사용자명/새레포지토리명.git
```
이미 등록된 원격 레포지토리 URL 변경

### 5. 원격 레포지토리 삭제
```bash
git remote remove origin
```
또는
```bash
git remote rm origin
```
origin 원격 레포지토리 삭제

### 6. 원격 레포지토리 이름 변경
```bash
git remote rename origin upstream
```
origin을 upstream으로 이름 변경

## 실제 사용 예시

### 처음 설정할 때
```bash
# 원격 레포지토리 추가
git remote add origin https://github.com/ga-eun/meme-test-2025.git

# 확인
git remote -v
# 출력:
# origin  https://github.com/ga-eun/meme-test-2025.git (fetch)
# origin  https://github.com/ga-eun/meme-test-2025.git (push)
```

### 이미 origin이 있을 때
```bash
# 기존 origin 삭제
git remote remove origin

# 새로운 origin 추가
git remote add origin https://github.com/새사용자명/새레포지토리.git
```

### URL만 변경하고 싶을 때
```bash
# set-url 사용 (더 간단함)
git remote set-url origin https://github.com/새사용자명/새레포지토리.git
```

## 자주 쓰는 조합

### 1. 현재 상태 확인 후 푸시
```bash
git remote -v                    # 원격 레포지토리 확인
git status                        # 현재 상태 확인
git push -u origin main           # 첫 푸시 (브랜치 추적 설정)
```

### 2. SSH에서 HTTPS로 변경
```bash
git remote set-url origin https://github.com/사용자명/레포지토리.git
```

### 3. HTTPS에서 SSH로 변경
```bash
git remote set-url origin git@github.com:사용자명/레포지토리.git
```

## 에러 해결

### "remote origin already exists" 에러가 나면
```bash
# 방법 1: 기존 origin 삭제 후 추가
git remote remove origin
git remote add origin https://github.com/사용자명/레포지토리.git

# 방법 2: URL만 변경
git remote set-url origin https://github.com/사용자명/레포지토리.git
```

### 잘못된 URL을 추가했을 때
```bash
# URL 변경
git remote set-url origin https://github.com/올바른사용자명/레포지토리.git

# 확인
git remote -v
```

