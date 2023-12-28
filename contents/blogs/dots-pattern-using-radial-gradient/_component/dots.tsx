export function Dots({ dot = 20, size = 50 }: { dot?: number; size?: number }) {
  return (
    <div
      className='relative h-40 flex-1 bg-center'
      style={{
        backgroundImage: `radial-gradient(powderblue ${dot}px, transparent 0px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
