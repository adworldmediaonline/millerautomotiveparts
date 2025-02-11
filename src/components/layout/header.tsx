import Link from 'next/link';
import { Menu, Phone, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';

interface BaseItem {
  title: string;
  href: string;
}

interface DetailedItem extends BaseItem {
  description?: string;
  features?: string[];
}

interface NavigationSection {
  title: string;
  items?: DetailedItem[];
  href?: string;
}

const navigationItems: NavigationSection[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Company',
    href: '/company',
  },
  {
    title: 'Services',
    items: [
      {
        title: 'Stocked Inventory',
        href: '/services#stocked-inventory',
      },
      {
        title: 'Product Development',
        href: '/services#product-development',
      },
      {
        title: 'Process',
        href: '/services#process',
      },
    ],
  },
  {
    title: 'Products',
    items: [
      {
        title: 'Chassis Components',
        href: '/products/chassis',
      },
      {
        title: 'Steel & Rubber Components',
        href: '/products/components',
      },
      {
        title: 'Steering Systems',
        href: '/products/steering',
      },
      {
        title: 'Suspension Parts',
        href: '/products/suspension',
      },
    ],
  },
  {
    title: 'Quality Control',
    href: '/quality-control',
  },
];

export function Header() {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="w-full bg-miller-red text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-end gap-2 sm:gap-8">
          <a
            href="tel:650-464-5636"
            className="flex items-center justify-center sm:justify-start gap-2 hover:text-white/90 text-sm sm:text-base"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Phone:</span>
            <span>650-464-5636</span>
          </a>
          <a
            href="mailto:info@millerautomotiveparts.com"
            className="flex items-center justify-center sm:justify-start gap-2 hover:text-white/90 text-sm sm:text-base"
          >
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Mail:</span>
            <span className="hidden sm:inline">
              info@millerautomotiveparts.com
            </span>
            <span className="inline sm:hidden">
              info@millerautomotiveparts.com
            </span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.webp"
              alt="Miller Automotive Parts"
              width={230}
              height={230}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                          {item.items.map(subItem => (
                            <li key={subItem.title} className="row-span-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    'flex flex-col gap-2 rounded-md p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                  )}
                                >
                                  <div className="text-base font-medium leading-none">
                                    {subItem.title}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  )}
                                  {subItem.features && (
                                    <ul className="mt-2 text-sm text-muted-foreground">
                                      {subItem.features.map(feature => (
                                        <li
                                          key={feature}
                                          className="mt-1 flex items-center"
                                        >
                                          <span className="mr-2 h-1 w-1 rounded-full bg-foreground/40" />
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href!}
                        className={cn(
                          'inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="hidden">
                Miller Automotive Parts
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                {navigationItems.map(item => (
                  <div key={item.title} className="flex flex-col gap-2">
                    {item.items ? (
                      <>
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <div className="flex flex-col gap-2 pl-4">
                          {item.items.map(subItem => (
                            <div
                              key={subItem.title}
                              className="flex flex-col gap-1"
                            >
                              <SheetTrigger asChild>
                                <Link
                                  href={subItem.href}
                                  className="text-sm font-medium hover:text-primary"
                                >
                                  {subItem.title}
                                </Link>
                              </SheetTrigger>
                              {subItem.description && (
                                <p className="text-xs text-muted-foreground">
                                  {subItem.description}
                                </p>
                              )}
                              {subItem.features && (
                                <ul className="mt-1 text-xs text-muted-foreground">
                                  {subItem.features.map(feature => (
                                    <li
                                      key={feature}
                                      className="flex items-center"
                                    >
                                      <span className="mr-2 h-1 w-1 rounded-full bg-foreground/40" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <SheetTrigger asChild>
                        <Link
                          href={item.href!}
                          className="text-lg font-medium hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </SheetTrigger>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
