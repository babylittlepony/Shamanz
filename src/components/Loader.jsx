import { loader } from "../assets"

const Loader = ({ title }) => (
  <div className="flex w-full items-center justify-center">
    <img src={loader} alt="loader" className="h-32 w-32 object-contain" />
    <h1 className="mt-2 text-2xl font-bold text-white">{title}</h1>
  </div>
)

export default Loader
