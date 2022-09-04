import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      <Button color="red" text="Delete" />
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
