import { Event } from '@/types'

export const GA_TRACKING_ID = 'G-NBSJPDS5SB'

export const pageView = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: Event): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
