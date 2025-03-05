export default function manifest() {
  return {
    name: "Rafiul Islam Portfolio - Qubartech",
    short_name: "Rafiul's Portfolio - Qubartech",
    author: "Rafiul Islam, qubartech",
    keywords: [
      `Qubartech, tech, tech company, technology, ${process.env.name}, ${process.env.fullName} portfolio, portfolio`,
    ],
    description: `Hello! I Am ${process.env.name}. I am an experienced Android app developer with over 3+ years of experience in designing and developing high-quality mobile applications. My skills include advanced topics such as MVVM, LiveData, data binding, dagger2, networking, Firebase, Google Maps, Places, Direction API, and more. I have a strong understanding of Kotlin, Java, and Android's modern UI toolkit Jetpack Compose, enabling me to build modern and intuitive user interfaces. I prioritize app performance by implementing efficient coding practices that prevent memory leaks and reduce battery drain. In addition to my Android expertise, I also have some work experience with PHP and Node Js. So, I can provide comprehensive backend and API support to ensure seamless app functionality. If you're looking for a reliable and experienced Android app developer, look no further. Let's work together to bring your app ideas to life.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
