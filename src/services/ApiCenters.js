import supabase from "./supabase";

export async function getSystems() {
  let { data, error } = await supabase
    .from(`systems`)
    .select("id,system,url")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
