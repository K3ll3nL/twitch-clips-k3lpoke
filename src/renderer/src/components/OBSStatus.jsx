import React from 'react'

export default function OBSStatus({ connected }) {
  return (
    <div
      title={connected ? 'OBS Connected' : 'OBS Disconnected'}
      className="flex items-center gap-1.5 px-2 py-1.5"
    >
      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${connected ? 'bg-green-400' : 'bg-red-500'}`} />
      <span className="text-[10px] text-twitch-muted leading-none font-medium">OBS</span>
    </div>
  )
}
