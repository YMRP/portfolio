function ContactMe() {
  return (
    <section
      className="text-gray-900 text-center flex flex-col items-center justify-center gap-8 px-6 py-12 bg-black border-t-2 border-white" 
      id="contact"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
        Contact Me.
      </h1>

      <form
        action="https://formsubmit.co/ramosyostin2003@gmail.com"
        method="POST"
        className="flex flex-col gap-6 w-full max-w-lg p-8 bg-white rounded-lg border border-gray-200 shadow-sm"
      >
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            required
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="email" className="mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            required
            placeholder="Your email"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="message" className="mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400 resize-none"
            required
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-black text-white font-medium py-3 px-6 rounded hover:bg-gray-900 transition-colors duration-200"
        >
          Submit
        </button>

        <input type="hidden" name="_next" value="https://yostin-ramos.netlify.app" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  );
}

export default ContactMe;