const Hero = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl dark:text-slate-300 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-slate-300 uppercase rounded-full bg-teal-accent-400">
                  Blog & Newsletter
                </p>
              </div>
              <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl md:mx-auto">
                {/* <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="b039bae0-fdd5-4311-b198-8557b064fce0"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">The</span>
                </span>{' '} */}
Welcome to TSN podcast!
              </h2>
              <p className="text-base dark:text-slate-300 text-gray-700 md:text-lg">
              I&apos;m thrilled you&apos;re here! I&apos;m your host, your friend, and your personal hype man, and I can&apos;t wait to dive in with you!
              </p>
            </div>
            <form className="flex flex-col items-center w-full mb-4 md:px-16 space-y-3">
              <input
                placeholder="Email"
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition-all duration-400 dark:focus:border-slate-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-slate-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide dark:bg-slate-200 dark:text-slate-800 text-white transition duration-400 rounded shadow-md dark:hover:opacity-80 md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 dark:text-slate-300 sm:text-sm md:mb-16">
            Subscribe to our newsletter and never miss out on our content! <br/>We send short emais to you with a brainstorming questions and cool things that could be fun/abstract/weird.
            </p>
            <a
              href="#featured__posts"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;