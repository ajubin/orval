/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from '../model';
import { customInstance } from '../mutator/custom-instance';
import type { ErrorType } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  version: number = 1,
  signal?: AbortSignal,
) => {
  return customInstance<PetsArray>({
    url: `/v${version}/pets`,
    method: 'GET',
    params,
    signal,
  });
};

export const getListPetsQueryKey = (
  params?: ListPetsParams,
  version: number = 1,
) => {
  return [`/v${version}/pets`, ...(params ? [params] : [])] as const;
};

export const getListPetsInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > = ({ signal, pageParam }) =>
    listPets(
      { ...params, limit: pageParam || params?.['limit'] },
      version,
      signal,
    );

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData,
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = ErrorType<Error>;

export function useListPetsInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsParams,
  version: undefined | number,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData,
          QueryKey
        >,
        'initialData'
      >;
  },
): DefinedUseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData,
          QueryKey
        >,
        'initialData'
      >;
  },
): UseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
/**
 * @summary List all pets
 */

export function useListPetsInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
} {
  const queryOptions = getListPetsInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData>;
  };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = ErrorType<Error>;

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsParams,
  version: undefined | number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getListPetsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ListPetsSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsSuspenseQueryError = ErrorType<Error>;

export function useListPetsSuspense<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsParams,
  version: undefined | number,
  options: {
    query: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsSuspense<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsSuspense<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
/**
 * @summary List all pets
 */

export function useListPetsSuspense<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
} {
  const queryOptions = getListPetsSuspenseQueryOptions(
    params,
    version,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getListPetsSuspenseInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > = ({ signal, pageParam }) =>
    listPets(
      { ...params, limit: pageParam || params?.['limit'] },
      version,
      signal,
    );

  return {
    queryKey,
    queryFn,
    ...queryOptions,
  } as UseSuspenseInfiniteQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData,
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ListPetsSuspenseInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsSuspenseInfiniteQueryError = ErrorType<Error>;

export function useListPetsSuspenseInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsParams,
  version: undefined | number,
  options: {
    query: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseSuspenseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsSuspenseInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseSuspenseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsSuspenseInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version?: number,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseSuspenseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
/**
 * @summary List all pets
 */

export function useListPetsSuspenseInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseSuspenseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseSuspenseInfiniteQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
} {
  const queryOptions = getListPetsSuspenseInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useSuspenseInfiniteQuery(
    queryOptions,
  ) as UseSuspenseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: CreatePetsBody,
  version: number = 1,
  signal?: AbortSignal,
) => {
  return customInstance<void>({
    url: `/v${version}/pets`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
    signal,
  });
};

export const getCreatePetsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = ErrorType<Error>;

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary List all pets as nested array
 */
export const listPetsNestedArray = (
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  signal?: AbortSignal,
) => {
  return customInstance<PetsNestedArray>({
    url: `/v${version}/pets-nested-array`,
    method: 'GET',
    params,
    signal,
  });
};

export const getListPetsNestedArrayQueryKey = (
  params?: ListPetsNestedArrayParams,
  version: number = 1,
) => {
  return [
    `/v${version}/pets-nested-array`,
    ...(params ? [params] : []),
  ] as const;
};

export const getListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsNestedArrayQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPetsNestedArray>>
  > = ({ signal }) => listPetsNestedArray(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof listPetsNestedArray>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPetsNestedArray>>
>;
export type ListPetsNestedArrayQueryError = ErrorType<Error>;

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params: undefined | ListPetsNestedArrayParams,
  version: undefined | number,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPetsNestedArray>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPetsNestedArray>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
/**
 * @summary List all pets as nested array
 */

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getListPetsNestedArrayQueryOptions(
    params,
    version,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: string,
  version: number = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'GET',
    signal,
  });
};

export const getShowPetByIdQueryKey = (petId: string, version: number = 1) => {
  return [`/v${version}/pets/${petId}`] as const;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(version && petId),
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = ErrorType<Error>;

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: undefined | number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          TData
        >,
        'initialData'
      >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version?: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
