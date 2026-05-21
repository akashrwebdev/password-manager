import React from "react";

import {
  ShieldUser,
  LayoutDashboard,
  Star,
  Clock3,
  Globe,
  CreditCard,
  FileText,
  BadgeCheck,
  KeyRound,
  Briefcase,
  ShieldCheck,
  Trash2,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  // Sidebar navigation data
  const navSections = [
    {
      title: "OVERVIEW",
      items: [
        {
          name: "All Items",
          icon: LayoutDashboard,
          count: 42,
          // active: true,
        },
        {
          name: "Favorites",
          icon: Star,
          count: 8,
        },
        {
          name: "Recent",
          icon: Clock3,
          count: 12,
        },
      ],
    },

    {
      title: "CATEGORIES",
      items: [
        {
          name: "Logins",
          icon: Globe,
          count: 31,
        },
        {
          name: "Credit Cards",
          icon: CreditCard,
          count: 3,
        },
        {
          name: "Secure Notes",
          icon: FileText,
          count: 4,
        },
        {
          name: "Identities",
          icon: BadgeCheck,
          count: 2,
        },
        {
          name: "Passwords",
          icon: KeyRound,
          count: 2,
        },
      ],
    },

    {
      title: "VAULTS",
      items: [
        {
          name: "Personal",
          icon: Briefcase,
          count: 29,
        },
        {
          name: "Work",
          icon: Briefcase,
          count: 13,
        },
      ],
    },

    {
      title: "SYSTEM",
      items: [
        {
          name: "Security Center",
          icon: ShieldCheck,
        },
        {
          name: "Trash",
          icon: Trash2,
        },
        {
          name: "Settings",
          icon: Settings,
        },
      ],
    },
  ];

  return (
    // Sidebar wrapper
    <aside
      className="
        w-72
        bg-[#0b1326]/70
        backdrop-blur-xl
        border-r border-white/5
        p-5
      ">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-3xl pt-2 pb-7 px-2 text-white">
        <ShieldUser size={30} className="text-blue-300" />
        <span>MY VAULT</span>
      </div>

      {/* Render all sections */}
      {navSections.map((section) => (
        <div key={section.title} className="mb-3">
          {/* Section heading */}
          {section.title && (
            <h2
              className="
                text-xs
                font-semibold
                text-white/35
                uppercase
                pl-3
                mb-2
                tracking-widest
              ">
              {section.title}
            </h2>
          )}

          {/* Navigation items */}
          <div>
            {section.items.map((item) => {
              // Store icon component in variable
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`flex items-center justify-between w-full px-3 py-2 text-md font-semibold rounded-2xl
                  transition-all duration-200
                  ${
                    item.active
                      ? "bg-blue-500/20 text-blue-300 ]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }
              `}>
                  {/* Left side */}
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <Icon size={18} />

                    {/* Item name */}
                    <span>{item.name}</span>
                  </div>

                  {/* Count */}
                  {item.count && (
                    <span className="text-sm text-white/50">{item.count}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
