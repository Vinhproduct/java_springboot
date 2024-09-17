import React from 'react';

const Region = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Choose region</h4>
    </header>
    <ul className="row mt-4">
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/CN.png")} alt="China" />
          <span>China</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/DE.png")} alt="Germany" />
          <span>Germany</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/AU.png")} alt="Australia" />
          <span>Australia</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/RU.png")} alt="Russia" />
          <span>Russia</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/IN.png")} alt="India" />
          <span>India</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/GB.png")} alt="England" />
          <span>England</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/TR.png")} alt="Turkey" />
          <span>Turkey</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/UZ.png")} alt="Uzbekistan" />
          <span>Uzbekistan</span>
        </a>
      </li>
      <li className="col-md col-6">
        <a href="#" className="icontext">
          <i className="mr-3 fa fa-ellipsis-h"></i>
          <span>More regions</span>
        </a>
      </li>
    </ul>
    <article className="my-4">
      <img src={require("../../assets/images/banners/ad-sm.png")} className="w-100" alt="Advertisement" />
    </article>
  </section>
);

export default Region;
