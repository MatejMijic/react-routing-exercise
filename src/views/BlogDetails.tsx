import { BlogPostCard } from 'modules';
import { useLocation } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  description: string;
};

export const BlogDetails: React.FC<Props> = () => {
  const location = useLocation();
  const state = location.state as Props;

  return (
    <div>
      <BlogPostCard title={state.title} description={state.description} />
    </div>
  );
};
