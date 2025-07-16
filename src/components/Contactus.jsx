import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
function Contactus() {
    const [send, setsend] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, e.target, import.meta.env.VITE_PUBLIC_KEY);
            setsend(true);
        } catch (error) {
            toast.error("Something went wrong , Try again!!")
            console.log(error);

        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (send) {

            toast.success("Mail Sent , will get back to you soon!")

        }
    }, [send])


    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-[500px] space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center">Connect with me</h2>
            <span className="text-sm text-gray-600 ">Mail me in person : <span className="text-red-400 text-sm">muhammadaffanpvt@gmail.com</span> </span>
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-medium">
                    Name
                </label>
                <input type="text" name="user_name" id="name" required className="rounded-md border-gray-300 border focus:ring-2  px-4 py-2" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">
                    Email
                </label>
                <input type="email" name="user_email" id="email" required className="rounded-md border-gray-300 border focus:ring-2  px-4 py-2" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-medium">
                    Message
                </label>
                <textarea name="message" id="message" rows={5} required className="rounded-md border-gray-300 border focus:ring-2  px-4 py-2" />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-gray-900 hover:bg-gray-700 cursor-pointer py-3 font-semibold text-white disabled:opacity-60"
            >
                {loading ? "Sending…" : "Send Message"}
            </button>

        </form>
    )
}

export default Contactus;
