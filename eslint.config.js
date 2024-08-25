module.exports = {
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    ecmaFeatures: {
      // JSX 문법 사용 설정
      jsx: true,
    },
    sourceType: 'module', // ES 모듈로 해석
  },
  rules: {
    'react/jsx-uses-react': 'off', // React 17 이상에서 필요 없음
    'react/react-in-jsx-scope': 'off', // React 17 이상에서 필요 없음
    'no-var': 'warn', // var 금지
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    eqeqeq: 'warn', // 일치 연산자 사용 필수
    'dot-notation': 'warn', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/jsx-curly-brace-presence': 'warn', // JSX 내 불필요한 중괄호 금지
    'arrow-parens': ['error', 'always'], // 화살표 함수의 매개변수에 항상 소괄호 사용
  },
  eslintConfig: {
    extends: ['react-app', 'react-app/jest'],
  },
  extends: [
    'react-app', // Create React App의 ESLint 규칙
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
    'eslint:recommended',
  ],
};
