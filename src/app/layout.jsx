/* eslint-disable jsx-a11y/aria-unsupported-elements */
import "@/assets/css/global.scss";
import LayoutComponent from "@/components/LayoutComponent";
import AppThemeProvider from "@/context/ThemeProvider";
import { cookies } from "next/headers";
import Script from "next/script";

export const metadata = {
  title: `${process.env.name} - Portfolio`,
  description: `Hello! I Am ${process.env.name}. I am an experienced Android app developer with over 3+ years of experience in designing and developing high-quality mobile applications. My skills include advanced topics such as MVVM, LiveData, data binding, dagger2, networking, Firebase, Google Maps, Places, Direction API, and more. I have a strong understanding of Kotlin, Java, and Android's modern UI toolkit Jetpack Compose, enabling me to build modern and intuitive user interfaces. I prioritize app performance by implementing efficient coding practices that prevent memory leaks and reduce battery drain. In addition to my Android expertise, I also have some work experience with PHP and Node Js. So, I can provide comprehensive backend and API support to ensure seamless app functionality. If you're looking for a reliable and experienced Android app developer, look no further. Let's work together to bring your app ideas to life.`,
  author: `Qubartech, ${process.env.name}`,
  keywords: [
    `Qubartech, tech, tech company, technology, ${process.env.name}, ${process.env.fullName} portfolio, portfolio`,
  ],
  icons: {
    icon: [
      {
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
      {
        sizes: "16x16",
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
      {
        sizes: "32x32",
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
      {
        sizes: "192x192",
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
      {
        sizes: "512x512",
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "apple-touch-icon",
        href: "/favicon.ico",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const theme = cookies().get("__theme__")?.value || "dark";

  return (
    <html className={theme} lang="en" style={{ colorScheme: theme }}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <meta name="author" content={`Qubartech ${process.env.name}`} />
        <meta
          name="google-site-verification"
          content="KeGYsmT-gRaWpvGnbyqjjx0dyF5hMFJHj5Piue9WcYI"
        />
        <title>Rafiul Islam - Portfolio</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WM7R43S8');
            `,
          }}
        />
      </head>

      <body className="relative">
        <AppThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LayoutComponent>{children}</LayoutComponent>
        </AppThemeProvider>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WM7R43S8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
