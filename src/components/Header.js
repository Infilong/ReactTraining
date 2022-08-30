const Header = ({para}) => {
  return (
    <header>
      <h1>{para}</h1>
    </header>
  );
};

Header.defaultProps={
  para: "Default property"
}
export default Header;
