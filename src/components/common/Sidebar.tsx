import {
  IconAddressBook,
  IconLogout,
  IconPhoneCall,
  IconUser,
  IconWallet,
} from '@tabler/icons-react'

export const Sidebar = () => {
  const navLinks = [
    {
      name: 'Profile',
      href: '/profile',
      icon: <IconUser />,
    },
    {
      name: 'Outpass',
      href: '/outpass',
      icon: <IconAddressBook />,
    },
    {
      name: 'Grievances',
      href: '/grievances',
      icon: <IconWallet />,
    },
    {
      name: 'Counsellor',
      href: '/counsellor',
      icon: <IconPhoneCall />,
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: <IconLogout />,
    },
  ]

  return (
    <div className="w-72 h-screen bg-[#4D4D29] hidden md:block">
      <div className="space-y-6 flex flex-col px-6 py-10">
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className="flex bg-[#E8E7D8] hover:bg-white rounded-full items-center gap-4 px-8 py-5"
          >
            <span>{link.icon}</span>
            <span
              className="font-normal antialiased"
              style={{
                fontFamily: 'inter',
              }}
            >
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
