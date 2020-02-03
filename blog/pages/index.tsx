import * as React from "react";

import { Layout } from "@acme/design/components";
import Link from "next/link";
import { Models } from "@acme/api";
import { NextPage } from "next";
import { apiClient } from "@acme/api/client";

interface Props {
  posts: Models.Post[];
}

const BlogIndex: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = await apiClient.posts.getListing();
  return { posts };
};

export default BlogIndex;