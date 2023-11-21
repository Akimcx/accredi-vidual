import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const datas = await request.formData();
  const orderColumn = datas.get("orderColumn").toString();
  const orderDirection = datas.get("orderDirection").toString();

  const url = new URL(request.headers.get("referer"));
  url.searchParams.set("orderColumn", orderColumn);
  url.searchParams.set("orderDirection", orderDirection);
  console.log(url);

  return redirect(url.toString());
};
