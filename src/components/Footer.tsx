import casatiLogo from "@/assets/casati-logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img
          src={casatiLogo}
          alt="Casati Brothers"
          className="h-14 w-auto mb-3 invert"
        />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
