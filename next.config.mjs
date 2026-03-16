/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  env: {
    name: "Rafiul Islam",
    fullName: "Md Rafiul Islam",
    NEXT_PUBLIC_NAME: "Rafiul Islam",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/css")],
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.**.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
