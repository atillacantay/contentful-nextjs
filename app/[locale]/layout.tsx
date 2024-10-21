import Stack from "@/components/common/stack";
import { getFooterData } from "@/components/templates/footer/footer-gql";
import { getHeaderData } from "@/components/templates/header/header-gql";
import { getMainNavigationData } from "@/components/templates/navigation/navigation-gql";
import { ContentfulContentProvider } from "@/contentful-context";
import { routing } from "@/i18n/routing";
import "@/main.scss";
import ReactQueryProvider from "@/providers/react-query-provider";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { clsxm } from "@/utils/twMerge.utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Header = dynamic(
  () =>
    import("@/components/templates/header").then((module) => module.default),
  { ssr: false }
);
const Footer = dynamic(() =>
  import("@/components/templates/footer").then((module) => module.default)
);
const HeaderNavigation = dynamic(() =>
  import("@/components/templates/navigation").then((module) => module.default)
);

export const metadata: Metadata = {
  title: "Goody Kitchen",
  description: "Goody Kitchen Description",
  icons: {
    icon: [
      { rel: "icon", url: "/favicons/favicon-16x16.png", sizes: "16x16" },
      new URL("/favicons/favicon-16x16.png", process.env.NEXT_PUBLIC_BASE_URL),
      { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32" },
      new URL("/favicons/favicon-32x32.png", process.env.NEXT_PUBLIC_BASE_URL),
    ],
    shortcut: [{ rel: "shortcut icon", url: "/favicons/favicon.ico" }],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = params.locale;
  const activeLocale = mapLocaleToContentfulLocale(locale);
  const headerData = await getHeaderData(activeLocale);
  const footerData = await getFooterData(activeLocale);
  const headerNavigationData = await getMainNavigationData(activeLocale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <UserProvider>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Suspense fallback={<p>loading...</p>}>
              <ReactQueryProvider>
                <ContentfulContentProvider>
                  <div className={clsxm("group/layout")}>
                    <Stack className="sticky top-0 z-20" direction="col">
                      {headerData && (
                        <Header
                          {...headerData}
                          userMenu={{ ...headerData.userMenu, isAuth: false }}
                        />
                      )}
                    </Stack>
                    <div id="layout-header-after" />
                    {headerNavigationData && (
                      <HeaderNavigation {...headerNavigationData} />
                    )}
                    <main className="bg-zinc-50 dark:bg-goki_dark print:bg-white">
                      {children}
                    </main>
                    {footerData && <Footer {...footerData} />}
                  </div>
                </ContentfulContentProvider>
              </ReactQueryProvider>
            </Suspense>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}
