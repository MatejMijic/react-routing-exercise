/** @jsxImportSource @emotion/react */
import { wrapper } from './BlogPostCard.styles';

interface BlogPostCardProps {
  title: string;
  description: string;
  onReadBlog?: () => void;
}
// Napraviti preko useState
// useLocation

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  onReadBlog,
}) => {
  return (
    <div css={wrapper}>
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={onReadBlog}>Read blog</button>
    </div>
  );
};
