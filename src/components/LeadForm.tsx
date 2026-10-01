'use client'

import type { FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'

export function LeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Growth assessment request from ${fields.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${fields.get('name')}\nWork email: ${fields.get('email')}\nCompany: ${fields.get('company')}\n\nGrowth challenge:\n${fields.get('message')}`,
    )

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Work email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        What are you looking to improve?
        <textarea name="message" rows={3} required />
      </label>
      <button className="button-primary" type="submit">
        Request a conversation <ArrowUpRight size={15} aria-hidden="true" />
      </button>
      <small>Opens your email app with your message ready to send.</small>
    </form>
  )
}