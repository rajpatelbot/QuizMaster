export interface UseFetchResponse<TData> {
  data: TData | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: (url: string, headers?: Record<string, string>) => Promise<void>;
}
