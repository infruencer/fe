import { QUERY_KEY } from '@/constants/query-key';
import { editDiary } from '@/services/diary/diary.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../useModal';

export const useEditDiaryMutation = (id: number) => {
  const queryClient = useQueryClient();
  const { Alert } = useModal();

  return useMutation({
    mutationFn: editDiary,
    onSuccess: async () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [{ id }],
        }),
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.DIARY],
        }),
      ]);
      await Alert('일기 수정 완료');
    },
    onError: async () => {
      await Alert('일기 수정 실패');
    },
    throwOnError: true,
  });
};
