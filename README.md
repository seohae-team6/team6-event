# 서해링

학생 참여 이벤트를 **날짜별 · 인원별 · 달력**으로 모아 보는 학교 이벤트 게시판이에요.
누구나 휴대폰으로 주소만 열면 볼 수 있고, 관리자만 이벤트를 등록하고 고칠 수 있어요.

- 화면: GitHub Pages (무료)
- 게시물 저장, 관리자 로그인: Firebase (무료 요금제로 충분해요)

## 파일

| 파일 | 하는 일 |
| --- | --- |
| `index.html` | 서해링 화면 전체 (인트로, 목록, 달력, 관리자 기능) |
| `firebase-config.js` | 내 Firebase 프로젝트 주소를 적는 곳 (**꼭 채워야 해요**) |
| `example-events.js` | 처음에 넣어 볼 예시 이벤트 8개 |
| `firestore.rules` | 누가 읽고 쓸 수 있는지 정하는 보안 규칙 |

---

## 설정 방법

### 1. Firebase 프로젝트 만들기
1. https://console.firebase.google.com 에 Google 계정으로 들어가요.
2. **프로젝트 추가** → 이름은 `seohaering`처럼 아무거나 → Google 애널리틱스는 꺼도 돼요.

### 2. 웹 앱 등록하고 설정값 복사하기
1. 프로젝트 첫 화면에서 **`</>` (웹)** 아이콘을 눌러요.
2. 앱 이름 `서해링` 입력 → **앱 등록** (Firebase 호스팅 체크는 안 해도 돼요).
3. 나오는 코드에서 `firebaseConfig = { ... }` 안의 값들을 복사해요.
4. `firebase-config.js`를 열어 `"여기에-..."` 부분을 복사한 값으로 바꿔요.

### 3. Firestore(저장소) 만들기
1. 왼쪽 메뉴 **빌드 → Firestore Database → 데이터베이스 만들기**.
2. 위치는 **asia-northeast3 (서울)**, 모드는 **프로덕션 모드**로 시작해요.
3. 만들어지면 **규칙** 탭에서 원래 내용을 지우고 `firestore.rules` 내용을 그대로 붙여 넣은 뒤 **게시**를 눌러요.

### 4. 관리자 계정 만들기
1. 왼쪽 메뉴 **빌드 → Authentication → 시작하기**.
2. **로그인 방법** 탭 → **이메일/비밀번호** → 사용 설정 → 저장.
3. **사용자** 탭 → **사용자 추가**
   - 이메일: `admin@seohaering.app`
   - 비밀번호: 6자 이상. 이제 비밀번호는 코드에 적히지 않으니 **친구들이 모르는 비밀번호**로 정해요.
4. **설정** 탭 → **사용자 작업** → **생성(가입) 사용 설정**의 체크를 꺼요.
   (다른 사람이 마음대로 계정을 만들지 못하게 막는 설정이에요.)

> 로그인 창에는 `admin`만 적어도 돼요. 뒤에 `@seohaering.app`이 자동으로 붙어요.

### 5. GitHub Pages에 올리기
1. https://github.com 에서 **New repository** → 이름 `seohaering` → **Public** → 만들기.
2. **Add file → Upload files**로 이 폴더의 파일 5개를 모두 올리고 **Commit changes**.
3. 저장소의 **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)** → Save
4. 1~2분 뒤 위쪽에 주소가 나와요: `https://내아이디.github.io/seohaering/`

### 6. 열어 보고 예시 이벤트 넣기
1. 휴대폰으로 주소를 열어요. "아직 등록된 이벤트가 없어요"가 보이면 연결 성공이에요.
2. **메뉴 → 관리자 로그인** (`admin` + 4단계에서 정한 비밀번호).
3. **메뉴 → 관리자 메뉴 → 예시 이벤트 가져오기**를 누르면 8개가 들어가요.
4. 이벤트 등록 코드는 `qwerty`예요. 바꾸려면 `index.html`에서 `REG_CODE`를 찾아 고쳐요.

---

## 문제가 생기면

| 화면에 나오는 말 | 고치는 방법 |
| --- | --- |
| firebase-config.js에 설정값을 아직 넣지 않았어요 | 2단계를 다시 확인해요. 따옴표(`"`)를 지우지 않았는지 봐요. |
| firebase-config.js 파일을 찾지 못했어요 | `index.html`과 같은 곳에 올렸는지 확인해요. |
| 이벤트를 읽을 권한이 없어요 | 3단계 규칙을 붙여 넣고 **게시**했는지 확인해요. |
| 아이디 또는 비밀번호가 맞지 않아요 | 4단계의 이메일이 `admin@seohaering.app`과 똑같은지 확인해요. |
| 저장하지 못했어요. 관리자 계정으로 로그인했는지 확인해 주세요 | `firestore.rules`의 이메일 목록과 관리자 계정 이메일이 같은지 확인해요. |
| 컴퓨터에서 `index.html`을 더블클릭하면 연결이 안 돼요 | 정상이에요. 이 방식은 인터넷 주소(GitHub Pages)로 열어야 작동해요. |

## 관리자 늘리기
1. Authentication → 사용자 추가로 새 계정을 만들어요 (예: `teacher@seohaering.app`).
2. `firestore.rules`의 목록에 이메일을 추가하고 다시 **게시**해요.
   `["admin@seohaering.app", "teacher@seohaering.app"]`

## 나중에 www.seohaering.com 같은 주소를 쓰고 싶다면
도메인을 산 뒤, 저장소 **Settings → Pages → Custom domain**에 주소를 적고,
도메인 판매 사이트에서 GitHub가 알려 주는 DNS 설정을 하면 돼요.
