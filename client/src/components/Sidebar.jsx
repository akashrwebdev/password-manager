import React from "react";

const Sidebar = () => {
  // Navigation sections data
  const navSections = [
    {
      title: "",
      items: [
        {
          name: "All Items",
          icon: "🔒",
          count: 42,
          // active: true,
        },
        {
          name: "Favorites",
          icon: "⭐",
          count: 8,
        },
        {
          name: "Recent",
          icon: "🕒",
          count: 12,
        },
      ],
    },

    {
      title: "CATEGORIES",
      items: [
        {
          name: "Logins",
          icon: "🌐",
          count: 31,
        },
        {
          name: "Credit Cards",
          icon: "💳",
          count: 3,
        },
        {
          name: "Secure Notes",
          icon: "🧾",
          count: 4,
        },
        {
          name: "Identities",
          icon: "🪪",
          count: 2,
        },
        {
          name: "Passwords",
          icon: "🗝️",
          count: 2,
        },
      ],
    },

    {
      title: "VAULTS",
      items: [
        {
          name: "Personal",
          icon: "💼",
          count: 29,
        },
        {
          name: "Work",
          icon: "👜",
          count: 13,
        },
      ],
    },

    {
      title:"",
      items: [
        {
          name: "Security Center",
          icon: "🛡️",
        },
        {
          name: "Trash",
          icon: "🗑️",
        },
        {
          name: "Settings",
          icon: "⚙️",
        },
      ],
    },
  ];

  return (
    // Sidebar container
    <div className="w-64 border-r border-white/5 p-5">
      {/* Logo / Heading */}
      <div className="font-bold text-3xl pt-2 pb-6 px-3">MY VAULT🛡️</div>

      {/* Loop through all sections */}
      {navSections.map((section) => (
        <div key={section.title} className="mb-1">
          {/* Section title */}
          {section.title && (
            <h2 className="text-sm text-white/40 pl-3 mb-3 tracking-wide">
              {section.title}
            </h2>
          )}

          {/* Section items */}
          <div>
            {section.items.map((item) => (
              // Navigation button
              <button
                key={item.name}
                className={`
                  flex items-center justify-between
                  w-full px-3 py-2 rounded-2xl
                  transition-all duration-200 text-white
                  hover:bg-blue-500/15 hover:text-blue-300
                `}>
                {/* Left side (icon + text) */}
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>

                {/* Right side count */}
                {item.count && (
                  <span className="text-sm text-white/50">{item.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
