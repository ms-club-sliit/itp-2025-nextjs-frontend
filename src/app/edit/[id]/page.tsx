import EditPostFormClient from "./EditPostFormClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <EditPostFormClient id={id}/>;
}
