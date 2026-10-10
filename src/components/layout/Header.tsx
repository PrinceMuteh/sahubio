"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
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
        "h-[2px] w-[21px] rounded-full bg-accent transition-opacity",
        visible ? "opacity-100" : "opacity-0",
      )}
    />
  );
}

function NigeriaFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 28"
      role="img"
      aria-label="Nigeria"
      className={cn("h-[21px] w-[30px] shrink-0 xl:h-[28px] xl:w-[38px]", className)}
    >
      <rect width="38" height="28" fill="#fff" />
      <rect width="13" height="28" fill="#257c30" />
      <rect x="25" width="13" height="28" fill="#257c30" />
    </svg>
  );
}

function DesktopNavItem({
  item,
  active,
  dropdownOpen,
  onDropdownChange,
  triggerRef,
}: {
  item: NavItem;
  active: boolean;
  dropdownOpen: boolean;
  onDropdownChange: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const label = (
    <span
      className={cn(
        "text-[14px] leading-5 whitespace-nowrap text-heading transition-colors",
        active ? "font-semibold" : "font-medium group-hover/item:text-brand-700",
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
        className="group/item flex h-full flex-col items-center pt-[29px]"
      >
        {label}
        <span className="mt-1 rounded-full bg-sage px-[7px] whitespace-nowrap text-[9px] leading-[14px] font-semibold text-body">
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
      <div className="group/item h-full" onMouseEnter={() => onDropdownChange(true)}>
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={dropdownOpen}
          aria-controls="desktop-divisions-menu"
          onClick={(event) => {
            onDropdownChange(true);
            if (event.detail === 0) {
              requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>("#desktop-divisions-menu li a")?.focus());
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              onDropdownChange(true);
              requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>("#desktop-divisions-menu li a")?.focus());
            }
          }}
          className={cn("flex h-full cursor-pointer flex-col items-center gap-1", active ? "pt-[35px]" : "pt-[39px]")}
        >
          <span className="flex items-center gap-[2px]">
            {label}
            <ChevronDown
              aria-hidden
              className={cn("size-[14px] text-heading transition-transform duration-200", dropdownOpen && "rotate-180")}
              strokeWidth={2}
            />
          </span>
          <ActiveBar visible={active} />
        </button>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/item flex h-full flex-col items-center gap-1",
        active ? "pt-[35px]" : "pt-[39px]",
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
  const [desktopDivisionsOpen, setDesktopDivisionsOpen] = useState(false);
  const desktopTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!desktopDivisionsOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !barRef.current?.contains(event.target)) {
        setDesktopDivisionsOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [desktopDivisionsOpen]);

  const [menuPathname, setMenuPathname] = useState(pathname);

  // Close the menus whenever the route changes (state reset during render).
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
    setDivisionsOpen(false);
    setDesktopDivisionsOpen(false);
  }

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      ref={barRef}
      className="relative z-40 bg-white"
      onMouseLeave={() => setDesktopDivisionsOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setDesktopDivisionsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && desktopDivisionsOpen) {
          event.preventDefault();
          setDesktopDivisionsOpen(false);
          desktopTriggerRef.current?.focus();
        }
      }}
    >
      <Container className="relative flex h-[76px] items-center justify-between lg:h-[96px]">
        <Link
          href="/"
          aria-label="SAHUBio home"
          className="relative block shrink-0 lg:flex lg:h-full lg:items-center lg:overflow-hidden"
        >
          <Image
            src="/images/brand/logo.png"
            alt="SAHUBio — Sahu Bio Resources Nigeria Limited"
            width={84}
            height={101}
            preload
            className="h-[64px] w-auto lg:ml-[17px] lg:h-[101px]"
          />
        </Link>

        <nav
          aria-label="Main"
          className="absolute inset-y-0 left-[calc(50%-65px)] hidden -translate-x-1/2 lg:block xl:left-[calc(50%-45px)]"
        >
          <ul className="flex h-full items-start gap-3 xl:gap-6">
            {mainNav.map((item) => (
              <li
                key={item.href}
                className="h-full"
                onMouseEnter={() => { if (!item.hasDropdown) setDesktopDivisionsOpen(false); }}
                onFocus={() => { if (!item.hasDropdown) setDesktopDivisionsOpen(false); }}
              >
                <DesktopNavItem
                  item={item}
                  active={isActive(pathname, item)}
                  dropdownOpen={desktopDivisionsOpen}
                  onDropdownChange={setDesktopDivisionsOpen}
                  triggerRef={desktopTriggerRef}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-[10px] xl:mr-[5px] xl:gap-5">
          <NigeriaFlag />
          <ButtonLink
            href="/contact"
            className="hidden gap-2.5 px-5 lg:inline-flex xl:w-[190px] xl:gap-4 xl:px-6"
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
        </div>
      </Container>

      {desktopDivisionsOpen && (
        <nav
          id="desktop-divisions-menu"
          aria-label="Agro divisions"
          onClick={() => setDesktopDivisionsOpen(false)}
          className="absolute inset-x-0 top-full hidden bg-sage lg:block"
        >
          <Container className="grid grid-cols-[280px_minmax(0,1fr)] gap-8 py-8">
            <div>
              <Link href="/agro-divisions" className="text-[24px] leading-[29px] text-heading hover:underline">
                Agro Divisions
              </Link>
              <p className="mt-2 text-[13px] leading-[18px] text-body">Explore our specialized units</p>
            </div>
            <ul className="grid max-w-[960px] grid-cols-3 gap-x-[30px] gap-y-[18px]">
              {divisions.map((division) => (
                <li key={division.slug}>
                  <Link
                    href={divisionHref(division.slug)}
                    className="group/division flex items-start gap-4 text-[14px] leading-[18px] text-heading hover:underline"
                  >
                    <ArrowUpRight aria-hidden className="mt-[2px] size-3 shrink-0" strokeWidth={1.5} />
                    <span>{division.footerLabel === "Research & Lab" ? division.footerLabel : division.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}

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
                          <span className="rounded-full bg-sage-200 px-2 text-[11px] leading-5 font-semibold text-body">
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
