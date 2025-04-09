const About = () => {
    return (
      // Main container with full width/height and background
      <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        {/*Content container with cyan background*/}
        <div className="flex flex-col justify-center items-center w-full h-full">
          {/*Title section using grid */}
          <div className="py-16 rounded-md bg-gradient-to-br from-violet-800 to-violet-400 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-violet-800">
                  About
                </p>
              </div>
              <div></div>
              {/*Content section with responsive grid*/}
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-2xl font-bold">
                <p>
                Hey! I’m Nishma. Thanks for stopping by - go ahead and check out my projects! 
                </p>
              </div>
              <div>
                <h2>
                I love building scalable, responsive, and user-friendly websites and mobile apps! I focus on clean, maintainable, and easy-to-understand code that stands the test of time. My goal? To craft applications that are efficient, high-performing, and a joy to use! </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default About;