import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="mt-10">©Barcode Team All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://www.twitch.tv/barcode_prm" target="_blank">
              Twitch
            </a>
          </p>
          <p className="my-5">
            <a href="https://www.youtube.com/@barcodetcg" target="_blank">
              Youtube
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> Barcode.team@gmail.com</p>
          <p> Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
