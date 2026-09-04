import { ChromaFlow, FilmGrain, FlutedGlass, RadialGradient, Shader, Swirl } from 'shaders/react'

export function ShaderBackground() {
  return (
    <div className="shader-wrapper" aria-hidden="true">
      <Shader className="shader-canvas">
        <Swirl colorA="#0c0c12" colorB="#16161d" detail={1.7} />
        <RadialGradient
          blendMode="hardLight"
          center={{ x: 0.7, y: 0.6 }}
          colorA="#daf412"
          colorB="#0c0c12"
          opacity={0.4}
          radius={1}
        />
        <ChromaFlow
          baseColor="#0c0c12"
          downColor="#DDFF47"
          leftColor="#E8FF70"
          rightColor="#C8F032"
          upColor="#F0FF99"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.7}
          angle={55}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={5}
          shape="rounded"
          softness={1}
          speed={0}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  )
}
