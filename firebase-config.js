// =====================================================================
//  서해링 Firebase 설정
//  Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 내 앱 > 웹 앱의 "SDK 설정 및 구성"에서
//  firebaseConfig 값을 복사해서 아래 "여기에..." 부분을 바꿔 넣으세요.
//
//  이 값들은 GitHub에 공개돼도 괜찮아요.
//  누가 글을 쓰고 지울 수 있는지는 firestore.rules(보안 규칙)가 지켜 줘요.
// =====================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAW8NBHFgO6LMDxnM9zdwzfJFh2AllSZJc",
  authDomain: "seohaering.firebaseapp.com",
  projectId: "seohaering",
  storageBucket: "seohaering.firebasestorage.app",
  messagingSenderId: "198968540416",
  appId: "1:198968540416:web:041d0960dde78883cf07e5",
};

// 관리자 계정 이메일의 @ 뒤 주소예요. 코드를 넣으면 admin@seohaering.app 계정으로 확인해요.
// (Firebase Authentication에 만든 관리자 계정의 이메일과 맞아야 해요)
export const ADMIN_EMAIL_DOMAIN = "seohaering.app";
