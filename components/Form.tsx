import Image from "next/image"
import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import getScrollAnimation from "../utils/getScrollAnimation"
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper"
import ButtonOutline from "./misc/ButtonOutline"
import Link from "next/link"

const Form: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="form"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-8 my-12 justify-center items-center">
        <ScrollAnimationWrapper>
          <div className="mx-auto w-full lg:w-9/12 flex justify-center ">
            <motion.div className="text-left" variants={scrollAnimation}>
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                Lorem ipsum
              </h3>
              {/* Form starts here */}
              <form className="my-4">
                <div className="my-2">
                  <label
                    htmlFor="company-name"
                    className="text-black-500 font-medium"
                  >
                    What is your company or project name?
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    name="companyName"
                    className="block w-full mt-1 rounded-lg border focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2 p-1"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="name" className="text-black-500 font-medium">
                    What is your name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full mt-1 rounded-lg border focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2 p-1"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="email" className="text-black-500 font-medium">
                    What is your email address?
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full mt-1 rounded-lg border focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2 p-1"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="phone" className="text-black-500 font-medium">
                    What is your phone number?
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full mt-1 rounded-lg border focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2 p-1"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-4">
                  <button
                    className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* Form ends here */}
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration3.png"
              alt=""
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default Form
