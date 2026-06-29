import { useState } from 'react'

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const nextErrors = {}

        if (!form.name.trim()) nextErrors.name = 'Name is required.'
        if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.'
        if (!form.email.trim() || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(form.email)) nextErrors.email = 'Valid email is required.'
        if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
        if (!form.message.trim()) nextErrors.message = 'Message is required.'

        setErrors(nextErrors)

        if (Object.keys(nextErrors).length === 0) {
            const phoneNumber = '6282322953482'
            const message = `Hello Teknik Mebel Furniture, Saya ${form.name}.\nPhone: ${form.phone}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

            setSubmitted(true)
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <div className="rounded-[1.5rem] bg-white p-8 shadow-soft dark:bg-slate-900">
            <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h2>
            {submitted && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-200">
                    Terima kasih! Pesan Anda telah dikirimkan dengan sukses.
                </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <span>Name</span>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        />
                        {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                    </label>
                    <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <span>Phone Number</span>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                    </label>
                    <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <span>Email</span>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                    </label>
                    <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <span>Subject</span>
                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        />
                        {errors.subject && <p className="text-xs text-red-600">{errors.subject}</p>}
                    </label>
                </div>
                <label className="mt-4 flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span>Message</span>
                    <textarea
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    />
                    {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                </label>
                <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:w-auto"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}
