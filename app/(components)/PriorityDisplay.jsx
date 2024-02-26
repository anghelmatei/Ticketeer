import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 0 ? "text-bluey" : "text-page"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 1 ? "text-bluey" : "text-page"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 2 ? "text-bluey" : "text-page"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 3 ? "text-bluey" : "text-page"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 4 ? "text-bluey" : "text-page"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
