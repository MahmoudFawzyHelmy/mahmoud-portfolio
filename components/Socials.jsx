import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function Socials({ containerStyles, iconStyles }) {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/MahmoudFawzyHelmy" },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/mahmoud-fawzy-helmy/",
    },
  ];
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
