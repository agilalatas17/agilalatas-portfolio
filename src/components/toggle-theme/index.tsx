'use client';

// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return theme === 'light' ? (
    <Button variant="outline" size="icon-lg" onClick={() => setTheme('dark')}>
      <Moon />
    </Button>
  ) : (
    <Button variant="outline" size="icon-lg" onClick={() => setTheme('light')}>
      <Sun />
    </Button>
  );
}
