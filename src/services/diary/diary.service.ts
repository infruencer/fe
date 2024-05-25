import { DOMAIN } from '@/constants/api';
import { IDiary } from '@/interfaces/apis/diary.interface';
import { axiosInstance } from '@/utils/axiosInstance';

export const getDiaries = async () => {
  const { data } = await axiosInstance.get<IDiary[]>(DOMAIN.GET_DIARY_ALL);
  return data;
};

export const getDiary = async (diaryId: number) => {
  const { data } = await axiosInstance.get<IDiary>(DOMAIN.GET_DIARY(diaryId));

  return data;
};

export const postNewDiary = async (body: any) => {
  const response = await axiosInstance.post(DOMAIN.POST_DIARY, {
    ...body,
  });
  console.log('response => ', response);
  return response;
};

export const editDiary = async ({ diaryId, diaryData }: any) => {
  const { data } = await axiosInstance.put(DOMAIN.PUT_DIARY(diaryId), { ...diaryData });
  return data;
};

export const deleteDiary = (diaryId: number) => {
  return axiosInstance.delete(DOMAIN.DELETE_DIARY(diaryId), {});
};

export default { getDiaries, getDiary, postNewDiary, editDiary, deleteDiary };
