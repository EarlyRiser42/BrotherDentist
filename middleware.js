import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export function middleware(request) {
  // 지원되는 로케일 목록
  let locales = ["en-US", "en", "ko"];
  let defaultLocale = "ko";

  // 클라이언트의 언어 선호도 확인
  let headers = request.headers;
  let languages = new Negotiator({ headers }).languages();
  if (languages.length === 1 && languages[0] === "*") {
    languages = ["ko"];
  }
  let preferredLocale = match(languages, locales, defaultLocale);

  // URL 경로에서 로케일 확인
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // 리다이렉트: 선호 로케일이 URL 경로에 포함되지 않은 경우
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
