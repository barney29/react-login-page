import Button from "./Button";
import FormInput from "./FormInput";
import SocialMedia from "./SocialMedai";

export default function LeftForm() {
  return (
    <div className="left-content">
      <div className="form-description">
        <h1 className="primary-form-heading">Digital</h1>
        <h2 className="secondary-form-heading">
          Aritifical Intelligence Driving
          <span className="secondary-form-heading-line-2">
            Results For The Travel Industry
          </span>
        </h2>
        <p className="form-greet">Welcome back! Please Login to your account</p>
        <FormInput />
        <Button btn_name="Login" />
        <Button btn_name="Sign Up" />
      </div>
    </div>
  );
}
