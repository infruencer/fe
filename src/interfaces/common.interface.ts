/**
 * 자식 컴포넌트 props
 */
export interface IChildrenProps {
  children: React.ReactNode;
}

/**
 * map 데이터
 */
interface IAnyMap {
  [key: string]: any;
}

/**
 * api 응답 데이터
 */
export interface IResponse {
  result?: IAnyMap; // 응답 객체 데이터
  results?: any[]; // 응답 배열 데이터
  status: boolean; // 상태
  message?: string; // 응답 메시지
  code?: string; // 응답 코드
  field?: string; // 유효성 검증 실패 필드
}
