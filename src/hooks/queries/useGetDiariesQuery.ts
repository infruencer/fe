'use client';

// import { getAllPlans } from '@/apis/client/getAllPlans';
import { QUERY_KEY } from '@/constants/query-key';
import { getDiaries } from '@/services/diary/diary.service';
// import { GetAllPlansRequestQuery } from '@/types/apis/plan/GetAllPlans';
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

// export const useAllDiariesQuery = (query: GetAllPlansRequestQuery) => {
//   const { data, fetchNextPage, hasNextPage, isLoading, isError } = useSuspenseInfiniteQuery({
//     queryKey: [QUERY_KEY.ALL_PLANS, query.sort, query.current],
//     queryFn: async ({ pageParam = {} }) => {
//       let params = {
//         sort: query.sort,
//         current: query.current,
//       };

//       if (pageParam) {
//         params = { ...params, ...pageParam };
//       }
//       const result = await getAllPlans(params);
//       return result?.data;
//     },
//     initialPageParam: {},
//     getNextPageParam: (lastPage) => {
//       // console.log('lastPage:', lastPage);
//       const lastItem = lastPage[lastPage.length - 1];
//       // if (lastItem) console.log(query.sort, lastItem.id, lastItem.ajajas);
//       return lastItem
//         ? query.sort === 'ajaja'
//           ? { start: lastItem.id, ajaja: lastItem.ajajas }
//           : { start: lastItem.id }
//         : undefined;
//     },
//     staleTime: 10000,
//   });
//   // console.log('Data:', data?.pages);
//   return {
//     loadedPlans: data?.pages || [],
//     fetchNextPage,
//     hasNextPage,
//     isLoading,
//     isError,
//   };
// };

export const useGetDiariesQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.DIARIES],
    queryFn: getDiaries,
    staleTime: Infinity,
  });
  return { diaries: data };
};
