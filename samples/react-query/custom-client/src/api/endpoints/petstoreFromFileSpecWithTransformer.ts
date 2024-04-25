/**
 * Generated by orval v6.28.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from 'react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';
import { useCustomClient } from '../mutator/custom-client';
import type { ErrorType, BodyType } from '../mutator/custom-client';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
  const listPets = useCustomClient<Pets>();

  return (
    params?: ListPetsParams,
    version: number = 1,
    signal?: AbortSignal,
  ) => {
    return listPets({
      url: `/v${version}/pets`,
      method: 'GET',
      params,
      signal,
    });
  };
};

export const getListPetsQueryKey = (
  params?: ListPetsParams,
  version: number = 1,
) => {
  return [`/v${version}/pets`, ...(params ? [params] : [])] as const;
};

export const useListPetsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const listPets = useListPetsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
  > = ({ signal }) => listPets(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
>;
export type ListPetsQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */
export const useListPets = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
  const createPets = useCustomClient<Pet>();

  return (createPetsBody: BodyType<CreatePetsBody>, version: number = 1) => {
    return createPets({
      url: `/v${version}/pets`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createPetsBody,
    });
  };
};

export const useCreatePetsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: BodyType<CreatePetsBody>; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const createPets = useCreatePetsHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    { data: BodyType<CreatePetsBody>; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>
>;
export type CreatePetsMutationBody = BodyType<CreatePetsBody>;
export type CreatePetsMutationError = ErrorType<Error>;

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: BodyType<CreatePetsBody>; version?: number },
  TContext
> => {
  const mutationOptions = useCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
  const showPetById = useCustomClient<Pet>();

  return (petId: string, version: number = 1, signal?: AbortSignal) => {
    return showPetById({
      url: `/v${version}/pets/${petId}`,
      method: 'GET',
      signal,
    });
  };
};

export const getShowPetByIdQueryKey = (petId: string, version: number = 1) => {
  return [`/v${version}/pets/${petId}`] as const;
};

export const useShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const showPetById = useShowPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
  > = ({ signal }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(version && petId),
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
>;
export type ShowPetByIdQueryError = ErrorType<Error>;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
