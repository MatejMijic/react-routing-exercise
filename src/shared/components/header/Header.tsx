/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { button, wrapper, link, linkWrapper } from './Header.styles';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <Link to={'/'}>
          <a css={link}>Home</a>
        </Link>
        <Link to={'info'}>
          <a css={link}>Info</a>
        </Link>
        <Link to={'blog'}>
          <a css={link}>Blog</a>
        </Link>

        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
