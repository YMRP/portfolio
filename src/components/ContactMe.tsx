function ContactMe() {
  return (
    <section className="text-white text-center flex flex-col items-center justify-center gap-6 px-4 py-10 border-t-2 border-t-gray-800" id="contact">
      <h1 className="text-4xl md:text-5xl font-bold">Contact me</h1>

      <form
        action="https://formsubmit.co/ramosyostin2003@gmail.com"
        method="POST"
        className="flex flex-col gap-4 w-full max-w-xl bg-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg"
      >
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-1 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded-md p-2 bg-white text-black"
            required
            placeholder="Your name here"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="email" className="mb-1 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 rounded-md p-2 bg-white text-black"
            required
            placeholder="Your e-mail here"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="message" className="mb-1 font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border border-gray-400 rounded-md p-2 bg-white text-black resize-none"
            required
            placeholder="Share your idea"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black hover:border-green-500 duration-200 border-2 text-white font-bold py-2 px-4  mt-2 cursor-pointer"
          
        >
          Submit
        </button>
        <input type="hidden" name="_next" value="/" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  );
}

export default ContactMe;
