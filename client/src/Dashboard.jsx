import BreachCard from "./components/BreachCard";
import EntryCard from "./components/EntryCard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import VaultHealth from "./components/VaultHealth";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0b1326] text-white border border-white/5 gap-2">
      <Sidebar />

      <div className="flex-col flex-1 p-5 ">
        <Topbar />

        <div>
          <div>
            {/* <VaultHealth /> */}
            {/* <BreachCard /> */}
          </div>

          {/* <EntryCard /> */}
        </div>
      </div>
    </div>
  );
}
