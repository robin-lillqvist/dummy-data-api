"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function MainNav() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <div className='flex items-center space-x-4 lg:space-x-6'>
      <Link
        href='/'
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Home
      </Link>
      <Link
        href='/api-docs'
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/api-docs" ? "text-primary" : "text-muted-foreground"
        )}
      >
        API Docs
      </Link>
      <Link
        href='/examples'
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/examples" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Examples
      </Link>
      <Button
        variant='ghost'
        size='icon'
        aria-label='Toggle theme'
        className='ml-auto'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </div>
  );
}
