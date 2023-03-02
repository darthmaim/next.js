import localFont from 'next/font/local'

const roboto1 = localFont({
  preload: true,
  src: [
    {
      path: '../fonts/roboto/roboto-100-italic.woff2',
      weight: '100',
      style: 'italic',
      preload: false,
    },
    {
      path: '../fonts/roboto/roboto-100.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
})

const roboto2 = localFont({
  preload: false,
  src: [
    {
      path: '../fonts/roboto/roboto-400-italic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/roboto/roboto-400.woff2',
      weight: '100',
      style: 'normal',
      preload: true,
    },
  ],
})

export default function WithFonts() {
  return (
    <>
      <div id="first-local-font" className={roboto1.className}>
        {JSON.stringify(roboto1)}
      </div>
      <div id="second-local-font" className={roboto2.className}>
        {JSON.stringify(roboto2)}
      </div>
    </>
  )
}
