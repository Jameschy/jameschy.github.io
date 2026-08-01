export type TimeTheme = 'morning' | 'day' | 'dusk' | 'night'

const themeState = reactive({
  current: 'night' as TimeTheme,
  icon: '🌙',
  label: '晚上',
})

export function useTimeTheme() {
  function detect(): TimeTheme {
    const h = new Date().getHours()
    if (h >= 4 && h < 9) return 'morning'
    if (h >= 9 && h < 16) return 'day'
    if (h >= 16 && h < 20) return 'dusk'
    return 'night'
  }

  function apply(t: TimeTheme) {
    themeState.current = t
    const map: Record<TimeTheme, { icon: string; label: string }> = {
      morning: { icon: '🌅', label: '早上' },
      day: { icon: '☀️', label: '白天' },
      dusk: { icon: '🌇', label: '黄昏' },
      night: { icon: '🌙', label: '晚上' },
    }
    themeState.icon = map[t].icon
    themeState.label = map[t].label
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', t)
    }
  }

  if (import.meta.client) {
    apply(detect())
    setInterval(() => apply(detect()), 60_000)
  }

  return { ...toRefs(themeState) }
}