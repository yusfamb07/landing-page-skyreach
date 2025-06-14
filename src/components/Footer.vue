<template>
  <footer class="bg-gray-700 dark:bg-gray-900 mt-20">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
          <div class="mb-6 md:mb-0">
            <a href="https://www.skyreach.id/" class="flex items-center">
              <img
                src="/logo-skyreach.png"
                class="h-20 me-3"
                alt="Skyreach Logo"
              />
            </a>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white"
            >
              Kantor Pusat
            </h2>
            <ul class="text-white dark:text-gray-400 font-medium">
              <li class="mb-4">
                Hermina Tower Lantai 20, Suite A/B Jl. HBR Motik No. 4,
                Kemayoran DKI Jakarta - 10720
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white"
            >
              Call Center
            </h2>
            <ul class="text-white dark:text-gray-400 font-medium">
              <li class="mb-4">Phone: +6221 - 3 100 100</li>
              <li>Email: info@skyreach.id</li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white"
            >
              Legal
            </h2>
            <img src="/legal-footer.png" alt="" />
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-white sm:text-center dark:text-gray-400"
          >© 2025
          <a href="https://www.skyreach.id/" class="hover:underline">Skyreach</a
          >. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/skyreach.id/"
            class="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>

          <!-- YouTube -->
          <a
            href="https://www.youtube.com/channel/UCPB8S0ZrFnZnJj16x4P3_lQ"
            class="text-white hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.5 6.186A2.97 2.97 0 0 0 21.39 4.088C19.933 3.764 12 3.764 12 3.764s-7.933 0-9.39.324A2.97 2.97 0 0 0 .5 6.186 30.97 30.97 0 0 0 0 12c0 2.04.188 4.04.5 5.814a2.97 2.97 0 0 0 2.11 2.098c1.457.324 9.39.324 9.39.324s7.933 0 9.39-.324a2.97 2.97 0 0 0 2.11-2.098A30.97 30.97 0 0 0 24 12c0-2.04-.188-4.04-.5-5.814Zm-13 7.428V9.39l6 3.305-6 3.305Z"
              />
            </svg>
            <span class="sr-only">YouTube</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/company/pt-skyreach/"
            class="text-white hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.984 3C3.34 3 2 4.34 2 5.984c0 1.644 1.34 2.984 2.984 2.984S7.97 7.628 7.97 5.984C7.97 4.34 6.627 3 4.984 3Zm.016 6H2v14h3V9Zm7 0h-3v14h3v-7.632c0-4.096 5-4.428 5-0.428V23h3V14c0-6-6-5-6-5Z"
              />
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/skyreachid/"
            class="text-white hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c-3.204 0-6.416.39-7.188 1.163-.774.774-1.163 3.984-1.163 7.188 0 3.204.389 6.416 1.163 7.188.774.774 3.984 1.163 7.188 1.163 3.204 0 6.416-.389 7.188-1.163.774-.774 1.163-3.984 1.163-7.188 0-3.204-.389-6.416-1.163-7.188-.774-.774-3.984-1.163-7.188-1.163Zm0 16c-2.97 0-5.39-.353-6.163-1.127-.774-.774-1.127-3.193-1.127-6.163 0-2.97.353-5.39 1.127-6.163.774-.774 3.193-1.127 6.163-1.127 2.97 0 5.39.353 6.163 1.127.774.774 1.127 3.193 1.127 6.163 0 2.97-.353 5.39-1.127 6.163-.774.774-3.193 1.127-6.163 1.127Zm0-10.97a4.97 4.97 0 1 0 0 9.94 4.97 4.97 0 0 0 0-9.94Zm0 8.16a 3.19 3.19 0 1 1 0-6.38 3.19 3.19 0 0 1 0 6.38Zm6.4-9.9a1.16 1.16 0 1 0 0-2.32 1.16 1.16 0 0 0 0 2.32Z"
              />
            </svg>
            <span class="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
