"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav, type NavItem } from "@/data/navigation";
import { divisions, divisionHref } from "@/data/divisions";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function ActiveBar({ visible }: { visible: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "h-[3px] w-5 rounded-full bg-accent transition-opacity",
        visible ? "opacity-100" : "opacity-0",
      )}
    />
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const label = (
    <span
      className={cn(
        "leading-5 whitespace-nowrap transition-colors",
        active
          ? "text-[16px] font-semibold text-brand-800"
          : "text-[14px] text-ink group-hover/item:text-brand-800",
        item.badge && "text-[16px]",
      )}
    >
      {item.label}
    </span>
  );

  if (item.badge) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className="group/item flex h-full flex-col items-center pt-[27px]"
      >
        {label}
        <span className="mt-1 rounded-full bg-sage-200 px-[6px] text-[9px] leading-[15px] font-semibold text-[#6b7064]">
          {item.badge}
        </span>
        <span className="mt-[3px]">
          <ActiveBar visible={active} />
        </span>
      </Link>
    );
  }

  if (item.hasDropdown) {
    return (
      <div className="group/item relative h-full">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn("flex h-full flex-col items-center gap-[2px]", active ? "pt-[36px]" : "pt-[37px]")}
        >
          <span className="flex items-center gap-[6px]">
            {label}
            <ChevronDown
              aria-hidden
              className="size-[14px] text-ink transition-transform duration-200 group-hover/item:rotate-180 group-focus-within/item:rotate-180"
              strokeWidth={2}
            />
          </span>
          <ActiveBar visible={active} />
        </Link>

        <div className="invisible absolute top-[68px] left-1/2 z-50 w-[300px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within/item:visible group-focus-within/item:opacity-100 group-hover/item:visible group-hover/item:opacity-100">
          <ul className="rounded-[20px] border border-line bg-white p-2 shadow-[0_24px_48px_-16px_rgba(23,45,33,0.25)]">
            {divisions.map((division) => (
              <li key={division.slug}>
                <Link
                  href={divisionHref(division.slug)}
                  className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[14px] text-ink transition-colors hover:bg-cream hover:text-brand-800"
                >
                  <span className="w-6 text-[12px] text-muted">{division.number}</span>
                  {division.title}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-line pt-1">
              <Link
                href={item.href}
                className="flex items-center rounded-[14px] px-3 py-2.5 text-[14px] font-semibold text-brand-800 transition-colors hover:bg-cream"
              >
                View all divisions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/item flex h-full flex-col items-center gap-[2px]",
        active ? "pt-[36px]" : "pt-[37px]",
      )}
    >
      {label}
      <ActiveBar visible={active} />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  const [menuPathname, setMenuPathname] = useState(pathname);

  // Close the menus whenever the route changes (state reset during render).
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
    setDivisionsOpen(false);
  }

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div ref={barRef} className="relative z-40 bg-white">
      <Container className="relative flex h-[76px] items-center justify-between lg:h-[96px]">
        <Link href="/" aria-label="SAHUBio home" className="relative block shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="SAHUBio — Sahu Bio Resources Nigeria Limited"
            width={75}
            height={90}
            preload
            className="h-[64px] w-auto lg:mt-[6px] lg:h-[90px]"
          />
        </Link>

        <nav
          aria-label="Main"
          className="absolute inset-y-0 left-[calc(50%-8px)] hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex h-full items-start gap-3 xl:gap-6">
            {mainNav.map((item) => (
              <li key={item.href} className="h-full">
                <DesktopNavItem item={item} active={isActive(pathname, item)} />
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink
          href="/contact"
          className="hidden gap-2.5 px-5 lg:inline-flex xl:w-[188px] xl:gap-4 xl:px-6"
        >
          Partner With Us
        </ButtonLink>

        <button
          type="button"
          onClick={() => {
            // The header scrolls with the page, so pin the menu to its current bottom edge.
            setMenuTop(barRef.current?.getBoundingClientRect().bottom ?? 0);
            setOpen((value) => !value);
          }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border border-line text-brand-800 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          style={{ top: menuTop }}
          className="animate-fade-in fixed inset-x-0 bottom-0 overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
        >
          <Container as="nav" aria-label="Mobile" className="py-6">
            <ul className="flex flex-col">
              {mainNav.map((item) => {
                const active = isActive(pathname, item);
                return (
                  <li key={item.href} className="border-b border-line">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex flex-1 items-center gap-3 py-4 text-[17px]",
                          active ? "font-semibold text-brand-800" : "text-ink",
                        )}
                      >
                        {item.label}
                        {item.badge && (
                          <span className="rounded-full bg-sage-200 px-2 text-[11px] leading-5 font-semibold text-[#6b7064]">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          type="button"
                          onClick={() => setDivisionsOpen((value) => !value)}
                          aria-expanded={divisionsOpen}
                          aria-label="Toggle agro divisions"
                          className="flex size-10 items-center justify-center text-ink"
                        >
                          <ChevronDown
                            className={cn("size-5 transition-transform", divisionsOpen && "rotate-180")}
                          />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && divisionsOpen && (
                      <ul className="mb-4 flex flex-col gap-1 rounded-[16px] bg-cream p-2">
                        {divisions.map((division) => (
                          <li key={division.slug}>
                            <Link
                              href={divisionHref(division.slug)}
                              className="flex gap-3 rounded-[12px] px-3 py-2.5 text-[15px] text-ink hover:bg-white"
                            >
                              <span className="w-6 text-[13px] text-muted">{division.number}</span>
                              {division.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <ButtonLink href="/contact" className="mt-8 w-full">
              Partner With Us
            </ButtonLink>
          </Container>
        </div>
      )}
    </div>
  );
}
