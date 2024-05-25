import { QUERY_KEY } from '@/constants/query-key';
import { deleteDiary } from '@/services/diary/diary.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../useModal';

export const useDeleteDiaryMutation = () => {
  const queryClient = useQueryClient();
  const { Alert } = useModal();

  return useMutation({
    mutationFn: deleteDiary,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.DIARY],
      });
      await Alert('일기 삭제 완료');
    },
    onError: async () => {
      await Alert('일기 삭제 실패');
    },
    throwOnError: true,
  });
};
