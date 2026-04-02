import '../App.css'
import { useState } from 'react'

const MIN_BUDGET = 1000
const MAX_BUDGET = 1000000
const BUDGET_STEP = 1000

export default function Contact() {
  const [minBudget, setMinBudget] = useState(25000)
  const [maxBudget, setMaxBudget] = useState(100000)

  // Slider change handlers
  const handleMinChange = (e) => {
    const value = Number(e.target.value)
    setMinBudget(value)
    if (value > maxBudget) setMaxBudget(value)
  }

  const handleMaxChange = (e) => {
    const value = Number(e.target.value)
    setMaxBudget(value)
    if (value < minBudget) setMinBudget(value)
  }

  // Arrow button handlers
  const incrementMin = () =>
    setMinBudget((prev) => Math.min(prev + BUDGET_STEP, maxBudget))

  const decrementMin = () =>
    setMinBudget((prev) => Math.max(prev - BUDGET_STEP, MIN_BUDGET))

  const incrementMax = () =>
    setMaxBudget((prev) => Math.min(prev + BUDGET_STEP, MAX_BUDGET))

  const decrementMax = () =>
    setMaxBudget((prev) => Math.max(prev - BUDGET_STEP, minBudget))

  return (
    <div className="bg-[#F4F4F5] py-16 px-6 sm:px-16 lg:px-20 text-[#18181B]">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6">
          Let’s Work Together
        </h1>

        {/* CONTACT INFO */}
        <div className="mb-12 rounded-lg border border-[#2F1D0F]/20 bg-white/40 p-6">
          <h2 className="text-xl font-semibold mb-2">Prefer to talk?</h2>
          <p className="mb-4">Give us a call and we’ll walk through your project.</p>
          <div className="space-y-1 text-lg mb-8">
            <p>📞 <span className="font-semibold">(928) 899-4826</span></p>
            <p>📍 Serving Prescott, Prescott Valley & surrounding areas</p>
          </div>
          <a
            href="tel:9288994826"
            className="mt-6 bg-yellow-700 text-white hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
            >
            Call Now
          </a>
        </div>

        <div className=" gap-12 items-start">

          {/* FORM */}
          <form
            action="https://formsubmit.co/8a8916336127c0255dd17f3f56af8cef"
            method="POST"
            className="space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="Name"
                required
                className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="text"
                name="Phone"
                className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="Message"
                rows="4"
                className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
              />
            </div>

            {/* BUDGET RANGE */}
            <fieldset className="border rounded-lg p-4">
              <legend className="px-2 text-sm font-medium">
                Estimated Budget Range
              </legend>

              <div className="space-y-6 mt-4">

                {/* MIN BUDGET */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Minimum Budget
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={decrementMin}
                      className="px-3 py-1 rounded-md bg-[#E5E7EB] hover:bg-white"
                    >
                      ◀
                    </button>

                    <input
                      type="range"
                      min={MIN_BUDGET}
                      max={MAX_BUDGET}
                      step={BUDGET_STEP}
                      value={minBudget}
                      onChange={handleMinChange}
                      className="w-full"
                    />

                    <button
                      type="button"
                      onClick={incrementMin}
                      className="px-3 py-1 rounded-md bg-[#E5E7EB] hover:bg-white"
                    >
                      ▶
                    </button>
                  </div>

                  <p className="text-sm mt-1">
                    ${minBudget.toLocaleString()}
                  </p>
                </div>

                {/* MAX BUDGET */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Maximum Budget
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={decrementMax}
                      className="px-3 py-1 rounded-md bg-[#E5E7EB] hover:bg-white"
                    >
                      ◀
                    </button>

                    <input
                      type="range"
                      min={MIN_BUDGET}
                      max={MAX_BUDGET}
                      step={BUDGET_STEP}
                      value={maxBudget}
                      onChange={handleMaxChange}
                      className="w-full"
                    />

                    <button
                      type="button"
                      onClick={incrementMax}
                      className="px-3 py-1 rounded-md bg-[#E5E7EB] hover:bg-white"
                    >
                      ▶
                    </button>
                  </div>

                  <p className="text-sm mt-1">
                    {maxBudget === MAX_BUDGET
                      ? `$${MAX_BUDGET.toLocaleString()}+`
                      : `$${maxBudget.toLocaleString()}`}
                  </p>
                </div>

              </div>
            </fieldset>

            {/* HIDDEN EMAIL FIELD */}
            <input
              type="hidden"
              name="Budget Range"
              value={
                maxBudget === MAX_BUDGET
                  ? `$${minBudget.toLocaleString()} – $${MAX_BUDGET.toLocaleString()}+`
                  : `$${minBudget.toLocaleString()} – $${maxBudget.toLocaleString()}`
              }
            />

            <button
              type="submit"
              className="w-full rounded-md bg-[#3F3F46]  px-4 py-3 text-white font-semibold hover:bg-[#2F1D0F]"
            >
              Let’s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
