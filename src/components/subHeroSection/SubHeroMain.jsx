const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey">
      <marquee direction="left" scrollamount="12">
        <div className="flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
          <p className="md:block sm:hidden">Fast Learner</p>
          <p className="md:block sm:hidden">Team Work</p>
          <p>Details Master</p>
        </div>
      </marquee>
    </div>
  );
};

export default SubHeroMain;
