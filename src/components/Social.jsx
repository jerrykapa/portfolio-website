import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/Opariuc.Cristian/",
  },

  {
    iconName: "github",
    link: "https://github.com/jerrykapa",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/cristian-andrei-opariuc-1b7748184/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
