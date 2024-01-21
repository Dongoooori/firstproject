import { LightModeOutlined, LightModeRounded } from '@mui/icons-material';
import "./Header.css"
import React from 'react'

type Props = {
  lightMode: boolean;
  filters: string[];
  handleLightMode: () => void;
  handleFilterChange: (filter: string) => void
  currentFilter: string
}

export default function Header(props:Props) {
  const { lightMode, filters, handleLightMode, handleFilterChange, currentFilter } = props;
  return (
    <div className={lightMode ? "Header_Light" : "Header_Dark"}>
      <div onClick={handleLightMode} >
        {lightMode ? <LightModeRounded /> : <LightModeOutlined />}
      </div>
      <div className='Header_List'>
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => handleFilterChange(filter)}
            style={{
              textDecorationColor: lightMode ? (currentFilter === filter ? "black" : "white") : "white",
              textDecorationLine: currentFilter === filter  ? "underline" : "none",
              textUnderlinePosition: "under"
            }}
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  )
}
