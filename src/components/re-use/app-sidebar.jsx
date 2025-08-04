import {
  Home,
  Info,
  Menu,
  Calendar,
  ShoppingCart,
  Phone,
  Star,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "#about",
    icon: Info,
    anchor: true,
  },
  {
    title: "Menu",
    url: "#menu",
    icon: Menu,
    anchor: true,
  },
  {
    title: "Reservations",
    url: "/reservations",
    icon: Calendar,
    anchor: false,
  },
  {
    title: "Order Online",
    url: "/order",
    icon: ShoppingCart,
    anchor: false,
  },
];

const quickLinks = [
  {
    title: "Contact Us",
    url: "#contact",
    icon: Phone,
  },
  {
    title: "Reviews",
    url: "#testimonials",
    icon: Star,
  },
];

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <div className='flex items-center gap-3 px-4 py-3'>
          <img
            src='/logo.svg'
            alt='Little Lemon Logo'
            className='w-full pr-12'
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.anchor ? (
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Quick Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='p-4 text-xs text-sidebar-foreground/70'>
          © 2024 Little Lemon Restaurant
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
