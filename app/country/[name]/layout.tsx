import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href="/">
          <button className="flex items-center space-x-2 bg-white shadow-md px-4 py-2 rounded dark:bg-dark-blue">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </button>
        </Link>
      </div>
      {children}
    </div>
  );
}
