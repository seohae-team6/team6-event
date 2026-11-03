// =====================================================================
//  서해링 Firebase 설정
//  Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 내 앱 > 웹 앱의 "SDK 설정 및 구성"에서
//  firebaseConfig 값을 복사해서 아래 "여기에..." 부분을 바꿔 넣으세요.
//
//  이 값들은 GitHub에 공개돼도 괜찮아요.
//  누가 글을 쓰고 지울 수 있는지는 firestore.rules(보안 규칙)가 지켜 줘요.
// =====================================================================
export const firebaseConfig = {
  apiKey: "여기에-apiKey",
  authDomain: "여기에-프로젝트ID.firebaseapp.com",
  projectId: "여기에-프로젝트ID",
  storageBucket: "여기에-프로젝트ID.appspot.com",
  messagingSenderId: "여기에-messagingSenderId",
  appId: "여기에-appId",
};

// 관리자 로그인 아이디 뒤에 자동으로 붙는 주소예요.
// 로그인 창에 'admin'이라고 적으면 admin@seohaering.app 계정으로 로그인해요.
// (Firebase에서 만든 관리자 계정의 이메일과 맞아야 해요)
export const ADMIN_EMAIL_DOMAIN = "seohaering.app";
