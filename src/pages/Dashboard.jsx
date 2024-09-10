import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../features/authentication/useLogout";
import { SlSettings } from "react-icons/sl";
import { useSystems } from "../features/systems/useSystems";
import { useUser } from "../features/authentication/useUser";

import SpinnerFullPage from "../ui/SpinnerFullPage";
import System from "../features/systems/System";

function Dashboard() {
  const { isAdmin } = useUser();

  const { systems, isLoading } = useSystems();

  const { isPending, logout } = useLogout();

  if (isLoading) return <SpinnerFullPage />;

  return (
    <div className="relative h-screen">
      <div className="flex justify-between flex-row-reverse w-[95%] gap-3 absolute z-20 left-6 bottom-5">
        {isAdmin && (
          <Link
            to="/admin"
            className="text-2xl flex justify-end text-colorBrand hover:translate-x-2 transition-all"
          >
            <SlSettings />
          </Link>
        )}
        <button
          disabled={isPending}
          onClick={logout}
          className="text-3xl text-colorBrand hover:translate-x-2 transition-all"
        >
          <CiLogout />
        </button>
      </div>

      <div className="z-10 relative h-screen flex flex-col">
        <header className="relative flex items-center justify-center px-4 py-[3rem] 2xl:py-[3.9rem]">
          <Link to="/">
            <img
              className="h-[6rem] 2xl:h-[5.8rem]"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </header>
        <main className="flex-1 px-[22rem] 2xl:py-[2rem] flex items-center">
          {Boolean(systems?.length) && (
            <div className="grid grid-cols-2 gap-x-14 2xl:gap-x-16 gap-y-12 2xl:gap-y-20 w-full">
              {systems?.map((system) => (
                <System key={system.id} data={system} />
              ))}
            </div>
          )}
        </main>
        <footer className="flex items-center justify-center px-3 p-[3rem]">
          <div className="border-b-8 border-colorBrand leading-[1]">
            <h1 className="uppercase font-bold 2xl:text-[4.8rem] text-[3.5rem] text-colorGreyText">
              companies
            </h1>
          </div>
        </footer>
      </div>
      <div>
        <img
          className="h-screen absolute right-0 top-0"
          src="/Untitled-3.png"
          alt="bg"
        />
        <img
          className="h-[4.5rem] 2xl:h-[8.3rem] absolute right-[8rem] 2xl:right-[5.8rem] bottom-[2.3rem] 2xl:bottom-[6rem]"
          src="/Untitled-7.png"
          alt="bg"
        />
        <img
          className="h-[8rem] 2xl:h-[9rem] absolute left-[8rem] bottom-[1.5rem] 2xl:bottom-[7rem]"
          src="/Untitled-4.png"
          alt="bg"
        />
        <img
          className="h-[18rem] 2xl:h-[19rem] absolute left-0 top-0"
          src="/Untitled-5.png"
          alt="bg"
        />
        <img
          className="h-[6rem] 2xl:h-[19rem] absolute right-16 top-8"
          src="/Untitled-6.png"
          alt="bg"
        />
      </div>
    </div>
  );
}

export default Dashboard;
