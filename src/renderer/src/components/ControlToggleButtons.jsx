import React from 'react'
import { Volume2, Scissors, Activity } from 'lucide-react'

export default function ControlToggleButtons({ showVolume, showTrim, showWaveform, onVolumeToggle, onTrimToggle, onWaveformToggle }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onVolumeToggle}
        className={`flex items-center gap-1 text-xs shrink-0 transition-colors ${showVolume ? 'text-twitch-purple' : 'text-twitch-muted hover:text-twitch-text'}`}
      >
        <Volume2 size={12} /> Volume
      </button>
      <button
        onClick={onTrimToggle}
        className={`flex items-center gap-1 text-xs shrink-0 transition-colors ${showTrim ? 'text-twitch-purple' : 'text-twitch-muted hover:text-twitch-text'}`}
      >
        <Scissors size={12} /> Trim
      </button>
      <button
        onClick={onWaveformToggle}
        className={`flex items-center gap-1 text-xs shrink-0 transition-colors ${showWaveform ? 'text-twitch-purple' : 'text-twitch-muted hover:text-twitch-text'}`}
      >
        <Activity size={12} /> Envelope
      </button>
    </div>
  )
}
