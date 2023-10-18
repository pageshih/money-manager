import { Bars3Icon, UserCircleIcon } from '@icons/solid';

const Header = () => {
  return (
    <header className="w-full bg-white py-1 px-2 flex justify-between items-center shadow-sm z-10 relative">
      <button className="w-[30px] h-[30px] p-1 hover:bg-slate-100 rounded-sm">
        <Bars3Icon className="w-full h-full" />
      </button>
      <div className="flex gap-1 items-center hover:cursor-pointer">
        <div className="w-6 h-6">
          <UserCircleIcon className="w-full h-full" />
        </div>
        User
      </div>
    </header>
  );
};

export default Header;
