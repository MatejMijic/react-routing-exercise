import { BlogPostCard } from 'modules';
// import { useLocation } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  description: string;
};

export const BlogDetails: React.FC<Props> = () => {
  // const location = useLocation();
  return (
    <div>
      <BlogPostCard title={'Blog title'} description={'Blog description'} />
    </div>
  );
};
