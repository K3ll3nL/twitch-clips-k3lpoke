import React from 'react'

export default function VolumeSlider({ volume, onChange, onSave }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min="0"
        max="2"
        step="0.05"
        value={volume}
        onChange={e => onChange(Number(e.target.value))}
        onMouseUp={e => onSave(Number(e.target.value))}
        onTouchEnd={() => onSave(volume)}
        className="flex-1 accent-twitch-purple"
      />
      <span className="text-xs text-twitch-text w-10 text-right shrink-0">{Math.round(volume * 100)}%</span>
    </div>
  )
}
