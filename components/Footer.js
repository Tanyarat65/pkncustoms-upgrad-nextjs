const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">PKN Customs Services LTD</p>
          <p className="text-sm mt-1">
            45/2037 หมู่ 1, แขวงหนองค้างพลู, เขตหนองแขม, กรุงเทพมหานคร 10160
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PKN Customs. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  