
interface Props {
    title: string
}
export const Button: React.FC<Props> = ({title}) => {
return (
    <button
        type="submit"
        className="flex text-sky-900 border rounded-md border-sky-500 mt-5 mx-auto px-2 py-2 hover:bg-sky-50 focus:bg-sky-300"
      >
        {title}
      </button>
)
}