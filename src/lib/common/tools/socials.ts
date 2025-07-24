import FacebookIcon from '$lib/client/components/ui-custom/icons/socials/facebook-icon.svelte';
import GithubIcon from '$lib/client/components/ui-custom/icons/socials/github-icon.svelte';
import InstagramIcon from '$lib/client/components/ui-custom/icons/socials/instagram-icon.svelte';
import LinkedinIcon from '$lib/client/components/ui-custom/icons/socials/linkedin-icon.svelte';
import YoutubeIcon from '$lib/client/components/ui-custom/icons/socials/youtube-icon.svelte';
import XIcon from '$lib/client/components/ui-custom/icons/socials/x-icon.svelte';

export const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/HUBcegepsoreltracy',
    icon: FacebookIcon,
    isPrimary: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://ca.linkedin.com/company/hubcegepsoreltracy',
    icon: LinkedinIcon,
    isPrimary: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hub.cegepst/',
    icon: InstagramIcon,
    isPrimary: true,
  },
  {
    name: 'X',
    href: 'https://x.com/cegepsoreltracy',
    icon: XIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/BenocxX',
    icon: GithubIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/user/cegepsoreltracy/streams',
    icon: YoutubeIcon,
  },
];
