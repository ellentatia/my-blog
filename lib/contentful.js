import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log('Error getting Entries.');
}

export async function fetchEntry(slug) {
  const entries = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
  });
  if (entries.items) return entries.items[0];
  console.log('Error getting Entry.');
}
