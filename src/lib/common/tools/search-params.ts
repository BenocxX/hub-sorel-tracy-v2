/**
 * This function takes an object and a list of keys, then forms a URL search parameter string composed of the keys and their corresponding values from the object.
 *
 * Useful for quickly generating search parameters from complex objects by simply selecting which keys to include.
 *
 * @param data - The object containing the data to be converted into search parameters.
 * @param keys - An optional array of keys to include in the search parameters. If not provided, all keys from the object will be used.
 * @returns A URLSearchParams string, prefixed with a '?' if there are any parameters or an empty string if there are none (could happen if the data object if empty).
 */
export function makeSearchParams<TData extends Record<string, unknown>>(
  data: TData,
  keys?: (keyof TData)[]
) {
  const urlSearchParams = new URLSearchParams();

  if (!keys) {
    keys = Object.keys(data) as (keyof TData)[];
  }

  for (const key of keys) {
    if (data[key]) {
      urlSearchParams.set(key.toString(), data[key] as string);
    }
  }

  const searchParams = urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : '';
  return { searchParams };
}
