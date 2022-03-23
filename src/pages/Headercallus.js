import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Headercallus() {
  const socialicon = {
    phoneicon: <FontAwesomeIcon icon={faMicrophoneLines} />,
    facebook: <FontAwesomeIcon icon={faFacebookF} />,
    instagram: <FontAwesomeIcon icon={faInstagram} />,
    twitter: <FontAwesomeIcon icon={faTwitter} />,
    youtube: <FontAwesomeIcon icon={faYoutube} />,
  };

  return (
    <div className="headercallus border-bottom">
      <div className="headercalls-timing">
        <div className="pe-3 callus__header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="pe-3 d-flex align-items-center">
              <span className="fs-6  nav-hover-color">
                {socialicon.phoneicon}
                <span className="ms-2 callus__header--call">Consult</span>
                <strong className="ms-2 fs-5">
                  +91-7982552573
                </strong>
              </span>
            </div>
            <cite className="border-start fst-normal ps-3 pt-3 pb-3 text-uppercase">
              MONDAY - SUNday : 9:00am - 9:00pm
            </cite>
          </div>
          <div className="socialmedia border-start ms-3 pt-3 pb-3">
            <ul className="p-0 m-0 d-flex flex-row">
              <li className="border-0 ps-3 pe-3">
                <a
                  target="_blank"
                  href="www.facebook.com"
                  className="text-muted d-block"
                >
                  <span className="d-block">{socialicon.facebook}</span>
                </a>
              </li>
              <li className="border-0 ps-3 pe-3">
                <a
                  target="_blank"
                  href="www.instagram.com"
                  className="text-muted d-block"
                >
                  <span className="d-block">{socialicon.instagram}</span>
                </a>
              </li>
              <li className="border-0 ps-3 pe-3">
                <a
                  target="_blank"
                  href="www.twitter.com"
                  className="text-muted d-block"
                >
                  <span className="d-block">{socialicon.twitter}</span>
                </a>
              </li>
              <li className="border-0 ps-3 pe-0">
                <a
                  target="_blank"
                  href="www.youtube.com"
                  className="text-muted d-block"
                >
                  <span className="d-block">{socialicon.youtube}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
