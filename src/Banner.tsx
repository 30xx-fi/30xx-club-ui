import React, { useEffect, useState } from 'react'

function Banner() {
  const [ flavorText, setFlavorText ] = useState(randomFlavor())
  const [ flavorInterval, setFlavorInterval ] = useState<ReturnType<typeof setInterval> | undefined>()

  useEffect(() => {
    if (!flavorInterval)
      setFlavorInterval(setInterval(() => {
        let text: string
        do {
          text = randomFlavor()
        } while (text == flavorText)

        setFlavorText(text)
      }, 500))
  }, [])

  return (
    <div className="banner">
      <h1><a href={process.env.PUBLIC_URL}>30xx.club</a></h1>
      <span>{ flavorText }</span>
    </div>
  )
}

const x = [
  'Virtual Reality',
  'Future Reality',
  'Now',
  'Forever',
  'Tomorrow',
  'Yesterday',
  'The Void',
  'Nothing',
  'Arcadia',
  'Everything',
  'Infinite Key',
  'Digital Heaven',
]

function randomFlavor(): string {
  return x[Math.floor(Math.random()*x.length)]
}

export default Banner
