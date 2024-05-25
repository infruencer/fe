import { QUERY_KEY } from '@/constants/query-key';
import { postNewDiary } from '@/services/diary/diary.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../useModal';

export const usePostDiaryMutation = () => {
  const queryClient = useQueryClient();
  const { Alert } = useModal();

  return useMutation({
    mutationFn: postNewDiary,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.DIARY],
      });
      await Alert('일기 생성 완료');
    },
    onError: async () => {
      await Alert('일기 생성 실패');
    },
  });
};
