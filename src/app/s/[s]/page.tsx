import { redirect } from "next/navigation";

interface Params {
  params: Promise<{
    s: string;
  }>;
}

export default async function Page({ params }: Params) {
  const { s } = await params;

  redirect(`https://port${s}.server.owbird.dev`);
}
