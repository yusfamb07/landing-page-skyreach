<template>
  <section class="mb-3">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
      <div
        class="bg-black z-10 h-auto lg:h-[80vh] col-span-1 lg:col-span-8 p-6 lg:px-56 lg:py-32"
      >
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
        <div class="">
          <h1 class="text-white text-4xl font-bold mb-4">TENTANG SKYREACH</h1>
          <p class="text-white font-normal">
            Skyreach adalah penyelenggara jaringan telekomunikasi berbasis
            satelit, dengan lisensi Jaringan Tetap Tertutup VSAT yang
            dikeluarkan oleh Kementrian Komunikasi dan Informasi. Layanan
            Skyreach meliputi cakupan nasional dan internasional, dimana layanan
            dan solusi yang disediakan dapat digunakan oleh berbagai industri
            seperti, maritim, aviasi, energi & sumber daya alam, media
            penyiaran, operator telekomunikasi dan pemerintah.
          </p>
        </div>
      </div>
      <div
        class="col-span-1 lg:col-span-4 relative mt-6 lg:mt-20 z-20 p-6 lg:-ml-64"
      >
        <iframe
          class="w-full h-64 lg:h-100"
          src="https://www.youtube.com/embed/QE8eKhX5M2A"
        ></iframe>
      </div>
    </div>
  </section>

  <section class="p-8">
    <div class="flex justify-center">
      <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
    </div>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-black text-xl sm:text-3xl lg:text-4xl font-bold mb-8">
        Contact us
      </h1>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div
        class="z-40 w-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-md"
      >
        <form class="mb-6">
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-gray-100 bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-500 font-semibold rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Send message
          </button>
        </form>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" class="hover:underline">info@company.com</a>
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <a href="#" class="hover:underline">212-456-7890</a>
        </p>
      </div>

      <div style="position: relative">
        <div
          style="
            position: relative;
            padding-bottom: 75%;
            height: 0;
            overflow: hidden;
          "
        >
          <iframe
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            "
            loading="lazy"
            allowfullscreen
            src="https://maps.google.com/maps?q=skyreach&output=embed"
          ></iframe>
        </div>
        <a
          href="https://contentgoblin.ai/ai-pinterest-pin-generator/"
          rel="noopener"
          target="_blank"
          style="
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          "
          >pin generator</a
        >
      </div>
    </div>
  </section>
</template>
