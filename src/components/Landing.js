// home page

import LeftForm from "./LeftForm";
import RightNavigation from "./RigtNavigation";

export default function Landing(props) {
  return (
    <div className="main-grid-2-column">
      <LeftForm />
      <RightNavigation />
    </div>
  );
}
