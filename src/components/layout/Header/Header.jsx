import HeaderStyles from '@/styles/HeaderStyles';
// Header 컴포넌트
const Header = ({ children }) => {
  return (
    <header css={HeaderStyles}>
      <div className="inner">{children}</div>
    </header>
  );
};

// Logo 컴포넌트
const Logo = () => {
  return <a href="/" className="logo" />;
};

// Nav 컴포넌트
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">서비스 소개</a>
        </li>
        <li className="active">
          <a href="/">자주 묻는 질문</a>
        </li>
        <li>
          <a href="/">새소식</a>
        </li>
        <li>
          <a href="/">상담문의</a>
        </li>
      </ul>
    </nav>
  );
};

Header.Logo = Logo;
Header.Nav = Nav;

export default Header;
