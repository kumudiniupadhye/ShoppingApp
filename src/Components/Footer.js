import React from "react";

function Footer() {
  return (
    <div class="mt-24 pt-12 pb-8 bg-neutral-100 border-stone-100 text-slate-700 ">
      <div class="container px-6 my:0 mx-auto grid grid-cols-6 gap-x-12 md:flex md:w-full md:gap-y-7 lg:px-16">
        <div class="col-span-3 md:w-1/4">
          <p class="mb-8 text-lg font-medium">Contact us</p>
          <address class="text-sm leading-5">
            <p class="mb-4">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="text-neutral-500" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
            </p>
          </address>
        </div>

        <nav class="col-span-2 mb-12 row-start-1 md:mt-0 md:w-1/4">
          <p class="mb-8 text-lg font-medium">Account</p>
          <ul class="flex flex-col gap-1">
            <li>
              <a class="text-sm text-neutral-500 leading-3" href="#">
                Create account
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav class="col-span-2 mb-12 row-start-1 md:mt-0 md:w-1/4">
          <p class="mb-8 text-lg font-medium">Company</p>
          <ul class="flex flex-col gap-1">
            <li>
              <a class="text-sm text-neutral-500" href="#">
                About us
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                For Business
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Our partners
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav class="col-span-2 mb-12 row-start-1 md:mt-0 md:w-1/4">
          <p class="mb-8 text-lg font-medium">Resources</p>
          <ul class="flex flex-col gap-1">
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Our directory
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="text-sm text-neutral-500" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
