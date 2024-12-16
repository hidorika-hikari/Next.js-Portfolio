import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
        <Image
                        src="/images/cmu_logo.png"
                        alt="CMU Logo"
                        width={150}
                        height={50}
                        className="object-contain"
                    />
            <p className="text-white">©2024 cmu.ac.th. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;