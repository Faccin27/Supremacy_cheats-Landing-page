"use client";

import { useState } from "react";
import bk from "../assets/images/image.png";
import menu from "../assets/images/menu.png";
import cheating from "../assets/videos/cheating.mp4";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CursorArrowRaysIcon,
  BoltIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  EyeIcon,
  InformationCircleIcon,
  FireIcon,
  ArrowUturnUpIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const faqs = [
  {
    question: "Are the cheats 100% undetectable?",
    answer:
      "Yes, our cheats are developed with cutting-edge technology to ensure they are 100% undetectable by anti-cheat systems. We also provide constant updates to maintain maximum security.",
  },
];
const features = [
  {
    name: "Aimbot",
    description:
      "Aimbot is a feature that helps to automatically aim at the nearest target.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Triggerbot",
    description:
      "Triggerbot automatically shoots when the crosshair is over an enemy.",
    icon: BoltIcon,
  },
  {
    name: "Wallhack",
    description:
      "Wallhack allows you to see enemies through walls and objects.",
    icon: EyeIcon,
  },
  {
    name: "ESP (Extra Sensory Perception)",
    description:
      "ESP displays additional information about enemies, such as health, weapons, and distance.",
    icon: InformationCircleIcon,
  },
  {
    name: "No Recoil",
    description: "Removes weapon recoil to make shooting easier.",
    icon: FireIcon,
  },
  {
    name: "Auto BunnyHop",
    description:
      "Script that allows the user to perform bunnyhop movement automatically.",
    icon: ArrowUturnUpIcon,
  },
];

const tiers = [
  {
    name: "Month",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$10 or 50R$",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "All engine services",
      "Trial test",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Three Months",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$7 or 40R$ ",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "All engine Services",
      "Unlimited updates",
      "Unlimited hwid resets",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img
            alt=""
            src={bk}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Trial test for free.{" "}
                  <a href="#" className="font-semibold text-white">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Supremacy Cheats <br />
                  <span className="text-3xl"> The best way to high level </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Tired of losing? Frustrated with always finishing last in your
                  matches? Try out the new game mode called Supremacy. Being
                  Immortal is the least you can expect.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    style={{ borderRadius: 8 }}
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white hover:bg-zinc-300 hover:bg-opacity-35 px-3.5 py-2.5"
                    style={{ borderRadius: 8 }}
                  >
                    Live demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 mt-8">
            <div className="col-span-2 max-h-12 w-full text-center lg:col-span-1 flex items-center justify-center space-x-2">
              <CursorArrowRaysIcon className="h-8 w-8 text-white" />
              <h2 className="text-white text-2xl font-semibold">Aimbot</h2>
            </div>
            <div className="col-span-2 max-h-12 w-full text-center lg:col-span-1 flex items-center justify-center space-x-2">
              <BoltIcon className="h-8 w-8 text-white" />
              <h2 className="text-white text-2xl font-semibold">Trigger</h2>
            </div>
            <div className="col-span-2 max-h-12 w-full text-center lg:col-span-1 flex items-center justify-center space-x-2">
              <EyeIcon className="h-8 w-8 text-white" />
              <h2 className="text-white text-2xl font-semibold">ESP</h2>
            </div>
            <div className="col-span-2 max-h-12 w-full text-center sm:col-start-2 lg:col-span-1 flex items-center justify-center space-x-2">
              <ArrowUturnUpIcon className="h-8 w-8 text-white" />
              <h2 className="text-white text-2xl font-semibold">Bhop</h2>
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full text-center sm:col-start-auto lg:col-span-1 flex items-center justify-center space-x-2">
              <FireIcon className="h-8 w-8 text-white" />
              <h2 className="text-white text-2xl font-semibold">No recoil</h2>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                No skills? No problem.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our product has everything you need to become the best player in
                the match. Our most loyal users are already in the top 300 in
                Radiant. See for yourself everything we have to offer.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="App screenshot"
                src={menu}
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The right price for you, whoever you are
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            LOREM IPSUM TEXTO SOBRE CHEAT OU SEÇÃO DE RPEÇOS OU ETC ETC ETC
            COLOCAREI AQUI NO MOMENTO SEM IDEIAS
          </p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-gray-900 shadow-2xl"
                    : "bg-white/60 sm:mx-8 lg:mx-0",
                  tier.featured
                    ? ""
                    : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                    : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                  "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-indigo-400" : "text-indigo-600",
                    "text-base font-semibold leading-7"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-bold tracking-tight"
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-6 text-base leading-7"
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className={classNames(
                          tier.featured ? "text-indigo-400" : "text-indigo-600",
                          "h-6 w-5 flex-none"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                    "mt-8 block rounded-full px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="h-6 w-6 group-data-[open]:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
