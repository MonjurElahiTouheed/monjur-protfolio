import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/amina-elahi-sarder-a3581a287/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/freelanceraminaofficial"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/amina_elahi_sarder"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
