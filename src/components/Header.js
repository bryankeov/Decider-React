import "./Header.css";

function Header(props) {
  //Opens pop up to add more choices
  function openModal() {
    props.setIsOpen(true);
  }

  return (
    <div className="header">
      <h1>The Decider</h1>
      <p>Let me make the decision for you.</p>
      <button type="button" className="btn-open" onClick={openModal}>
        Select your choices
      </button>
    </div>
  );
}

export default Header;
