import RateButtons from './RateButtons'
import SearchCafe from './SearchCafe'

export default function RateForm() {
  return (
    <form className="gap-dy grid auto-rows-min content-center justify-items-center">
      <h1>How was your coffee?</h1>
      <RateButtons />
      <SearchCafe />
    </form>
  )
}
