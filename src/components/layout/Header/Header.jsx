import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import HeaderStyled from './Header.styled';
import HeaderNavStyled from './HeaderNav.styled';
// Header 컴포넌트
const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: theme.spacing.pxMd.base,
          height: theme.spacing.pxMd.base,
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </HeaderStyled>
  );
};

// Logo 컴포넌트
const Logo = () => {
  const navigate = useNavigate();
  return <a onClick={() => navigate('/')} className="logo" />;
};

// Nav 컴포넌트
const Nav = () => {
  const navigate = useNavigate();
  return (
    <HeaderNavStyled>
      <ul>
        <li>
          <a onClick={() => navigate('/')}>서비스 소개</a>
        </li>
        <li className="active">
          <a onClick={() => navigate('/')}>자주 묻는 질문</a>
        </li>
        <li>
          <a onClick={() => navigate('/')}>새소식</a>
        </li>
        <li>
          <a onClick={() => navigate('/')}>상담문의</a>
        </li>
      </ul>
    </HeaderNavStyled>
  );
};

Header.Logo = Logo;
Header.Nav = Nav;

export default Header;
