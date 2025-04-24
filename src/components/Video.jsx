const Video = () => {
  return (
    <div className="flex justify-center items-center mt-32 md:mt-56">
      <div className="w-[360px] h-[640px] bg-black rounded-xl shadow-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/2XydfxCQpRs?autoplay=1&mute=1&loop=1&playlist=2XydfxCQpRs"
          title="YouTube Short"
          frameBorder="0"
          allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
