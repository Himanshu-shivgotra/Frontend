import React from 'react'

const Navbar = () => {
    return (
        <>
            <div
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <img className="h-7 w-auto" src="https://m.media-amazon.com/images/G/31/rainier/nav/sc-unified._CB485930462_.png" alt="img" />
                            </a>
                        </div>

                        <div className="flex items-center justify-end gap-3">
                            <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                href="/signup">Sign in</a>
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar