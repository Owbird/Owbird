import { redirect } from "next/navigation";

type portPage = {
  params: Promise<{
    port: string;
  }>;
};

export default async function PortPage({ params }: portPage) {
  const { port } = await params;

  redirect(`https://port${port}.server.owbird.dev`);

  return <></>;
}
