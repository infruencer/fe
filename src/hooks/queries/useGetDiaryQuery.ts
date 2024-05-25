import { QUERY_KEY } from '@/constants/query-key';
import { getDiary } from '@/services/diary/diary.service';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetDiaryQuery = (id: number) => {
  const { data, isFetching, isError } = useSuspenseQuery({
    queryKey: [{ planId: id }, QUERY_KEY.DIARY],
    queryFn: () => getDiary(id),
    staleTime: Infinity,
  });
  return { diary: data, isFetching, isError };
};
