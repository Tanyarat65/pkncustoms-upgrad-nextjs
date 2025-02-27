const Hero = () => {
    return (
      <div id="home-section" className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
           style={{ backgroundImage: "url('/images/depot_hero_1.jpg')" }}>
        <div className="bg-blue-500 bg-opacity-75 p-10 rounded-md text-center">
          <h1 className="text-2xl md:text-4xl font-bold">บริษัท พี เค เอ็น คัสตอมส เซอร์วิส จำกัด</h1>
          <p className="text-lg md:text-xl mt-2">ผู้เชี่ยวชาญด้านบริการนำเข้า-ส่งออกครบวงจร</p>
          <form className="mt-4">
            <div className="flex">
              <input type="text" className="p-2 w-full rounded-l-md text-black" placeholder="Your tracking number" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-md">Track Now</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Hero;
  