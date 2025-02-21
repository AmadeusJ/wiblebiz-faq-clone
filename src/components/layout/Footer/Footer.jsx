const Footer = ({ children }) => {
  return (
    <footer>
      <div className="inner">{children}</div>
    </footer>
  );
};

const Information = ({ children }) => {
  return (
    <div className="information">
      <span className="util">
        <button type="button">
          <b>개인정보 처리 방침</b>
        </button>
        <button type="button">
          <b>이용약관</b>
        </button>
      </span>
      {children}
    </div>
  );
};

const Address = () => {
  return (
    <address>
      <p>
        <span>지원자 : 정다운</span>
        <span>연락처 : 010-9157-2159</span>
      </p>
      <p>
        <span>이메일 : dawoonjung1026@gmail.com</span>
      </p>
    </address>
  );
};

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>© 2023 KIA CORP. All Rights Reserved.</p>
    </div>
  );
};

Footer.Information = Information;
Footer.Address = Address;
Footer.CopyRight = CopyRight;

export default Footer;
