import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-purple-800">
              Cravings Can't Wait? Get Speedy Eats!
            </h1>
            <span className="text-xl">Crave It. Click It. Get It – With Speedy Eats!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-centre justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                From Kitchen to Doorstep in Minutes!
              </span>
              <span>
              Don’t Wait to Satisfy Your Hunger – Download Speedy Eats Now!
              </span>
              <img src={appDownloadImage} />
            </div>
        </div>
    </div>
  );
};

export default HomePage;