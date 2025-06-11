// components/Navbar.tsx
'use client'



import { DocumentDuplicateIcon, EnvelopeIcon, HomeIcon,  UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const navigation = [
    {name:'Home',href:'/',current: true,icon: <HomeIcon className='w-6'/>},
    {name:'Posts',href:'/blog/posts',current: false,icon:<DocumentDuplicateIcon className='w-6'/>},
    {name:'About',href:'/blog/about',current: false,icon: <UserGroupIcon className='w-6'/>},
    {name:'Contact',href:'/blog/contact',current: false,icon:<EnvelopeIcon className='w-6'/>},
]
export default function NavLink() {
  const pathName = usePathname()
  console.log('pathName::',pathName);
  
  return (
    // <Disclosure as="nav" className="bg-gray-800">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block size-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block size-6" aria-hidden="true" />
    //               )}
    //             </DisclosureButton>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex shrink-0 items-center">
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
    //                 alt="Your Company"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <Link
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current
    //                         ? 'bg-gray-900 text-white'
    //                         : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <button
    //               type="button"
    //               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
    //             >
    //               <span className="sr-only">View notifications</span>
    //               <BellIcon className="size-6" aria-hidden="true" />
    //             </button>

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="size-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   />
    //                 </MenuButton>
    //               </div>
    //               <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
    //                 <MenuItem>
    //                   {({ active }) => (
    //                     <Link
    //                       href="#"
    //                       className={classNames(
    //                         active ? 'bg-gray-100' : '',
    //                         'block px-4 py-2 text-sm text-gray-700'
    //                       )}
    //                     >
    //                       Your Profile
    //                     </Link>
    //                   )}
    //                 </MenuItem>
    //                 <MenuItem>
    //                   {({ active }) => (
    //                     <Link
    //                       href="#"
    //                       className={classNames(
    //                         active ? 'bg-gray-100' : '',
    //                         'block px-4 py-2 text-sm text-gray-700'
    //                       )}
    //                     >
    //                       Settings
    //                     </Link>
    //                   )}
    //                 </MenuItem>
    //                 <MenuItem>
    //                   {({ active }) => (
    //                     <Link
    //                       href="#"
    //                       className={classNames(
    //                         active ? 'bg-gray-100' : '',
    //                         'block px-4 py-2 text-sm text-gray-700'
    //                       )}
    //                     >
    //                       Sign out
    //                     </Link>
    //                   )}
    //                 </MenuItem>
    //               </MenuItems>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <DisclosurePanel className="sm:hidden">
    //         <div className="space-y-1 px-2 pt-2 pb-3">
    //           {navigation.map((item) => (
    //             <DisclosureButton
    //               key={item.name}
    //               as={Link}
    //               href={item.href}
    //               className={classNames(
    //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </DisclosureButton>
    //           ))}
    //         </div>
    //       </DisclosurePanel>
    //     </>
    //   )}
    // </Disclosure>
    <div>
      {
        navigation.map((item)=>{
          return (
            <Link
            key={item.name}
            href={item.href} 
            className={
              clsx('flex h-[48px] grow item-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:justify-start md:p-2 md:px-3',
                {
                  'bg-purple-100':pathName === item.href
                }
              )
            }
            >
              {/* <LinkIcon className='w-6'/> */}
              {item.icon}
              <p className='hidden md:block'>{item.name}</p>
            </Link>
          )

        })
      }
    </div>
  )
}
