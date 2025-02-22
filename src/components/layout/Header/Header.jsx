import { useNavigate } from 'react-router-dom';
// Header 컴포넌트
const Header = ({ children }) => {
  return (
    <header>
      <div className="inner">{children}</div>
    </header>
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
    <nav>
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
    </nav>
  );
};

Header.Logo = Logo;
Header.Nav = Nav;

export default Header;
