import { Link } from "react-router-dom"


const Error404Page = () => {
  return (
    <div className="error">
    <div className=" flex flex-col justify-center gap-4 p-8 mx-auto text-lg">
      <h1 className="error-title">Page Not Found</h1>
      <p className="error-body">Oops! It looks like the page you&apos;re looking for doesn&apos;t exist. We&apos;re sorry for the inconvenience.</p>
      <ul className="error-body">Here are some things you can try:
        <div className="pl-5">
        <li className="mt-4 list-disc">Return to the <Link to="/dashboard" className="error-links">dashboard</Link></li>
        </div>
        <div className="pl-5">
        <li className="list-disc">Browse through your <Link to="/mysnippets" className="error-links">snippets</Link></li>
        </div>
      </ul>
      <p className="error-body">If you still can&apos;t find what you need, feel free to contact our support team at support@example.com.</p>
    </div>
    </div>
  )
}

export default Error404Page