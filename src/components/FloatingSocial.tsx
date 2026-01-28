import React from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const items = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919761416410', // TODO: replace with your number
    Icon: FaWhatsapp,
    bg: 'bg-green-500',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/share/19dxgE7szB', // TODO
    Icon: FaFacebookF,
    bg: 'bg-blue-600',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pen_or__pain_2_0', // TODO
    Icon: FaInstagram,
    bg: 'bg-pink-500',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/madhav-pandey-429b98192', // TODO
    Icon: FaLinkedinIn,
    bg: 'bg-sky-600',
  },
]

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {items.map(({ label, href, Icon, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={[
            'h-11 w-11 rounded-full',
            'grid place-items-center',
            bg,
            'shadow-lg',
            'hover:scale-110 active:scale-100',
            'transition-transform',
          ].join(' ')}
        >
          <Icon className="text-white" size={20} />
        </a>
      ))}
    </div>
  )
}