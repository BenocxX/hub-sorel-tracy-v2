import type { Component } from 'svelte';

export type SidebarIcon = Component | string;

export type SidebarLinkItem = {
  type: 'link';
  label: string;
  url: string;
  icon?: SidebarIcon;
};

export type SidebarCollapsibleItem = {
  type: 'collapsible';
  label: string;
  icon?: SidebarIcon;
  url?: string;
  isOpen?: boolean;
  items: SidebarLinkItem[];
};

export type SidebarDropdownItem = {
  type: 'dropdown';
  label: string;
  icon?: SidebarIcon;
  items: SidebarLinkItem[];
};

export type SidebarItem = SidebarLinkItem | SidebarCollapsibleItem | SidebarDropdownItem;

export type SidebarSection = {
  label: string;
  items: SidebarItem[];
};
