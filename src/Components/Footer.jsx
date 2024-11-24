import React from 'react';

const Footer = () => {
  return (
    <div className=" bg-slate-700 text-neutral-content p-10">
      <div className="text-center ">
        <h1 className="text-2xl">Gadget Heaven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover"> Shipping & Delivery</a>
          <a className="link link-hover"> Returns</a>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;