"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Pencil, Settings, Users, Cat } from "lucide-react";

export const dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) redirect("/login");

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#221a20] mb-4">
        Welcome, {session.user?.name || "User"}!
      </h1>
      <p className="text-gray-600 mb-10">What would you like to do today?</p>

      <div>
        <DashboardCard
          title="Add Blog Post"
          description="Write and publish new updates or care tips."
          icon={<Pencil className="w-6 h-6 text-[#221a20]" />}
          href="/resources/new"
        />
        <DashboardCard
          title="Add Volunteer Opportunity"
          description="Post ways people can help Baby Kitty."
          icon={<Users className="w-6 h-6 text-[#221a20]" />}
          href="/resources/new"
        />
        <DashboardCard
          title="Add Adoptable Cat"
          description="List a new kitten available for adoption."
          icon={<Cat className="w-6 h-6 text-[#221a20]" />}
          href="/resources/new"
        />
        <DashboardCard
          title="Account Settings"
          description="Not sure if I'm offering this lol."
          icon={<Settings className="w-6 h-6 text-[#221a20]" />}
          href="/resources/new"
        />
      </div>
    </div>
  );
};

const DashboardCard = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex flex-col border border-gray-200 hover:border-[#221a20] rounded-xl p-6 shadow-sm hover:shadow-md transition group"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-[#221a20]">{title}</h2>
        {icon}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};
