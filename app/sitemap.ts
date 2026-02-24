import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/rooms',
    '/BeachActivities',
    '/Dining',
    '/Gallery',
    '/contact',
    '/privacy',
    '/terms',
  ];
  return routes.map((path) => {
    const priority =
      path === ''
        ? 1
        : path === '/privacy' || path === '/terms'
          ? 0.5
          : 0.8;
    return {
      url: path ? `${BASE_URL}${path}` : BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    };
  });
}
