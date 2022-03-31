import { useState, Fragment } from 'react';
import { Switch, Dialog, Transition } from '@headlessui/react';
import { Address } from '../../../../../../types/account/Address';
import { useAccount } from 'frontastic';
import useI18n from 'helpers/hooks/useI18n';

export interface CreateAddressProps {
  open?: boolean;
  onClose?: () => void;
  addressId?: string;
}

const CreateAddress: React.FC<CreateAddressProps> = ({ open, onClose }) => {
  //account data
  const { addAddress } = useAccount();

  //I18n info
  const { country } = useI18n();

  //new address data
  const [data, setData] = useState({ country } as Address);

  //input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //checkbox change handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  //submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      addAddress(data);
    } catch (err) {
    } finally {
      onClose();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="text-start flex min-h-screen items-end justify-center px-4 pt-4 pb-20 sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="absolute inset-0" onClick={onClose}>
              <div
                className="absolute left-1/2 top-1/2 h-[90vh] w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative mx-auto max-w-xl">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">New Address</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                      Add a new address here to associate it with your account
                    </p>
                  </div>
                  <div className="mt-12">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="firstName"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="lastName"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="street-number" className="block text-sm font-medium text-gray-700">
                          Street No.
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="streetNumber"
                            id="street-number"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="street-name" className="block text-sm font-medium text-gray-700">
                          Street Name
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            id="street-name"
                            name="streetName"
                            type="text"
                            autoComplete="address-line1"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP Code
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="postalCode"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="country"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pink-400 focus:ring-pink-400"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <legend className="sr-only">Set as default delivery address</legend>
                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="is-default-shipping-address"
                              aria-describedby="Set as default shipping address"
                              name="isDefaultShippingAddress"
                              type="checkbox"
                              className="h-6 w-6 rounded border-gray-300 border-gray-300 text-white focus:ring-pink-400"
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div className="text-md ml-3">
                            <label htmlFor="is-default-shipping-address" className="text-gray-400">
                              Set as default delivery address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <legend className="sr-only">Set as default billing addaress</legend>
                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="is-default-billing-address"
                              aria-describedby="Set as default billing addaress"
                              name="isDefaultBillingAddress"
                              type="checkbox"
                              className="h-6 w-6 rounded border-gray-300 text-white focus:ring-pink-400"
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div className="text-md ml-3">
                            <label htmlFor="is-default-billing-address" className="text-gray-400">
                              Set as default billing addaress
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center sm:col-span-2">
                        <p className="mt-4 text-sm leading-6 text-gray-400">
                          All the personal data associated to your account is safely stored in our database, and we will
                          not share it with third parties.
                        </p>
                      </div>
                      <div className="mt-4 flex gap-4 sm:col-span-2 sm:gap-8">
                        <button
                          type="button"
                          className="duration-250ms inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-400 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors ease-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="duration-250ms inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pink-400 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors ease-out hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateAddress;
