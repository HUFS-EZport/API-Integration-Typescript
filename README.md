# Ezports API Integration Repository

> Github Actions를 통해 백엔드 서버에 변경이 있을때마다    
> 자동으로 NPM 모듈로 빌드하고 이를 Github Packages로 자동으로 배포하기 위한 저장소

## API 클라이언트 NPM 패키지 설치하는법

### 1. 프로젝트 .npmrc 설정

in {PROJECT_ROOT}/.npmrc
```
@hufs-ezport:registry=https://npm.pkg.github.com
```
위와 같이 hufs-ezport 네임스페이스의 레지스트리 (저장소) 주소를 github npm packages 주소로 설정

### 2. 유저 .npmrc 설정

#### 2-1. 깃헙 토큰 발급

아래의 페이지에 접속
```
Github settings -> Developer settings -> Personal access tokens
-> Tokens (classic) -> Generate new token -> Generate new token (classic)    
```
접속 후 `read:packages` 권한만 체크하고 토큰 발급받기 (유효기한은 자기 마음대로)

발급받은 토큰은 닫으면 다시 확인 불가능하니 다른곳에 복사해둘것.

#### 2-2. 유저 .npmrc 설정하기

커맨드라인에 `npm config get userconfig` 실행시키면 유저 `.npmrc` 파일 위치가 나옴.    
해당 위치로 가서 `.npmrc`파일에 아래의 내용 추가 (없다면 해당 위치에 새로 생성)

```
//npm.pkg.github.com/:_authToken={2-1에서_발급받은_토큰}
```

맨 앞에 있는 `//`가 주석처리가 아님으로 똑같이 `//` 적어줘야 함에 주의

### 3. 패키지 설치하기
npm 사용시
`npm install @hufs-ezport/api-client`

yarn 사용시
`yarn add @hufs-ezport/api-client`
