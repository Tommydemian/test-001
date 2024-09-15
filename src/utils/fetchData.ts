export const fetchData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Fetch failed");
  }
  return (await res.json()) as T;
};
