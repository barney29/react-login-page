import facebook from "../facebook.svg";
import linkedin from "../linkedin.svg";
import google from "../google.svg";

export default function SocialMedia() {
  return (
    <div className="social-media-share">
      <img src={facebook} className="fb-icon logo-icon" />
      <img src={linkedin} className="linkedin-icon logo-icon" />
      <img src={google} className="google-icon logo-icon" />
    </div>
  );
}
