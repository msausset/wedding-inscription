import React from "react";

const Plan = () => {
  return (
    <div>
      <div className="body-home">
        <div className="divIframe">
          {/* <iframe
            title="santeny"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10527.431441274259!2d2.572849899999992!3d48.727307599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e609a8c24deacd%3A0x4489671853726814!2sCh%C3%A2teau%20de%20Santeny!5e0!3m2!1sfr!2sfr!4v1684104895146!5m2!1sfr!2sfr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <iframe
            title="santeny"
            src="https://my.atlist.com/map/59f6fd86-c8ea-474f-b77b-42b8eca6dd1d?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Plan;
