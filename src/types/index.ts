export type Skill = { id: string; name: string; category?: string; icon?: string }
export type Project = {
  id: string
  title: string
  description: string
  tools: string[]
  complexity: 'simple' | 'intermediate' | 'advanced'
  images: { thumb: string; render3d: string; full?: string }[]
}
export type Service = {
  id: string
  title: string
  description: string
  deliverables: string[]
}
export type Testimonial = {
  id: string
  name: string
  projectType: string
  text: string
  rating: number
}
