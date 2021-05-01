import React from "react";
import ParaText from "../common/para-text"
import SimpleLink from "../common/simple-link";
import TitleText from "../common/title-text";
import AnchorLink from "../common/anchor-link";
function Footer() {
  return (
    <section className="cly-footer">
      <div className="cly-footer__top-row">
        <div className="cly-footer__footer-col">
          <TitleText cName="u-h3 clr-gr-l3" label="J&K C.R." />
          <SimpleLink cName="cly-footer__link" link="/about" label="About" />
          <SimpleLink cName="cly-footer__link"  label="" />
          <SimpleLink
            cName="cly-footer__link"
            
            label="Term &amp; Conditions"
          />
          <SimpleLink
            cName="cly-footer__link"
            
            label="Security Policy"
          />
          
        </div>

        <div className="cly-footer__footer-col">
          <TitleText cName="u-h3 clr-gr-l3" label="Support" />
          <ParaText cName="cly-footer__para" label="Email Us " />
          <ParaText cName="cly-footer__para" label="24 Hours,7 Days a Week" />
        
          <ParaText
            cName="cly-footer__para u-mg-t20"
            label="contact us "
          />
          <ParaText cName="cly-footer__para" label="+91- 7780988972" />
          <AnchorLink
            cName=""
            target="_blank"
            link="https://smehdirazavi1997@gmail.com"
            label="smehdirazavi1997@gmail.com"
          />
        </div>

        <div className="cly-footer__footer-col">
          <TitleText cName="u-h3 clr-gr-l3" label="Media Inquiries" />
          <ParaText cName="cly-footer__para" label="Contact US" />
          <ParaText
            cName="cly-footer__para"
            label="Baghwanpora,"
          />
          <ParaText
            cName="cly-footer__para"
            label="akim mohallah"
          />
          <ParaText
            cName="cly-footer__para"
            label="lalbazar , srinagar, kashmir"
          />

          
        </div>
      </div>

      <div className="cly-footer__bottom-row">
        <ParaText
          cName="cly-footer__para"
          label="Copyright © 2021 , j&k Covid Resources. All rights reserved. | design and developed by : syed mehdi"
        />
        
      </div>
    </section>
  );
}

export default Footer;
