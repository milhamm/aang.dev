export type BlogData = {
  title: string;
  status: 'draft' | 'published';
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export const blogData: Array<BlogData> = [
  {
    title: "Let's Write React Query Lite",
    status: 'draft',
    createdAt: '29 Mar 2025',
    updatedAt: '29 Mar 2025',
    slug: '/blog/lets-write-react-query-lite',
  },
];
