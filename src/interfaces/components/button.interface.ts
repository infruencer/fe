/**
 * 공통 버튼 컴포넌트 Props
 */
export interface IButtonProps {
  text: string; // 텍스트
  onClick: () => void; // 클릭 이벤트 함수
  disabled?: boolean; // 활성화 여부
  theme?: string; // 테마
}
