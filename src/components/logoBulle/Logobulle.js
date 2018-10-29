import React from 'react';
import './Logobulle.css';

import netflix from './imgLogo/netflix.png';
import amazon from './imgLogo/amazon.png';
import canal from './imgLogo/canal.jpg';
import tf1 from './imgLogo/tf1.png';
import google from './imgLogo/google.png';
import hulu from './imgLogo/hulu.png';
import youtube from './imgLogo/youtube.png';

const Logobulle = () => {
  return (
    <div className="logo">
      <a href="https://www.netflix.com/fr/">
        <img src={netflix} className="bubbleStream" alt="logo netflix" />
      </a>

      <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_FR_lb_s_g|c_267083057170_m_3Oj3NhSb-dc_s__">
        <img src={amazon} className="bubbleStream" alt="logo amazon" />
      </a>

      <a href="https://www.canal-vod.com/">
        <img src={canal} className="bubbleStream" alt="logo canal vod" />
      </a>

      <a href="https://mytf1vod.tf1.fr/?gclid=EAIaIQobChMIz_ymrdON3gIVxprVCh1_XwqTEAAYASAAEgJZ1_D_BwE">
        <img src={tf1} className="bubbleStream" alt="logo TF1 Play" />
      </a>

      <a href="https://play.google.com/store/movies">
        <img src={google} className="bubbleStream" alt="logo google" />
      </a>

      <a href="https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.fr%2F">
        <img src={hulu} className="bubbleStream" alt="hulu" />
      </a>

      <a href="https://www.youtube.com">
        <img src={youtube} className="bubbleStream" alt="youtube" />
      </a>
    </div>
  );
};

export default Logobulle;
