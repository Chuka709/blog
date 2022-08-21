import client from "/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{_createdAt, title, subtitle, 'image':cover_image.asset->url, date, 'slug':slug.current, 'publisher':publisher->{title, 'picture':picture.asset->url}} | order(date desc)`
  );
  return posts;
};
export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, cover_image, date, content[]{..., 'asset':asset->}, 'slug':slug.current, 'publisher':publisher->{title, 'picture':picture.asset->url}}`,
    { slug }
  );
  return post;
};
