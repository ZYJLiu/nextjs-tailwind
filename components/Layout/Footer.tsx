import React from "react"
import Logo from "../../public/assets/Logo.svg"
import Twitter from "../../public/assets/Icon/twitter.svg"

const Footer: React.FC = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-8 w-auto mb-6" />
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Topic 1</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Topic 2</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Topic 3</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Page
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
