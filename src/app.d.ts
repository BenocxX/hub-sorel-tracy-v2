// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Session, User } from '$lib/common/types/prisma-types';

// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      user?: User<{ discordUser: true }> | null;
      session?: Session<{ oauthToken: true; user: { include: { discordUser: true } } }> | null;
    }

    interface PageData {
      user: App.Locals['user'];
    }
  }
}

export {};
