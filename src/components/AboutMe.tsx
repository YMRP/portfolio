import imgDesk from '../assets/Fondo escritorio.jpg' 

function AboutMe() {
  return (
    <section className="text-white grid grid-cols-1 md:grid-cols-2" id="about">
      <div className="flex flex-col gap-5 items-center justify-center px-6 py-10 text-center md:text-left">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg text-gray-300 px-15 text-center">
          I'm a computer systems engineer who likes the web development world. I
          enjoy building intuitive, responsive, and functional interfaces.
          <br />
 
          I find interest in learning new technologies, improving code
          quality, and turning ideas into real digital products.
          <br />
          I would like to work with you, so don't doubt to send me a message to help you to start a project
        </p>
      </div>
 
      <div className="relative w-full h-96 md:h-auto">
        <img
          src={imgDesk}
          alt="foto"
          className="w-full h-full object-cover mask-gradient-left"
        />
      </div>
    </section>
  );
}

export default AboutMe;
