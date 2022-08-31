import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Button is clicked")
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick}/>
      <Button color="red" text="Delete" onClick={onClick}/>
      <Button color="black" text="Save" />
    </header>
  );
};

Header.defaultProps = {
  title: "Default property",
};

Header.propTypes = {
  title: PropTypes.string,
};

//CSS in JS
const HeadingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
