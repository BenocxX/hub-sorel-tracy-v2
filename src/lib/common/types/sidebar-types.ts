import type { Icon } from 'lucide-svelte';
import type { Component } from 'svelte';

export type SidebarIcon = Component | typeof Icon;

export type SidebarSection = {
  type: 'section';
  label: string;
  isHidden?: boolean;
  items: SidebarItem[];
};

export type SidebarLinkItem = {
  type: 'link';
  label: string;
  url: string;
  target?: '_self' | '_blank';
  icon?: SidebarIcon;
  isHidden?: boolean;
};

export type SidebarCollapsibleItem = {
  type: 'collapsible';
  label: string;
  icon?: SidebarIcon;
  url?: string;
  isHidden?: boolean;
  isOpen?: boolean;
  items: SidebarLinkItem[];
};

export type SidebarDropdownItem = {
  type: 'dropdown';
  label: string;
  icon?: SidebarIcon;
  isHidden?: boolean;
  items: SidebarLinkItem[];
};

export type SidebarItem =
  | SidebarSection
  | SidebarLinkItem
  | SidebarCollapsibleItem
  | SidebarDropdownItem;
