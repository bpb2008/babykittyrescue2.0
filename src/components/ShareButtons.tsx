"use client";

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface ShareButtonProps {
  title: string;
  url: string;
}

const buttonStyle =
  "flex items-center gap-3 px-2 py-1.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#d3c1dc] to-[#e5d5eb] hover:opacity-90 transition-colors duration-300";
const iconStyle = "text-white text-md";

const ShareButtons: React.FC<ShareButtonProps> = ({ title, url }) => {
  return (
    <div className="mt-10">
      <p className="font-semibold text-lg mb-4">SHARE THIS</p>
      <div className="flex gap-4 flex-wrap">
        <FacebookShareButton url={url} title={title}>
          <div className={buttonStyle}>
            <FaFacebookF className={iconStyle} />
            <span className={buttonStyle}>Facebook</span>
          </div>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <div className={buttonStyle}>
            <FaTwitter className={iconStyle} />
            <span className={buttonStyle}>Twitter</span>
          </div>
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={title}>
          <div className={buttonStyle}>
            <FaWhatsapp className={iconStyle} />
            <span className={buttonStyle}>WhatsApp</span>
          </div>
        </WhatsappShareButton>
        <EmailShareButton url={url} subject={title}>
          <div className={buttonStyle}>
            <FaEnvelope className={iconStyle} />
            <span className={buttonStyle}>Email</span>
          </div>
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
