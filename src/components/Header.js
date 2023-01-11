function Header() {
  function openModal(e) {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay")

    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return (
    <div className="header">
      <h1>The Decider</h1>
      <p>Let me make the decision for you.</p>
      <button className="btn-open" onClick={openModal}>Select your choices</button>
    </div>
  );
}

export default Header;