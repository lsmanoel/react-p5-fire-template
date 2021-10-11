import React, { useLayoutEffect, useRef } from 'react'
import { FireAnimation } from '@/presentation/p5'

const AnimatedBackgroud: React.FC = () => {
  const myRef = useRef<HTMLDivElement>()
  const density = 6
  const fireAnimation = new FireAnimation(
    {
      height: Math.floor(window.innerHeight / density) + 1,
      width: Math.floor(window.innerWidth / density) + 1
    },
    density,
    30,
    1,
    1,
    2,
    Math.floor(window.innerWidth / (density * 2)),
    Math.floor(window.innerWidth / (density * 4))
  )

  useLayoutEffect(() => {
    fireAnimation.build(myRef.current)
  })

  return (
    <div ref={myRef}></div>
  )
}

export default AnimatedBackgroud
