const SignupBox = () => {
  return (
    <div className="max-w-md mx-auto text-center bg-customBg px-4 sm:px-8 pt-2 rounded-xl shadow pb-16">
      <div className="flex justify-between mx-5 mt-4 mb-5 ">
        <div className="font-bold text-indigo-600  rounded-md pt-3 pl-0 pr-5">
          <p className="text-4xl" style={{ color: "rgba(0, 52, 89, 1)" }}>
            Sign Up
          </p>
        </div>
        <div className="mx-auto w-14 text-center pt-2 pl-8">
          <div className="relative w-14">
            <img
              className="w-14 h-14 rounded-full absolute"
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
            />
            <div className="w-14 h-14 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
              <img
                className="hidden group-hover:block w-12"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>

      <header className="mb-8">
        <h1 className="text-lg font-bold mb-1 text-customColor">
          Confirm Your Phone Number
        </h1>
        <p className="text-[12px] text-slate-700 font-extrabold">
          Enter the OTP that was sent to you by Email or by SMS at
          +919892238004.
        </p>
      </header>
      <form id="otp-form">
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            pattern="\d*"
            maxLength="1"
          />
          <input
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength="1"
          />
          <input
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength="1"
          />
          <input
            type="text"
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength="1"
          />
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-customColor px-3.5 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-950/10 "
          >
            Submit
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Haven't received an Email / SMS ?{" "}
        <a
          className="font-medium text-indigo-400 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>

    /* <script>
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('otp-form')
        const inputs = [...form.querySelectorAll('input[type=text]')]
        const submit = form.querySelector('button[type=submit]')

        const handleKeyDown = (e) => {
            if (
                !/^[0-9]{1}$/.test(e.key)
                && e.key !== 'Backspace'
                && e.key !== 'Delete'
                && e.key !== 'Tab'
                && !e.metaKey
            ) {
                e.preventDefault()
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                const index = inputs.indexOf(e.target);
                if (index > 0) {
                    inputs[index - 1].value = '';
                    inputs[index - 1].focus();
                }
            }
        }

        const handleInput = (e) => {
            const { target } = e
            const index = inputs.indexOf(target)
            if (target.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus()
                } else {
                    submit.focus()
                }
            }
        }

        const handleFocus = (e) => {
            e.target.select()
        }

        const handlePaste = (e) => {
            e.preventDefault()
            const text = e.clipboardData.getData('text')
            if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
                return
            }
            const digits = text.split('')
            inputs.forEach((input, index) => input.value = digits[index])
            submit.focus()
        }

        inputs.forEach((input) => {
            input.addEventListener('input', handleInput)
            input.addEventListener('keydown', handleKeyDown)
            input.addEventListener('focus', handleFocus)
            input.addEventListener('paste', handlePaste)
        })
    })                        
</script> */
  );
};

export default SignupBox;
