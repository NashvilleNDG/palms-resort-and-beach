import { BASE_URL } from './site';

const PAGE_LABELS: Record<string, string> = {
  rooms: 'Rooms',
  BeachActivities: 'Beach & Activities',
  Dining: 'Dining',
  Gallery: 'Gallery',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
};

/**
 * Returns BreadcrumbList JSON-LD for a given path.
 * @param path - e.g. '/' | '/rooms' | '/contact'
 * @param pageName - Display name for the current page (last item)
 */
export function getBreadcrumbSchema(path: string, pageName: string) {
  const list: { '@type': 'ListItem'; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
  ];
  if (!path || path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: list,
    };
  }
  const segments = path.split('/').filter(Boolean);
  segments.forEach((seg, i) => {
    const isLast = i === segments.length - 1;
    list.push({
      '@type': 'ListItem',
      position: i + 2,
      name: isLast ? pageName : PAGE_LABELS[seg] || seg,
      item: BASE_URL + '/' + segments.slice(0, i + 1).join('/'),
    });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list,
  };
}
