/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'views', 'style')],
    additionalData: `
      @import 'mixins.scss';
      @import 'variables.scss';
    `,
  }
}

export default nextConfig;