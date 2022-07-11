import { BlogPostCard } from 'modules';
import { useLocation } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  description: string;
};

export const BlogDetails: React.FC<Props> = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <BlogPostCard
        title={location.state.title}
        description={location.state.description}
      />
    </div>
  );
};
