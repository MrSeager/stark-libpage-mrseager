//Components
import FooterNavItem from "./FooterNavItem";
import Link from "next/link";
import FooterNavLink from "./FooterNavLink";
//Icons
import { CgStark } from "react-icons/cg";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterNav() {
    return(
        <footer className="flex flex-col gap-10 max-w-[120rem] w-full px-20 py-15 bg-[#10284b] text-[#f6f6eb]">
            <div className="flex items-center justify-between">
                <h5 className="text-[50px] font-bold text-base/13">Made remotely with love by <br />Stark Lab, Inc.</h5>
                <span className="ratio-1/1 text-[#10284b] bg-[#f6f6eb] rounded-full p-2">
                    <CgStark size={50} />
                </span>
            </div>
            <div className="grid grid-cols-4">
                <FooterNavItem 
                    text="Product"
                    footerLinks={[
                        { text: "Stark for Figma", navLink: "/"},
                        { text: "Stark for FigJam", navLink: "/"},
                        { text: "Stark for Sketch", navLink: "/"},
                        { text: "Stark for Chrome", navLink: "/"},
                        { text: "Stark for Firefox", navLink: "/"},
                        { text: "Stark for Edge", navLink: "/"},
                        { text: "Stark for Safari", navLink: "/"},
                        { text: "Stark for Arc", navLink: "/"},
                        { text: "Stark for Brave", navLink: "/"},
                    ]}
                />
                <FooterNavItem 
                    text="Resources"
                    footerLinks={[
                        { text: "Blog", navLink: "/"},
                        { text: "Library", navLink: "/"},
                        { text: "Release Notes", navLink: "/"},
                    ]}
                />
                <FooterNavItem 
                    text="Help"
                    footerLinks={[
                        { text: "My Account", navLink: "/"},
                        { text: "Support Docs", navLink: "/"},
                        { text: "Contact Us", navLink: "/"},
                        { text: "Feature Requests", navLink: "/"},
                    ]}
                />
                <FooterNavItem 
                    text="Company"
                    footerLinks={[
                        { text: "Press Releases", navLink: "/"},
                        { text: "Privacy Policy", navLink: "/"},
                        { text: "Cookie Policy", navLink: "/"},
                        { text: "Sequrity Overview", navLink: "/"},
                        { text: "Status", navLink: "/"},
                        { text: "Terms of Service", navLink: "/"},
                        { text: "Code of Conduct", navLink: "/"},
                    ]}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <FooterNavLink 
                        href="/" 
                        icon={<FaTwitter />} 
                        className="text-[#67c0e8]"
                    />
                    <FooterNavLink 
                        href="/" 
                        icon={<RiInstagramFill />}
                        className="text-[#d14f84]"
                    />
                    <FooterNavLink 
                        href="/" 
                        icon={<FaLinkedinIn />}
                        className="text-[#396b9d]" 
                    />
                    <FooterNavLink 
                        href="/" 
                        icon={<FaYoutube  />} 
                        className="text-[#f66e6a]" 
                    />
                </div>
                <h6 className="uppercase font-semibold text-[#fedb63]">Stark lab, Inc. Copyright 2023</h6>
            </div>
        </footer>
    );
}