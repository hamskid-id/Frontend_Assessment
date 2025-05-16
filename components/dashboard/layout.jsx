'use client'

import { usePathname } from 'next/navigation'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Bell, Search } from 'lucide-react'
import Brand from '../../public/bottom_logo.svg'
import { Logo } from '../shared/Logo'
import {
  AvatarIcon,
  DashboardIcon,
  Home03Icon,
  LogoutIcon,
  BranchesIcon,
  UsersIcon,
  CardSchemeIcon,
  CardProfileIcon,
  CardRequestIcon,
  StockIcon,
  CardsIcon,
  Bloack_UnblockCardIcon,
  AuthorizationListIcon,
  AuthorizationQueueIcon,
  TrailIcon,
  AccountIcon,
} from '../svg'
import { Input } from '../ui/input'
import { Text } from '../shared/Text'
import { CustomImage } from '../shared/Image'

const generalItems = [
  {
    title: 'Branches',
    url: 'branches',
    svgicon: BranchesIcon,
  },
  {
    title: 'Users',
    url: 'users',
    svgicon: UsersIcon,
  },
  {
    title: 'Card Scheme',
    url: 'card-scheme',
    svgicon: CardSchemeIcon,
  },
  {
    title: 'Card Profile',
    url: 'card-profile',
    svgicon: CardProfileIcon,
  },
  {
    title: 'Card Requests',
    url: 'card-requests',
    svgicon: CardRequestIcon,
  },
  {
    title: 'Stock',
    url: 'stock',
    svgicon: StockIcon,
  },
  {
    title: 'Cards',
    url: 'cards',
    svgicon: CardsIcon,
  },
  {
    title: 'Block/Unblock Card',
    url: 'action-card',
    svgicon: Bloack_UnblockCardIcon,
  },
  {
    title: 'Authorization List',
    url: 'authorization-list',
    svgicon: AuthorizationListIcon,
  },
  {
    title: 'Authorization Queue',
    url: 'authorization-queue',
    svgicon: AuthorizationQueueIcon,
  },
  {
    title: 'Trail',
    url: 'trail',
    svgicon: TrailIcon,
  },
  {
    title: 'Account',
    url: 'account',
    svgicon: AccountIcon,
  },
]

const SIDEBAR_WIDTH = '230px'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  const isActive = (url) => {
    if (url === '') {
      return pathname === '/dashboard'
    }
    return pathname === `/dashboard/${url}`
  }

  return (
    <SidebarProvider
      style={{
        '--sidebar-width': SIDEBAR_WIDTH,
        '--sidebar-width-mobile': SIDEBAR_WIDTH,
      }}
    >
      <Sidebar>
        <SidebarHeader>
          <Logo style='w-[138px] h-[45px] my-4' />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a
                      href={`/dashboard`}
                      className='flex items-center gap-3'
                      style={{
                        color: isActive('') ? '#002F6C' : '',
                        backgroundColor: isActive('') ? '#E4F0FF' : '',
                      }}
                    >
                      <DashboardIcon isActive={isActive('')} />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarGroupLabel className='text-gray_400'>
                  MAIN MENU
                </SidebarGroupLabel>
                {generalItems.map((item) => {
                  const active = isActive(item.url)
                  const Icon = item.svgicon

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={`/dashboard/${item.url}`}
                          className='flex items-center gap-3'
                          style={{
                            color: active ? '#002F6C' : '',
                            backgroundColor: active ? '#E4F0FF' : '',
                          }}
                        >
                          <Icon isActive={active} />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/`} className='flex items-center gap-3'>
                <LogoutIcon />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Text style='text-[12px] font-[500] mt-8 mb-4 text-gray_400'>
            POWERED BY
          </Text>
          <CustomImage
            src={Brand}
            priority={true}
            style='w-[83px] h-[30px] mb-4'
          />
        </SidebarFooter>
      </Sidebar>

      <main className='relative w-full'>
        <header className='sticky top-0 z-10 w-full bg-white border'>
          <div className='flex h-14 items-center justify-between px-4 w-full'>
          <SidebarTrigger />
            <div className='flex gap-3 items-center text-[12xp] font-[500]'>
              <Home03Icon />
              {'Dashboard'}
            </div>

            <div className='flex items-center gap-4'>
              <HeaderSearch />
              <Bell className='w-[20px] h-[20px] cursor-pointer' />
              <AvatarIcon />
            </div>
          </div>
        </header>

        <div className='container bg-background py-3'>{children}</div>
      </main>
    </SidebarProvider>
  )
}

const HeaderSearch = () => {
  return (
    <div className='md:flex hidden gap-2 items-center border rounded-[40px] w-[214px] h-[32px] px-3'>
      <Search className='w-[16px] h-[16px]' />
      <Input placeholder="Search" className='shadow-none flex-grow h-full border-none focus-visible:none focus-visible:ring-none focus-visible:ring-0' />
    </div>
  )
}
