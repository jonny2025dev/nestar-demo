import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname), 
};

export default nextConfig;

// import path from "path";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   outputFileTracingRoot: path.join(__dirname),
//   sassOptions: {
//     includePaths: [path.join(__dirname, "scss")],
//     prependData: `@import "variables.scss";`, // Har bir SCSS faylga avtomatik qo‘shiladi
//   },
// };

// export default nextConfig;
