import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Shop from "./Shop";

export default function Login() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <div className="justify-center">
          <button
            className="flex justify-center w-full rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setLogin(false)}
          >
            выйти
          </button>
        </div>
        <Shop />
      </>
    );
  } else {
    return (
      <>
        <Dialog
          open={!login}
          onClose={() => setLogin(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-stone-200 p-6 align-middle shadow-xl transition-all">
              <Dialog.Title className="text-center text-lg font-medium leading-normal text-black">
                вам нужно войти
              </Dialog.Title>
              <div className="flex justify-center mt-4">
                <button
                  className="rounded-md border-transparent bg-blue-100 px-4 py-2 text-bold font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => setLogin(true)}
                >
                  войти
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </>
    );
  }
}
