import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}
