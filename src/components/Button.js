const checkBtnClass = (name) => {
  if (name === "Login") {
    return "form-btn-login";
  } else {
    return "form-btn-signup";
  }
};

export default function Button(props) {
  const classname = checkBtnClass(props.btn_name);
  return (
    <a href="#" className={classname}>
      {props.btn_name}
    </a>
  );
}
