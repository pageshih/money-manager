import Link from 'next/link';
import { Cog6ToothIcon } from '@icons/solid';
import clsx from 'clsx';

const SideMenu = ({ isShow }: { isShow: boolean }) => {
  const menuList = [
    {
      title: 'Daily Cost',
      href: '/dailyCost',
    },
    {
      title: 'Month Cost',
      href: '/monthCost',
    },
  ];
  return (
    <aside className={clsx('bg-white basis-[400px] pt-2 pb-4 lg:flex flex-col justify-between', {
      'flex': isShow,
      'hidden': !isShow
    })}>
      <ul>
        {menuList.map(({ title, href }) => (
          <li key={href} className="py-2 px-4">
            <Link
              className="block w-full hover:underline hover:text-indigo-600"
              href={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="flex gap-1 items-center w-full px-4 py-3 hover:bg-slate-100">
        <Cog6ToothIcon className="basis-6 text-slate-700" />
        設定
      </button>
    </aside>
  );
};

export default SideMenu;
