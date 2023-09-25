const RSS = require("rss");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../config/config.json");
const { blog_folder } = config.settings;
const feedDir = "./public";

// get post data
const getPosts = fs.readdirSync(path.join(`content/${blog_folder}`));

//const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/));

const sortedPosts = getPosts.sort((a, b) => {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
});

const posts = sortedPosts.map((filename) => {
  const slug = filename.replace(".mdx", "");
  const postData = fs.readFileSync(
    path.join(`content/${blog_folder}/`, filename),
    "utf-8"
  );
  const { data } = matter(postData);
  const content = matter(postData).content;

  return {
    frontmatter: data,
    content: content,
    slug: slug,
  };
});

const site_url = "iamskratsch.github.io";

const feedOptions = {
  title: "iamskratsch | RSS Feed",
  description: "Welcome to iamskratsch!",
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Skratsch Solutions LLC`,
};

const feed = new RSS(feedOptions);

posts.forEach((post) => {
  if (!post.frontmatter.draft && post.frontmatter.title != "Blog Posts") {
    feed.item({
      title: `${post.frontmatter.title}`,
      description: `${post.frontmatter.description}`,
      url: `${site_url}/blog/${post.slug}`,
      date: `${post.frontmatter.date}`,
    });
  }
});

try {
  fs.writeFileSync(`${feedDir}/rss.xml`, feed.xml({ indent: true }));
} catch (err) {
  console.error(err);
}
