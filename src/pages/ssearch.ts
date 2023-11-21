import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const datas = await request.formData();
  const search = datas.get("search")?.toString();
  console.log(search);
  return redirect("/peoples?q=" + search);
};
