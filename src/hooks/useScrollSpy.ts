import { useEffect, useState } from 'react'

export default function useScrollSpy(ids: string[], offset = 200) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    function handler() {
      const entries = ids
        .map((id) => ({
          id,
          top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
        }))
        .sort((a, b) => Math.abs(a.top - offset) - Math.abs(b.top - offset))
      if (entries.length) setActive(entries[0].id)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids, offset])

  return active
}
