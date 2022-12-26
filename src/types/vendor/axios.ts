import { Method } from 'axios';

export type AxiosParams = {
  method?: Method;
  utl: string;
  data?: object;
  params?: object;
};
