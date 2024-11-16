/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { createMutation, createQuery } from '@tanstack/svelte-query';
import type {
  CreateMutationOptions,
  CreateMutationResult,
  CreateQueryOptions,
  CreateQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
} from '@tanstack/svelte-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  version: number = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>({
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

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: CreateQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
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
  } as CreateQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */

export function createListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: CreateQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): CreateQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = createQuery(queryOptions) as CreateQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

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
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: CreateMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): CreateMutationOptions<
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
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const createCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: CreateMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): CreateMutationResult<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return createMutation(mutationOptions);
};

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
  TError = Error,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: CreateQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
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
  } as CreateQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function createShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: CreateQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): CreateQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = createQuery(queryOptions) as CreateQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}
