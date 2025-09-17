import type { Cookies } from '@sveltejs/kit';

const key = 'redirectTo';

export class RedirectToCookie {
  public static set(cookies: Cookies, currentUrl: URL) {
    cookies.set(key, currentUrl.pathname + currentUrl.search, { path: '/' });
  }

  public static get(cookies: Cookies, defaultPath: string) {
    const redirectTo = cookies.get(key);
    cookies.delete(key, { path: '/' });

    return redirectTo ?? defaultPath;
  }
}
